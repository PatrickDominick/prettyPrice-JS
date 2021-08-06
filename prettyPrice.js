// Try One

// prettyPrice = (price, change) => {
// price = price.split(".")[0];
// change = change.split(".")[1]
// return (`$${price}.${change}`)
// }

// console.log(prettyPrice("3.00", ".95"))

// Try 2

// prettyPrice = (price, change) => {
//   if (change instanceof parseFloat){
//     change = change *.01};
//   return (`$${Number(price)}.${change}`);
// }

// console.log(prettyPrice(3.00 , 95))

const prettyPrice = (price, change) => {
    if (Number.isInteger(change)) {
      change = change *.01
    }
    return Math.floor(price) + change;
  }
  
  console.log(prettyPrice(3.42, 95))