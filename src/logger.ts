import { pino, type Logger, type LoggerOptions } from 'pino';

export const _cache: {
    logger: Logger<never> | undefined,
} = { logger: undefined };

export const useLogger = () => {

    if (_cache.logger) {
        return _cache.logger;
    }

    _cache.logger = createLogger();

    return _cache.logger;

}

export const createLogger = () => {

    const pinoOptions: LoggerOptions = {
        level: process.env.PINO_LOG_LEVEL,
    }

    return pino(pinoOptions)
    
}