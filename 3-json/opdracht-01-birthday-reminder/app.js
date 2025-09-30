let output = document.querySelector('.output')


fetch('./birthday.json')
.then((response) =>  response.json())
.then((birthdays) =>  {

for(let birthday of birthdays) {
    output.innerHTML +=`
        <h2> ${birthday.naam}</h2>
        <p>${birthday.leeftijd}</p>
        <img src=${birthday.afbeelding}>
    `

}
})