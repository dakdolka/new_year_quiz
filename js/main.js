if(JSON.parse(localStorage.getItem("ppls"))){
  ppls=JSON.parse(localStorage.getItem("ppls"));
  btn_colors=JSON.parse(localStorage.getItem("btn_colors"));
}
else{
  ppls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  btn_colors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function super_game(value) {
  document.getElementById(value).classList.toggle('close-super')
}

function counter(elem, flag){
  let ppl_id = parseInt(elem.id, 10); 
  if (flag){
    ppls[ppl_id] = ppls[ppl_id] + 1;
  }
  else{
    let group = prompt("Номер команды победителя");
    btn_colors[ppl_id] = group;
    ppls[ppl_id] = -1;
  }
  localStorage.setItem("ppls", JSON.stringify(ppls));
  localStorage.setItem("btn_colors", JSON.stringify(btn_colors));
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
  const btns_text = document.querySelectorAll('.btns-text');
  let colors = ['none', 'rgb(255, 100, 100)', 'rgb(100, 255, 100)', 'rgb(100, 100, 255)'];
  for (let i = 0; i < btns_text.length; i++) {
    if (ppls[i] >= 0){
      btns_text[i].textContent = 300 - ((ppls[i] % 3) * 100);}
    else{
      btns_text[i].textContent = 'Закрыто';
    }
  }

  const btns = document.getElementsByClassName('main-btn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = colors[btn_colors[i]];
  }
}
  
function clear_locals() {
  ppls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  btn_colors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  localStorage.setItem("btn_colors", JSON.stringify(btn_colors));
  localStorage.setItem("ppls", JSON.stringify(ppls));
  location.reload()
}

document.addEventListener('DOMContentLoaded', () =>{
  if (!(window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] == 'main.html')) {
    hideElements();
  }
  else{
    balls();
  }
});