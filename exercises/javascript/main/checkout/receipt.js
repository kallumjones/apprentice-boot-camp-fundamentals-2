class Receipt {
  constructor() {
    this.text = '';
    this.numberOfA = 0;
    this.numberOfB = 0;
    this.total = 0;
  }

  getText() {
    return this.text + "Total: " + this.total;
  }

  createReceiptTextLine(product, price) {
    return `${product}: ${price}`;
  } 
  
  createOfferReceiptTextLine(reductionPrice, offerNumber, offerPrice) {
    return ` - ${reductionPrice} (${offerNumber} for ${offerPrice})`;
  }


  addNonOfferText(product, productPrice) {
    this.text += this.createReceiptTextLine(product, productPrice);;
    this.text += '\n';
    this.total += Number(productPrice);
  }

  addOfferText(product, productPrice, productCount,  reductionPrice, offerNumber, offerPrice) {
    this.text += this.createReceiptTextLine(product, productPrice);
    if (++this[productCount] % offerNumber == 0) {
      this.text += this.createOfferReceiptTextLine(reductionPrice, offerNumber, offerPrice);
      this.total += Number(productPrice);
      this.total -= Number(reductionPrice);
    } else {
      this.total += Number(productPrice);
    }
    this.text += '\n';
  }

  scannedA() {
    this.addOfferText('A','50', 'numberOfA','30', '5', '220');
  };

  scannedB() {

    this.addOfferText('B', '30', 'numberOfB', '15', '2', '45');
  };

  scannedC() {
    this.addNonOfferText('C', '20');
  };

  scannedD() {
    this.addNonOfferText('D', '15');
  };
};

module.exports = {
  Receipt
};