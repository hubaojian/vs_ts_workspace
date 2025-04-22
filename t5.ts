function getname():void{

}
let getname2 = ():void=>{
    console.log('getname2()')
}
type getname3= ()=>void;

function getname4(f:()=>void){
    f.apply(f)
}

getname4(()=>{
    console.log('getname4()')
})

getname4(getname2)

interface click{
    onclick:(x:number)=>void
}
let c:click = {onclick:(x:number)=>{
    console.log('x==' + x)
}}
c.onclick((3))