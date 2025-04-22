namespace st{
   interface Sx{
    tf():boolean;
    tx:()=>boolean;
   }
   let sx:Sx= {tf:():boolean=>g(),tx:():boolean=>g()}

   function g():boolean{
    return true;
   }
}
