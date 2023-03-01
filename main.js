const theList = [
  'Laurence', 'Svekis', true, 35, null, undefined,
  { test: 'one', score: 55 },
  ['one', 'two']
  ]
theList.pop()
theList.pop()
theList.pop()
theList.pop()
theList.shift()
theList.push('lAST')
theList[2] = 'Hello world'
theList.unshift('FIRST')

theList[2] = 'MIDDLE'


console.log(theList);
//console.log(theList);

const storeItems = []
const productCatalog = {
  inventory1: {
    name: 'Loui vutton',
    model: 'Handbag',
    cost: '$50',
    quantity: 200,
  },

  inventory2: {
    name: 'Loui vutton',
    model: 'Handbag',
    cost: '$50',
    quantity: 200,
  },

  inventory3: {
    name: 'Loui vutton',
    model: 'Handbag',
    cost: '$50',
    quantity: 600,
  }



};

storeItems.push(productCatalog)
console.log(storeItems);

const getLastElement = productCatalog.inventory3.quantity

const lastResult = productCatalog['inventory3']['quantity']
//console.log(getLastElement);
console.log(lastResult);