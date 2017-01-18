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
function showI2S() {
  hideAllConfigurations();
  document.getElementById("gbI2S").style.display = "block";
}

function hideI2S() {
  document.getElementById("gbI2S").style.display = "none";
}

function initI2S() {
  if(board.functions.I2S.length > 0) {
    var gbI2S = document.createElement("div");
    gbI2S.id = "gbI2S";
    document.getElementById("configurator").appendChild(gbI2S);
    for(var i = 0; i < board.functions.I2S.length;i++) {
      var table0 = document.createElement("table");
      addBasicFuncTemplate(gbI2S,table0,"I2S",i);
      addCheckboxFunctionPin(table0,"I2S",i,"RXD0","rxd0");
      addCheckboxFunctionPin(table0,"I2S",i,"RXD1","rxd1");
      addCheckboxFunctionPin(table0,"I2S",i,"TXD0","txd0");
      addCheckboxFunctionPin(table0,"I2S",i,"TXD1","txd1");
      addCheckboxFunctionPin(table0,"I2S",i,"RX BCLK","rx_bclk");
      addCheckboxFunctionPin(table0,"I2S",i,"TX BCLK","tx_bclk");
      addCheckboxFunctionPin(table0,"I2S",i,"RX FS","rx_fs");
      addCheckboxFunctionPin(table0,"I2S",i,"TX FS","tx_fs");
      addCheckboxFunctionPin(table0,"I2S",i,"MCLK","mclk");
    }
  } else {
    console.log("no I2S ports defined");
  }
}
