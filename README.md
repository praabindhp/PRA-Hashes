# PRA-Hashes

A <strong>Secured 3 Level Hashing</strong> Algorithmic Mechanism

Includes Both <strong>256</strong> Bits And <strong>512</strong> Bits

# Installation

```bash
npm i prahash
```

# Usage

Module Includes Both <strong>PRA-256</strong> And <strong>PRA-512</strong> Hashes

### PRA-256

```js
const { pra256 } = require("prahash");

// Usage pra256("Your-String")
const hash = pra256("Praabindh Pradeep"); // Enter String To Be Hashed
console.log(hash);
```

### PRA-512

```js
const { pra512 } = require("prahash");

// Usage pra512("Your-String")
const hash = pra512("Praabindh Pradeep"); // Enter String To Be Hashed
console.log(hash);
```

### Both PRA-256 & PRA-512

```js
const { pra256, pra512 } = require("./index");

// Usage pra256("Your-String")
const hash256 = pra256("Praabindh Pradeep");

// Usage pra512("Your-String")
const hash512 = pra512("Praabindh Pradeep");

console.log("PRA-256 Hash:", hash256);
console.log("PRA-512 Hash:", hash512);
```

# Author

Name ~
<strong>Praabindh Pradeep</strong>

Email ~
praabindhp@gmail.com

GitHub ~
https://github.com/praabindhp

Current Repository ~
https://github.com/praabindhp/PRA-Hashes.git
