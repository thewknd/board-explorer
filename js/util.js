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
function addCheckedListboxFunctionPin(parent, f_type, f_num, pin_type, tag_pin_type, highlight_pin=-1) {
  if ((board.functions[f_type][f_num][tag_pin_type.toLowerCase()][0] !== -1))  {
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");

    cell0.appendChild(document.createTextNode(pin_type));
    cell0.style.width = "150px";
    row.appendChild(cell0);
    console.log("pin: " + f_type + f_num + "." + tag_pin_type + " listbox with checkboxes");
    var cell1 = document.createElement("td");
    var cbPins = document.createElement("div");
    cbPins.className = "checkboxContainer";
    cbPins.fnum = f_num;
    cbPins.fname = f_type;
    cbPins.fpin = tag_pin_type.toLowerCase();
    //cbPins.pinhighlight = highlight_pin;
    //cbPins.id = "cb" + tag_pin_type + f_type + f_num;
    for(var p = 0; p < board.functions[f_type][f_num][tag_pin_type.toLowerCase()].length; p++) {
      var pItem = document.createElement("p");
      var cbItem = document.createElement('input');
      cbItem.type = "checkbox";
      cbItem.id = "cbxEnable" + tag_pin_type.toUpperCase() + f_type + f_num + board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p];
      pItem.setAttribute("pinid", board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p]);
      pItem.appendChild(cbItem);
      pItem.appendChild(document.createTextNode(board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p]));
      cbPins.appendChild(pItem);
    }

    cell1.appendChild(cbPins);
    row.appendChild(cell1);
    parent.appendChild(row);
  } else {
    console.log("pin: " + f_type + f_num + "." + tag_pin_type + " nicht verfuegbar");
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");
    cell0.setAttribute("colspan","2");
    var node = document.createTextNode(pin_type.toUpperCase() + " nicht verfuegbar");
    lblEnable.appendChild(node);
    cell0.appendChild(lblEnable);
    row.appendChild(cell0);
    parent.appendChild(row);
  }
}

function addFunctionPin(parent, f_type, f_num, pin_type, tag_pin_type, highlight_pin=-1) {
//  cell 0: label
  if ((board.functions[f_type][f_num][tag_pin_type.toLowerCase()][0] !== -1))  {
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");

    cell0.appendChild(document.createTextNode(pin_type));
    cell0.style.width = "150px";
    row.appendChild(cell0);
    console.log("pin: " + f_type + f_num + "." + tag_pin_type + " combobox");
    var cell1 = document.createElement("td");
    var cbPins = document.createElement("select");
    cbPins.style.width = "120px";
    cbPins.id = "cb" + tag_pin_type.toUpperCase() + f_type + f_num;
    cbPins.fnum = f_num;
    cbPins.fname = f_type;
    cbPins.fpin = tag_pin_type;
    //cbPins.pinhighlight = highlight_pin;
    for(var p = 0; p < board.functions[f_type][f_num][tag_pin_type.toLowerCase()].length; p++) {
      var opt = document.createElement('option');
      if(board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p] == board.functions[f_type][f_num][tag_pin_type.toLowerCase() + "-default"]) {
        opt.selected = "selected";
        opt.style.fontWeight = "bold";
        opt.className = "clDefaultPin";
      }
      opt.innerHTML = board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p];
      opt.value = board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p];
      cbPins.appendChild(opt);
    }
    cell1.appendChild(cbPins);
    row.appendChild(cell1);
    parent.appendChild(row);
  } else {
    console.log("pin: " + f_type + f_num + "." + tag_pin_type + " nicht verfuegbar");
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");
    cell0.setAttribute("colspan","2");
    var node = document.createTextNode(pin_type.toUpperCase() + " nicht verfuegbar");
    lblEnable.appendChild(node);
    cell0.appendChild(lblEnable);
    row.appendChild(cell0);
    parent.appendChild(row);
  }
}

