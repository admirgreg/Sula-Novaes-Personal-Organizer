/* Sula Novaes | antes e depois (dados dos projetos no array 'cases') */
var COLORS = ["#9E7D5E", "#E3D5C5", "#7A5C41", "#CBB59C", "#EFE9E4"];
var seed = 7;
function rnd() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}
var cases = [
  ["Closet", "Roupas separadas por tipo e cor, com espaço para respirar."],
  ["Cozinha", "Despensa com potes padronizados e itens à vista."],
  ["Home office", "Mesa livre e papéis em um sistema de três pastas."],
];
var host = document.getElementById("cases");
cases.forEach(function (c, k) {
  var d = document.createElement("article");
  d.className = "case";
  var pair = document.createElement("div");
  pair.className = "pair";
  ["Antes", "Depois"].forEach(function (lbl, j) {
    var f = document.createElement("figure"),
      m = document.createElement("div");
    m.className = "mini";
    for (var i = 0; i < 12; i++) {
      var b = document.createElement("i");
      b.style.background = COLORS[(i + k) % 5];
      if (j === 0) {
        b.style.height = (14 + rnd() * 22).toFixed(0) + "px";
        b.style.transform =
          "rotate(" +
          ((rnd() - 0.5) * 40).toFixed(0) +
          "deg) translate(" +
          ((rnd() - 0.5) * 8).toFixed(0) +
          "px," +
          ((rnd() - 0.5) * 8).toFixed(0) +
          "px)";
      } else {
        b.style.height = "22px";
      }
      m.appendChild(b);
    }
    var cap = document.createElement("figcaption");
    cap.textContent = lbl;
    f.appendChild(m);
    f.appendChild(cap);
    pair.appendChild(f);
  });
  d.appendChild(pair);
  var h = document.createElement("h3");
  h.textContent = c[0];
  var p = document.createElement("p");
  p.textContent = c[1];
  d.appendChild(h);
  d.appendChild(p);
  host.appendChild(d);
});

/* Carrossel de depoimentos: avanço automático */
var fbTrack = document.getElementById("feedbacks");
var fbTimer = null;

function nextFeedback() {
  var slide = fbTrack.querySelector(".slide");
  if (!slide) return;
  var step = slide.getBoundingClientRect().width + 16;
  var chegouNoFim =
    fbTrack.scrollLeft + fbTrack.clientWidth >= fbTrack.scrollWidth - 4;
  if (chegouNoFim) {
    fbTrack.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    fbTrack.scrollBy({ left: step, behavior: "smooth" });
  }
}
function stopFeedbacks() {
  clearInterval(fbTimer);
}
function startFeedbacks() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  stopFeedbacks();
  fbTimer = setInterval(nextFeedback, 3500);
}

/* Pausa quando a pessoa encosta ou passa o mouse, e volta ao sair */
["mouseenter", "touchstart", "focusin"].forEach(function (e) {
  fbTrack.addEventListener(e, stopFeedbacks, { passive: true });
});
["mouseleave", "touchend", "focusout"].forEach(function (e) {
  fbTrack.addEventListener(e, startFeedbacks, { passive: true });
});

startFeedbacks();

/* Formulário de orçamento: monta a mensagem e abre o WhatsApp */
var WHATS = "5515997500019";
document.getElementById("quote-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var nome = document.getElementById("q-nome").value.trim();
  var ambiente = document.getElementById("q-ambiente").value;
  var cidade = document.getElementById("q-cidade").value.trim();
  var msg =
    "Olá, Sula! Meu nome é " +
    nome +
    ". Quero organizar: " +
    ambiente +
    ". Moro em " +
    cidade +
    ". Pode me passar um orçamento?";
  window.open(
    "https://wa.me/" + WHATS + "?text=" + encodeURIComponent(msg),
    "_blank",
    "noopener",
  );
});
