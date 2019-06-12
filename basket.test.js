const orange = {
  barcode: 789,
  price: 7,
  name: "orange"
};
const pineapple = {
  barcode: 5367,
  price: 80,
  name: "pineapple"
};
const kiwi = {
  barcode: 765,
  price: 25,
  name: "kiwi"
};

const apple = {
  barcode: 123,
  price: 5,
  name: "apple"
};

const banana = {
  barcode: 456,
  price: 6,
  name: "banana"
};

const catalogue = [apple, banana, orange, pineapple, kiwi];
const {
  scanItem,
  addItemToBasket,
  calculateTotal,
  removeItemFromBasket
} = require("./basket.js");

describe("Shopping Basket", () => {
  let basket;

  beforeEach(() => {
      basket = [pineapple, apple];
  })

  it("should scan an item using barcode and return item from catalogue", () => {
    const appleBarcode = 123;
    const scannedItem = scanItem(appleBarcode, catalogue);
    expect(scannedItem).toBe(apple);
  });

  it("should add an item to customer's shopping basket", () => {
    addItemToBasket(kiwi, basket);
    expect(basket).toContain(kiwi);
  });

  it("should calculate the total of all items in the basket", () => {
    const basketTotal = calculateTotal(basket);
    expect(basketTotal).toEqual(85);
  });

  it("should remove item from the basket", () => {
    const itemToRemove = apple;
    removeItemFromBasket(itemToRemove, basket);
    expect(basket).not.toContain(itemToRemove);
  });
});
