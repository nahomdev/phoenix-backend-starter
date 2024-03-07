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
const express_1 = __importDefault(require("express"));
const logger_1 = require("./logger");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const useEnv_1 = __importDefault(require("./utils/useEnv"));
const logger = (0, logger_1.useLogger)();
const env = (0, useEnv_1.default)();
function createApp() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(express_1.default.json({ limit: env.get('MAX_PAYLOAD_SIZE') }));
        app.use((0, helmet_1.default)());
        app.use((0, cookie_parser_1.default)());
        app.disabled('x-powered-by');
        app.use((_req, res, next) => {
            res.setHeader('x-powered-by', 'phoenix');
            next();
        });
        app.use((0, cors_1.default)({
            origin: env.get('CORS_ALLOWED_ORIGIN'),
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            credentials: true
        }));
        app.get('/greeting', (_req, res) => {
            res.status(200).json({
                status: 'success',
                message: "Hello world!"
            });
        });
        app.use('*', (req, res) => {
            logger.error(`unable to find the requested url: ${req.originalUrl} on this server!`);
            res.status(404).json({
                status: 'fail',
                message: `unable to find requested URL ${req.originalUrl} on this server!`
            });
        });
        return app;
    });
}
exports.default = createApp;
//# sourceMappingURL=app.js.map