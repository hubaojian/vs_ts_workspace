interface NineImg{
    name:string;
    age:number;
    click:()=>void;
}
function init(nineImg:NineImg){
    if(nineImg.click){
         nineImg.click();
    }
   
}
init({name:'zhangsan',age:10,click:()=>{
    click();
}})

function click():void{
    console.log("clicked");
}

function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // 未找到目标值
}

// 示例调用
const numbers = [1, 3, 5, 7, 9];
const target = 5;
console.log(binarySearch(numbers, target)); // 输出: 2


