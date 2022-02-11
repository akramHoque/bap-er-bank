function getInputValue(InputId){
      debugger;
      const inputField = document.getElementById(InputId);
      const inputAmountText = inputField.value ;
      const amountValue = parseFloat(inputAmountText);
      // clear the input 
      inputField.value = ''
      return amountValue; 
}


function updateTotalField(totalFieldId ,amount){
      // debugger;
      const totalElement = document.getElementById(totalFieldId);
      const totalText = totalElement.innerText;
      const previousTotal = parseFloat(totalText);
     
      totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance(){
      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const PreviousBalanceTotalAmount = parseFloat(balanceTotalText);
      return PreviousBalanceTotalAmount;
}

function updateBalance(amount, isAdd){
      
       const balanceTotal = document.getElementById('balance-total');
      // const balanceTotalText = balanceTotal.innerText;
      // const PreviousBalanceTotalAmount = parseFloat(balanceTotalText);
      const PreviousBalanceTotalAmount = getCurrentBalance()
     
      if(isAdd == true){
            balanceTotal.innerText = PreviousBalanceTotalAmount + amount;   

      }
      else{
            balanceTotal.innerText = PreviousBalanceTotalAmount - amount;   
      }

}


// deposite button er kaj

document.getElementById('deposit-button').addEventListener('click', function(){
      

     

//       const depositTotal = document.getElementById('deposit-total');
//       const depositTotalText = depositTotal.innerText;
//      const previousDepositTotalAmount = parseFloat(depositTotalText);
     
//       depositTotal.innerText = previousDepositTotalAmount + depositAmount;

      const depositAmount = getInputValue('deposit-input');

      if(depositAmount > 0){
      updateTotalField('deposit-total',depositAmount);

      updateBalance(depositAmount, true)
      }

      


      // update balance
      // const balanceTotal = document.getElementById('balance-total');
      // const balanceTotalText = balanceTotal.innerText;
      // const PreviousBalanceTotalAmount = parseFloat(balanceTotalText);
      // balanceTotal.innerText = PreviousBalanceTotalAmount + depositAmount;   

      
     
});



// withdraw part
// handle withdraw button


document.getElementById('withdraw-button').addEventListener('click', function(){

      // const withdrawtotal = document.getElementById('withdraw-total');
      // const previousWithdrawTotalText = withdrawtotal.innerText;
      // const previousWithdrawTotal =parseFloat(previousWithdrawTotalText) ;

      //  withdrawtotal.innerText =  previousWithdrawTotal + withdrawAmount;

      

      // update balance after withdraw
      // const balanceTotal = document.getElementById('balance-total');
      // const balanceTotalText = balanceTotal.innerText;
      // const previousBalnceTotal = parseFloat(balanceTotalText);
      
      // balanceTotal.innerText = previousBalnceTotal - withdrawAmount;
      const withdrawAmount = getInputValue('withdraw-input');
      const currentBalance = getCurrentBalance();

      if(withdrawAmount > 0 && withdrawAmount < currentBalance){
            updateTotalField('withdraw-total',withdrawAmount )

            updateBalance(withdrawAmount, false)
      }
   
      if(withdrawAmount > currentBalance){

      }

});