if(JSON.parse(localStorage.getItem("ppls"))){
  ppls=JSON.parse(localStorage.getItem("ppls"));
}
else{
  ppls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function super_game(value) {
  document.getElementById(value).classList.toggle('close-super')
}

function counter(elem, flag){
    var ppl_id = parseInt(elem.id, 10); 
    if (flag){
      ppls[ppl_id] = ppls[ppl_id] + 1;
    }
    else{
      ppls[ppl_id] = -1;
    }
    localStorage.setItem("ppls", JSON.stringify(ppls));
}

// функция, которая будет запускаться при загрузке страницы
function hideElements() {
    var elements = document.getElementsByClassName('info');
    var max_id = ppls[parseInt(document.body.id, 10)] % 3;
    for (let i = 0; i < elements.length; i++) {
        if (i > max_id) {
          elements[i].style.display="none";
        }
      }
  }


function balls(){
  console.log(ppls);
    const btns = document.querySelectorAll('.btns-text');
    for (let i = 0; i < btns.length; i++) {
      if (ppls[i] >= 0){
        btns[i].textContent = 300 - ((ppls[i] % 3) * 100);}
      else{
        btns[i].textContent = 'Победа!';
      }

    }
  }
  
function clear_locals() {
  ppls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  localStorage.setItem("ppls", JSON.stringify(ppls));
  location.reload()
}

document.addEventListener('DOMContentLoaded', () =>{
  if (!(window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] == 'main.html')) {
    hideElements();
  }
  else{
    balls(true);
  }
});