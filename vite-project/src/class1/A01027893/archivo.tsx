const user= { name: "Bob", age: 25 };
const { name, age } = user;
console.log(name); // Bob

const team = {
    lead: { name: "Alice", email: "alice@gmail.com" },
    size: 3
};
const { lead: { name: leadName } } = team;
console.log(leadName); // Alice
