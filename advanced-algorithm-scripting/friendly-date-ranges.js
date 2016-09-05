
function makeFriendlyDates(arr) {
  
  var arr1 = arr[0].split('-'),
      arr2 = arr[1].split('-'),
      year1 = Number(arr1[0]),
      year2 = Number(arr2[0]),
      month1 = getMonth(arr1[1]),
      month2 = getMonth(arr2[1]),
      day1 = Number(arr1[2]).toString(),
      day2 = Number(arr2[2]).toString(),
      ordinal1 = ordinalDay(arr1[2]),
      ordinal2 = ordinalDay(arr2[2]),
      result = [];

  return print(result);

  function lessThanOneYear(arr) {
    var date1 = new Date(arr[0]),
        date2 = new Date(arr[1]),
        differenceInMs = date2 - date1,
        oneYearInMs = 31536000000;
    if (differenceInMs < oneYearInMs) {
      return true;
    } else {
      return false;
    }
  }
  
  function print() {
    if (arr[0] == arr[1]) {
      if (year1 == 2016) {
        result.push(month1 + ' ' + day1 + ordinal1);
      } else {
        result.push(month1 + ' ' + day1 + ordinal1 + ', ' + year1);
      }
      return result;
    }
    if (year1 == 2016 && lessThanOneYear(arr)) {
      result.push(month1 + ' ' + day1 + ordinal1);
      if (month1 != month2) {
        result.push(month2 + ' ' + day2 + ordinal2);
      } else {
        result.push(day2 + ordinal2);
      }
      return result;
    }
    if (year1 != 2016 && lessThanOneYear(arr)) {
      result.push(month1 + ' ' + day1 + ordinal1 + ', ' + year1);
      result.push(month2 + ' ' + day2 + ordinal2);
      return result;
    }
    if (!lessThanOneYear(arr)) {
      result.push(month1 + ' ' + day1 + ordinal1 + ', ' + year1);
      result.push(month2 + ' ' + day2 + ordinal2 + ', ' + year2);
      return result;
    }
  }
  
  function getMonth(num) {
    switch (num) {
      case '01':
        return "January";
      case '02':
        return "February";
      case '03':
        return "March"; 
      case '04':
        return "April";  
      case '05':
        return "May";  
      case '06':
        return "June";    
      case '07':
        return "July";   
      case '08':
        return "August";     
      case '09':
        return "September";     
      case '10':
        return "October";      
      case '11':
        return "November";      
      case '12':
        return "December";       
    }
  }
  
  function ordinalDay(num) {
    switch (num) {
      case '01':
        return "st";
      case '02':
        return "nd";
      case '03':
        return "rd";
      case '04':    
      case '05':
      case '06':    
      case '07':     
      case '08':     
      case '09':
      case '10':    
      case '11':
      case '12':    
      case '13':     
      case '14':     
      case '15':
      case '16':    
      case '17':
      case '18':    
      case '19':     
      case '20':   
        return "th";
      case '21':
        return "st";     
      case '22':
        return "nd";
      case '23':
        return "rd";
      case '24':    
      case '25':
      case '26':    
      case '27':     
      case '28':     
      case '29':
      case '30':
        return "th";
      case '31':
        return "st";
    }
  }
  
}

makeFriendlyDates(["2022-09-05", "2023-09-04"]);

