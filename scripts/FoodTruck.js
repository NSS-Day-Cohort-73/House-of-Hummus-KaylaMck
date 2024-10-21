import { Entrees } from "./Entrees.js"
import { placeOrder } from "./PurchaseCombo.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await Entrees()
    const sidesHTML = await Sides()
    const veggiesHTML = await Veggies()
    

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <main class="choices">
            <div id="entree_choice">
                <h2>Entrees</h2>
                 ${entreesHTML}
            </div>

            <div id="side_choice">
                <h2>Sides</h2>
                ${sidesHTML}
            </div>

            <div id="vegetable_choice">
                <h2>Veggies</h2>
                 ${veggiesHTML}
            </div>
        </main>

        <article>
            ${placeOrder()}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
