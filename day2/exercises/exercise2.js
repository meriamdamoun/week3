let colors = ["Blue", "Black", "Red", "Green" ,"pink","white"]
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

for (let i = 0; i < colors.length; i++) {
    let suffix = (i < 3) ? suffixes[i] : "th"; 
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}
console.log(colors);