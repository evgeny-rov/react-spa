import { Post } from '../redux';

const normalizeString = (str: string) => str.trim().toLowerCase();

export const filterPostsByString = (coll: Post[], searchStr: string) => {
  const normalizedSearchStr = normalizeString(searchStr);

  return coll.filter(({ body }) => {
    const normalizedBody = normalizeString(body);
    return normalizedBody.includes(normalizedSearchStr);
  });
};
