const generateWatches = (qty) => {
  return new Array(qty).fill(null).map((_, index) => ({
    title: `smartwatch ${index + 1}`,
    price: `${randomInteger(130, 350)}`,
    poster: `w${index + 1}.png`,
  }));
};

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const WATCHES = generateWatches(2);
