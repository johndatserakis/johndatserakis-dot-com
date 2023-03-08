export const isClient = () => typeof window !== 'undefined' && window !== undefined;
export const isServer = () => !isClient();
