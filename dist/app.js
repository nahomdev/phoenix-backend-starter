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
function createApp() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const logger = (0, logger_1.useLogger)();
        app.get('/test', (req, res) => {
            logger.info(req.query);
            res.send('good!!!');
        });
        app.use('*', (req, res) => {
            res.send('no url dude');
        });
        return app;
    });
}
exports.default = createApp;
//# sourceMappingURL=app.js.map