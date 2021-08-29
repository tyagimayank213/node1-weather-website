const form = document.querySelector('form')
const input = document.getElementById('input')
const headingtwo = document.getElementById('headingtwo')
const headingthree = document.getElementById('headingthree')
const headingfive = document.getElementById('headingfive')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    headingthree.textContent = 'Loading...'
    headingfive.textContent = ''
    headingtwo.textContent = ''
    fetch('/about?address=' + input.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                console.log("hello", data.temperature);
                headingtwo.textContent = data.temperature + '°';
                headingthree.textContent = data.description;
                headingfive.textContent = data.location;
            }
        })
    })
})




// date 
const date = new Date();
const currentDate = date.getDate();
const Month = date.getMonth();
let currentMonth;
switch (Month) {
    case 0:
        currentMonth = "Jan";
        break;
    case 1:
        currentMonth = "Feb";
        break;
    case 2:
        currentMonth = "Mar";
        break;
    case 3:
        currentMonth = "Apr";
        break;
    case 4:
        currentMonth = "May";
        break;
    case 5:
        currentMonth = "Jun";
        break;
    case 6:
        currentMonth = "Jul";
        break;
    case 7:
        currentMonth = "Aug";
        break;
    case 8:
        currentMonth = "Sep";
        break;
    case 9:
        currentMonth = "Oct";
        break;
    case 10:
        currentMonth = "Nov";
        break;
    case 11:
        currentMonth = "Dec";
        break;
}
const ssecond = document.getElementById('ssecond');
const dateStr = `<h1 style="margin:0">${currentDate}, ${currentMonth}</h1>`;
ssecond.innerHTML = dateStr;