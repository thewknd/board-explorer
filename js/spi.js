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
function showSPI() {
  hideAllConfigurations();
  document.getElementById("gbSPI").style.display = "block";
}

function hideSPI() {
  document.getElementById("gbSPI").style.display = "none";
}

function initSPI() {
  if(board.functions.SPI.length > 0) {
    var gbSPI = document.createElement("div");
    gbSPI.id = "gbSPI";
    document.getElementById("configurator").appendChild(gbSPI);
    for(var i = 0; i < board.functions.SPI.length; i++) {
      var table0 = document.createElement("table");
      addBasicFuncTemplate(gbSPI,table0,"SPI",i);
      addFunctionPin(table0,"SPI",i,"MOSI","master-mosi");
      addFunctionPin(table0,"SPI",i,"MISO","master-miso");
      addFunctionPin(table0,"SPI",i,"SCLK","sclk");
      addCheckedListboxFunctionPin(table0,"SPI",i,"CS software", "cs_sw");
      addCheckedListboxFunctionPin(table0,"SPI",i,"CS hardware", "cs_hw");
    }
  } else {
    console.log("no SPI ports defined");
  }
}
