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
function loadAllShields() {
  $.getJSON("./shields/shields.json", function (data) {
    shield = data;

    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-Shield";
    for(var t = 0; t < Object.keys(shield).length; t++) {
      for(var e = 0; e < shield[Object.keys(shield)[t]].length;e++) {
        document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>--" + Object.keys(shield)[t] + "." + shield[Object.keys(shield)[t]][e];
        loadShield(Object.keys(shield)[t],shield[Object.keys(shield)[t]][e]);
      }
    }

    initInfo();
    //initCodeView();
    initSerial();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-Serial";
    initCAN();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-CAN";
    initI2S();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-I2S";
    initI2C();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-I2C";
    initSPI();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-SPI";
    initPinsDigital();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-Digital";
    initPinsAnalog();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-Analog";
    initPinsPWM();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-PWM";
    initTouch();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-Touch";

    initCode();
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-CodeViewer";

    initBoardLayer(0);
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-Layer 0";
    initBoardLayer(1);
    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-Layer 1";

    document.getElementById("boardView1").style.display = "none";
    document.getElementById("boardView0").style.display = "table-cell";
    document.getElementById("configurator").style.display = "table-cell";

    document.getElementById("divlog").innerHTML = document.getElementById("divlog").innerHTML + "<br/>-Add EventListener";
    if (document.addEventListener) {
      console.log("addEventListener");
      document.addEventListener('mouseover', eListenerOver, false);
      document.addEventListener('mouseout', eListenerOut, false);
      document.addEventListener("change",eListenerChange,false);
      document.addEventListener("click",eListenerClick,false);
      window.addEventListener('resize', eListenerResize, true);
    } else {
      console.log("attachEvent");
      document.attachEvent('onmouseover', eListenerOver);
      document.attachEvent('onmouseout', eListenerOut);
      document.attachEvent("onchange",eListenerChange);
      document.attachEvent("onclick",eListenerClick);
      window.attachEvent('onresize', eListenerResize);
    }

    window.setInterval(checkAll,200);

    showInfo();

    document.getElementById("loadscreen").style.display = "none";

  }).error(function() {
    console.log("error loading shields.json");
  }).success(function() {
    console.log("shields.json loaded");

  });
}


/*{
  "brand1": {
    "type1": {
      "min": 55,
      "max": 77 },
    "type2": {
      "min": 33,
      "elist":[1,2,3,4,5] }
  },
  "brand2": {
    "type44": {
      "min": 3,
      "med": 12 },
    },
  }
}*/

function loadShield(folder,shield_id) {
  $.getJSON("./shields/" + folder + "/" + shield_id + "/shield.json", function (shield_object) {
    var index = shield[folder].indexOf(shield_id);
    if (index > -1) {
      shield[folder].splice(index, 1);
    }
    console.log("shield loaded "  +  folder + "/" + shield_object.info.id);
    if(shield_object.info.compatible.indexOf(board.info["board-name"]) > -1) {
      console.log("shield compatible");

    shield[folder].push(shield_object);
    shield_object.info.id = shield_id;
    //shield[folder][shield_id].push(shield_object);
    /*console.log("+++");
    console.log(shield_object);*/
    shield_index = shield[folder].length-1;
    /*if(shield.index(folder) > -1) {

    } else {
      shield.push(folder);
    }*/
  /*  shield_mfg_list.push(folder);
    if()*/
    //Object.assign(shield[shieldCount],data);
    //console.log("Shield count: " +  (shieldCount+1));
    //shieldCount++;

    var gbShieldVendor;



    if(document.getElementById("gbShield" + folder) === null) {
      gbShieldVendor = document.createElement("div");
      gbShieldVendor.id = "gbShield" + folder;
      document.getElementById("configurator").appendChild(gbShieldVendor);
      addMenuItem(document.getElementById("shieldmenu"),"showShield('" + folder + "')",folder);

    } else {
      gbShieldVendor = document.getElementById("gbShield" + folder);
    }


    var gbShield = document.createElement("div");
    gbShield.id = "gbShield" + shield_id;
    gbShield.className = "gbPeripherals";

    var head4 = document.createElement("h4");

    var node1 = document.createTextNode(shield_object.info["shield-name"]);
    head4.appendChild(node1);
    gbShield.appendChild(head4);
    gbShieldVendor.appendChild(gbShield);

      var divHell1 = document.createElement("div");
      gbShield.appendChild(divHell1);

      var lblEnable = document.createElement("label");
      var cbxEnable = document.createElement("input");
      cbxEnable.type = "checkbox";
      cbxEnable.className ="cbxNormal";
      cbxEnable.shield_folder = folder;
      cbxEnable.shield_id = shield_id;
      cbxEnable.addEventListener("change",function() {toggleDivShield(this)});
      cbxEnable.id = "cbxEnableShield" + folder.toUpperCase() + shield_object.info.id.toUpperCase();
      var node2 = document.createTextNode("Enable " + shield_object.info["shield-name"]);
      lblEnable.appendChild(cbxEnable);
      lblEnable.appendChild(node2);
      divHell1.appendChild(lblEnable);

      var divShield = document.createElement("div");
      divShield.style.display = "none";
      divShield.id = "div" + folder + shield_id;
      divHell1.appendChild(divShield);

      var table0 = document.createElement("table");
      table0.style.margin = "5px;";
      table0.id = "tblBasicShield" + folder + shield_id;
      divShield.appendChild(table0);

      for(p = 0; p < shield_object.pins.length; p++) {
        addShieldTableRow(table0,p,shield_object,folder,shield_id);
      }

      hideShield(folder);
    } else {
      console.log("shield not compatible");
    }
	}).error(function() {
		console.log("error loading shield " +  folder + "/" + shield_id);
	}).success(function() {

	});

}

