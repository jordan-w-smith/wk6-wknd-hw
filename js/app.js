document.addEventListener('DOMContentLoaded', () => {
  console.log("javascript loaded");

  const handleSubmitForm = function (event) {
    event.preventDefault();
    const name = event.target.name.value
    const colour = event.target.colour.value
    const age = event.target.age.value

    const list = document.createElement('ul')

    const targetResultContainer = document.querySelector('#entries')
    targetResultContainer.appendChild(list)

    const listItemName = document.createElement('li')
    list.appendChild(listItemName)

    const listItemColour = document.createElement('li')
    list.appendChild(listItemColour)

    const listItemAge = document.createElement('li')
    list.appendChild(listItemAge)


    listItemName.textContent = 'Name: ' + name
    listItemColour.textContent = 'Colour: ' + colour
    listItemAge.textContent = 'Age: ' + age

    submitForm.reset();

  }

  const handleDeleteAll = function (event) {
    const targetResultContainer = document.querySelector('#entries')
    targetResultContainer.innerHTML = ''
  }

  const submitForm = document.querySelector('form')
  submitForm.addEventListener('submit', handleSubmitForm)

  const deleteAll = document.querySelector('button')
  deleteAll.addEventListener('click', handleDeleteAll)

});
