function loadFunctionSelector() {


  var topmenu = document.createElement("ul");
  topmenu.className = "hl_menu";
  document.getElementById("selectorLevel0").appendChild(topmenu);

  hl_menu_add_item(topmenu,"removeHlAllPins()","Clear");


  if(board.functions["Serial"]) {
      hl_menu_add_item(topmenu,"hlFunction('Serial')","Serial");
  }
  if(board.functions["I2C"]) {
      hl_menu_add_item(topmenu,"","Wire / I2C");
  }
  if(board.functions["SPI"]) {
      hl_menu_add_item(topmenu,"","SPI");
  }
  if(board.functions["CAN"]) {
      hl_menu_add_item(topmenu,"","CAN");
  }
  if(board.functions["I2S"]) {
      hl_menu_add_item(topmenu,"","I2S");
  }
}

function hlFunction(func_type, pin_num) {
  var topmenu = document.createElement("ul");
  topmenu.className = "hl_menu";
  hl_menu_add_item(topmenu,"removeHlAllPins()","Clear");
  if(func_type == "Serial") {


    document.getElementById("selectorLevel1").appendChild(topmenu);

    for(var o = 0; o < board.functions[func_type].length;o++) {
      hl_menu_add_item(topmenu,"hlFunctionDetails('" + func_type + "','" + board.functions[func_type][o] + "')",board.functions[func_type][o]["function-name"]);
    }
  }
}

function hlFunctionDetails(func_type, pin_type) {
  for(var o = 0; o < board.functions[func_type].length;o++) {
    for(var t = 0; t < board.functions[func_type][o][pin_type].length; t++) {
      if(board.functions[func_type][o][pin_type + "-default"] == board.functions[func_type][o][pin_type][t]) {
        //d3.select("#pinNumBg" + board.functions[func_type][o][pin_type][t]).attr("fill","#4DACFF");
      } else {
        //d3.select("#pinNumBg" + board.functions[func_type][o][pin_type][t]).attr("fill","#CCE6FF");
      }
    }
  }
}


function removeHlAllPins() {
  for(var i = 0; i < board.info["num-digital-pins"]; i++) {
    d3.select("#pinNumBg" + i).attr("fill", "white");
    shutOffPin(i);
  }
  d3.select("#pinNumBgA21").attr("fill", "white");
  d3.select("#pinNumBgA22").attr("fill", "white");
  d3.select("#pinNumBgA10").attr("fill", "white");
  d3.select("#pinNumBgA11").attr("fill", "white");
}

function hl_menu_add_item(menu,func,txt) {
  var menuitem = document.createElement("li");
  var a = document.createElement("a");
  var txtnode = document.createTextNode(txt);
  a.appendChild(txtnode);
  menuitem.appendChild(a);
  a.setAttribute('onclick', func);
  menu.appendChild(menuitem);
}
