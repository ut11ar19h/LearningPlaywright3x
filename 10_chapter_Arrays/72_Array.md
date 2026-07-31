# JavaScript Array Methods — Complete Reference

| # | Method | Category | What It Does | Syntax | Example | Output |
|---|--------|----------|-------------|--------|---------|--------|
| 1 | `push()` | Mutator | Adds elements to the end of an array. Returns the **new length**. | `arr.push(el1, el2, ...)` | `[1,2].push(3,4)` | `4` |
| 2 | `pop()` | Mutator | Removes the **last** element and **returns it**. | `arr.pop()` | `[1,2,3].pop()` | `3` |
| 3 | `unshift()` | Mutator | Adds elements to the **beginning**. Returns the **new length**. | `arr.unshift(el1, ...)` | `[2,3].unshift(1)` | `3` |
| 4 | `shift()` | Mutator | Removes the **first** element and **returns it**. | `arr.shift()` | `[1,2,3].shift()` | `1` |
| 5 | `splice()` | Mutator | Add/remove/replace elements **at any index**. Returns removed items. | `arr.splice(start, deleteCount, item1, ...)` | `[10,20,30,40].splice(1,2,"X","Y")` | `[20,30]` → array becomes `[10,"X","Y",40]` |
| 6 | `reverse()` | Mutator | **Reverses** the array **in place**. Returns the reversed array. | `arr.reverse()` | `[1,2,3].reverse()` | `[3,2,1]` |
| 7 | `sort()` | Mutator | Sorts elements **as strings** by default. Can take a compare function. | `arr.sort(compareFn?)` | `[3,1,2].sort()` | `[1,2,3]` |
| 8 | `fill()` | Mutator | Fills all elements with a static value. | `arr.fill(value, start?, end?)` | `[1,2,3].fill(0)` | `[0,0,0]` |
| 9 | `concat()` | Accessor | Merges arrays into a **new array**. Does not change originals. | `arr1.concat(arr2, ...)` | `[1,2].concat([3,4])` | `[1,2,3,4]` |
| 10 | `slice()` | Accessor | Returns a **shallow copy** of a portion as a **new array**. | `arr.slice(start?, end?)` | `[10,20,30,40].slice(1,3)` | `[20,30]` |
| 11 | `join()` | Accessor | Joins all elements into a **string** with a separator. | `arr.join(separator?)` | `["a","b","c"].join("-")` | `"a-b-c"` |
| 12 | `indexOf()` | Accessor | Returns the **first index** of a value, or **-1** if not found. | `arr.indexOf(value, fromIndex?)` | `[1,2,3,2].indexOf(2)` | `1` |
| 13 | `lastIndexOf()` | Accessor | Returns the **last index** of a value, or **-1** if not found. | `arr.lastIndexOf(value, fromIndex?)` | `[1,2,3,2].lastIndexOf(2)` | `3` |
| 14 | `includes()` | Accessor | Checks if array contains a value. Returns **true/false**. | `arr.includes(value)` | `[1,2,3].includes(2)` | `true` |
| 15 | `at()` | Accessor | Returns element at given index. **Supports negative** indexing. | `arr.at(index)` | `[10,20,30].at(-1)` | `30` |
| 16 | `toString()` | Accessor | Converts array to a comma-separated string. | `arr.toString()` | `[1,2,3].toString()` | `"1,2,3"` |
| 17 | `forEach()` | Iteration | Executes a function for **each element**. Returns **undefined**. | `arr.forEach(cb)` | `[1,2,3].forEach(v => console.log(v))` | logs 1, 2, 3 |
| 18 | `map()` | Iteration | Creates a **new array** by transforming each element. | `arr.map(cb)` | `[1,2,3].map(v => v * 10)` | `[10,20,30]` |
| 19 | `filter()` | Iteration | Creates a **new array** with elements that pass a test. | `arr.filter(cb)` | `[1,2,3,4,5].filter(v => v > 3)` | `[4,5]` |
| 20 | `find()` | Iteration | Returns the **first element** that passes a test, else **undefined**. | `arr.find(cb)` | `[5,12,8,130].find(v => v > 10)` | `12` |
| 21 | `findIndex()` | Iteration | Returns the **index** of the first element that passes a test, else **-1**. | `arr.findIndex(cb)` | `[5,12,8,130].findIndex(v => v > 10)` | `1` |
| 22 | `findLast()` | Iteration | Returns the **last element** that passes a test, else **undefined**. | `arr.findLast(cb)` | `[5,12,8,130].findLast(v => v > 10)` | `130` |
| 23 | `findLastIndex()` | Iteration | Returns the **index** of the last element that passes a test, else **-1**. | `arr.findLastIndex(cb)` | `[5,12,8,130].findLastIndex(v => v > 10)` | `3` |
| 24 | `every()` | Iteration | Returns **true** if **all** elements pass a test. | `arr.every(cb)` | `[1,2,3].every(v => v > 0)` | `true` |
| 25 | `some()` | Iteration | Returns **true** if **at least one** element passes a test. | `arr.some(cb)` | `[1,2,3].some(v => v > 2)` | `true` |
| 26 | `reduce()` | Iteration | Reduces array to a **single value** (left-to-right). | `arr.reduce(cb, initial?)` | `[1,2,3].reduce((a,b) => a+b, 0)` | `6` |
| 27 | `reduceRight()` | Iteration | Same as `reduce()` but processes **right-to-left**. | `arr.reduceRight(cb, initial?)` | `[1,2,3].reduceRight((a,b) => a-b)` | `0` |
| 28 | `flat()` | Iteration | Flattens nested arrays to a specified depth. | `arr.flat(depth?)` | `[1,[2,[3]]].flat(2)` | `[1,2,3]` |
| 29 | `flatMap()` | Iteration | Maps then flattens 1 level — like `map()` + `flat(1)`. | `arr.flatMap(cb)` | `["hi","bye"].flatMap(w => w.split(""))` | `["h","i","b","y","e"]` |
| 30 | `keys()` | Iteration | Returns an **iterator** of array **indexes**. | `arr.keys()` | `[...["a","b"].keys()]` | `[0,1]` |
| 31 | `values()` | Iteration | Returns an **iterator** of array **values**. | `arr.values()` | `[...["a","b"].values()]` | `["a","b"]` |
| 32 | `entries()` | Iteration | Returns an **iterator** of `[index, value]` pairs. | `arr.entries()` | `[...["a","b"].entries()]` | `[[0,"a"],[1,"b"]]` |
| 33 | `Array.from()` | Static | Creates an array from an **iterable** or **array-like** object. | `Array.from(source)` | `Array.from("ABC")` | `["A","B","C"]` |
| 34 | `Array.isArray()` | Static | Checks if a value is an array. Returns **true/false**. | `Array.isArray(value)` | `Array.isArray([1,2])` | `true` |
| 35 | `Array.of()` | Static | Creates an array from **arguments** (unlike `new Array()`). | `Array.of(el1, el2, ...)` | `Array.of(5)` | `[5]` |

