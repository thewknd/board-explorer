/*
MIT License

Copyright (c) 2017

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
function showPinsAnalog() {
  hideAllConfigurations();
  document.getElementById("gbPinsAnalog").style.display = "block";
}

function hidePinsAnalog() {
  document.getElementById("gbPinsAnalog").style.display = "none";
}

function initPinsAnalog() {
  var groupBox1 = document.createElement("div");
  groupBox1.id = "gbPinsAnalog";
  document.getElementById("configurator").appendChild(groupBox1);

  if(board.help.analog) {
    var groupBox = document.createElement("div");
    groupBox.className = "gbPeripherals";
    var head4 = document.createElement("h4");
    var node1 = document.createTextNode("Information");
    head4.appendChild(node1);
    groupBox.appendChild(head4);
    groupBox1.appendChild(groupBox);

    var divHell1 = document.createElement("div");
    groupBox.appendChild(divHell1);

    for(var o = 0; o < board.help.analog.links.length; o++) {
      addSimpleLink(divHell1,board.help.analog.links[o].type + ": ","open",board.help.analog.links[o].url);
    }
  }

  var groupBox = document.createElement("div");
  groupBox.className = "gbPeripherals";
  groupBox1.appendChild(groupBox);

  var head4 = document.createElement("h4");
  head4.appendChild(document.createTextNode("Analog settings"));
  groupBox.appendChild(head4);

  var divHell1 = document.createElement("div");
  groupBox.appendChild(divHell1);

  var tblPins = document.createElement("table");
  divHell1.appendChild(tblPins);

  addCheckboxWithComboBox(tblPins,"analog","reference","Set analog reference:");
  addCheckboxWithComboBox(tblPins,"analog","read_resolution","Set read resolution (bit):");
  addCheckboxWithComboBox(tblPins,"analog","read_averagin","Set read averagin (samples):");

  row = document.createElement("tr");
  tblPins.appendChild(row);
  cell = document.createElement("td");
  cell.appendChild(document.createTextNode("For analog write resolution see PWM resolution"));
  cell.setAttribute("colspan","2");
  row.appendChild(cell);

  var groupBox = document.createElement("div");
  groupBox.className = "gbPeripherals";
  groupBox1.appendChild(groupBox);

  var head4 = document.createElement("h4");
  head4.appendChild(document.createTextNode("Output (Digital to analog)"));
  groupBox.appendChild(head4);

  var divHell1 = document.createElement("div");
  groupBox.appendChild(divHell1);

  var tblPins = document.createElement("table");
  divHell1.appendChild(tblPins);

  var groupBox = document.createElement("div");
  groupBox.className = "gbPeripherals";
  groupBox1.appendChild(groupBox);

  row = document.createElement("tr");
  tblPins.appendChild(row);
  cell = document.createElement("td");
  cell.appendChild(document.createTextNode("Pin"));
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.appendChild(document.createTextNode("Pin name"));
  row.appendChild(cell);

  for(var o = 0; o < board.functions.analog.dac.pins.length; o++) {
    addCheckboxWithEdit(tblPins,"analogdac",board.functions.analog.dac.pins[o].pin_id,board.functions.analog.dac.pins[o].pin_name + " / " + board.functions.analog.dac.pins[o].alt_name,"",board.functions.analog.dac.pins[o].pin_id);
  }

  var head4 = document.createElement("h4");
  head4.appendChild(document.createTextNode("Input (Ananlog to digital)"));
  groupBox.appendChild(head4);

  var divHell1 = document.createElement("div");
  groupBox.appendChild(divHell1);

  var tblPins = document.createElement("table");
  divHell1.appendChild(tblPins);

  row = document.createElement("tr");
  tblPins.appendChild(row);
  cell = document.createElement("td");
  cell.appendChild(document.createTextNode("Pin"));
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.appendChild(document.createTextNode("Pin name"));
  row.appendChild(cell);

  for(var o = 0; o < board.pins.length; o++) {
    if(board.pins[o].is_analog === 1) {
      if(board.pins[o].is_digital === 1) {
        addCheckboxWithEdit(tblPins,"analogadc",board.pins[o].pin_id,board.pins[o].pin_arduino_analog + " (" + board.pins[o].pin_arduino_digital + ")","",board.pins[o].pin_id);
      } else {
        addCheckboxWithEdit(tblPins,"analogadc",board.pins[o].pin_id,board.pins[o].pin_arduino_analog,"",board.pins[o].pin_id);
      }
    }
  }
}
