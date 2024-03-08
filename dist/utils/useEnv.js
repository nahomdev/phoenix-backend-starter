"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../logger");
const logger = (0, logger_1.useLogger)();
function useEnv() {
    return {
        get: (key, defaultValue = undefined) => {
            const value = process.env[key] || defaultValue;
            if (value === null) {
                logger.warn(`environment variable ${key} is not set`);
            }
            return value;
        }
    };
}
exports.default = useEnv;
//# sourceMappingURL=useEnv.js.map