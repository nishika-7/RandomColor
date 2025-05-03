const maincolor = document.getElementById('main colour');
const leftcolor = document.getElementById("left colour");
const rightcolor = document.getElementById("right colour");
const maincolorcode = document.getElementById("main colour code");
const leftcolorcode = document.getElementById("left colour code")
const rightcolorcode = document.getElementById("right colour code");
const newcolorsbtn = document.getElementById("newcoloursButton");

let colors = {
    main: "#7E1946",
    left: "#0C6291",
    right:"#1481BA"
};

function updateColors(){
    maincolor.style.backgroundColor = colors.main;
    leftcolor.style.backgroundColor = colors.left;
    rightcolor.style.backgroundColor = colors.right;
    maincolorcode.textContent = colors.main;
    leftcolorcode.textContent = colors.left;
    rightcolorcode.textContent = colors.right;
}

function generateRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0 ; i<6 ; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generateNewColors(){
    colors = {
        main :generateRandomColor(),
        left : generateRandomColor(),
        right : generateRandomColor()       
    }
    updateColors();
}

// mainColor.addEventListener('click', () => copyToClipboard(colors.main));
// leftColor.addEventListener('click', () => copyToClipboard(colors.left));
// rightColor.addEventListener('click', () => copyToClipboard(colors.right));
newcolorsbtn.addEventListener('click', generateNewColors);

updateColors();