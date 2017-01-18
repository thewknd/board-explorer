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
function showPinsPWM() {
  hideAllConfigurations();
  document.getElementById("gbPinsPWM").style.display = "block";
}

function hidePinsPWM() {
  document.getElementById("gbPinsPWM").style.display = "none";
}

function initPinsPWM() {
  var groupBox1 = document.createElement("div");
  groupBox1.id = "gbPinsPWM";
  document.getElementById("configurator").appendChild(groupBox1);

  if(board.help.pwm) {
    var groupBox = document.createElement("div");
    groupBox.className = "gbPeripherals";
    var head4 = document.createElement("h4");
    var node1 = document.createTextNode("Information");
    head4.appendChild(node1);
    groupBox.appendChild(head4);
    groupBox1.appendChild(groupBox);

    var divHell1 = document.createElement("div");
    groupBox.appendChild(divHell1);

    for(var o = 0; o < board.help.pwm.links.length; o++) {
      addSimpleLink(divHell1,board.help.pwm.links[o].type + ": ","open",board.help.pwm.links[o].url);
    }
  }

  var groupBox = document.createElement("div");
  groupBox.className = "gbPeripherals";
  groupBox1.appendChild(groupBox);

  var head4 = document.createElement("h4");
  head4.appendChild(document.createTextNode("PWM settings"));
  groupBox.appendChild(head4);

  var divHell1 = document.createElement("div");
  groupBox.appendChild(divHell1);

  var tblPins = document.createElement("table");
  divHell1.appendChild(tblPins);

  addCheckboxWithComboBox(tblPins,"pwm","resolution","Set PWM resolution (bit)");

  for(var o = 0; o < board.functions.pwm.timer_names.length; o++) {
    var pins = "";
    for(var q = 0; q < board.functions.pwm[board.functions.pwm.timer_names[o]].pins.length;q++) {
      pins = pins + board.functions.pwm[board.functions.pwm.timer_names[o]].pins[q] + ",";
    }
    // remove last char from pins (',');
    pins = pins.slice(0, -1);

    addCheckboxWithEdit(tblPins,"pwm",board.functions.pwm.timer_names[o], "<b>Set PWM frequency (Hz):</b><br/>Pins:" + pins + "<br/>Timer: " + board.functions.pwm.timer_names[o],board.functions.pwm[board.functions.pwm.timer_names[o]]["frequency-default"]);
  }

  var groupBox = document.createElement("div");
  groupBox.className = "gbPeripherals";
  groupBox1.appendChild(groupBox);

  var head4 = document.createElement("h4");
  head4.appendChild(document.createTextNode("PWM pins"));
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

  for(var o = 0; o < board.functions.pwm.pins.length; o++) {
    addCheckboxWithEdit(tblPins,"pwm",board.functions.pwm.pins[o],board.functions.pwm.pins[o],"",board.functions.pwm.pins[o]);
  }
}
