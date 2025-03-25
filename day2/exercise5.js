const family = {
    father: "Ibrahim",
    mother: "Fatima",
    sister: "Khadija",
    brother: "yassin"
};

console.log("Family keys:");
for (let key in family) {
    console.log(key);
}

console.log("Family values:");
for (let key in family) {
    console.log(family[key]);
}
