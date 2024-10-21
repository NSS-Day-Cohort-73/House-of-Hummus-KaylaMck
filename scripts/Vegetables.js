import { setVegetableChoice } from "./TransientState.js"

const handleVegetableChoice = (event) => {
    if (event.target.name === "vegetable") {
        setVegetableChoice(parseInt(event.target.value))
    }
}

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggies = await response.json()

    document.addEventListener("change", handleVegetableChoice)

        const veggieList = veggies.map(
            (vegetable) => {
                return `<div>
                    <input type='radio' name='vegetable' value='${vegetable.id}' /> ${vegetable.type}
                </div>`
            }
        )

    return veggieList.join("")
}

