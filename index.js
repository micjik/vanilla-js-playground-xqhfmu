let btnClass = document.querySelector('.button_class')

let classSeclector = document.querySelector('.class')

//add Eventlistener

btnClass.addEventListener('click', function() {
    classSeclector.textContent = "Works"
})

let btnId = document.querySelector('#button_id')

let idSelector = document.querySelector('#id')


btnId.addEventListener('click', function() {
  idSelector.innerText = "My project";
})

let btnSelector = document.getElementsByClassName('button_queryid')[0]

let queryId = document.getElementById('queryid')

btnSelector.addEventListener('click', function() {
  queryId.innerText = "Software Developer"
})




