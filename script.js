let balance =2000;
let pin=2380;
function withdraw(amount)
{
 if(amount > balance)
 {
   return `Insufficient balance You have only Rs.${balance}`;
 }
 else{
  balance -=amount;
  return `You have withdraw Rs.${amount} and remaining balance is Rs.${balance}`;
 }
}
let attempts =3;
for (let i =0;i<attempts;i++)
{
  let pass = Number(prompt(`Enter the pin`));
  if(pass ===pin)
  {
    let amount = Number(prompt(`Enter the Rs. amount to withdraw`));
    let result = withdraw(amount);
    console.log(result);
    alert(`You have successful transaction`);
    break;
  }
  else if (isNaN(pass) || pass!==pin)
  {
   let left = attempts - (i+1)
   if(left >0)
   {
    alert(`Incorrect Pin. You have only ${left} attempts left`);
   }else{
    alert(`Card blocked due to multiple incorrect Pins`);
   }
  }
}
