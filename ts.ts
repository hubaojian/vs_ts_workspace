interface Student{
    run :(x:number)=>void;//声明一个函数
}
function onClick(s:Student,x:number){
    s.run(x);
}
onClick({run:(y)=>{//声明一个对象，同时调用对象的run方法
    console.log("run()1，x==" + y)
}},3)




function onClick2(f:Function){
        f.apply(f)
}

onClick2(()=>{//声明函数的实现体，并没有调用，真正调用是f.apply(f)
    console.log("run()2")
})


class Teacher{
    click ?:(b:boolean)=>void;
    onclick(){
        if(this.click){
            this.click(true)
        }
    }
}
let teacher = new Teacher();
// teacher.click = ()=>{
//     console.log("click teacher")
// }
teacher.onclick();


