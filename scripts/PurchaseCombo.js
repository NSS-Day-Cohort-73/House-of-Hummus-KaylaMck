import { saveComboOrder } from "./TransientState.js"

const handlePlaceOrderClick = async (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        await saveComboOrder()
    }
}

export const placeOrder = () => {

    document.addEventListener("click", handlePlaceOrderClick)

    return `<button id='purchase'>Purchase Combo</button>`
}