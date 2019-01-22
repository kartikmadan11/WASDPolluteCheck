document.querySelector('form').addEventListener('submit', saveData);

function saveData(e){
  const factoryName = document.getElementById('factory-name').value;
  const factoryEstablished = document.getElementById('factory-established').value;
  const isFactoryLarge = document.getElementById('is-factory-large').value;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://wasdpollutecheck.firebaseio.com/.json', true);
  xhr.onload = function() {
    
  }

  xhr.send();
}