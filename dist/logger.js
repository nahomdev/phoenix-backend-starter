"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = exports.useLogger = exports._cache = void 0;
const pino_1 = require("pino");
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
    return (0, pino_1.pino)(pinoOptions);
};
exports.createLogger = createLogger;
//# sourceMappingURL=logger.js.map