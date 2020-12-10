const truncate = (str: string) =>
  str.length > 100 ? str.slice(0, 97).padEnd(100, '.') : str;

export default truncate;
