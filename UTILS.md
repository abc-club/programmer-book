
## 重复

```js
const repeat = (str, n) => {
    let res = ''
    while (n) {
      if (n % 2 === 1) res += str
      if (n > 1) str += str
      n >>= 1
    }
    return res
  }

```

## 缓存结果

```js
function cached(fn) {
  const cache = Object.create(null)
  return function cachedFn (str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

```

## 复制属性
```js
/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

```

## 

```js
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
export function makeMap (str, expectsLowerCase) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}

```

## 常用常量或方法

```js
/**
 * Perform no operation.
 */
export function noop () {}

/**
 * Always return false.
 */
export const no = () => false

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
export const identity = (_) => _

```