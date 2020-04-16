## 算法

### 递归

- [如何写递归](https://leetcode-cn.com/circle/article/koSrVI/)

递归的套路

```
public int sum(int n) {
    if (n < 2) return n;       // ① 跳出时返回基本情况的结果
    int childSum = sum(n - 1); // ② 先递归
    return n + childSum;       // ③ 再计算，依赖递归的返回值
}


```

尾递归的套路

```
public int sum2(int n, int sum) {
    if (n < 2) return 1 + sum; // ① 跳出时返回基本情况的结果与中间变量的计算结果
    sum += n;                   // ② 根据函数参数与中间变量重新计算出新的中间变量
    return sum2(n - 1, sum);    // ③ 由基本情况条件触发决定，最终返回 B + sum
}

```

### 动态规划

- [闫氏 DP 分析法，从此再也不怕 DP 问题！](https://www.bilibili.com/video/BV1X741127ZM/)

## 数学

### 求最大公约数

- [js 计算最大公约数和最小公倍数代码实例](https://www.jb51.net/article/169844.htm)

## 算法技巧

### 数字技巧

#### 数字一半反转

x =1221 rev =0 每次 x/10, rev\*10 当 rev>x 时停止迭代，这就到了一半位置

### 小数靠近 0 取整

```
function f(n) {
  return n | 0
}
```

### 循环遍历数组

需求： [1,2,3,4]，4 后再到 1

```
d = (d+1)%4
```

### 二维数组初始化

```
var dp = new Array(nums.length)
    for(var i=0;i<nums.length;i++) {
        dp[i] = []
        for (var sum = -1000; sum <= 1000; sum++) {
            dp[i][sum+1000] = 0
        }
    }
```

### 求中间位置(偏左)

```
var mid = Math.floor((left+right)/2)

// Prevent (left + right) overflow
var mid = Math.floor(right+(right-left)/2)

 l + r >>> 1;

```

### 二分查找

模板一

```js
var search = function(nums, target) {
  var left = 0,
    right = nums.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
    else return mid;
  }
  return -1;
};
```

模板二

用于找分界点 left

```js
// 初始条件：left = 0, right = length-1
// 终止：left == right
// 向左查找：right = mid
// 向右查找：left = mid+1
var search = function(nums, target) {
  var left = 0,
    right = nums.length - 1;
  while (left < right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) right = mid;
    else if (nums[mid] < target) left = mid + 1;
    else return mid;
  }
  if (nums[left] === target) return left;
  return -1;
};
search([1, 1, 1, 10, 10, 10], 9);
```

模板三

```js
var search = function(nums, target) {
  var left = 0,
    right = nums.length - 1;
  while (left + 1 < right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) right = mid;
    else if (nums[mid] < target) left = mid;
    else return mid;
  }
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
};
search([1, 2, 3], 3);
```

### 截取 index 周围 k 个元素

```js
var start = index - Math.floor(k / 2);
if (start < 0) start = 0;
return arr.slice(start, start + k);
```

理解 ArrayBuffer

```
const buffer = new ArrayBuffer(8);

const arr1 = new Uint16Array(buffer);
const arr2 = new Uint8Array(buffer);


arr2[7] = 1;

console.log(arr1); // [0, 0, 0, 256]  这里每两位反转一下
console.log(arr2); // [0, 0, 0, 0, 0, 0, 0, 1]
console.log(buffer);
```
