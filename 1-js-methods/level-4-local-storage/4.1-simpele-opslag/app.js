// Opdracht 4.1: Simpele Opslag
console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
    // TODO: Haal naam uit input veld
    const naam = document.getElementById('naam-input').value;

    // TODO: Sla naam op in localStorage
  localStorage.setItem('mijnnaam', naam);
    
    // TODO: Toon welkomstbericht
    toonWelkom();
    
    // Maak input leeg
    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
    // TODO: Haal naam op uit localStorage
    const opgeslagenNaam = localStorage.getItem("mijnnaam")
    
    const welkomElement = document.getElementById('welkom-bericht');
    
    // TODO: Toon juiste bericht
   
        welkomElement.textContent =opgeslagenNaam

}

// function wisNaam() {
//     // TODO: Verwijder naam uit localStorage
//     /* jouw code hier */;
    
//     toonWelkom();
// }

// // TODO: Roep toonWelkom() aan bij pagina laden
// /* jouw code hier */;