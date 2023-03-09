export const getEnvVariable = (key: string, fallback?: string) => process.env[key] || fallback;

export const isDev = getEnvVariable('NEXT_PUBLIC_ENV', 'development') === 'development';
export const isProd = getEnvVariable('NEXT_PUBLIC_ENV', 'development') === 'production';
