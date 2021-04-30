/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

function checkCashRegister(price, cash, cid) {
  let currArray = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];  //values of currency in terms of dollars: 100 dollars, 20 dollars,...
  let diffChange = cash - price;     //find the change to be given
  cid.reverse();                     //reverse the cash in drawer array to match the currArray
  let resArray = [];
  let resObj = {
    status: "OPEN",
    change: []
  };

  for (let i=0; i< currArray.length;i++){
    if (diffChange == 0){
      break;
    } else if (diffChange >= currArray[i]){   //find the currency in currArr where change value is greater than the currency value
        if(cid[i][1]!==0){  //execute only if there is cash in drawer for this currency value
          let needCurr = Math.floor(diffChange/currArray[i]);        //needCurr is no. of notes/coins of currArr value needed to give complete change
          let availCurr = Math.floor(cid[i][1]/currArray[i]);        //availCurr is no. of notes/coins of currArr value available in the drawer (cid)
          if (availCurr >= needCurr){                                //if cash in drawer is more or equal to change needed, update the diffChange, cid value and resObj accordingly
              diffChange = diffChange - (needCurr * currArray[i]);
              diffChange =  Number(diffChange.toFixed(2));          //toFixed(2) contracts the decimal places to 2 but also converts the number to a string, Number() is used to convert it back to a number
              cid[i][1] = cid[i][1] - (needCurr * currArray[i]);
              resArray = [cid[i][0], needCurr * currArray[i]];
              resObj.change.push(resArray);
          } else {                                                    // else if cash in drawer is less than change needed, update the diffChange,resObj accordingly and set cid value to 0
              diffChange = (diffChange - availCurr * currArray[i]);
              diffChange = Number(diffChange.toFixed(2));
              cid[i][1] = 0;
              resArray= [cid[i][0], availCurr * currArray[i]];
              resObj.change.push(resArray);
          }
       }
   }
 }
//once change has been calculated and updated in resObj and cid array has been updated accordingly, check for the status
 if (diffChange == 0){
    let countArray = cid.filter(arrItem => arrItem[1] !==0);    //if the cash in cid is 0, status is closed
    if (countArray.length === 0){
        resObj.status = "CLOSED";
        cid.reverse();
        let newChange = resObj.change;
        resObj.change= [];
        for(let j=0; j<cid.length;j++){                         //update the cid array to reflect the values of resObj, as cid array was changed earlier while calculating the change
          newChange.forEach(function(item){
            if (item[0] === cid[j][0]){
                cid[j][1] = item[1];
            }
          });
          resObj.change.push(cid[j]);                          //in case of status closed, the resObj is equal to the (cash in drawer) cid array
        }
    }
  } else {                                    //if change was not computed to 0, it means there is insufficient funds in drawer, update status accordingly and set change to empty array
    resObj.status = "INSUFFICIENT_FUNDS";
    resObj.change =[];
  }
  return resObj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


/* console log
{
  status: 'CLOSED',
  change: [
    [ 'PENNY', 0.5 ],
    [ 'NICKEL', 0 ],
    [ 'DIME', 0 ],
    [ 'QUARTER', 0 ],
    [ 'ONE', 0 ],
    [ 'FIVE', 0 ],
    [ 'TEN', 0 ],
    [ 'TWENTY', 0 ],
    [ 'ONE HUNDRED', 0 ]
  ]
}   */
