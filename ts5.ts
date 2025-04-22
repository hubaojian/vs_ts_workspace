interface TS5{
    click:(x:number)=>void;
    click2(y:number):void;
}
function gTs5(s:TS5,a:number, b:number){
    s.click(a);
    s.click2(b);
}
gTs5({click:(c)=>{
        console.log('c==' +c)
},click2:(d)=>{
    console.log('d==' +d)
}},3,4)

function gT<T>(a:T ,x:number):number{
        return x;
}