function addCheckboxFunctionPin(parent, f_type, f_num, pin_type, tag_pin_type, highlight_pin=-1) {
  //console.log(board.functions[f_type][f_num][tag_pin_type.toLowerCase()]);
  if ((board.functions[f_type][f_num][tag_pin_type.toLowerCase()][0] !== -1)) {
    console.log("pin: " + f_type + f_num + "." + tag_pin_type + " checkbox with combobox");
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");
    var lblEnable = document.createElement("label");
    lblEnable.id = "lblEnable" + tag_pin_type.toUpperCase() + f_type + f_num;
    var cbxEnable = document.createElement("input");
    cbxEnable.type = "checkbox";
    cbxEnable.functionid = f_num;
    //cbxEnable.pinhighlight = highlight_pin;
    cbxEnable.id = "cbxEnable" + tag_pin_type.toUpperCase() + f_type + f_num;
    lblEnable.appendChild(cbxEnable);
    var node = document.createTextNode(pin_type);
    lblEnable.appendChild(node);
    cell0.style.width = "150px";
    cell0.appendChild(lblEnable);
    row.appendChild(cell0);

    var cell1 = document.createElement("td");
    var cbPins = document.createElement("select");
    cbPins.id = "cb" + tag_pin_type.toUpperCase() + f_type + f_num;
    cbPins.style.width = "120px";
    cbPins.fnum = f_num;
    cbPins.fname = f_type;
    cbPins.fpin = tag_pin_type;
    //cbPins.pinhighlight = highlight_pin;
    for(var p = 0; p < board.functions[f_type][f_num][tag_pin_type.toLowerCase()].length; p++) {
      var opt = document.createElement('option');
      if(board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p] == board.functions[f_type][f_num][tag_pin_type.toLowerCase() + "-default"]) {
        opt.selected = "selected";
        opt.style.fontWeight = "bold";
        opt.className = "clDefaultPin";
      }
      opt.innerHTML = board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p];
      opt.value = board.functions[f_type][f_num][tag_pin_type.toLowerCase()][p];
      cbPins.appendChild(opt);
    }
    cell1.appendChild(cbPins);
    row.appendChild(cell1);
    parent.appendChild(row);
  } else {
    console.log("pin: " + f_type + f_num + "." + tag_pin_type + " nicht verfuegbar");
    var row = document.createElement("tr");
    var cell0 = document.createElement("td");
    var lblEnable = document.createElement("label");
    lblEnable.id = "lblEnable" + pin_type.toUpperCase() + f_type + f_num;
    cell0.setAttribute("colspan","2");
    var node = document.createTextNode(pin_type.toUpperCase() + " nicht verfuegbar");
    lblEnable.appendChild(node);
    cell0.appendChild(lblEnable);
    row.appendChild(cell0);
    parent.appendChild(row);
  }
}

function addCheckboxWithEdit(parent, f_type, f_key, display_txt,f_value_default, highlight_pin = -1) {
  //console.log(board.functions[f_type][f_num][tag_pin_type.toLowerCase()]);

  console.log("opt: " + f_type + "." + f_key + " checkbox with edit");
  var row = document.createElement("tr");
  var cell0 = document.createElement("td");
  var lblEnable = document.createElement("label");
  lblEnable.id = "lblEnable" + f_type.toUpperCase() + f_key;
  var cbxEnable = document.createElement("input");
  cbxEnable.type = "checkbox";
  cbxEnable.fname = f_type;
  cbxEnable.fkey = f_key;
  cbxEnable.pinhighlight = highlight_pin;
  lblEnable.pinhighlight = highlight_pin;
  row.pinhighlight = highlight_pin;
  cell0.pinhighlight = highlight_pin;
  cbxEnable.id = "cbxEnable" + f_type.toUpperCase() + f_key;
  lblEnable.appendChild(cbxEnable);
  /*var node = document.createTextNode(display_txt);
  lblEnable.appendChild(node);*/
  lblEnable.innerHTML = lblEnable.innerHTML + display_txt;
  cell0.style.width = "250px";
  cell0.appendChild(lblEnable);
  row.appendChild(cell0);

  var cell1 = document.createElement("td");
  var iFreq = document.createElement("input");
  iFreq.id = "i" + f_type.toUpperCase() + f_key;
  iFreq.style.width = "143px";
  iFreq.fname = f_type;
  iFreq.fkey = f_key;
  iFreq.pinhighlight = highlight_pin;
  iFreq.value = f_value_default;
  cell1.pinhighlight = highlight_pin;
  cell1.appendChild(iFreq);
  row.appendChild(cell1);
  parent.appendChild(row);

}

