let orderCount = 0;

const takeOrder = (toppingOne, toppingTwo) => {
    orderCount++;
   return `Pizza with ${toppingOne} and ${toppingTwo}` ;
   
}

console.log(`Order Number ${orderCount} : ${takeOrder("pineapple","chicken")}`);
console.log(`Order Number ${orderCount} : ${takeOrder("peppers","onion")}`);
console.log(`Order Number ${orderCount} : ${takeOrder("peperonni","mushroom")}`);