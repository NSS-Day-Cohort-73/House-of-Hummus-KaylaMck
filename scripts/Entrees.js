export const entreesList = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

let entreesHTML = ""
const entreeOptions = entrees.map(
    (entree) => {
        return `<div>
            <input type='radio' name='entrees' value='${entree.id}' ${entree.name}/>
        </div>`
    }
)

entreesHTML += entreeOptions.join("")
return entreesHTML
}