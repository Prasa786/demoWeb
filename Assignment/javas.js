const transaction_id = id =>(id%2==0 ? "Fast Processing":"Extra Verification");
console.log(transaction_id(123));
console.log(transaction_id(124));


const array=[1,2,3,4,5,6,7,8,9,10];
const odd=array.filter(num => num %2 !=0);
console.log(odd);


function showmessage(){
    console.log("Helo");
}
function callfunction(message,callback){
    console.log(message);
    callback();
}

callfunction("Hi",showmessage);

(function (){
    console.log("IIFE");
})();

var func =function(){
    console.log("Function");
}
func();

function authorize(role){
    return function(userroles){
        return userroles == role? "access granted":"access denied";
    };
}
const admin=authorize("admin");
console.log(admin("admin"));
console.log(admin("user"));
 
function isPallindrome(str){
    const revstr=str.split("").reverse().join("");
    return str===revstr;
}
console.log(isPallindrome("madam"));
console.log(isPallindrome("hello"));


function sum(...args){
    let total=0;
    for(const arg of args){
        total+=arg;
    }
    return total;
}
console.log(sum(1,2,3));

function print(...args){
    for(const arg of args){
        if(typeof arg==="string"){
            console.log(arg);
        }
    }
}
print(1,2,3,4,5,"hello");

const [first,second,third,...args]=["a","bb,","ccc","dddd","eeeee"];
console.log(first);
console.log(second);
console.log(third);
console.log(args)

function  captitalize(str){
    const func=(str).charAt(0).toUpperCase()+str.slice(1);
    return func;
}
console.log(captitalize("hello"));
const addExclamation =str=> str+"!";
const repeatTwice = str => str.repeat(2);
function compose(...args){
    return function(value){
        return args.reduce((acc,func)=>func(acc),value);
    };
}
let combine =compose(repeatTwice,captitalize,addExclamation,captitalize);
console.log(combine("hello"));

const numbers=[1,2,3,4,5,6,7,8,9,10];
const copy=[...numbers];
copy.push(100);
console.log(copy);


for(let i=0;i<5;i++){
    console.log(i);
}
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello this is ${this.name} and i am ${this.age} old`);
    }
}
const person1=new Person("prasanna",22);
person1.greet();


class Bank {
    constructor(name, bank_balance) {
        this.name = name;
        this.bank_balance = bank_balance;
    }

    transaction(type, amount) {
        switch (type) {
            case "deposit":
                this.bank_balance += amount;
                return `Deposited: ${amount}. New Balance: ${this.bank_balance}`;

            case "withdraw":
                if (amount > this.bank_balance) {
                    return `Insufficient funds. Current Balance: ${this.bank_balance}`;
                }
                this.bank_balance -= amount;
                return `Withdrawn: ${amount}. New Balance: ${this.bank_balance}`;
            
            
            default:
                return "Invalid transaction type. Use 'deposit' or 'withdraw'.";
        }
    }
    acc_check(){
                return `Account Holder ${this.name}  ${this.bank_balance}`;
            }
}

const user1 = new Bank("John", 1000);

console.log(user1.transaction("deposit", 500));   
console.log(user1.transaction("withdraw", 2000)); 
console.log(user1.transaction("withdraw", 1000)); 
console.log(user1.transaction("check", 100)); 
console.log(user1.acc_check());


