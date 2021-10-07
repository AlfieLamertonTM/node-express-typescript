"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var inversify_config_1 = __importDefault(require("./inversify.config"));
var dotenv_1 = __importDefault(require("dotenv"));
var inversify_express_utils_1 = require("inversify-express-utils");
require("./todo.controller");
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config();
var app = express_1.default();
var server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.default, null, { rootPath: "/api" }, app);
server.setConfig(function (app) {
    app.use(helmet_1.default());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.json());
});
var appConfigured = server.build();
var serve = appConfigured.listen(process.env.PORT || 3000, function () { return "App running on " + serve.address().port; });
