const adviceNo  = document.querySelector(".adviceNo")
const Advice = document.querySelector(".advice");
const disc = document.querySelector(".disc");
const spinnerBorder = document.querySelector(".spinner-border");

async function getData() {
   
     adviceNo.innerHTML = "";
    Advice.innerHTML = "";
     spinnerBorder.style.display = "block";
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json()
        console.log(data)
        return data
    } catch(error) {
        console.log(error)    
    }
}
getData()
const displayData = async () => {
    const data = await getData();
    adviceNo.innerHTML = `Advice ${data.slip.id}`
    Advice.innerHTML = `"${data.slip.advice}"`
}

disc.addEventListener("click", displayData)
// initially on window load we do not have any data as we have set the data on button click 
// so to load the data... we set a domContentLoaded listener on window it will load the data even before the button is clicked
window.addEventListener("DOMContentLoaded" , displayData);

