// variable
console.log("Hello world.");
const array = ["Ahmet", "Mehmet", "Can","Zeynep"];
console.log(array);


const root = document.getElementById("root");
root.innerHTML = "Hello World.";

array.map(name => {
    let element = document.createElement("p");
    element.innerHTML = name;
    root.append(element);
    console.log(name);
});
