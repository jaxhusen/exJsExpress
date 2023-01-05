const orders = [
      {
        id: 1,
        orderName: "Josefin Krieg",
        orderColour: "röd, rosa, vit",
        orderOther: "-",
        orderDate: "2022-11-28"
      },
      {
        id: 2,
        orderName: "Bell",
        orderColour: " Matchande i svart, vit, lila",
        orderOther: "2 st 20x30",
        orderDate: "2022-12-30"
      },
      {
        id: 3,
        orderName: "Kalle",
        orderColour: "Överasska mig!",
        orderOther: "50x90",
        orderDate: "2022-12-03"
      },
]



module.exports.getAll = () => {
    return orders
}

module.exports.findById = (id) => {
    id = parseInt(id)

    const order = orders.find(c => c.id === id)
    return order
}

module.exports.add = (order) => {
    const lastOrder = orders.slice(-1)[0]

    let id = (lastOrder?.id);
    id = id ? id + 1 : 1;

    orders.push({
        id,
        make: order.make,
        model: order.model
    })
}

module.exports.update = (id, order) => {
    id = parseInt(id)

    const i = orders.findIndex(c => c.id === id)

    orders[i].make = order.make
    orders[i].model = order.model
}

module.exports.deleteById = (id) => {
    id = parseInt(id)

    const i = orders.findIndex(c => c.id === id)
    orders.splice(i, 1)
}