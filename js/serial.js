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
function showSerial() {
  hideAllConfigurations();
  document.getElementById("gbSerial").style.display = "block";
}

function hideSerial() {
  document.getElementById("gbSerial").style.display = "none";
}

function initSerial() {

  if(board.functions.Serial.length > 0) {
    var gbSerial = document.createElement("div");
    gbSerial.id = "gbSerial";
    document.getElementById("configurator").appendChild(gbSerial);

    if(board.help.Serial) {
      var gbSerialHelp = document.createElement("div");
      gbSerialHelp.className = "gbPeripherals";
      var head4 = document.createElement("h4");
      var node1 = document.createTextNode("Information");
      head4.appendChild(node1);
      gbSerialHelp.appendChild(head4);
      gbSerial.appendChild(gbSerialHelp);

      var divHell1 = document.createElement("div");
      gbSerialHelp.appendChild(divHell1);

      for(var o = 0; o < board.help.Serial.links.length; o++) {
        addSimpleLink(divHell1,board.help.Serial.links[o].type + ": ","open",board.help.Serial.links[o].url);
      }
    }
    for(var i = 0; i < board.functions.Serial.length; i++) {
      var table0 = document.createElement("table");
      addBasicFuncTemplate(gbSerial,table0,"Serial",i);
      addFunctionPin(table0,"Serial",i,"RX","rx");
      addFunctionPin(table0,"Serial",i,"TX","tx");
      addFunctionPin(table0,"Serial",i,"Baud rate","baudrate");
      addCheckboxFunctionPin(table0,"Serial",i,"TransmitterEnable","transmitter_enable");
      addCheckboxFunctionPin(table0,"Serial",i,"RTS","rts");
      addCheckboxFunctionPin(table0,"Serial",i,"CTS","cts");
    }
  } else {
    console.log("no Serial ports defined");
  }
}
