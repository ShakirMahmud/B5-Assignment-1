# Understanding TypeScript: Interfaces vs Types, and The Union & Intersection Types

TypeScript adds strong typing to JavaScript, enabling developers to write more predictable and maintainable code. Two common areas of confusion are the difference between **interfaces vs types**, and **Union & Intersection Types**: How to model flexible and composable types.

---

## 📘 Interfaces vs Types in TypeScript

Both `interface` and `type` in TypeScript are used to describe the shape of an object, but they have key differences in usage and flexibility.

### ✅ Interfaces

```ts
interface Person {
  name: string;
  age: number;
}
````

* Designed for **object shapes**
* **Extensible** via `extends`
* Often used in OOP-style TypeScript code
* Can be use only in non-primitive types

You can extend interfaces:

```ts
interface Employee extends Person {
  position: string;
}
```

### ✅ Type Aliases

```ts
type Person = {
  name: string;
  age: number;
}
```

* Can describe **any type**, not just objects
* Can create unions:
  `type Status = "loading" | "success" | "error";`
* Cannot be reopened/merged like interfaces
* Can be use both in primitive types and non-primitive types

> 🔹 In modern TypeScript, both are powerful — and largely interchangeable — but interfaces tend to be favored for defining objects.

---

## 2. Union & Intersection Types in TypeScript

TypeScript's union and intersection types help you **combine and constrain** types flexibly.

### Union Types (`|`)

Union types allow a value to be **one of several types**.

```ts
type ID = string | number;

function printId(id: ID) {
  console.log("Your ID is", id);
}

printId(123);      // OK
printId("abc123"); // OK
```

### Intersection Types (`&`)

Intersection types **combine multiple types into one**. The resulting type must satisfy all the declared types.

```ts
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  id: 42
};
```

### 🧠 Summary:

* **Union (`|`)**: A **choice** between types — useful for flexibility.
* **Intersection (`&`)**: A **combination** of types — useful for composing features.

---