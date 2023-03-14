
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositfield=document.getElementById('Deposit-field');
    const depositamount=depositfield.value;
    const newdepositamount=parseFloat(depositamount);
        console.log(depositamount);


       const depositElement= document.getElementById('total-deposit');
       const deposittotal=depositElement.innerText;
       const deposittotalamount=parseFloat(deposittotal);
       console.log(deposittotalamount);

       const currentDeposittotal =  newdepositamount+deposittotalamount;
      depositElement.innerText=currentDeposittotal;
       console.log(currentDeposittotal);

       const previousBalance=document.getElementById('total-bal');
    //    console.log(balance);
    const previousBalanceAmount=previousBalance.innerText;
    const preTotalbalance = parseFloat(previousBalanceAmount);
    console.log(preTotalbalance);

    const currentBalanceamount=preTotalbalance + newdepositamount;
  
    previousBalance.innerText=currentBalanceamount;
    depositfield.value ='';
    // console.log(currentBalanceamount);
}

)