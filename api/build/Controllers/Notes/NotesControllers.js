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
exports.ConttrollersNotes = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const pdfmake_1 = __importDefault(require("pdfmake"));
const fs_1 = __importDefault(require("fs"));
const nodeMailer_1 = require("../../Providers/Mail/nodeMailer");
const handleService = new nodeMailer_1.HandleService();
class ConttrollersNotes {
    select(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { num_nota } = request.params;
                const res_nota = yield postgreSQL_1.postgreSQL.query("SELECT *FROM nota WHERE nota = '" + num_nota + "'");
                const { nota, filial, comprador, cpf, endereco, num_endereco, telefone, usuario, email, emitida, val_rec, desc_venda, total_venda, fantasia, f_endereco, cnpj, inscricao, f_telefone, f_email, bairro, cep, uf, municipio } = res_nota.rows[0];
                const res_itens_nota = yield postgreSQL_1.postgreSQL.query("SELECT  *FROM itens_nota WHERE id_venda = '" + num_nota + "'");
                const itens = res_itens_nota.rows;
                const res_faturas = yield postgreSQL_1.postgreSQL.query("SELECT *FROM contas_receber WHERE fk_venda = '" + num_nota + "' ORDER BY vencimento");
                const faturas = res_faturas.rows;
                const res_dinheiro = yield postgreSQL_1.postgreSQL.query("SELECT  valor FROM vals_recebidos WHERE fk_venda = '" + num_nota + "' and fk_conta = 0 ");
                const dinheiro = res_dinheiro.rows[0];
                function setDinheiro() {
                    let valor = 0;
                    if ((dinheiro === null || dinheiro === void 0 ? void 0 : dinheiro.valor) != null) {
                        valor = dinheiro === null || dinheiro === void 0 ? void 0 : dinheiro.valor;
                        return "R$ " + parseFloat(valor).toFixed(2);
                    }
                    else if ((dinheiro === null || dinheiro === void 0 ? void 0 : dinheiro.valor) == null)
                        return 0;
                }
                const bodyItems = [];
                const columnsTitle = [
                    { text: "Item", style: "columnsTitle" },
                    { text: "Descrição produtos", style: "columnsTitle" },
                    { text: "Marca", style: "columnsTitle" },
                    { text: "Quant", style: "columnsTitle" },
                    { text: "Valor Unit", style: "columnsTitle" },
                    { text: "Total Item", style: "columnsTitle" },
                ];
                const columnsBody = new Array();
                columnsTitle.forEach(column => columnsBody.push(column));
                bodyItems.push(columnsBody);
                for (let item of itens) {
                    const rows = new Array();
                    rows.push(item.item);
                    rows.push(item.descricao);
                    rows.push(item.marca);
                    rows.push(item.quant);
                    rows.push(`R$ ${item.valor}`);
                    rows.push(`R$ ${item.total}`);
                    bodyItems.push(rows);
                }
                const bodyFaturas = [];
                const columnsTitleFaturas = [
                    { text: "Número", style: "columnsTitle" },
                    { text: "Tipo", style: "columnsTitle" },
                    { text: "Vencimento", style: "columnsTitle" },
                    { text: "Valor", style: "columnsTitle" },
                ];
                const columnsBodyFaturas = new Array();
                columnsTitleFaturas.forEach(column => columnsBodyFaturas.push(column));
                bodyFaturas.push(columnsBodyFaturas);
                for (let fatura of faturas) {
                    const rows = new Array();
                    rows.push(fatura.id_conta);
                    rows.push(fatura.tipo);
                    rows.push(fatura.vencimento.toLocaleString('pt-BR', { timezone: 'UTC' }));
                    rows.push(`R$ ${parseFloat(fatura.valor).toFixed(2)}`);
                    bodyFaturas.push(rows);
                }
                const img = {
                    image: 'logo.png',
                    alignment: 'center',
                    width: 136,
                    height: 48,
                    opacity: 0.9,
                    margin: 2,
                };
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
                    content: [
                        {
                            style: 'columnsFilial',
                            table: {
                                heights: function (row) {
                                    return 10;
                                },
                                widths: ["28%", "28%", "21%", "23%"],
                                body: [
                                    [
                                        img,
                                        `Filial: ${filial}
                             Empresa: ${fantasia}
                                Cnpj: ${cnpj}
                   Incrição estadual: ${inscricao}
                            Endereço: ${f_endereco}
                            Telefone: ${f_telefone}
                               Email: ${f_email}\n`,
                                        `\nNota de venda\n Nº 000${nota}
                                  \nEspécie\n[PE]`,
                                        `\n\nData de emissão\n\n${emitida.toLocaleString('pt-BR', { timezone: 'UTC' })}`,
                                    ]
                                ]
                            }
                        },
                        {
                            text: '\nCLIENTE/DESTINATÁRIO', style: 'title'
                        },
                        {
                            style: 'columnsPerson',
                            table: {
                                widths: ["50%", "50%"],
                                body: [
                                    [`Nome:${comprador}`, `Telefone:${telefone}`],
                                    [`CPF:${cpf}`, `Telefone:`],
                                    [`Endereço:${endereco} - Nº${num_endereco}`, `Bairro:${bairro}`],
                                    [`Cidade: ${municipio}`, `Email:${email}`],
                                    [`Estado: ${uf}`, `User:${usuario}`],
                                    [`CEP: ${cep}`, `Email: ${email}`]
                                ]
                            }
                        },
                        {
                            text: `\n\nVALOR RECEBIDO EM DINHEIRO/ESPÉCIE - ${setDinheiro()}`, style: 'title',
                        },
                        {
                            text: '\n\n FATURA', style: 'title'
                        },
                        {
                            style: 'columnsNota',
                            table: {
                                heights: function (row) {
                                    return 10;
                                },
                                widths: ["8%", "5%", "20%", "15%"],
                                body: bodyFaturas
                            },
                        },
                        {
                            text: `\n\n DADOS PRODUTOS/SERVIÇOS`, style: "title"
                        },
                        {
                            style: 'columnsNota',
                            table: {
                                heights: function (row) {
                                    return 10;
                                },
                                widths: ["6%", "46%", "15%", "7%", "12%", "14%"],
                                body: bodyItems
                            },
                        },
                        {
                            text: '\nVALORES/TOTAIS', style: 'title'
                        },
                        {
                            style: '',
                            table: {
                                widths: ['*', '*', '*', 100],
                                body: [
                                    [`Produtos/Serviços\nR$ ${total_venda}`,
                                        `Desconto/Produtos\nR$ ${desc_venda}`,
                                        `Total à pagar\nR$ ${val_rec}`,
                                        `Total Nota\nR$ ${val_rec}`]
                                ]
                            }
                        },
                        {
                            text: '\nDADOS COMPLEMENTARES', style: 'title'
                        },
                        {
                            style: "",
                            table: {
                                widths: ["*"],
                                body: [
                                    [`\nObservações:\n
                                    Valor recebido em dinheiro - ${setDinheiro()}\n
                                Está nota Nº ${nota} não possui valor fiscal\n
                                Nota emitida on-line pelo site: https://www.centroinfo.com.br`]
                                ]
                            }
                        }
                    ],
                    styles: {
                        title: {
                            bold: true,
                            fontSize: 9,
                        },
                        columnsFilial: {
                            fontSize: 9,
                            fonts: "Helvetica-BoldOblique",
                            alignment: "left",
                            margin: 2,
                            bold: false,
                        },
                        columnsPerson: {
                            fontSize: 9,
                            alignment: "left",
                            margin: 2
                        },
                        columnsNota: {
                            fontSize: 9,
                            alignment: "left",
                            color: "",
                            margin: 2,
                            bold: false,
                        },
                        columnsTitle: {
                            fontSize: 9,
                            bold: true,
                            fillColor: "",
                            color: "black",
                            margin: 2
                        },
                    }
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
                    // console.log(result)
                });
                //console.log("Relatório concluido");
                handleService.setSendMailNote(num_nota, email, telefone, comprador, endereco);
            }
            catch (err) {
                response.json("Error Occurred ! " + err);
            }
        });
    }
    ;
}
exports.ConttrollersNotes = ConttrollersNotes;
