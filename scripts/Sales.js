export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    let salesList = sales.map(
        (sale) => {

            const comboPrice = sale.entree.price + sale.vegetable.price + sale.side.price

            return `<article id="orderPlaced" value="${sale.id}">
                        Receipt #${sale.id} ${comboPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}
                    </article>`
        }
    ).join("")

    return salesList
}

