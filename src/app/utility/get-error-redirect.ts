export const getErrorRedirect = () => {
  return {
    redirect: {
      destination: '/_error',
      permanent: false,
    },
  };
};
