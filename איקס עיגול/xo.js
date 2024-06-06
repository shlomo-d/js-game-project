let turn = true;
let btns = document.querySelectorAll(".btn");
let btnClicked = 0
btns.forEach((b) => {
  b.addEventListener("click", btnClick);
});
function resetXo() {
    let btns = document.querySelectorAll(".btn")
    btns.forEach((btn) =>{
        btn.textContent = ""
})
}
document.querySelector(".return").addEventListener("click", resetXo)

function btnClick() {
  if (this.textContent != "") return;
  btnClicked++
  if (turn) this.textContent = "x";
  else this.textContent = "o";
  if(checWin()){
    setTimeout(()=>{
        alert (this.textContent + " is win")
    }, 100)
    
  }
  
  turn = !turn;
}

function checWin(){
    let btns = document.querySelectorAll(".btn")
    if(btns[0].textContent == btns[1].textContent
        && btns[1].textContent==btns[2].textContent
        && btns[2].textContent!="")
        return true
    else if(btns[3].textContent == btns[4].textContent
        && btns[4].textContent==btns[5].textContent
        && btns[5].textContent!="")
        return true
    else if(btns[6].textContent == btns[7].textContent
        && btns[7].textContent==btns[8].textContent
        && btns[8].textContent!="")
        return true
    else if(btns[0].textContent == btns[3].textContent
        && btns[3].textContent==btns[6].textContent
        && btns[6].textContent!="")
        return true
    else if(btns[1].textContent == btns[4].textContent
        && btns[4].textContent==btns[7].textContent
        && btns[7].textContent!="")
        return true
    else if(btns[2].textContent == btns[5].textContent
        && btns[5].textContent==btns[8].textContent
        && btns[8].textContent!="")
        return true
    else if(btns[0].textContent == btns[4].textContent
        && btns[4].textContent==btns[8].textContent
        && btns[8].textContent!="")
        return true
    else if(btns[2].textContent == btns[4].textContent
        && btns[4].textContent==btns[6].textContent
        && btns[6].textContent!="")
        return true
        else if(btnClicked == 9)
            return false
}