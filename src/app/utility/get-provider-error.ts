export const getProviderError = (contextName: string) => {
  return `${contextName} context must be consumed within its context provider.`;
};
