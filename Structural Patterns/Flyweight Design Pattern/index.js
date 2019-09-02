function CoffeeFlavor(newFlavor) {
  var flavor = newFlavor;
  this.getFlavor = function() {
    return flavor;
  };
  this.serveCoffee = function(context) {
    console.log(
      "Serving Coffee flavor " +
        flavor +
        " to table number " +
        context.getTable()
    );
  };
}

function CoffeeOrderContext(tableNumber) {
  return {
    getTable: function() {
      return tableNumber;
    }
  };
}

function CoffeeFlavorFactory() {
  var flavors = {},
    length = 0;
  return {
    getCoffeeFlavor: function(flavorName) {
      var flavor = flavors[flavorName];
      if (typeof flavor === "undefined") {
        flavor = new CoffeeFlavor(flavorName);
        flavors[flavorName] = flavor;
        length++;
      }
      return flavor;
    },
    getTotalCoffeeFlavorsMade: function() {
      return length;
    }
  };
}

// Sample usage:
function testFlyweight() {
  var flavors = [],
    tables = [],
    ordersMade = 0,
    flavorFactory = new CoffeeFlavorFactory();
  function takeOrders(flavorIn, table) {
    flavors.push(flavorFactory.getCoffeeFlavor(flavorIn));
    tables.push(new CoffeeOrderContext(table));
    ordersMade++;
  }
  takeOrders("Cappuccino", 2);
  takeOrders("Frappe", 2);
  takeOrders("Cappuccino", 1);
  takeOrders("Frappe", 1);
  takeOrders("Xpresso", 1);
  takeOrders("Frappe", 897);
  takeOrders("Cappuccino", 97);
  for (var i = 0; i < ordersMade; ++i) {
    flavors[i].serveCoffee(tables[i]);
  }
  console.log(" ");
  console.log("total CoffeeFlavor objects made: " + flavorFactory.getTotalCoffeeFlavorsMade());
}
testFlyweight();