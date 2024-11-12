// call
let a={
    id:1,
    age:22,
    name:"Prassu"
}

let b=function (p,q,r,s,t,u,v){
    console.log(this.name + " " + p + " " + q + " " + r + " " + s + " " + t + " " + u + " " + v);
}

b.call(a,"Jyooo","prassu","sravs","tej","sai","pavan","ganesh")


// apply
let c = {
    id: 1,
    age: 22,
    name: "Prassu"
};

let d = function (x, y, z, a, b) {
    console.log(x + " " + y + " " + z + " " + a + " " + b);
};

d.apply(c, ["Jyooo", "sravs", "tej", "sai", "pavan"]);


// bind

let e={
    id:1,
    age:22,
    name:"Prassu"
}

let f=function (w,x,y,z,){
    console.log(this.name + " " + w +" " + x + " " + y + " " + z);
}

let g = f.bind(e,["Jyooo","sravs","tej"],["sai","pavan"],["siva","deepu"],[12345,67891])
g()