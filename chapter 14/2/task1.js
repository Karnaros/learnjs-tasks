let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
let collator = new Intl.Collator("ru-Ru", {
    sensitivity: "base",
});

animals.sort(collator.compare);

console.log( animals );