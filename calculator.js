let calculation = ' ';
function updateCalculation(value){
  calculation = calculation + value;
  console.log(calculation);
}
function saveCalculation(){
  localStorage.setItem('calculation',calculation);
}