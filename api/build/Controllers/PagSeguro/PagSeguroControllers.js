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
exports.PagSeguroControllers = void 0;
require('dotenv').config();
const node_fetch_1 = __importDefault(require("node-fetch"));
const authorization = process.env.AUTH_PAGSEGURO;
const urlPagseguroPix = 'https://api.pagseguro.com/orders';
const urlPagseguroCard = 'https://api.pagseguro.com/orders';
const urlPagseguroBoleto = 'https://api.pagseguro.com/orders';
const urlPublicKey = 'https://api.pagseguro.com/public-keys';
// const authorization: any = process.env.AUTH_PAGSEGURO_SANDOX
// const urlPagseguroPix = 'https://sandbox.api.pagseguro.com/orders'
// const urlPagseguroCard = 'https://sandbox.api.pagseguro.com/orders'
// const urlPagseguroBoleto = 'https://sandbox.api.pagseguro.com/orders'
// const urlPublicKey = 'https://sandbox.api.pagseguro.com/public-keys'
class PagSeguroControllers {
    insertPix(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sale = request.body;
                const reqs = yield (0, node_fetch_1.default)(urlPagseguroPix, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authorization
                    },
                    body: JSON.stringify(sale)
                });
                let ress = yield reqs.json();
                response.json(ress);
                console.log(sale);
                console.log("/* Iniciando Response **/");
                console.log(ress);
            }
            catch (err) {
                console.log("Error Occurred ! " + err);
            }
        });
    }
    ;
    insertBoleto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sale = request.body;
                const reqs = yield (0, node_fetch_1.default)(urlPagseguroBoleto, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authorization
                    },
                    body: JSON.stringify(sale)
                });
                let ress = yield reqs.json();
                response.json(ress);
                console.log(sale);
                console.log("/*Iniciando Response **/");
                console.log(ress);
            }
            catch (err) {
                console.log("Error Occurred ! " + err);
            }
        });
    }
    ;
    insertCard(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sale = request.body;
                const reqs = yield (0, node_fetch_1.default)(urlPagseguroCard, {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'Authorization': authorization,
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(sale)
                });
                const ress = yield reqs.json();
                response.json(ress);
                // console.log(sale)
                // console.log("/**Iniciando response */")
                console.log(ress);
            }
            catch (err) {
                // response.json(err)
                console.log("Error Occurred ! " + err);
            }
        });
    }
    ;
    publicKeyPagSeguro(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reqs = yield (0, node_fetch_1.default)(urlPublicKey, {
                    method: 'POST',
                    headers: {
                        'Authorization': authorization,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ type: 'card' })
                });
                const public_key = yield reqs.json();
                response.json(public_key);
            }
            catch (err) {
                console.log("Error Occurred ! " + err);
            }
        });
    }
    ;
}
exports.PagSeguroControllers = PagSeguroControllers;