function addCheckboxWithText(parent, f_type, f_key, display_txt, highlight_pin=-1) {
  //console.log(board.functions[f_type][f_num][tag_pin_type.toLowerCase()]);

  console.log("opt: " + f_type + "." + f_key + " checkbox with text");
  var row = document.createElement("tr");
  var cell0 = document.createElement("td");
  var lblEnable = document.createElement("label");
  lblEnable.id = "lblEnable" + f_type.toUpperCase() + f_key;
  var cbxEnable = document.createElement("input");
  cbxEnable.type = "checkbox";
  cbxEnable.fname = f_type;
  cbxEnable.fkey = f_key;
  cbxEnable.pinhighlight = highlight_pin;
  row.pinhighlight = highlight_pin;
  cell0.pinhighlight = highlight_pin;
  cbxEnable.id = "cbxEnable" + f_type.toUpperCase() + f_key;
  lblEnable.appendChild(cbxEnable);
  /*var node = document.createTextNode(display_txt);
  lblEnable.appendChild(node);*/
  lblEnable.innerHTML = lblEnable.innerHTML + display_txt;
  cell0.style.width = "250px";
  cell0.appendChild(lblEnable);
  row.appendChild(cell0);
  parent.appendChild(row);

}

function addCheckboxWithComboBox(parent, f_type, f_key, display_txt, highlight_pin=-1) {
  //console.log(board.functions[f_type][f_num][tag_pin_type.toLowerCase()]);
  console.log("opt: " + f_type + "." + f_key + " checkbox with combobox");
  var row = document.createElement("tr");
  var cell0 = document.createElement("td");
  var lblEnable = document.createElement("label");
  lblEnable.id = "lblEnable" + f_type.toUpperCase() + f_key.toUpperCase();
  var cbxEnable = document.createElement("input");
  cbxEnable.type = "checkbox";
  cbxEnable.fname = f_type;
  cbxEnable.fkey = f_key;
  cbxEnable.pinhighlight = highlight_pin;
  row.pinhighlight = highlight_pin;
  cell0.pinhighlight = highlight_pin;
  cbxEnable.id = "cbxEnable" + f_type.toUpperCase() + f_key.toUpperCase();
  lblEnable.appendChild(cbxEnable);
  var node = document.createTextNode(display_txt);
  lblEnable.appendChild(node);
  cell0.style.width = "250px";
  cell0.appendChild(lblEnable);
  row.appendChild(cell0);

  var cell1 = document.createElement("td");
  var cbPins = document.createElement("select");
  cbPins.id = "cb" + f_type.toUpperCase() + f_key.toUpperCase();
  cbPins.style.width = "150px";
  cbPins.fname = f_type;
  cbPins.fkey = f_key;
  cbPins.pinhighlight = highlight_pin;
  cell1.pinhighlight = highlight_pin;
  for(var p = 0; p < board.functions[f_type][f_key].length; p++) {
    var opt = document.createElement('option');
    if(board.functions[f_type][f_key][p] == board.functions[f_type][f_key + "-default"]) {
      opt.selected = "selected";
      opt.style.fontWeight = "bold";
      opt.className = "clDefaultPin";
    }
    opt.innerHTML = board.functions[f_type][f_key][p];
    opt.value = board.functions[f_type][f_key][p];
    cbPins.appendChild(opt);
  }
  cell1.appendChild(cbPins);
  row.appendChild(cell1);
  parent.appendChild(row);

}

