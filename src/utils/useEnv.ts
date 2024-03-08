import { useLogger } from '../logger';
interface EnvFunctions {
  get: (key: string, defaultValue?: string | undefined) => string | undefined;
}
const logger = useLogger();

export default function useEnv(): EnvFunctions {
  
  
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