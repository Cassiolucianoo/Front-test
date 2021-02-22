function buildCard(person) {
  let personCard = `
    <div class="main-user" data-id="` + person.id + `">
      <div class="user_photo">
        <img src="img/users/` + person.foto + `" alt="Avatar de ` + person.nome + `" class="user-img ">
        <div class="user_photo_id">
          <span class="user_id_number">` + person.id + `</span>
        </div>
      </div>
      <div class="userinfo">
        <span class="user-field-name">` + person.nome + `</span>
        <span class="user-field-role">` + person.cargo + `</span>
      </div>
    </div>
  `;

  document.getElementById('mainUsers').innerHTML += personCard;
}

function selectUser(id) {
  for (let person of persons) {
    if (person.id == id) {
      document.getElementById('selectPhoto').setAttribute('src', 'img/users/' + person.foto)
      document.getElementById('NameData').innerText = person.nome;
      document.getElementById('RoleData').innerText = person.cargo;
      document.getElementById('AgeData').innerText = person.idade;
    }
  }
}

function selectCard(id) {
  for (let card of allPeopleCards) {
    card.classList.remove('select-users');
    if (card.dataset.id == id) {
      card.classList.add('select-users');
    }
  }
}