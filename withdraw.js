document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawfield=document.getElementById('Withdraw-field');
    const withdrawamount=withdrawfield.value;
    const newdewithdrawamount=parseFloat(withdrawamount);
        console.log(newdewithdrawamount);


        const withdrawElement = document.getElementById('total-withdraw');
        const newdewithdrawamounttk=withdrawElement.innerText;
        const totalwithdraw=parseFloat(newdewithdrawamounttk);
        console.log(totalwithdraw);

    // calculation part
    const totalWithdraw=newdewithdrawamount+totalwithdraw;
    withdrawElement.innerText=totalWithdraw;
    console.log(totalWithdraw);

    const previousBalance=document.getElementById('total-bal');
    //    console.log(balance);
    const previousBalanceAmount=previousBalance.innerText;

    const preTotalbalance = parseFloat(previousBalanceAmount);

    console.log(preTotalbalance);

    const currentBalanceamount = preTotalbalance - newdewithdrawamount;
  
    previousBalance.innerText=currentBalanceamount;
    withdrawfield.value ='';




})