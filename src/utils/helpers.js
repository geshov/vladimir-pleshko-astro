export const sortHistory = (items) => {
  items.sort((a, b) => {
    if (a.data.from > b.data.from) return 1;
    else if (a.data.from < b.data.from) return -1;
    else return 0;
  });
  return items;
};
