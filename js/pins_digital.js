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
function showPinsDigital() {
  hideAllConfigurations();
  document.getElementById("gbPinsDigital").style.display = "block";
}

function hidePinsDigital() {
  document.getElementById("gbPinsDigital").style.display = "none";
}

function initPinsDigital() {
  var groupBox1 = document.createElement("div");
  groupBox1.id = "gbPinsDigital";
  document.getElementById("configurator").appendChild(groupBox1);

  if(board.help.pinsdigital) {
    var groupBox = document.createElement("div");
    groupBox.className = "gbPeripherals";
    var head4 = document.createElement("h4");
    var node1 = document.createTextNode("Information");
    head4.appendChild(node1);
    groupBox.appendChild(head4);
    groupBox1.appendChild(groupBox);

    var divHell1 = document.createElement("div");
    groupBox.appendChild(divHell1);

    for(var o = 0; o < board.help.pinsdigital.links.length; o++) {
      addSimpleLink(divHell1,board.help.pinsdigital.links[o].type + ": ","open",board.help.pinsdigital.links[o].url);
    }
  }

  var groupBox = document.createElement("div");
  groupBox.className = "gbPeripherals";
  groupBox1.appendChild(groupBox);

  var head4 = document.createElement("h4");
  head4.appendChild(document.createTextNode("Digital pins"));
  groupBox.appendChild(head4);

  var divHell1 = document.createElement("div");
  groupBox.appendChild(divHell1);

  var tblPins = document.createElement("table");
  divHell1.appendChild(tblPins);

  var cell;
  var row;
  var lblPin;
  var cbxEnable;
  var node;
  var pinModes = ["OUTPUT","OUTPUT_OPENDRAIN","INPUT","INPUT_PULLUP","INPUT_PULLDOWN"];

  row = document.createElement("tr");
  tblPins.appendChild(row);
  cell = document.createElement("td");
  cell.appendChild(document.createTextNode("Pin"));
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.appendChild(document.createTextNode("Pin mode"));
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.appendChild(document.createTextNode("Pin name"));
  row.appendChild(cell);


  for(var p = 0; p < board.pins.length; p++) {
    if(board.pins[p].is_digital > 0) {
      row = document.createElement("tr");
      tblPins.appendChild(row);
      cell = document.createElement("td");
      //cell.digitalPin = board.pins[p].pin_arduino_digital;
      cell.pinhighlight = board.pins[p].pin_id;
      row.appendChild(cell);
      lblPin = document.createElement("label");
      //lblPin.digitalPin = board.pins[p].pin_arduino_digital;
      lblPin.pinhighlight = board.pins[p].pin_id;
      cbxEnable = document.createElement("input");
      //cbxEnable.digitalPin = board.pins[p].pin_id;
      cbxEnable.pinhighlight = board.pins[p].pin_id;
      cbxEnable.type = "checkbox";
      cbxEnable.className ="cbxNormal";
      cbxEnable.id = "cbxEnableDigitalPin" + board.pins[p].pin_id;
      lblPin.appendChild(cbxEnable);
      node = document.createTextNode(board.pins[p].pin_arduino_digital);
      lblPin.appendChild(node);
      cell.appendChild(lblPin);

      cell = document.createElement("td");
      row.appendChild(cell);
      var cbPinMode = document.createElement("select");
      cbPinMode.style.width = "180px";
      cbPinMode.digitalPin = board.pins[p].pin_id;
      cbPinMode.pinhighlight = board.pins[p].pin_id;
      cbPinMode.id = "cbDigitalPin" + board.pins[p].pin_id;
      /*cbPins.fnum = f_num;
      cbPins.fname = f_type;
      cbPins.fpin = tag_pin_type;*/
      for(var o = 0; o < pinModes.length; o++) {
        var opt = document.createElement('option');
        opt.innerHTML = pinModes[o];
        opt.value = pinModes[o];
        cbPinMode.appendChild(opt);
      }
      cell.appendChild(cbPinMode);

      cell = document.createElement("td");
      row.appendChild(cell);
      var iPinName = document.createElement("input");
      //iPinName.digitalPin = board.pins[p].pin_arduino_digital;
      iPinName.pinhighlight = board.pins[p].pin_id;
      iPinName.id = "iDigitalPin" + board.pins[p].pin_id;
      iPinName.style.width= "150px";
      cell.appendChild(iPinName);
    }
  }
}
