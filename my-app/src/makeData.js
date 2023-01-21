const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newMarmita = () => {
  return {
    id: Math.floor(Math.random() * 100),
    name: "Rio",
    vovofav: true ? "🥰" : "no",
    ingredients: Math.floor(Math.random() * 30),
    // image: "https://picsum.photos/200/300",
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newMarmita(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
