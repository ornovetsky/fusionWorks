const arr = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 900 + 1)
);

let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
const unique1 = [...new Set(arr)]

const arrTruthy = [1,0,10, '0', '1', '',NaN, false, null, undefined, 'false', 'true']
const arr1000 = Array.from({length:1000}, () => arrTruthy[Math.floor(Math.random()*arrTruthy.length+1)])

let truthy = arr1000.map( (el, i) => {
  if (!!el) {
  return el
  }
})

for(let i=0;i<5;i++){
  setTimeout(() => {
    console.log(i)
  }, (1*1000));
}
for(var i=0;i<5;i++){
  (function(i){setTimeout(() => {
    console.log(i)
  }, (1*1000))})(i)
}
