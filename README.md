---

### 🚀 QnA

    - 1️⃣ What is the difference between var, let, and const?

        #var: var is function-scoped or globally scoped. When we declare a variable using var inside a function, the variable is accessible anywhere within that function, even if it's declared inside a block (e.g., a loop or an if statement). If its declared outside the function, it becomes global and var are hoisted to the top. 

        #let: let is block scoped. However, variables declared with let are not initialized until the code execution reaches the declaration. This creates a temporal dead zone (TDZ), where accessing the variable before it is initialized results in a reference error.

        #const: const is blocked scoped and immutable meaning it is accessible only within the block where it was declared. It also creates a temporal dead zone. A variable declared with const cannot be reassigned. This applies to the variable's reference. However, if the value is an object or array, the object’s properties or array elements can still be mutated (but the reference to the object or array cannot be changed).

    - 2️⃣ What is the spread operator (...)?
        #The spread operator (...) in JavaScript is a way to expand an array or object into individual elements or properties. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created

    - 3️⃣ What is the difference between map(), filter(), and forEach()?
        #forEach() means it just does something with every item. Its not changing or keeping anything. Its just going through and maybe logging, alerting, or whatever.Like calling each friend to say "hi." Nothing gets removed or changed.

        #map() is for turning each item into something new. We can get a new list with the same number of items, just transformed. It’s like turning raw ingredients into a cooked meal.

        #filter() means you only keep items that meet a condition. It’s like doing laundry and keeping only the clean clothes in the basket.

    - 4️⃣ What is an arrow function?
        #An arrow function is a shorter, more concise way to write a function in JavaScript. Unlike regular functions, it doesn’t have its own this, arguments, or new binding, so it’s best for simple tasks, not as object methods or constructors.

    - 5️⃣ What are template literals?
        #Template literals are JavaScript string literals introduced in ES6 that use backticks (` `) instead of quotes. It allows us multi-line strings, and advanced string formatting. 


---




