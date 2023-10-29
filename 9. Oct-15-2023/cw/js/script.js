const hadudu = document.getElementById("hadudu");
const dipti = document.getElementById("dipti");
const diptiBtn = dipti.nextElementSibling;

function changeText () {
    hadudu.innerHTML = "Hadudu";
}

function kabadi () {
    hadudu.innerHTML = "Ami Vat khai";
}

function fultokka () {
    hadudu.innerHTML = "Hadudu";
}

diptiBtn.addEventListener("click", ()=>{
    preText = dipti.textContent;
    if(preText === "Welcome to DIPTI"){
        dipti.textContent = "Welcome to Daffodil International University";
    }else{
        dipti.textContent = "Welcome to DIPTI";
    }
});