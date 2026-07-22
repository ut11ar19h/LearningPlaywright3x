let isCI = true;
let browsermode = isCI ? "headless" : "headed";
console.log(`Browser Mode: ${browsermode}`); // Output: Browser Mode: headless