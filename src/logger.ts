import { pino, type Logger, type LoggerOptions } from 'pino';

const pino_var = {
    PINO_LOG_LEVEL: process.env.PINO_LOG_LEVEL,
    PINO_STYLE: process.env.PINO_STYLE
}

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

    if (pino_var.PINO_STYLE !== 'raw') {
        pinoOptions.transport = {
            target: 'pino-pretty',
            options: {
                ignore:'hostname,pid'
            }
        }
    }

    return pino(pinoOptions)
    
}