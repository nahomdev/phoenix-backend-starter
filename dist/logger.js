"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = exports.useLogger = exports._cache = void 0;
const pino_1 = require("pino");
const pino_var = {
    PINO_LOG_LEVEL: process.env.PINO_LOG_LEVEL,
    PINO_STYLE: process.env.PINO_STYLE
};
exports._cache = { logger: undefined };
const useLogger = () => {
    if (exports._cache.logger) {
        return exports._cache.logger;
    }
    exports._cache.logger = (0, exports.createLogger)();
    return exports._cache.logger;
};
exports.useLogger = useLogger;
const createLogger = () => {
    const pinoOptions = {
        level: process.env.PINO_LOG_LEVEL,
    };
    if (pino_var.PINO_STYLE !== 'raw') {
        pinoOptions.transport = {
            target: 'pino-pretty',
            options: {
                ignore: 'hostname,pid'
            }
        };
    }
    return (0, pino_1.pino)(pinoOptions);
};
exports.createLogger = createLogger;
//# sourceMappingURL=logger.js.map