function addBasicFuncTemplate(parent,table,f_name,f_num) {
  var gbSubGroup = document.createElement("div");
  gbSubGroup.id = "gb" + f_name + f_num;
  gbSubGroup.className = "gbPeripherals";

  var head4 = document.createElement("h4");
  var node;
  if(board.functions[f_name][f_num]["alt-name"]) {
    node = document.createTextNode(board.functions[f_name][f_num]["function-name"] + " / " + board.functions[f_name][f_num]["alt-name"]);
  } else {
    node = document.createTextNode(board.functions[f_name][f_num]["function-name"]);
  }
  head4.appendChild(node);
  gbSubGroup.appendChild(head4);
  parent.appendChild(gbSubGroup);

  var divHell1 = document.createElement("div");
  gbSubGroup.appendChild(divHell1);

  var lblEnable = document.createElement("label");
  var cbxEnable = document.createElement("input");
  cbxEnable.type = "checkbox";
  cbxEnable.className ="cbxNormal";
  cbxEnable.fnum = f_num;
  cbxEnable.fname = f_name;
  cbxEnable.id = "cbxEnable" + f_name + f_num;

  node = document.createTextNode("Enable " + board.functions[f_name][f_num]["function-name"]);

  lblEnable.appendChild(cbxEnable);
  lblEnable.appendChild(node);
  divHell1.appendChild(lblEnable);

  var divGroup = document.createElement("div");
  divGroup.style.display = "none";
  divGroup.id = "div" + f_name + f_num;
  divHell1.appendChild(divGroup);

  table.style.margin = "5px;";
  table.id = "tblBasic" + f_name + f_num;

  divGroup.appendChild(table);
}

function hideAllConfigurations() {
    hideCAN();
    hideSerial();
    hideI2S();
    hideI2C();
    hideInfo();
    hideSPI();
    hidePinsDigital();
    hidePinsPWM();
    hidePinsAnalog();

    if((shield !== null) && (shield != "undefinied")) {
      for(var h = 0; h < Object.keys(shield).length; h++) {
        //console.log("hide shield mfg: " + shield_mfg_list[h]);
        hideShield(Object.keys(shield)[h]);
      }
    }
    document.getElementById("configurator").style.display = "table-cell";
}

/*
  Event listener
*/

function eListenerOver(e) {
  var e = window.e || e;

  if (e.target.tagName.toUpperCase() === 'TD') {
    hl_pin_num_bg = [];
  }

  if((e.target.pinhighlight > -1) || (e.target.digitalPin)) {
    //console.log("e: highlight pin" + e.target.pinhighlight);
    hl_select = e.target.pinhighlight;
  } else if (e.target.tagName.toUpperCase() === 'SELECT') {
    if((e.target.fnum > -1) && (e.target.fname) && (e.target.fpin)) {
      for(var p = 0; p < board.functions[e.target.fname][e.target.fnum][e.target.fpin].length; p++) {
        if (hl_pin_num_bg.indexOf(board.functions[e.target.fname][e.target.fnum][e.target.fpin][p]) === -1) {
          hl_pin_num_bg.push(board.functions[e.target.fname][e.target.fnum][e.target.fpin][p]);
        }
      }
      hl_select = e.target.value;
    }
  }

  if ((e.target.parentNode.tagName.toUpperCase() === 'DIV') && (e.target.parentNode.className.toUpperCase() === 'CHECKBOXCONTAINER')) {
    //console.log("e checkboxcontainer parentNode: " + e.target.parentNode.fname + e.target.parentNode.fnum+ e.target.parentNode.fpin);
    if((e.target.parentNode.fnum > -1) && (e.target.parentNode.fname) && (e.target.parentNode.fpin)) {
      for(var p = 0; p < board.functions[e.target.parentNode.fname][e.target.parentNode.fnum][e.target.parentNode.fpin].length; p++) {
        if (hl_pin_num_bg.indexOf(board.functions[e.target.parentNode.fname][e.target.parentNode.fnum][e.target.parentNode.fpin][p]) === -1) {
          hl_pin_num_bg.push(board.functions[e.target.parentNode.fname][e.target.parentNode.fnum][e.target.parentNode.fpin][p]);
        }
      }
    }
  }
  if ((e.target.tagName.toUpperCase() === 'DIV') && (e.target.className.toUpperCase() === 'CHECKBOXCONTAINER')) {
    //console.log("e checkboxcontainer: " + e.target.fname + e.target.fnum+ e.target.fpin);
    if((e.target.fnum > -1) && (e.target.fname) && (e.target.fpin)) {
      for(var p = 0; p < board.functions[e.target.fname][e.target.fnum][e.target.fpin].length; p++) {
        if (hl_pin_num_bg.indexOf(board.functions[e.target.fname][e.target.fnum][e.target.fpin][p]) === -1) {
          hl_pin_num_bg.push(board.functions[e.target.fname][e.target.fnum][e.target.fpin][p]);
        }
      }
    }
  }
}

