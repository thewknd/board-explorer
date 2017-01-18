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
function loadmenu() {
  var menuitem;

  var menutitle = document.createElement("h3");
  txtnode = document.createTextNode("Board");
  menutitle.appendChild(txtnode);
  document.getElementById("mainmenu").appendChild(menutitle);
  var topmenu = document.createElement("ul");
  topmenu.className = "topmenu";
  document.getElementById("mainmenu").appendChild(topmenu);
  addMenuItem(topmenu,"showInfo()","Information");
  //addMenuItem(topmenu,"showCodeView()","Code");

  var menutitle = document.createElement("h3");
  txtnode = document.createTextNode("I/O Pins");
  menutitle.appendChild(txtnode);
  document.getElementById("mainmenu").appendChild(menutitle);
  var topmenu = document.createElement("ul");
  topmenu.className = "topmenu";
  document.getElementById("mainmenu").appendChild(topmenu);
  addMenuItem(topmenu,"showPinsDigital()","Digital");
  addMenuItem(topmenu,"showPinsAnalog()","Analog");
  addMenuItem(topmenu,"showPinsPWM()","PWM");



  var menutitle = document.createElement("h3");
  txtnode = document.createTextNode("Peripherals");
  menutitle.appendChild(txtnode);
  document.getElementById("mainmenu").appendChild(menutitle);
  var topmenu = document.createElement("ul");
  topmenu.className = "topmenu";
  document.getElementById("mainmenu").appendChild(topmenu);
  addMenuItem(topmenu,"showSerial()","Serial");
  addMenuItem(topmenu,"showI2C()","Wire / I2C");
  addMenuItem(topmenu,"showSPI()","SPI");
  addMenuItem(topmenu,"showCAN()","CAN");
  addMenuItem(topmenu,"showI2S()","I2S");

  var menutitle = document.createElement("h3");
  txtnode = document.createTextNode("Shields");
  menutitle.appendChild(txtnode);
  document.getElementById("mainmenu").appendChild(menutitle);
  var topmenu = document.createElement("ul");
  topmenu.className = "topmenu";
  topmenu.id = "shieldmenu";
  document.getElementById("mainmenu").appendChild(topmenu);

  console.log("Menu created");
}

function addMenuItem(menu,func,txt) {
  var menuitem = document.createElement("li");
  menuitem.className="menuitem";
  var a = document.createElement("a");
  var txtnode = document.createTextNode(txt);
  a.appendChild(txtnode);
  menuitem.appendChild(a);
  a.setAttribute('onclick', func);
  menu.appendChild(menuitem);
}
