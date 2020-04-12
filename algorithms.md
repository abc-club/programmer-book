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
