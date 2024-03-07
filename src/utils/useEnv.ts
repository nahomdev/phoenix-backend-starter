import { useLogger } from "src/logger";

interface EnvFunctions {
  get: (key: string, defaultValue?: string | undefined) => string | undefined;
}

export default function useEnv(): EnvFunctions {
    const logger = useLogger();
    return {
        get: (key, defaultValue = undefined)=> {
            const value = process.env[key] || defaultValue;

            if (value === null) {
                logger.warn(`environment variable ${key} is not set`);
            }

            return value;
        }
    }
}