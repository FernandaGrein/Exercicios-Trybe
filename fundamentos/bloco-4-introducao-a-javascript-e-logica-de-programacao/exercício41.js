const a = 15;
const b = 3
console.log (a +b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a%b);
console.log (Math.max (a,b));
const c = 10;
console.log (Math.max (a,b,c));

if ( a>b) {
    console.log (a)
} else {
    console.log (b)
};

if (a>b && a>c) {
    console.log (a)
} else if (b>a && b>c) {
    console.log (b)
} else {
    console.log (c)
};

const d = 54;
if ( d>0) {
    console.log ("positivo")
} else if (d<0) {
    console.log ("negativo")
} else {
    console.log ("zero")
};
const e = 60;
const f = 60;
const g = 60;
if ( e + f+ g === 180 ) {
  console.log ("true")
} else if (e<=0 || f<=0 || g<=0) {
    console.log ("erro")
} else {
    console.log ("false")
};
