const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".facility__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".facility__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".mentor__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__content h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 500,
});

  document.getElementById("plans").addEventListener("click", function (e) {
    e.preventDefault(); // evita comportamento padrão do link
    const secaoPlanos = document.getElementById("plans");
    if (secaoPlanos) {
      secaoPlanos.scrollIntoView({
        behavior: "smooth"
      });
    }
  });

  
  document.getElementById("facility__content").addEventListener("click", function (e) {
    e.preventDefault(); // evita comportamento padrão do link
    const secaoPlanos = document.getElementById("facility__content");
    if (secaoPlanos) {
      secaoPlanos.scrollIntoView({
        behavior: "smooth"
      });
    }
  });

const diasSemana = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado"
];

const hoje = new Date();
const diaAtual = diasSemana[hoje.getDay()];

document.querySelectorAll('.horarios__lista li').forEach(item => {
  if (item.dataset.day === diaAtual) {
    item.classList.add('active');
  }
});

function verificarStatus() {
  const agora = new Date();
  const hora = agora.getHours();

  const aberto = hora >= 5 && hora < 22;
  const status = document.getElementById("status-academia");

  if (aberto) {
    status.textContent = "Estamos abertos agora!";
    status.classList.add("aberto");
    status.classList.remove("fechado");
  } else {
    status.textContent = "Estamos fechados no momento.";
    status.classList.add("fechado");
    status.classList.remove("aberto");
  }
}

verificarStatus();

// JS para animar contador
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  counter.innerText = "0";
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

function abrirWhatsapp() {
    const numero = "5511945483849"; // DDI + DDD + número
    const mensagem = "Olá! Tenho interesse em fazer a Matricula.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  function explorarMais() {
    // Altere a URL abaixo para onde deseja redirecionar
    window.location.href = '#plans';
  }