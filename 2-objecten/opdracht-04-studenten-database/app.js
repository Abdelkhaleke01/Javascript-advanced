const students = [
  {
    id: 1,
    naam: 'Emma van Dijk',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.5,
    actief: true,
  },
  {
    id: 2,
    naam: 'Liam de Boer',
    leeftijd: 19,
    studie: 'Backend Development',
    cijfer: 7.2,
    actief: true,
  },
  {
    id: 3,
    naam: 'Sophie Jansen',
    leeftijd: 21,
    studie: 'Frontend Development',
    cijfer: 9.1,
    actief: false,
  },
  {
    id: 4,
    naam: 'Daan Peters',
    leeftijd: 22,
    studie: 'Fullstack Development',
    cijfer: 6.8,
    actief: true,
  },
  {
    id: 5,
    naam: 'Evi de Wit',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.9,
    actief: true,
  },
];

// 🔧 Helperfunctie om HTML te genereren voor studenten
function genereerHTML(studentenArray) {
  return studentenArray
    .map(
      (student) => `
      <article class="${student.actief ? 'actief' : 'inactief'}">
        <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
        📚 ${student.studie}<br>
        📊 Cijfer: ${student.cijfer} | Status: ${
          student.actief ? '✅ Actief' : '❌ Inactief'
        }
      </article>
    `
    )
    .join('');
}

// 👉 Toon alle studenten
function toonAlleStudenten() {
  const container = document.getElementById('studenten-lijst');
  container.innerHTML = genereerHTML(students);
}

// 👉 Toon alleen actieve studenten
function toonActieveStudenten() {
  const actieveStudenten = students.filter((student) => student.actief);
  const container = document.getElementById('studenten-lijst');
  container.innerHTML = genereerHTML(actieveStudenten);
}

// 👉 Toon alleen topstudenten (cijfer ≥ 8.0)
function toonTopStudenten() {
  const topStudenten = students.filter((student) => student.cijfer >= 8.0);
  const container = document.getElementById('studenten-lijst');
  container.innerHTML = genereerHTML(topStudenten);
}

// 🚀 Start de applicatie bij laden
document.addEventListener('DOMContentLoaded', () => {
  toonAlleStudenten();
});


