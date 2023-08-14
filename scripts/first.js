const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;

// Event listener for Subhanallah section 

subhanAllahIncrimentBtn.addEventListener("click", function(){
    if(subhanAllahInitialValue === 33){
        return alert('Subhanallah is completed please enter another one');
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue; 
});
subhanAllahDecrimentBtn.addEventListener("click", function(){
    if(subhanAllahInitialValue == 0){
        return alert('You cannot add negative value');
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue; 
});

// Event listener for Alhamdulillah section

alhamdulillahIncrimentBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue == 33){
        return alert('Alhamdulillah is Completed please enter another one');
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});
alhamdulillahDecrimentBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue == 0){
        return alert('You cannot add negative value');
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

// Event listener for Allahuakber section


