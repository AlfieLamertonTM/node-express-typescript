"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_1 = require("inversify");
require("./heart-beat.controller");
require("./todo.controller");
dotenv_1.default.config();
var PORT = process.env.PORT || 3000;
var container = new inversify_1.Container();
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(function (app) {
    app.use(helmet_1.default());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.json());
});
var app = server.build();
app.listen(PORT, function () { return console.log("Running on " + PORT + " \u26A1"); });
