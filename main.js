function createcar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const mycar = createcar("Toyota", "Hilux", { color: "black", year: "2024" });
console.log(mycar);
export {};
// // ALHUMDULILLALLAH.
