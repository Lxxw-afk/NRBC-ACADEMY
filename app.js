let caseIndex = 0;
let current = 0;
let score = 0;

/* ---------------- NAV ---------------- */
function openTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* ---------------- CAS CONCRETS ---------------- */

const cases = [
  {
    text: "☣️ Odeur chimique + victimes malaises dans un entrepôt. Que faites-vous ?",
    choices: [
      { text: "Entrer sans protection", correct: false },
      { text: "Isoler la zone + alerter", correct: true },
      { text: "Attendre sans agir", correct: false }
    ],
    explanation: "Priorité NRBC : sécuriser avant intervention."
  },
  {
    text: "🧬 Plusieurs cas de fièvre soudaine dans une école.",
    choices: [
      { text: "Isoler et tracer les contacts", correct: true },
      { text: "Ignorer", correct: false },
      { text: "Fermer sans alerte", correct: false }
    ],
    explanation: "Le biologique nécessite confinement + traçabilité."
  },
  {
    text: "☢️ Objet suspect après incident industriel.",
    choices: [
      { text: "Approcher", correct: false },
      { text: "Établir périmètre de sécurité", correct: true },
      { text: "Déplacer l’objet", correct: false }
    ],
    explanation: "Radiologique = distance = sécurité."
  }
];

function startCase() {
  caseIndex = 0;
  showCase();
}

function showCase() {
  let c = cases[caseIndex];

  document.getElementById("caseText").innerText = c.text;

  let box = document.getElementById("caseChoices");
  box.innerHTML = "";

  document.getElementById("caseFeedback").innerText = "";

  c.choices.forEach(ch => {
    let btn = document.createElement("button");
    btn.innerText = ch.text;
    btn.onclick = () => {
      document.getElementById("caseFeedback").innerText =
        ch.correct ? "✔️ Bonne décision" : "❌ Mauvaise décision";
    };
    box.appendChild(btn);
  });
}

function nextCase() {
  caseIndex++;
  if (caseIndex >= cases.length) {
    document.getElementById("caseText").innerText = "🏁 Fin des exercices";
    document.getElementById("caseChoices").innerHTML = "";
  } else {
    showCase();
  }
}

/* ---------------- QUIZ FINAL ---------------- */

const questions = [
  {
    q: "Le NRBC biologique est toujours visible ?",
    a: [
      { t: "Vrai", c: false },
      { t: "Faux", c: true }
    ],
    e: "Les agents biologiques sont invisibles."
  },
  {
    q: "Le chimique peut être gazeux ?",
    a: [
      { t: "Vrai", c: true },
      { t: "Faux", c: false }
    ],
    e: "Les agents chimiques peuvent être gaz ou liquides."
  }
];

function startQuiz() {
  score = 0;
  current = 0;
  showQ();
}

function showQ() {
  let q = questions[current];

  document.getElementById("question").innerText = q.q;

  let box = document.getElementById("answers");
  box.innerHTML = "";

  document.getElementById("explanation").innerText = "";

  q.a.forEach(ans => {
    let btn = document.createElement("button");
    btn.innerText = ans.t;
    btn.onclick = () => {
      if (ans.c) score += 10;
      else score -= 5;

      document.getElementById("explanation").innerText = q.e;
    };
    box.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    document.getElementById("finalScore").innerText =
      "Score final : " + score;
  } else {
    showQ();
  }
}
