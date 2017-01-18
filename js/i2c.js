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

function showI2C() {
  hideAllConfigurations();
  document.getElementById("gbI2C").style.display = "block";
}

function hideI2C() {
  document.getElementById("gbI2C").style.display = "none";
}

function initI2C() {
  if(board.functions.I2C.length > 0) {
    var gbI2C = document.createElement("div");
    gbI2C.id = "gbI2C";
    document.getElementById("configurator").appendChild(gbI2C);
    for(var i = 0; i < board.functions.I2C.length;i++) {
      var table0 = document.createElement("table");
      addBasicFuncTemplate(gbI2C,table0,"I2C",i);
      addFunctionPin(table0,"I2C",i,"SDA","sda");
      addFunctionPin(table0,"I2C",i,"SCL","scl");
    }
  } else {
    console.log("no I2C ports defined");
  }
}
