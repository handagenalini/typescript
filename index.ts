const numelement=document.getElementById('num1') as HTMLInputElement;
const numelement2=document.getElementById('num2') as HTMLInputElement;
const buttonelement=document.querySelector('button');

function add(num1:number,num2:number){
    return num1+num2
}
buttonelement.addEventListener('click',()=>{
const num1=numelement.value
const num2=numelement2.value
const result=add(+num1,+num2)
console.log(result)

})

