export const capitilize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toTitleCase = (str: string) => {
  const words = str.split(' ');
  const capitilized: string[] = [];
  for (const word of words) {
    capitilized.push(capitilize(word));
  }
  return capitilized.join(' ');
};
