function onClick() {
  document.getElementById('onClick').innerHTML = 'Haz dado click exitosamente';
}
function dblClick() {
    document.getElementById('dblClick').innerHTML = 'Haz dado doble click exitosamente';
  }
  function mouseDown() {
    document.getElementById('color').style.background = 'red';
  }
  function mouseUp() {
    document.getElementById('color').style.background = 'blue';
  }
  function onBlur() {
    let x = document.getElementById('campo');
    x.value = x.value.toUpperCase();
  }
  function onFocus() {
    let x = document.getElementById('campo');
    x.value = x.value.toLowerCase();
  }
  function imgGrande(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  function imgNormal(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }
  function cambio() {
    let x = document.getElementById('seleccion').value;
    document.getElementById('seleccionado').innerHTML = 'Has seleccionado: ' + x;
  }
    function seleccion() {
        alert("Felicitaciones me has seleccionado");
    }