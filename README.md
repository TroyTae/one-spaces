[![build](https://img.shields.io/github/workflow/status/TroyTae/one-spaces/build/master?style=flat-square)](https://github.com/TroyTae/one-spaces/actions?query=workflow%3Abuild)
[![size](https://img.shields.io/github/size/TroyTae/one-spaces/dist/one-spaces.js?style=flat-square)](https://github.com/TroyTae/one-spaces/blob/master/dist/one-spaces.js)
[![npm](https://img.shields.io/npm/v/one-spaces?color=%23fb3e44&style=flat-square)](https://www.npmjs.com/package/one-spaces)
[![license](https://img.shields.io/github/license/TroyTae/one-spaces?style=flat-square)](https://github.com/TroyTae/one-spaces/blob/master/LICENSE)

# One Spaces
A tiny module for making className 😎

## Installation

### npm (commonjs)
```shell script
npm install one-spaces
```

### browser (iife)
Please [download](./dist/one-spaces.js) this file.  
And embed script tag in your document.
```html
<script src="./dist/one-spaces.js"></script>
```

## Example

### VanillaJS

```javascript
var el = document.getElementById('my-element');
// arguments
el.className = OneSpaces('cls1', 'cls2', 'cls3');
// array
el.className = OneSpaces(['cls1', 'cls2'], ['cls3']);
// exclude falsy
el.className = OneSpaces('cls1', null, 'cls2', false && 'none', true && 'cls3');
// mix
el.className = OneSpaces(['cls1', 'cls2'], null, 'cls3');
```

### React (jsx)

```jsx
import React, { useState } from 'react';
import spaces from 'one-spaces';
import styles from './Page.css';

export default () => {
  const [isActive, setActive] = useState(false);
  return (
    <div className={styles.container}>
      <span className={spaces(styles.text, isActive && styles.active)}>
        Hello React!
      </span>
      <button onClick={() => setActive(!isActive)}>Toggle</button>
    </div>
  );
};
```

### Angular & Vue

Angular and Vue have their own system for className.  
Of course you can use this module with them but not recommended.
