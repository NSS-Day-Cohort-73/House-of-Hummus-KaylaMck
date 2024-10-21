import { setSideChoice } from "./TransientState.js"

const handleSideChoice = (event) => {
    if (event.target.name === "side") {
        setSideChoice(parseInt(event.target.value))
    }
}

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideChoice)

        const sidesList = sides.map(
            (side) => {
                return `<div>
                    <input type='radio' name='side' value='${side.id}' /> ${side.title}
                </div>`
            }
        )

    return sidesList.join("")
}

