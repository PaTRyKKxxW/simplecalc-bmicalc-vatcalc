let btn = document.querySelector(`#btn`);
let progress = document.querySelector(`.progress`);
console.log(progress);
let InputWidth = document.getElementById(`width`);
let InputHeight = document.getElementById(`height`);
let write = document.getElementById(`write`);

let calculate = () =>{
    let width = InputWidth.value;
    let height = InputHeight.value / 100;
    height = height * height;
    let result = width / height;
    result = Math.round(result * 100)/100;
    write.innerHTML = result;
    let resultx5 = result*5;
    progress.style.width = resultx5 + 'px';
};

let checkBMI = (result) =>{
    if (result<18.5){
        
    }
}
btn.addEventListener(`click`,calculate);

