function a():number{
    return 1;
}

let b =():number=>{
    return 2;
}
type c = ()=>number;

let d:c=()=>{
    return 3;
}
var e:c =()=>{
    return 4;
}
class S{
    getAge():number{
        return 5;
    }
}

interface S2{
    getAge():number;
}