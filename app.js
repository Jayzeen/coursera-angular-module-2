(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

var itemlist=[
        { quantity:"5",  name: "Pepsi" },
        { quantity:"10", name: "Chocolates" },
        { quantity:"6",  name: "Burgers" },
        { quantity:"3", name: "Orange Juice" },
        { quantity:"4", name: "Pizza"},
      ];

/* To Buy Controller */
ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list1 = this;

    list1.itemlist = ShoppingListCheckOffService.getItems();
    list1.Add = function (index) {
      ShoppingListCheckOffService.addItem(index);
    };
  }

//Bought controller

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;
    list2.itemlist = [];

    list2.itemlist = ShoppingListCheckOffService.getBoughtItems();
  }


/* Shopping list checkoff service */
function ShoppingListCheckOffService() {
  var service = this;

  //List of shopping items
  var toBuyitems = itemlist;
  var boughtList = [];

  service.getItems = function () {
    return toBuyitems;
  };

  service.getBoughtItems = function () {
    return boughtList;
  };

  service.addItem = function (index) {
    var item = {
      name: itemlist[index].name,
      quantity: itemlist[index].quantity
    };
    //Pushing the bought items to the bought list
    boughtList.push(item);
    //Removing the bought item from the ToBuy list
    toBuyitems.splice(index,1);
  };

}



})();