function eListenerOut(e) {
  var e = window.e || e;
  /*if ((e.target.parentNode.tagName.toUpperCase() === 'DIV') && (e.target.parentNode.className.toUpperCase() === 'CHECKBOXCONTAINER')) {
    if((e.target.fnum > -1) && (e.target.fname) && (e.target.fpin)) {
      hl_pin_num_bg = [];
    }
  }
  if ((e.target.tagName.toUpperCase() === 'DIV') && (e.target.className.toUpperCase() === 'CHECKBOXCONTAINER')) {
    if((e.target.fnum > -1) && (e.target.fname) && (e.target.fpin)) {
      hl_pin_num_bg = [];
    }
  }*/
  if((e.target.digitalPin) || (e.target.pinhighlight)) {
    hl_select = -1;
  } else if (e.target.tagName.toUpperCase() === 'SELECT') {

    if((e.target.fnum > -1) && (e.target.fname) && (e.target.fpin)) {
      /*for(var p = 0; p < board.functions[e.target.fname][e.target.fnum][e.target.fpin].length; p++) {

        var index = hl_pin_num_bg.indexOf(board.functions[e.target.fname][e.target.fnum][e.target.fpin][p]);
        if (index > -1) {
          hl_pin_num_bg.splice(index, 1);
        }

      }*/
      hl_pin_num_bg = [];
      hl_select = -1;
    }
  }
}

function eListenerClick(e) {
  var e = window.e || e;

  if ((e.target.tagName.toUpperCase() === 'SELECT') && (e.target.digitalPin)) {
    //console.log("e click digitalPin: " + e.target.digitalPin);
    document.getElementById("cbxEnableDigitalPin" + e.target.digitalPin).checked = "checked";
  }
}

function eListenerChange(e) {
  var e = window.e || e;

  if ((e.target.tagName.toUpperCase() === 'INPUT') && (e.target.type.toUpperCase() === 'CHECKBOX')) {
    //console.log("e: " + e.target.fname + e.target.fnum);
    if((e.target.fnum > -1) && (e.target.fname)) {
      if(e.target.checked) {
        document.getElementById("div" + e.target.fname + e.target.fnum).style.display = "block";
        //console.log("e: " + e.target.fname + e.target.fnum + " show");
      } else {
        document.getElementById("div" + e.target.fname + e.target.fnum).style.display = "none";
        //console.log("e: " + e.target.fname + e.target.fnum + " hide");
      }
    }
  } else if ((e.target.tagName.toUpperCase() === 'SELECT') && (e.target.digitalPin)) {
    //console.log("e digitalPin: " + e.target.digitalPin);
    document.getElementById("cbxEnableDigitalPin" + e.target.digitalPin).checked = "checked";
  }
}

function eListenerResize(e) {
  var e = window.e || e;
  //console.log("e: window resize");
  document.getElementById("configurator").style.height = (window.innerHeight - 20) + "px";
  document.getElementById("maintable").style.height = (window.innerHeight - 20) + "px";
}
