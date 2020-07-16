# Benchmark
Every benchmark is measured based on version released at npm.

> But before test, I remove every comments and minify file.  
> Because `classnames` not provide min file.  
> And I passed array for classcat test.  
> Because `classcat` not support arguments.  


## File Size
classnames | classcat | clsx | one-spaces
--- | --- | --- | ---
548B | 467B | 517B | 152B

## Benchmark

### Environment

**device**:	MacBook Pro (16-inch, 2019)  
**processor**: 2.4GHz 8-Core Intel Core i9  
**npm**: v6.14.4  
**node**: v12.14.1  


### Result

```
Benchmark Test: arguments
classnames x 3,735,739 ops/sec ±0.84% (89 runs sampled)
classcat x 1,537,560 ops/sec ±0.61% (95 runs sampled)
clsx x 10,737,247 ops/sec ±0.70% (92 runs sampled)
one-spaces x 11,695,050 ops/sec ±0.75% (94 runs sampled)
Fastest is one-spaces


Benchmark Test: array
classnames x 2,010,130 ops/sec ±0.76% (95 runs sampled)
classcat x 2,016,643 ops/sec ±0.84% (94 runs sampled)
clsx x 7,555,638 ops/sec ±0.65% (94 runs sampled)
one-spaces x 7,842,242 ops/sec ±0.97% (91 runs sampled)
Fastest is one-spaces


Benchmark Test: nested array
classnames x 924,367 ops/sec ±0.85% (94 runs sampled)
classcat x 2,249,463 ops/sec ±0.89% (92 runs sampled)
clsx x 4,478,497 ops/sec ±0.71% (95 runs sampled)
one-spaces x 5,055,659 ops/sec ±0.81% (92 runs sampled)
Fastest is one-spaces


Benchmark Test: mix
classnames x 2,958,603 ops/sec ±0.44% (96 runs sampled)
classcat x 1,238,679 ops/sec ±0.57% (97 runs sampled)
clsx x 9,070,132 ops/sec ±0.78% (95 runs sampled)
one-spaces x 9,470,119 ops/sec ±0.85% (92 runs sampled)
Fastest is one-spaces
```
