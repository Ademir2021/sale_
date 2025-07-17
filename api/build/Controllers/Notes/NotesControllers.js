"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConttrolersNotes = void 0;
const fs_1 = __importDefault(require("fs"));
const pdfmake_1 = __importDefault(require("pdfmake"));
const qrcode_1 = __importDefault(require("qrcode"));
const nodeMailer_1 = require("../../Providers/Mail/nodeMailer");
const mountTableInvoice_1 = require("./utils/mountTableInvoice");
const mountTableItems_1 = require("./utils/mountTableItems");
const Note_1 = require("../../Entities/Note/Note");
const NotesServices_1 = require("../../Services/Notes/NotesServices");
const handleService = new nodeMailer_1.HandleService();
const notesServices = new NotesServices_1.NotesServices();
class ConttrolersNotes {
    createNote(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const { num_nota: num_note } = request.params;
                const res = yield notesServices.getNote(num_note);
                const itens = yield notesServices.getItemsNote(num_note);
                const invoices = yield notesServices.getInvoice(num_note);
                const money = yield notesServices.getMoney(num_note);
                const newNote = new Note_1.Note(res.nota, res.filial, res.comprador, res.cpf, res.endereco, res.num_endereco, res.telefone, res.usuario, res.email, res.emitida, res.val_rec, res.desc_venda, res.total_venda, res.fantasia, res.f_endereco, res.cnpj, res.inscricao, res.f_telefone, res.f_email, res.bairro, res.cep, res.uf, res.municipio, itens, invoices, money);
                const bodyItems = yield (0, mountTableItems_1.mountTableItems)((_a = newNote.items) !== null && _a !== void 0 ? _a : []);
                const bodyInvoice = yield (0, mountTableInvoice_1.mountTableInvoice)((_b = newNote.invoices) !== null && _b !== void 0 ? _b : []);
                const qrText = `https://api.centroinfo.com.br/note/${newNote.nota}`;
                const qrDataUrl = yield qrcode_1.default.toDataURL(qrText); // Gera imagem base64
                const fonts = {
                    Helvetica: {
                        normal: 'Helvetica',
                        bold: 'Helvetica-Bold',
                        italics: 'Helvetica-Oblique',
                        bolditalics: 'Helvetica-BoldOblique'
                    },
                };
                const printer = new pdfmake_1.default(fonts);
                const docDefinitions = {
                    defaultStyle: { font: "Helvetica" },
                    footer: function (currentPage, pageCount) {
                        return {
                            columns: [
                                {
                                    text: 'CentroInfo - https://www.centroinfo.com.br',
                                    alignment: 'left',
                                    fontSize: 7,
                                    margin: [40, 0, 0, 0]
                                },
                                {
                                    text: `Página ${currentPage} de ${pageCount}`,
                                    alignment: 'right',
                                    fontSize: 7,
                                    margin: [0, 0, 40, 0]
                                }
                            ]
                        };
                    },
                    content: [
                        // Cabeçalho da empresa com logo + dados
                        {
                            columns: [
                                {
                                    image: 'logo.png',
                                    width: 100
                                },
                                {
                                    width: '*',
                                    text: [
                                        { text: `${newNote.fantasia}\n`, style: 'empresaTitulo' },
                                        `Filial: ${newNote.filial}\n`,
                                        `CNPJ: ${newNote.cnpj} | IE: ${newNote.inscricao}\n`,
                                        `Endereço: ${newNote.f_endereco}\n`,
                                        `Telefone: ${newNote.f_telefone} | Email: ${newNote.f_email}`
                                    ],
                                    margin: [10, 0, 0, 0],
                                    fontSize: 9
                                },
                                {
                                    text: [
                                        { text: `Nota de Venda Nº ${String(newNote.nota).padStart(6, '0')}\n`, bold: true },
                                        `Espécie: [PE]\n`,
                                        `Emissão: ${new Date(newNote.emitida).toLocaleDateString('pt-BR')}`
                                    ],
                                    alignment: 'right',
                                    fontSize: 9
                                }
                            ],
                            columnGap: 10,
                            margin: [0, 0, 0, 10]
                        },
                        // Divisor visual
                        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 520, y2: 0, lineWidth: 1 }], margin: [0, 10, 0, 10] },
                        // Cliente
                        { text: 'CLIENTE / DESTINATÁRIO', style: 'sectionHeader' },
                        {
                            style: 'columnsPerson',
                            layout: 'lightHorizontalLines',
                            table: {
                                widths: ["50%", "50%"],
                                body: [
                                    [`Nome: ${newNote.comprador}`, `Telefone: ${newNote.telefone}`],
                                    [`CPF: ${newNote.cpf}`, ``],
                                    [`Endereço: ${newNote.endereco}, Nº ${newNote.num_endereco}`, `Bairro: ${newNote.bairro}`],
                                    [`Cidade: ${newNote.municipio}`, `Estado: ${newNote.uf}`],
                                    [`CEP: ${newNote.cep}`, `Email: ${newNote.email}`],
                                    [`Usuário: ${newNote.usuario}`, ``]
                                ]
                            }
                        },
                        // Valor recebido
                        { text: '\nVALOR RECEBIDO EM DINHEIRO / ESPÉCIE', style: 'sectionHeader' },
                        {
                            text: `R$ ${parseFloat(((_c = newNote.money) === null || _c === void 0 ? void 0 : _c.valor) || '0').toFixed(2)}`,
                            style: 'valorDestaque'
                        },
                        // Faturas
                        { text: '\nFATURA(S)', style: 'sectionHeader' },
                        {
                            style: 'columnsNota',
                            layout: 'lightHorizontalLines',
                            table: {
                                widths: ["15%", "20%", "30%", "20%"],
                                body: bodyInvoice
                            }
                        },
                        // Itens
                        { text: '\nDADOS DOS PRODUTOS / SERVIÇOS', style: 'sectionHeader' },
                        {
                            style: 'columnsNota',
                            layout: 'lightHorizontalLines',
                            table: {
                                widths: ["8%", "46%", "12%", "9%", "11%", "14%"],
                                body: bodyItems
                            }
                        },
                        // Totais
                        { text: '\nVALORES / TOTAIS', style: 'sectionHeader' },
                        {
                            layout: 'noBorders',
                            table: {
                                widths: ['25%', '25%', '25%', '25%'],
                                body: [[
                                        { text: `Produtos/Serviços:\nR$ ${newNote.total_venda}`, alignment: 'right' },
                                        { text: `Desconto:\nR$ ${newNote.desc_venda}`, alignment: 'right' },
                                        { text: `Total a pagar:\nR$ ${newNote.val_rec}`, alignment: 'right' },
                                        { text: `Total Nota:\nR$ ${newNote.val_rec}`, alignment: 'right' }
                                    ]]
                            },
                            margin: [0, 5, 0, 10]
                        },
                        // Complementares
                        { text: 'DADOS COMPLEMENTARES', style: 'sectionHeader' },
                        {
                            table: {
                                widths: ['*'],
                                body: [[
                                        {
                                            text: `Observações:\n` +
                                                `Valor recebido em dinheiro: R$ ${parseFloat((money === null || money === void 0 ? void 0 : money.valor) || '0').toFixed(2)}\n` +
                                                `Esta nota Nº ${String(newNote.nota).padStart(6, '0')} não possui valor fiscal.\n` +
                                                `Nota emitida on-line pelo site: https://www.centroinfo.com.br`,
                                            fontSize: 9
                                        }
                                    ]]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            image: qrDataUrl,
                            width: 100,
                            alignment: 'left',
                            margin: [0, 10, 0, 20]
                        }
                    ],
                    styles: {
                        empresaTitulo: {
                            fontSize: 11,
                            bold: true,
                            color: '#1a1a1a'
                        },
                        sectionHeader: {
                            bold: true,
                            fontSize: 10,
                            margin: [0, 10, 0, 5],
                            color: '#333'
                        },
                        valorDestaque: {
                            fontSize: 12,
                            bold: true,
                            alignment: 'center',
                            margin: [0, 0, 0, 10]
                        },
                        columnsNota: {
                            fontSize: 9,
                            alignment: "left",
                            margin: 2
                        },
                        columnsPerson: {
                            fontSize: 9,
                            margin: 2
                        },
                        columnsTitle: {
                            fontSize: 9,
                            bold: true,
                            fillColor: '#eeeeee',
                            color: 'black',
                            margin: 2
                        }
                    },
                };
                const pdfDoc = printer.createPdfKitDocument(docDefinitions);
                pdfDoc.pipe(fs_1.default.createWriteStream("res_note.pdf"));
                const chunks = [];
                pdfDoc.on("data", (chunk) => {
                    chunks.push(chunk);
                });
                pdfDoc.end();
                pdfDoc.on("end", () => {
                    const result = Buffer.concat(chunks);
                    response.end(result);
                });
                // handleService.setSendMailNote(num_note, email, telefone, comprador, endereco)
            }
            catch (err) {
                response.json("Error Occurred ! " + err);
            }
        });
    }
    ;
}
exports.ConttrolersNotes = ConttrolersNotes;
