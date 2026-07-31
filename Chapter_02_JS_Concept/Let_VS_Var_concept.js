/*
 * var vs let in JavaScript
 *
 * ┌───────────────────┬────────────────────────────────┬──────────────────────────────────┐
 * │      Aspect       │              var               │               let                │
 * ├───────────────────┼────────────────────────────────┼──────────────────────────────────┤
 * │ Scope             │ Function-scoped                │ Block-scoped ({ })               │
 * │ Hoisting          │ Hoisted w/ undefined default   │ Hoisted but NOT initialized      │
 * │                   │ (accessible before declaration)│ (Temporal Dead Zone — TDZ)       │
 * │ Re-declaration    │ Allowed in same scope          │ Not allowed in same scope        │
 * │ Re-assignment     │ Allowed                        │ Allowed                          │
 * │ Global property   │ var x = 5 → window.x is 5     │ let x = 5 → window.x is undefined│
 * │ Loop behavior     │ Same variable across iterations│ Fresh binding per iteration      │
 * │ Use case          │ Legacy code, rarely used today │ Preferred modern alternative     │
 * └───────────────────┴────────────────────────────────┴──────────────────────────────────┘
 *
 * Examples:
 *
 * // --- Scope ---
 * if (true) { var a = 1; let b = 2; }
 * console.log(a); // 1  — accessible outside block
 * console.log(b); // ReferenceError — block-scoped
 *
 * // --- Hoisting & TDZ ---
 * console.log(x); // undefined (hoisted with default)
 * var x = 5;
 *
 * console.log(y); // ReferenceError — TDZ
 * let y = 5;
 *
 * // --- Re-declaration ---
 * var foo = 1;
 * var foo = 2; // OK
 *
 * let bar = 1;
 * let bar = 2; // SyntaxError
 *
 * // --- Loop behavior ---
 * for (var i = 0; i < 3; i++) {
 *   setTimeout(() => console.log(i), 100); // 3, 3, 3
 * }
 *
 * for (let j = 0; j < 3; j++) {
 *   setTimeout(() => console.log(j), 100); // 0, 1, 2
 * }
 */

// Quick test runner — uncomment to verify the concepts above
// console.log("--- var vs let Demo ---");
