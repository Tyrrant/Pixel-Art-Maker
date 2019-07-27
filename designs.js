// Select color input
var color = "#000000";
document.getElementById("colorPicker").addEventListener("change", function(setColor) {
  setColor.preventDefault();
  color = document.getElementById("colorPicker").value;
});

// Select size input
document.getElementById("sizePicker").addEventListener("submit", function(setSize) {
  setSize.preventDefault();
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  table = document.getElementById("pixelCanvas");
  table.innerHTML = "";
  makeGrid(height, width);
});

// Sets the listener function that will be run for each individual cell
function addListener (cellId) {
  document.getElementById(cellId).addEventListener("click", function(setListener) {
    setListener.preventDefault();
    currentCell = document.getElementById(cellId);
    currentCell.style.backgroundColor = color;
  });
};

// Creates the table/grid once submit button is clicked
function makeGrid(height, width) {
  var table = document.getElementById('pixelCanvas');
  for (ih = 0; ih < height; ih++) {
    row = table.insertRow(ih);
    row.id = "r" + ih;
    for (iw = 0; iw < width; iw++) {
      column = row.insertCell(iw);
      var cellId = "r" + ih + "c" + iw;
      column.id = cellId;
      addListener (cellId);
    };
  };
};
