const scanItem = (barcodeToSearch, catalogue) => {
    return catalogue.find(item => item.barcode === barcodeToSearch);
}

const addItemToBasket = (item, basket) => {
    basket.push(item);
}

const calculateTotal = basket => {
  const reducer = (accumulator, currentValue) => { 
      return accumulator + currentValue.price 
  };
  return basket.reduce(reducer, 0);
};

const removeItemFromBasket = (itemToRemove, basket) => {
    const index = basket.indexOf(itemToRemove);
    basket.splice(index, 1);
}

module.exports = { 
    scanItem,
    addItemToBasket,
    calculateTotal,
    removeItemFromBasket
}