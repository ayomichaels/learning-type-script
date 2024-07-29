import { Console } from "console"

type Pizza = {
    id?: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed" 
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: 'Magarita', price: 8},
    { id: nextPizzaId++, name: 'Pepperoni', price: 10},
    { id: nextPizzaId++, name: 'Hawaian', price: 10},
    { id: nextPizzaId++, name: 'Veggie', price: 9},

]

const orderHistory: Order[]  = []


function addNewPizza(pizzaObj :Omit<Pizza, "id">) : Pizza{
    const  newPizza : Pizza = {
        id: nextPizzaId++,
        ... pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}


// addNewPizza({name: "Spicy Sausage", price: 12})
// addNewPizza({name: "Chicken Bacon Ranch", price: 12})
// addNewPizza({name: "BBQ Chicken", price: 11})
// addNewPizza({name: "Dodo BBQ", price: 14})



function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj =>pizzaObj.name === pizzaName)
    if (!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = {id: nextPizzaId, pizza:selectedPizza, status: "ordered"}
    orderHistory.push(newOrder)
    return newOrder
}

//GENERIC FUNCTION
// function addToArray<Type>(array:Type[], item:Type): Type[]{
//     array.push(item)
//     return array
// }

// addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12})
// addToArray<Order>(orderHistory, {id: nextOrderId++, pizza:menu[2], status: "completed"})

// console.log(menu)
// console.log(orderHistory)

function completeOrder(orderId: number) : Order | undefined{
    const order = orderHistory.find(order => order.id === orderId)
    if (!order) {
        console.error(`orderId was not found`);
        return
        
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined{
    if (typeof identifier === 'string'){
        const pizzaDetail = menu.find(pizza=> pizza.name.toLocaleLowerCase === identifier.toLocaleLowerCase)
        return pizzaDetail
    } else if(typeof identifier === 'number') {
        return menu.find(pizza=> pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
    
}

placeOrder("Chicken Bacon Ranch")
completeOrder(1)
placeOrder("Spicy Sausage")
// completeOrder(1)
// console.log(getPizzaDetail(1))



console.log("Menu: ", menu);
// console.log("Cash in register: ", cashInRegister);
// console.log("Order queue: ", orderHistory);




