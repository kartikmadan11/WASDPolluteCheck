output = document.getElementById("output");

registerForm = document.getElementById('get-report-form')
if(registerForm != null)
  registerForm.addEventListener('submit', loadData);

function compensationRevenue(smokePPM, irSensor, noisePollution, phSensor)  {
  var amount = 0;
  amount += (smokePPM/50)*100000;
  amount += (irSensor/10)*25000;
  amount += (noisePollution===true ? 50000:0);
  amount += Math.abs(phSensor-14)*40000;
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loadData(e) {
  const factoryID = document.getElementById('factory-id').value;
  const factoryIDString = 'factoryID' + factoryID; 

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://wasdpollutecheck.firebaseio.com/.json', true);
  xhr.onload = function() {
    var myObj = JSON.parse(this.responseText);
    console.log(myObj);
    if(this.status === 200)  {
      
      var smokePPM = myObj.factories[factoryIDString].smokePPM
      var irSensor = myObj.factories[factoryIDString].irSensor
      var noisePollution = myObj.factories[factoryIDString].noisePollution === 1? true : false
      var phSensor = myObj.factories[factoryIDString].phSensor;
      
      var factoryName = myObj.factories[factoryIDString].factoryName;
      var factoryEstablished = myObj.factories[factoryIDString].factoryEstablished;

      var txt = `
      <ul>
        <li>Factory Name: ${factoryName}</li>
        <li>Year Established : ${myObj.factories[factoryIDString].factoryEstablished}(${new Date().getFullYear() - factoryEstablished} years ago)</li>
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
      output.innerHTML = txt;
    } else  {
      output.innerHTML = `<p>Enter valid ID!!</p>`;
    }
  } 
  xhr.send();
  e.preventDefault();  
}