function filterCards() {
  const input = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(input) ? '' : 'none';
  });
}
function Beranda() {
    window.location.href = "https://github.com/kaelvxy/addon_mcpe/Beranda.html";
  }
  function addon() {
    window.location.href = "https://github.com/kaelvxy/addon_mcpe/Addon-Free.html"
  }
  let menu = document.getElementById("sideMenu");
let btn = document.getElementById("menuBtn");

btn.onclick = function () {
  menu.classList.toggle("show");
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && e.target !== btn) {
    menu.classList.remove("show");
  }
});

function tema() {
  menu.classList.remove("show")
  popup.classList.add("show");
  document.getElementById("popup").class.List.add("show");
}
function yaya() {
  popup.classList.remove("show");
}
function closepopup() {
  const input = document.getElementById("sandi").value;
  const sandi = "12345";
  if (input === sandi) {
  popup.classList.remove("show");
  
  document.getElementById("menuBtn").style.backgroundColor = "#000000";
  document.getElementById("menuBtn").style.color = "#ff000b";
  document.getElementById("menuBtn").style.fontWeight = "bold";
  
  document.getElementById("btn").style.backgroundColor = "#000000";
  document.getElementById("btn").style.color = "#ff000b";
  document.getElementById("btn").style.fontWeight = "700";
  
  document.getElementById("avatar").style.borderColor = "#000000";
  
  document.body.style.backgroundColor = "#000000";
  
  document.getElementById("container").style.backgroundColor = "#ff000b";
  
  document.getElementById("btn1").style.backgroundColor = "#000000";
  document.getElementById("btn1").style.color = "#ff000b";
  document.getElementById("btn1").style.fontWeight = "700";
  
  document.getElementById("btn2").style.backgroundColor = "#000000";
  document.getElementById("btn2").style.color = "#ff000b";
  document.getElementById("btn2").style.fontWeight = "700";
  
  document.getElementById("btn3").style.backgroundColor = "#000000";
  document.getElementById("btn3").style.color = "#ff000b";
  document.getElementById("btn3").style.fontWeight = "700";
  
  document.getElementById("btn4").style.backgroundColor = "#000000";
  document.getElementById("btn4").style.color = "#ff000b";
  document.getElementById("btn4").style.fontWeight = "700";
  
  document.getElementById("btn5").style.backgroundColor = "#000000";
  document.getElementById("btn5").style.color = "#ff000b";
  document.getElementById("btn5").style.fontWeight = "700";
  } else {
    document.getElementById("pws").innerHTML = `Password Salah/Belum Diisi!!`;
    document.getElementById("pws").style.color = "red";
  }
}
