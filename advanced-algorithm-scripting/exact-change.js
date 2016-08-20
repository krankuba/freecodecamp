
function checkCashRegister(price, cash, cid) {
  
  var arrChange = [];
  var change = (cash - price) * 100;
  var total = cidTotal(cid);
  
  if (change > total) {return "Insufficient Funds";}
  if (change == total) {return "Closed";}
  
  getChange();
  
  if (change !== 0) {return "Insufficient Funds";}
  
  return arrChange;
  
  function getChange() {
    for (var i = cid.length-1; i >= 0; i--) {
      var arrValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
      var cName = cid[i][0];
      var cTotal = cid[i][1] * 100;
      var cValue =  arrValues[i];
      var cAv = Math.floor(cTotal / cValue);
      var cAv2 = Math.floor(change / cValue);
      if (cAv > 0 && cAv2 > 0 && change >= cValue) {
        if (change >= cAv*cValue) {
          change = change - (cAv * cValue);
          arrChange.push([cName, (cAv * cValue) / 100]);
        } else {
          change = change - (cAv2 * cValue);
          arrChange.push([cName, (cAv2 * cValue) / 100]);
        }
      }
    }
  }
    
  function cidTotal(cid) {
    var cashInDrawer = 0;
    for (var i = 0; i < cid.length; i++) {
      cashInDrawer += cid[i][1] * 100;
    }
    return cashInDrawer;
  }
  
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
