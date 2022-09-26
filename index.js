console.log("index.js");

weekday = document.querySelector('.weekday');
holiday = document.querySelector('.holiday') ;

const d = new Date() ;
console.log(d.getDay());

// checking what day is today

switch (d.getDay()) {
    case 1:
        weekday.innerText = "Monday"
        break;
    case 2:
        weekday.innerText = "Tuesday"
        break;
    case 3:
        weekday.innerText = "Wednesday"
        break;
    case 4:
        weekday.innerText = "Thursday"
        break;
    case 5:
        weekday.innerText = "Friday"
        break;
    case 6:
        weekday.innerText = "Saturday"
        break;
    case 7:
        weekday.innerText = "Sunday"
        break;

}

// checking whether it is weekend or not
if (d >= 5) {
    holiday.innerHTML = "<span style='color:green;'> Week day </span> is here"; 
}

else if (d < 5) {
    holiday.innerText = "Week End "; 
}

console.log(weekday.innerText)
