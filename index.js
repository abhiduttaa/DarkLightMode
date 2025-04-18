// function changeBackground(color){
//     document.body.style.backgroundColor = color;
//     document.Htext.style.backgroundColor = color;
// }

// const darkbtn = document.getElementById('dark');
// const Htext = document.getElementById('text');

// // Htext.addEventListener("")
// // console.log(darkbtn);
// darkbtn.addEventListener('click',() => {
// //  changeBackground('black');
// const currentcolor = document.body.style.backgroundColor;

// if(!currentcolor || currentcolor == 'white'){
//     changeBackground('black');
//     darkbtn.innerHTML = 'Light Mode';
//     Htext.style.color = 'White';
//     document.getElementById("text").style.color="white";

// }
// else{
//     changeBackground('white');
//     darkbtn.innerHTML = 'Dark Mode';
//     Htext.style.color = 'White';
// }
// })

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

const darkbtn = document.getElementById('dark');
const Htext = document.getElementById('text');

darkbtn.addEventListener('click', () => {
    const currentcolor = document.body.style.backgroundColor;

    if (!currentcolor || currentcolor === 'white') {
        changeBackground('black');
        Htext.style.color = 'white';
        darkbtn.innerHTML = 'Light Mode';
    } else {
        changeBackground('white');
        Htext.style.color = 'black';
        darkbtn.innerHTML = 'Dark Mode';
    }
});
