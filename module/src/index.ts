function formatString(input: string, toUpper?: boolean): string {
  if (toUpper == undefined || toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

// ------------------------ //
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// ------------------------ //
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      result.push(arrays[i][j]);
    }
  }
  return result;
}

// ------------------------ //
class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(): string {
        return `Model: ${this.model}`;
    }
}

// ------------------------ //
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

// ------------------------ //
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let mostExpensiveProduct = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
  }

  return mostExpensiveProduct;
}

// ------------------------ //
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

// ------------------------ //
async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        if (n < 0) {
            reject("Negative number not allowed");
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
}