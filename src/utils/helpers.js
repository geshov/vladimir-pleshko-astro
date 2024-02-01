export const sortHistory = (items) => {
  items.sort((a, b) => {
    if (a.data.year < b.data.year) return 1;
    else if (a.data.year > b.data.year) return -1;
    else return 0;
  });
  return items;
};
