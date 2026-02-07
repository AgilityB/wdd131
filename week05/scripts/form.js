// SET CURRENT DATE AND LAST MODIFICATION

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;


// Data Source: Provided Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

//Populating product Name Options
const selectElement = document.querySelector("#product-name");

if (selectElement) {
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name; //Using array's id field for value
        selectElement.appendChild(option);  //Using name field for display text
    });
}


