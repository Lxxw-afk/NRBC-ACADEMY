document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[data-transition="true"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (!href || href.startsWith("#") || this.target === "_blank") {
        return;
      }

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 200);
    });
  });
});

function unlockExpectations(caseId) {
  const input = document.getElementById(`code-${caseId}`);
  const box = document.getElementById(`expectations-${caseId}`);
  const message = document.getElementById(`message-${caseId}`);

  const correctCode = "NRBC2026";

  if (!input || !box || !message) return;

  if (input.value === correctCode) {
    box.classList.add("visible");
    message.textContent = "Accès autorisé.";
    message.style.color = "lightgreen";
  } else {
    box.classList.remove("visible");
    message.textContent = "Code incorrect.";
    message.style.color = "#ff7b7b";
  }
}
