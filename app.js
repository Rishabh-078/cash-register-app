var billAmt= document.querySelector("#bill-amt");
var paidAmt= document.querySelector("#paid-amt");
var btnNext= document.querySelector(".btn-next")
var btnCheck= document.querySelector(".btn-check");
var btnReset= document.querySelector(".btn-reset");
var bill= document.querySelector(".bill");
var paid=document.querySelector(".paid");
var noOfNotes= document.querySelectorAll(".no-of-notes");
var resultMsg= document.querySelector(".result-msg");
var resultTable=document.querySelector(".result-table");

btnNext.addEventListener("click",()=>{
    if(billAmt.value>0){
        paid.style.display="block";
        btnNext.style.display="none";
    }
    else{
        resMsg("Please Enter a Valid Bill Amount")
    }
})

btnCheck.addEventListener("click",changeChecker)

function resMsg(msg){
    resultMsg.style.display="block";
    resultMsg.innerText=msg;
}

function changeChecker(){
    var billValue= billAmt.value;
    var paidValue= paidAmt.value;
    var changeValue= paidValue-billValue;
    if (billValue>0 && paidValue>0){
        if(changeValue>0){
            changeCalculater(changeValue);
        } else {
            resMsg(`You have to pay ₹${changeValue*-1} more for the bill.`)
        }
    }else{
        resMsg("Please Enter a Valid Paid Amount")
    }
}

function changeCalculater(change){
    var money={
        1: 0,
        5: 0,
        10: 0,
        20: 0,
        100: 0,
        500: 0,
        2000: 0
    }
    resMsg(`₹${change} is to be returned.`)
    var monArr= Object.keys(money).reverse();
    resultTable.style.display="block";
    for (i=0;i<monArr.length;i++){
        if(change>=monArr[i]){
            var mult=Math.floor(change/monArr[i])
            money[monArr[i]]+=mult;
            change-=monArr[i]*mult;
            noOfNotes[i].innerText = `${mult}`;
        }if (change==0){
            break;
        }

    }

    btnReset.addEventListener("click",()=>{
        for(i=0;i<7;i++){
            noOfNotes[i].innerText=0; }
        paidAmt.value="";
        billAmt.value="";
        billValue=0;
        paidValue=0;
        btnNext.style.display="inline";
        paid.style.display="none";
        resultMsg.style.display="none";
        resultTable.style.display="none";
    })
}

