"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TYPES_1 = __importDefault(require("./TYPES"));
var inversify_1 = require("inversify");
var TodoService_1 = require("./TodoService");
var container = new inversify_1.Container();
container
    .bind(TYPES_1.default.ITodoService)
    .to(TodoService_1.TodoService).inSingletonScope;
exports.default = container;
