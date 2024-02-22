let btn = document.querySelector(`#btn`);
let progress = document.querySelector(`.progress`);
let InputWidth = document.getElementById(`width`);
let InputHeight = document.getElementById(`height`);
let write = document.getElementById(`write`);
let determination = document.getElementById(`determination`);

let calculate = () =>{
    let width = InputWidth.value;
    let height = InputHeight.value / 100;
    height = height * height;
    let result = width / height;
    result = Math.round(result * 100)/100;
    write.innerHTML = result;
    let resultx5 = result*5;
    progress.style.width = resultx5 + 'px';
    checkBMI(result);
};

let checkBMI = (result) =>{
    if (result<18.50){
        determination.innerHTML = "Mając "+result+" BMI masz niedowage";
    }else if(result>=18.50 && result<=24.99){
        determination.innerHTML = "Mając "+result+" BMI masz Wagę prawidłową";
    }else if(result>=25.00 && result<=29.99){
        determination.innerHTML = "Mając "+result+" BMI masz nadwagę";
    }else if(result>=30.0 && result<=34.99){
        determination.innerHTML = "Mając "+result+" BMI masz I stopień otyłości";
    }else if(result>=35.00 && result<=39.99){
        determination.innerHTML = "Mając "+result+" BMI masz II stopień tyłości";
    }else if(result>=40.00){
        determination.innerHTML = "Mając "+result+" BMI masz skrajną otyłość";
    }
}
btn.addEventListener(`click`,calculate);

