

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://wasdpollutecheck.firebaseio.com/.json', true);
  xhr.onload = function() {
    if(this.status === 200)  {
      var myObj = JSON.parse(this.responseText);
      var txt = `
      <ul>
        <li>Factory Name: ${myObj.factories.factoryID100.factoryName}</li>
        <li>Year Established : ${myObj.factories.factoryID100.factoryEstablished}(${new Date().getFullYear() - myObj.factories.factoryID100.factoryEstablished} years ago)</li>
        <li>Smoke PPM: ${myObj.factories.factoryID100.smokePPM}</li>
        <>
        <> 
      </ul>
      `
      document.getElementById("output").innerHTML = txt;
    }
  }
  xhr.send();  
}