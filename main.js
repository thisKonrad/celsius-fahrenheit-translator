/* :: temperature translator :: main SCRIPT JS :: */

/** here it returns 2 decimal places with the toFixed(value) Method -
 *  return whole numbers with Math.ceil()./floor instead -
 *  */ 

/* :: fahrenheit to celsius :: */
const tempFH = document.querySelector('#input-FH');
const resultCelsius = document.querySelector('#result-CS');
const btnCS = document.querySelector('#button-CS');

/* enter keyCode = 13 */
tempFH.addEventListener('keypress', (event)=>{
        const fahrenheit = tempFH.value;
        if( event.keyCode === 13 ){
            let getCelsius = (( fahrenheit - 32 ) * 5 / 9).toFixed(2);
            resultCelsius.innerText = ' ' + getCelsius +' '+'°'+'C';}
});
/* the button */
btnCS.addEventListener('click', ()=>{
        const fahrenheit = tempFH.value;
        let getCelsius = (( fahrenheit - 32 ) * 5 / 9).toFixed(2);
        resultCelsius.innerText = ' ' + getCelsius +' '+'°'+'C';}
);


/* :: celsius to fahrenheit :: */
const tempCS = document.querySelector('#input-CS');
const resultFahrenheit = document.querySelector('#result-FH');
const btnFH = document.querySelector('#button-FH');

tempCS.addEventListener('keypress', (event)=>{
    const celsius = tempCS.value;
    if( event.keyCode === 13 ){
        let getFahrenheit = (( celsius * 1.8 ) + 32).toFixed(2);
        resultFahrenheit.innerText = ' ' + getFahrenheit +' '+'°'+'F';}
});

btnFH.addEventListener('click', ()=>{
    const celsius = tempCS.value;
    let getFahrenheit = (( celsius * 1.8 ) + 32).toFixed(2);
        resultFahrenheit.innerText = ' ' + getFahrenheit +' '+'°'+'F';}
);



        
        
        
        
