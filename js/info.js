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
function  toggleDivInfo(element) {
  //console.log("checkbox Info" + element.elementid);
  if(element.checked) {
    document.getElementById("divInfo" + element.elementid).style.display = "block";
    //console.log("checked");
  } else {
    document.getElementById("divInfo" + element.elementid).style.display = "none";
    //console.log("not checked");
  }
}

function showInfo() {
  hideAllConfigurations();
  document.getElementById("gbInfo").style.display = "block";
}

function hideInfo() {
  document.getElementById("gbInfo").style.display = "none";
}

function initInfo() {
  var gbInfo = document.createElement("div");
  gbInfo.id = "gbInfo";
  document.getElementById("configurator").appendChild(gbInfo);

  var gbInfoGroup = document.createElement("div");
  gbInfoGroup.className = "gbPeripherals";

  var head4 = document.createElement("h4");
  var node = document.createTextNode("About " + board.info["board-name"]);
  head4.appendChild(node);
  gbInfoGroup.appendChild(head4);
  gbInfo.appendChild(gbInfoGroup);

  gbInfoGroup = document.createElement("div");
  gbInfoGroup.className = "gbPeripherals";

  head4 = document.createElement("h4");
  node = document.createTextNode("Microcontroller details");
  head4.appendChild(node);
  gbInfoGroup.appendChild(head4);
  gbInfo.appendChild(gbInfoGroup);

  var divHell1 = document.createElement("div");
  gbInfoGroup.appendChild(divHell1);

  addSimpleTxt(divHell1,"Type: ",board.info.microcontroller.manufacturer + " " + board.info.microcontroller.name);
  addSimpleTxt(divHell1,"Description: ", board.info.microcontroller.short_description);

  for(var t = 0; t < board.info.microcontroller.docs.length;t++) {
    addSimpleLink(divHell1,board.info.microcontroller.docs[t].type + ": ","open" ,board.info.microcontroller.docs[t].url);
  }
}

function addSimpleLink(parent, title, link_txt, link_url) {
  var span = document.createElement("span");
  var node = document.createTextNode(title);
  span.style.fontWeight = "bold";
  span.appendChild(node);
  var p = document.createElement("p");
  p.appendChild(span);
  var link = document.createElement("a");
  node = document.createTextNode(link_txt);
  link.appendChild(node);
  link.href = link_url;
  link.target = "_blank";
  p.appendChild(link);
  parent.appendChild(p);
}

function addSimpleTxt(parent, title, txt) {
  var span = document.createElement("span");
  var node = document.createTextNode(title);
  span.style.fontWeight = "bold";
  span.appendChild(node);
  node = document.createTextNode(txt);
  var p = document.createElement("p");
  p.appendChild(span);
  p.appendChild(node);
  parent.appendChild(p);
}
