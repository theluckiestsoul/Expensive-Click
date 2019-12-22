
import ExpensiveClick from './expensive-click';
import  clicks from '../clicks.json';

const expensiveClickObj=new ExpensiveClick();
const expensiveClickList=expensiveClickObj.getMostExpensiveClickList(clicks)
console.log(expensiveClickList );
console.log("----------------Stringify version----------------------")
console.log(JSON.stringify(expensiveClickList));