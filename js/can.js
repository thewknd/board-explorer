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
function showCAN() {
  hideAllConfigurations();
  document.getElementById("gbCAN").style.display = "block";
}

function hideCAN() {
  document.getElementById("gbCAN").style.display = "none";
}

function initCAN() {
  if(board.functions.CAN.length > 0) {
    var gbCAN = document.createElement("div");
    gbCAN.id = "gbCAN";
    document.getElementById("configurator").appendChild(gbCAN);
    for(var i = 0; i < board.functions.CAN.length;i++) {
      var table0 = document.createElement("table");
      addBasicFuncTemplate(gbCAN,table0,"CAN",i);
      addFunctionPin(table0,"CAN",i,"RX","rx");
      addFunctionPin(table0,"CAN",i,"TX","tx");
    }
  } else {
    console.log("no CAN ports defined");
  }
}
