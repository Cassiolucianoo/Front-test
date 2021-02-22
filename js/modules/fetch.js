let persons;
let allPeopleCards;

fetch('../data/dados.json')
.then(function(response){
  response.json().then(function(data){

    persons = data;

    for (let person of persons) { buildCard(person); }
    allPeopleCards = document.querySelectorAll('.main-user');

    selectUser(1);
    selectCard(1);

    for (let card of allPeopleCards) {
      card.addEventListener("click", function(event) {
        event.stopPropagation();
        selectCard(this.getAttribute('data-id'));
        selectUser(this.getAttribute('data-id'));
      });
    }

  });
})
.catch(function(err){ console.error('erro json- ', err); });



