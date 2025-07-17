"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotes = void 0;
const express_1 = require("express");
const NotesControllers_1 = require("../Controllers/Notes/NotesControllers");
const routeNotes = (0, express_1.Router)();
exports.routeNotes = routeNotes;
const conttrolersNotes = new NotesControllers_1.ConttrolersNotes();
routeNotes.get('/note/:num_nota', conttrolersNotes.createNote);
