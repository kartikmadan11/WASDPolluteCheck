document.querySelector('form').addEventListener('submit', loadData);

function compensationRevenue(smokePPM, irSensor, noisePollution, phSensor)  {
  var amount = 0;
  amount += (smokePPM/50)*100000;
  amount += (irSensor/10)*25000;
  amount += (noisePollution===true ? 50000:0);
  amount += Math.abs(phSensor-14)*40000;
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://wasdpollutecheck.firebaseio.com/.json', true);
  xhr.onload = function() {
    if(this.status === 200)  {
      var myObj = JSON.parse(this.responseText);
      
      var smokePPM = myObj.factories['factoryID101'].smokePPM
      var irSensor = myObj.factories.factoryID101.irSensor
      var noisePollution = myObj.factories.factoryID101.noisePollution === 1? true : false
      var phSensor = myObj.factories.factoryID101.phSensor;
      
      var factoryName = myObj.factories.factoryID101.factoryName;
      var factoryEstablished = myObj.factories.factoryID101.factoryEstablished;

      var txt = `
      <ul>
        <li>Factory Name: ${factoryName}</li>
        <li>Year Established : ${myObj.factories.factoryID101.factoryEstablished}(${new Date().getFullYear() - factoryEstablished} years ago)</li>
        <li>Sensor Readings:
          <ul>
            <li>Smoke PPM: ${smokePPM}</li>
            <li>IR Sensor: ${irSensor}</li>
            <li>Noise Pollution: ${noisePollution}</li>
            <li>PH Sensor: ${phSensor}</li>
            </ul>
        </li>
        <li>Compensation and Damages Owed: ₹${compensationRevenue(smokePPM, irSensor, noisePollution, phSensor)}</li>
        </ul>
      `
      document.getElementById("output").innerHTML = txt;
    }
  }
  xhr.send();  
}