export const api = {
  getData: async start => {
    return Array.from(Array(10).keys()).map(i => ({
      id: i + 10 * start,
      name: `item${i + 10 * start}`
    }));
  }
};
