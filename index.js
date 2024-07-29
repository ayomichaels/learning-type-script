"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var menu = [
    { id: nextPizzaId++, name: 'Magarita', price: 8 },
    { id: nextPizzaId++, name: 'Pepperoni', price: 10 },
    { id: nextPizzaId++, name: 'Hawaian', price: 10 },
    { id: nextPizzaId++, name: 'Veggie', price: 9 },
];
var orderHistory = [];
function addNewPizza(pizzaObj) {
    var newPizza = __assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(newPizza);
    return newPizza;
}
// addNewPizza({name: "Spicy Sausage", price: 12})
// addNewPizza({name: "Chicken Bacon Ranch", price: 12})
// addNewPizza({name: "BBQ Chicken", price: 11})
// addNewPizza({name: "Dodo BBQ", price: 14})
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextPizzaId, pizza: selectedPizza, status: "ordered" };
    orderHistory.push(newOrder);
    return newOrder;
}
function addToArray(array, item) {
    array.push(item);
    return array;
}
addToArray(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray(orderHistory, { id: nextOrderId++, pizza: menu[2], status: "done" });
console.log(menu);
console.log(orderHistory);
function completeOrder(orderId) {
    var order = orderHistory.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("orderId was not found");
        return;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === 'string') {
        var pizzaDetail = menu.find(function (pizza) { return pizza.name.toLocaleLowerCase === identifier.toLocaleLowerCase; });
        return pizzaDetail;
    }
    else if (typeof identifier === 'number') {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }
}
// placeOrder("Chicken Bacon Ranch")
// completeOrder(1)
// placeOrder("Spicy Sausage")
// completeOrder(1)
// console.log(getPizzaDetail(1))
console.log("Menu: ", menu);
// console.log("Cash in register: ", cashInRegister);
// console.log("Order queue: ", orderHistory);