---

### Category Legend

| Category | Behaviour |
|----------|-----------|
| **Mutator** | Changes the original array |
| **Accessor** | Does not change the original array; returns a new array or value |
| **Iteration** | Loops through elements; runs a callback function on each |
| **Static** | Called on `Array` itself, not on an array instance |

---

### Quick Code Examples

```javascript
// --- Mutator Methods ---
let a = [1,2,3];
a.push(4);              // a → [1,2,3,4], returns 4
a.pop();                // a → [1,2],   returns 3
a.unshift(0);           // a → [0,1,2,3], returns 4
a.shift();              // a → [1,2,3], returns 0
a.splice(1,1,"X");      // a → [1,"X",3], returns [2]
a.reverse();            // a → [3,"X",1]
a.sort();               // a → [1,3,"X"]
a.fill(0);              // a → [0,0,0]

// --- Accessor Methods ---
[1,2].concat([3,4]);          // [1,2,3,4]
[10,20,30,40].slice(1,3);     // [20,30]
["a","b"].join("-");          // "a-b"
[1,2,3].indexOf(2);           // 1
[1,2,3,2].lastIndexOf(2);     // 3
[1,2,3].includes(2);          // true
[10,20,30].at(-1);            // 30
[1,2,3].toString();           // "1,2,3"

// --- Iteration Methods ---
[1,2,3].forEach(v => console.log(v));       // logs 1,2,3
[1,2,3].map(v => v * 10);                   // [10,20,30]
[1,2,3,4,5].filter(v => v > 3);             // [4,5]
[5,12,8,130].find(v => v > 10);             // 12
[5,12,8,130].findIndex(v => v > 10);        // 1
[1,2,3].every(v => v > 0);                  // true
[1,2,3].some(v => v > 2);                   // true
[1,2,3].reduce((a,b) => a+b, 0);            // 6
[1,[2,[3]]].flat(2);                        // [1,2,3]

// --- Static Methods ---
Array.from("ABC");          // ["A","B","C"]
Array.isArray([1,2]);       // true
Array.of(5);                // [5]  (compare: new Array(5) → [,,,,])
```

---

*Created for JavaScript Array Methods study — 10_chapter_Arrays*