function addShieldTableRow(parent_table, shield_pin, shd,shield_folder,shield_name) {

  var row = document.createElement("tr");
  var cell0 = document.createElement("td");
  var node;
  cell0.style.width = "200px";

  if(shd.pins[shield_pin]["txt-name"] != null) {
    node = document.createTextNode(shd.pins[shield_pin]["txt-name"]);
  } else {
    node = document.createTextNode(shd.pins[shield_pin]["function-name"]);
  }
  cell0.appendChild(node);
  row.appendChild(cell0);
  /*var lblEnable = document.createElement("label");
  lblEnable.id = "lblEnable" + i2s_pin_id.toUpperCase() + "I2S" + i2s_id;
  cell0.style.width = "100px";


  var cbxEnable = document.createElement("input");
  cbxEnable.type = "checkbox";
  cbxEnable.I2Sid = i2s_id;
  cbxEnable.id = "cbxEnable" + i2s_pin_id.toUpperCase() + "I2S" + i2s_id;
  lblEnable.appendChild(cbxEnable);
  var node = document.createTextNode(i2s_pin_id.toUpperCase());
  lblEnable.appendChild(node);
  cell0.appendChild(lblEnable);
  row.appendChild(cell0);*/




  var cell1 = document.createElement("td");
  var cbPins = document.createElement("select");
  cbPins.style.width = "100px";
  cbPins.id = "cbShield" + shield_folder.toUpperCase() + shield_name.toUpperCase() + shd.pins[shield_pin]["function-name"].toUpperCase();
  //console.log(board.functions.I2S[i2s_id]["function-name"] + " " + i2s_pin_id.toUpperCase() + " Length: " + board.functions.I2S[i2s_id][i2s_pin_id].length);
  for(var p = 0; p < shd.pins[shield_pin].num.length; p++) {
    var opt = document.createElement('option');


    opt.innerHTML = shd.pins[shield_pin].num[p];
    opt.value = shd.pins[shield_pin].num[p];
    if(shd.pins[shield_pin]["num-default"] != -1) {
      if(shd.pins[shield_pin].num[p] == shd.pins[shield_pin]["num-default"]) {
          opt.selected = "selected";
      }
    }
    cbPins.appendChild(opt);
  }

  cell1.appendChild(cbPins);
  row.appendChild(cell1);
  parent_table.appendChild(row);

}

function  toggleDivShield(element) {
  if(element.checked) {
    document.getElementById("div" + element.shield_folder + element.shield_id).style.display = "block";
  } else {
    document.getElementById("div" + element.shield_folder + element.shield_id).style.display = "none";
  }
}


function showShield(folder) {
  hideAllConfigurations();
  document.getElementById("gbShield" + folder).style.display = "block";
}

function hideShield(folder) {
  //console.log("hide gbShield" + folder);
  if (document.getElementById("gbShield" + folder) !== null) {
    document.getElementById("gbShield" + folder).style.display = "none";
    //console.log(document.getElementById("gbShield" + folder));
  }
}
