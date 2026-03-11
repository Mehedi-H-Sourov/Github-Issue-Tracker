---

### 🚀 QnA

---

#### 1️⃣ What is the difference between `var`, `let`, and `const`?

- **`var`**: Function-scoped or globally scoped. Variables declared with var inside a function are accessible anywhere within that function, even inside blocks like loops or `if` statements. If declared outside a function, they become global. var declarations are **hoisted** to the top of their scope.

- **`let`**: Block-scoped.Variables declared with `let` are not initialized until the code execution reaches the declaration, creating a **temporal dead zone (TDZ)**. Accessing the variable before initialization throws a ReferenceError.

- **`const`**: Block-scoped and immutable. A `const` variable cannot be reassigned. Like `let`, it also has a temporal dead zone. For objects or arrays, the **reference cannot change**, but their contents (properties or elements) can still be mutated.

---

#### 2️⃣ What is the spread operator (`...`)?

The spread operator (`...`) in JavaScript **expands an array or object into individual elements or properties**.  
In an object literal, it enumerates the properties of an object and adds the key-value pairs to the new object.

---

#### 3️⃣ What is the difference between `map()`, `filter()`, and `forEach()`?

- **`forEach()`**: Executes a function for every item in an array. It **does not return a new array** or modify existing items. Think of it as calling each friend to say “hi” — nothing changes or gets collected.

- **`map()`**: Transforms each item and returns a **new array** with the same number of items. Like turning raw ingredients into a cooked meal.

- **`filter()`**: Keeps only the items that meet a certain condition, returning a **new array**. Think of it as sorting clean clothes from a laundry pile.

---

#### 4️⃣ What is an arrow function?

An arrow function is a **shorter, concise way to write a function** in JavaScript.  
It does **not have its own `this`, `arguments`, or `new` binding**, so it’s best for simple tasks, not for object methods or constructors.

---

#### 5️⃣ What are template literals?

Template literals are **string literals introduced in ES6** that use backticks (`` ` ``) instead of quotes.  
They allow **multi-line strings** and **advanced string formatting** using `${expression}` syntax.

---



