/* =====================================================================
   PETIT SCRIPT DU PORTFOLIO
   Il fait deux choses :
   1. ouvrir / fermer le menu sur téléphone
   2. mettre en couleur le lien du menu qui correspond à la section visible
   Tu n'as normalement rien à modifier ici.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var bouton = document.getElementById("menu-bouton");
  var liens = document.querySelectorAll(".menu a[href^='#']");

  // 1. Menu sur téléphone
  function fermerMenu() {
    menu.classList.remove("ouvert");
    bouton.setAttribute("aria-expanded", "false");
    bouton.textContent = "Menu";
  }

  bouton.addEventListener("click", function () {
    var ouvert = menu.classList.toggle("ouvert");
    bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
    bouton.textContent = ouvert ? "Fermer" : "Menu";
  });

  liens.forEach(function (lien) {
    lien.addEventListener("click", fermerMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { fermerMenu(); }
  });

  // 2. Lien actif selon la section visible
  var sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window) {
    var observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
          liens.forEach(function (lien) {
            lien.classList.toggle("actif", lien.getAttribute("href") === "#" + entree.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(function (section) { observateur.observe(section); });
  }
});

/* 3. Formulaire de contact : ouvre la messagerie du visiteur avec le message prêt */
document.addEventListener("DOMContentLoaded", function () {
  var f = document.getElementById("formulaire");
  if (!f) { return; }
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var sujet = document.getElementById("f-sujet").value;
    var corps = document.getElementById("f-message").value + "\n\n" + document.getElementById("f-nom").value;
    window.location.href = "mailto:" + f.getAttribute("data-mail") +
      "?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(corps);
  });
});
