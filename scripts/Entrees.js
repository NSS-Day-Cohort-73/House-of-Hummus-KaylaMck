import { setEntreeChoice } from "./TransientState.js"

const handleEntreeChoice = (event) => {
    if (event.target.name === "entree") {
        setEntreeChoice(parseInt(event.target.value))
    }
}


export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChoice)

        const entreesList = entrees.map(
            (entree) => {
                return `<div>
                    <input type='radio' name='entree' value='${entree.id}' /> ${entree.name}
                </div>`
            }
        )

    return entreesList.join("")
}
