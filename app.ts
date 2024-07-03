/**
 * HOMEWORK
 */

// function differenceInAges(ages: number[]): number[] {
//   ages.sort((a: number, b: number) => a - b);
//   let y: number = ages[0];

//   let o: number = ages[ages.length - 1];

//   let d: number = o - y;

//   return [y, o, d];
// }

// //[youngest,oldest,difference]

// console.log(differenceInAges([23, 35, 67]));

// function relativelyPrime(n: number, arr: number[]): number[] {
//   return arr.filter(function (num) {
//     let a: number = n;
//     let b: number = num;
//     while (b !== 0) {
//       let temp: number = b;
//       b = a % b;
//       a = temp;
//     }
//     return a === 1;
//   });
// }

// console.log(relativelyPrime(3, [3, 6, 9, 10, 11, 12]));

// // array va son kirib keladi va o`sha songa  tub bo`lmagan sonlarni chiqarish kerak

// function roundToNext5(n: number): number {
//   if (n >= 0) {
//     if (n % 5 === 0) {
//       return n;
//     } else {
//       return n + (5 - (n % 5));
//     }
//   } else {
//     return n - (n % 5);
//   }
// }

// //sonni yahlitlab chiqarish kerak

// console.log(roundToNext5(1));

// function digitize(n: number): number[] {
//   let digits: string[] = String(n).split("");
//   return digits.map((digit: string) => parseInt(digit));
// }

// // sonni raqamlarga bo`lib array qilib qaytarish kerak

// console.log(digitize(12345));

// function amountOfPages(summary: number): number {
//   let totalPages: number = 1;
//   let sumOfDigits: number = 1;

//   while (sumOfDigits < summary) {
//     totalPages++;
//     sumOfDigits += totalPages.toString().length;
//   }

//   return totalPages;
// }

// // pagelar sonini hisoblab chiqish kerak

// console.log(amountOfPages(23));

// const intDiff = (arr: number[], n: number): number => {
//   let count: number = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (Math.abs(arr[i] - arr[j]) === n) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(intDiff([2, 1, 4, 5], 2));

// function findMinNum(num_div: number): number {
//   let num: number = 1;
//   while (true) {
//     let count: number = 0;
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//         count++;
//       }
//     }
//     if (count === num_div) {
//       return num;
//     }
//     num++;
//   }
// }

// console.log(findMinNum(23));

// function sortArray(array: number[]): number[] {
//   const oddNumbers: number[] = array
//     .filter((num:number) => num % 2 !== 0)
//     .sort((a, b) => a - b);
//   let oddIndex:number = 0;
//   return array.map((num) => (num % 2 !== 0 ? oddNumbers[oddIndex++] : num));
// }

// console.log(sortArray([2, 1, 4, 5, 6]));

// function createPhoneNumber(numbers:number[]):string {
//   const areaCode = numbers.slice(0, 3).join("");
//   const firstPart = numbers.slice(3, 6).join("");
//   const secondPart = numbers.slice(6).join("");

//   return `(${areaCode}) ${firstPart}-${secondPart}`;
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,5,6]));

// function oddOrEven(array: number[]): string {
//   const sum: number = array.reduce((acc, curr) => acc + curr, 0);
//   return sum % 2 === 0 ? "even" : "odd";
// }

// yig`indisi odd or even

// console.log(oddOrEven([3, 1, 4, 5]));

// function isFlush(hand: string[]): boolean {
//   const suit: string = hand[0].slice(-1);

//   for (let card of hand) {
//     if (card.slice(-1) !== suit) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]));

/**
 * AMALIYOT
 */

// function beggars(values: number[], n: number): number[] {
//   if (n === 0) {
//     return [];
//   }
//   let sums: number[] = [];
//   for (let i: number = 0; i < n; i++) {
//     sums[i] = 0;
//   }
//   for (let i: number = 0; i < values.length; i++) {
//     sums[i % n] += values[i];
//   }
//   return sums;
// }

// console.log(beggars([1, 2, 3, 4, 5], 2));

// let range = (...rest: number[]): number[] => {
//   let res: number[] = [];

//   if (rest.length === 3) {
//     for (let i = rest[0]; i < rest[2]; i += rest[1]) {
//       res.push(rest[0] + rest[1]);
//       rest[0] += rest[1];
//       if (res[res.length - 1] >= rest[2] - rest[1]) {
//         return res;
//       }
//     }
//   }
//   if (rest.length === 2) {
//     for (let i = 0; i < rest[1]; i++) {
//       res.push(rest[0] + i);
//       if (res[res.length - 1] >= rest[1]) {
//         return res;
//       }
//     }
//   }

//   return res;
// };

// console.log(range(2, 3, 10));
type Product = {
  name: string;
  price: number;
  brand: string;
};

function sortedBrands(history: Product[]): string[] {
  const brandCount = new Map<string, number>();
  const brandRecentIndex = new Map<string, number>();

  history.forEach((product, index) => {
    const { brand } = product;
    brandCount.set(brand, (brandCount.get(brand) || 0) + 1);
    brandRecentIndex.set(brand, index);
  });

  const brands = Array.from(brandCount.keys());

  brands.sort((a, b) => {
    if (brandCount.get(b) === brandCount.get(a)) {
      return (brandRecentIndex.get(a) || 0) - (brandRecentIndex.get(b) || 0);
    }
    return (brandCount.get(b) || 0) - (brandCount.get(a) || 0);
  });

  return brands;
}

var products: Product[] = [
  { name: "Samsung Phone", price: 25, brand: "Samsung" },
  { name: "Apple Phone", price: 30, brand: "Apple" },
  { name: "Samsung Tablet", price: 45, brand: "Samsung" },
  { name: "Sony Headphones", price: 50, brand: "Sony" },
  { name: "Apple Watch", price: 60, brand: "Apple" },
];

console.log(sortedBrands(products));