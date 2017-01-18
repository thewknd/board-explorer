var t36_layer0 = {
  circle_r: 8,
  circle_stroke_width: 2,
  pad_height: 8,
  pad_width: 20,
  pad_stroke_width: 2,
  rect_height: 18,
  rect_stroke_width: 2,
  x_startpos: 244,
  y_startpos: 40,
  y_interval: 24.25,
  text_size: 12,
  space_dot_num:10,
  space_num_txt:2,
  txt_width:162,
  num_width:55,
  board_width:146.5
};

var t36_layer1 = {
  circle_r: 8,
  circle_stroke_width: 2,
  pad_height: 10,
  pad_width: 27,
  pad_stroke_width: 2,
  rect_height: 18,
  rect_stroke_width: 2,
  x_startpos: 244,
  y_startpos: 40,
  y_interval: 24.25,
  text_size: 12,
  space_dot_num:33,
  space_num_txt:2,
  txt_width:162,
  num_width:55,
  board_width:144
};

function initBoardLayer(layer){

  console.log("layer: " + layer);
  if(layer == 0) {
    var board_layer = d3.select("#board_layer0")
      .attr("width", 634)
      .attr("height", 620);
    // console.log(board_layer);
    if(board_layer) {
      var ypos = t36_layer0.y_startpos;

      console.log("svg ready");

      board_layer.append("svg:image")
      .attr('x',t36_layer0.x_startpos - 12)
      .attr('y',t36_layer0.y_startpos - 29.5)
      .attr('width', 172)
      .attr('height', 600)
      .attr("xlink:href","./boards/teensy_36/layer0.png")

      createPowerPin(board_layer, t36_layer0, "GND","end",t36_layer0.x_startpos,ypos, 0);
      ypos = ypos + t36_layer0.y_interval;

      for(var i = 0; i <= 12; i++) {
        createPin(board_layer, t36_layer0 ,i , "end",t36_layer0.x_startpos,ypos, 0);
        ypos = ypos + t36_layer0.y_interval;
      }
      createPowerPin(board_layer, t36_layer0, "3.3V","end",t36_layer0.x_startpos,ypos, 0);
      ypos = ypos + t36_layer0.y_interval;

      for(var i = 24; i <= 32; i++) {
        createPin(board_layer, t36_layer0, i,"end",t36_layer0.x_startpos,ypos, 0);
        ypos = ypos + t36_layer0.y_interval;
      }
      ypos = ypos - t36_layer0.y_interval;
      for(var i = 33; i <= 39; i++) {
        createPin(board_layer, t36_layer0, i,"start",t36_layer0.x_startpos + t36_layer0.board_width,ypos, 0);
        ypos = ypos - t36_layer0.y_interval;
      }

      createPin(board_layer, t36_layer0, "A21","start",t36_layer0.x_startpos + t36_layer0.board_width,ypos, 0);
      ypos = ypos - t36_layer0.y_interval;
      createPin(board_layer, t36_layer0, "A22","start",t36_layer0.x_startpos + t36_layer0.board_width,ypos, 0);
      ypos = ypos - t36_layer0.y_interval;
      createPowerPin(board_layer, t36_layer0, "GND","start",t36_layer0.x_startpos + t36_layer0.board_width,ypos, 0);
      ypos = ypos - t36_layer0.y_interval;
      for(var i = 13; i <= 23; i++) {
        createPin(board_layer, t36_layer0, i,"start",t36_layer0.x_startpos + t36_layer0.board_width,ypos, 0);
        ypos = ypos - t36_layer0.y_interval;
      }
      createPowerPin(board_layer, t36_layer0, "3.3V","start",t36_layer0.x_startpos + t36_layer0.board_width,ypos, 0);
      ypos = ypos - t36_layer0.y_interval;
      createPowerPin(board_layer, t36_layer0, "AGND","start",t36_layer0.x_startpos + t36_layer0.board_width,ypos, 0);
      ypos = ypos - t36_layer0.y_interval;
      createPowerPin(board_layer, t36_layer0, "VIN","start",t36_layer0.x_startpos + t36_layer0.board_width,ypos, 0);
      ypos = ypos - t36_layer0.y_interval;
    }
  } else if(layer == 1) {
    var board_layer = d3.select("#board_layer1")
      .attr("width", 629)
      .attr("height", 620);
    // console.log(board_layer);
    if(board_layer) {
      var ypos = t36_layer1.y_startpos;

      console.log("svg ready");

      board_layer.append("svg:image")
      .attr('x',t36_layer1.x_startpos - 15 )
      .attr('y',t36_layer1.y_startpos - 20)
      .attr('width', 171)
      .attr('height', 590)
      .attr("xlink:href","./boards/teensy_36/layer1.png")


      ypos = ypos + t36_layer1.y_interval;
      ypos = ypos + t36_layer1.y_interval;
      ypos = ypos + t36_layer1.y_interval;

      createPowerPin(board_layer, t36_layer1, "AREF","end",t36_layer1.x_startpos+23,ypos, 0);
      ypos = ypos + t36_layer1.y_interval;
      createPin(board_layer, t36_layer1, "A10","end",t36_layer1.x_startpos+23,ypos, 0);
      ypos = ypos + t36_layer1.y_interval;
      createPin(board_layer, t36_layer1, "A11","end",t36_layer1.x_startpos+23,ypos, 0);

      ypos = ypos + t36_layer1.y_interval;
      for(var m = 57; m >= 54; m--) {
        createPin(board_layer, t36_layer1, m,"end",t36_layer1.x_startpos+23,ypos, 1);
        ypos = ypos + t36_layer1.y_interval;
      }

      ypos = ypos + t36_layer1.y_interval;
      ypos = ypos + t36_layer1.y_interval;
      ypos = ypos + t36_layer1.y_interval;
      ypos = ypos + t36_layer1.y_interval;
      ypos = ypos + t36_layer1.y_interval;
      for(var m = 53; m >= 51; m--) {
        createPin(board_layer, t36_layer1, m,"end",t36_layer1.x_startpos+23,ypos, 1);
        ypos = ypos + t36_layer1.y_interval;
      }
      ypos = ypos + t36_layer1.y_interval;
      for(var m = 50; m >= 47; m--) {
        createPin(board_layer, t36_layer1, m,"end",t36_layer1.x_startpos+23,ypos, 1);
        ypos = ypos + t36_layer1.y_interval;
      }

      createPowerPin(board_layer, t36_layer1, "3.3V","end",t36_layer1.x_startpos+23,ypos, 1);

      createPowerPin(board_layer, t36_layer1, "GND","start",t36_layer1.x_startpos - t36_layer1.y_interval + t36_layer1.board_width - 46,ypos, 1, 44);
      ypos = ypos - t36_layer1.y_interval;
      for(var m = 46; m >= 43; m--) {
        createPin(board_layer, t36_layer1, m,"start",t36_layer1.x_startpos - t36_layer1.y_interval + t36_layer1.board_width - 46,ypos, 1, 44);
        ypos = ypos - t36_layer1.y_interval;
      }

      ypos = ypos - t36_layer1.y_interval;
      for(var m = 42; m >= 40; m--) {
        createPin(board_layer, t36_layer1, m,"start",t36_layer1.x_startpos - t36_layer1.y_interval + t36_layer1.board_width - 46,ypos, 1, 44);
        ypos = ypos - t36_layer1.y_interval;
      }

      ypos = ypos - t36_layer1.y_interval;
      ypos = ypos - t36_layer1.y_interval;
      ypos = ypos - t36_layer1.y_interval;
      ypos = ypos - t36_layer1.y_interval;
      ypos = ypos - t36_layer1.y_interval;
      createPowerPin(board_layer, t36_layer1, "DD","start",t36_layer1.x_startpos - t36_layer1.y_interval + t36_layer1.board_width - 46,ypos, 1, 44);
      ypos = ypos - t36_layer1.y_interval;
      createPowerPin(board_layer, t36_layer1, "DC","start",t36_layer1.x_startpos - t36_layer1.y_interval + t36_layer1.board_width - 46,ypos, 1, 44);
      ypos = ypos - t36_layer1.y_interval;
      createPowerPin(board_layer, t36_layer1, "DE","start",t36_layer1.x_startpos - t36_layer1.y_interval + t36_layer1.board_width - 46,ypos, 1, 44);
      ypos = ypos - t36_layer1.y_interval;
      createPowerPin(board_layer, t36_layer1, "GND","start",t36_layer1.x_startpos - t36_layer1.y_interval + t36_layer1.board_width - 46,ypos, 1, 44);
    }
  }
}

function createPowerPin(layer_svg, layer_conf, pin_label, anchor, x, y, pad_type, mod_pad_num = 0) {

  if(pad_type == 0) {
    var pin = layer_svg.append("circle");
    pin.attr("cy", y);
    pin.attr("cx", x);
    pin.attr("r", layer_conf.circle_r);
    pin.attr("fill","white");
    pin.attr("stroke","black");
    pin.attr("stroke-width", layer_conf.circle_stroke_width);
    pin.attr("pin_id", pin_label);
  } else if (pad_type == 1) {
    var pin = layer_svg.append("rect");
    pin.attr("y", y - layer_conf.pad_height/2);
    pin.attr("x", x - 3);
    pin.attr("width", layer_conf.pad_width);
    pin.attr("height", layer_conf.pad_height);
    pin.attr("fill","white");
    pin.attr("stroke","black");
    pin.attr("stroke-width", layer_conf.pad_stroke_width);
    pin.attr("pin_id", pin_label);
  }

  var pinNumBg = layer_svg.append("rect");
  pinNumBg.attr("y", y-(layer_conf.rect_height/2));
  if(anchor == "start") {
    pinNumBg.attr("x", x + layer_conf.space_dot_num + layer_conf.circle_r + mod_pad_num);
  } else {
    pinNumBg.attr("x", x - layer_conf.space_dot_num - layer_conf.circle_r - layer_conf.num_width - mod_pad_num);
  }
  pinNumBg.attr("height", layer_conf.rect_height);
  pinNumBg.attr("width", layer_conf.num_width);
  pinNumBg.attr("stroke","black");
  pinNumBg.attr("fill","white");
  pinNumBg.attr("pin_id", pin_label);

  var pinNum = layer_svg.append("text")
  pinNum.attr("y", y+(layer_conf.text_size/2 -2));
  if(anchor == "start") {
    pinNum.attr("x", x + layer_conf.space_dot_num + layer_conf.circle_r + layer_conf.circle_stroke_width + layer_conf.rect_stroke_width + mod_pad_num);
  } else {
    pinNum.attr("x", x - layer_conf.space_dot_num - layer_conf.circle_r - layer_conf.circle_stroke_width - layer_conf.rect_stroke_width - mod_pad_num);
  }
  pinNum.style("font-size", layer_conf.text_size + "px");
  pinNum.attr("text-anchor", anchor);
  pinNum.attr("font-weight", "bold");
  pinNum.attr("fill","black");
  pinNum.text(pin_label);
  pinNum.attr("font-family", "sans-serif");
  pinNum.attr("pin_id", pin_label);
}


function createPin(layer_svg, layer_conf, num, anchor, x, y, pad_type, mod_pad_num = 0) {

  if(pad_type == 0) {
    var pin = layer_svg.append("circle");
    pin.attr("cy", y);
    pin.attr("cx", x);
    pin.attr("r", layer_conf.circle_r);
    pin.attr("fill","white");
    pin.attr("stroke","black");
    pin.attr("stroke-width", layer_conf.circle_stroke_width);
    pin.attr("id", "pin" + num);
    pin.attr("pin_id", num);
    pin.attr("pin_arduino", num);
  } else if (pad_type == 1) {
    var pin = layer_svg.append("rect");
    pin.attr("y", y - layer_conf.pad_height/2);
    pin.attr("x", x - 3);
    pin.attr("width", layer_conf.pad_width);
    pin.attr("height", layer_conf.pad_height);
    pin.attr("fill","white");
    pin.attr("stroke","black");
    pin.attr("stroke-width", layer_conf.pad_stroke_width);
    pin.attr("id", "pin" + num);
    pin.attr("pin_id", num);
    pin.attr("pin_arduino", num);
  }

  var pinNumBg = layer_svg.append("rect");
  pinNumBg.attr("y", y-(layer_conf.rect_height/2));
  if(anchor == "start") {
    pinNumBg.attr("x", x + layer_conf.space_dot_num + layer_conf.circle_r + mod_pad_num);
  } else {
    pinNumBg.attr("x", x - layer_conf.space_dot_num - layer_conf.circle_r - layer_conf.num_width - mod_pad_num);
  }
  pinNumBg.attr("height", layer_conf.rect_height);
  pinNumBg.attr("width", layer_conf.num_width);
  pinNumBg.attr("id", "pinNumBg" + num);
  pinNumBg.attr("stroke","black");
  pinNumBg.attr("fill","white");
  pinNumBg.attr("pin_id", num);
  pinNumBg.attr("pin_arduino", num);

  var pinNum = layer_svg.append("text");
  pinNum.attr("y", y+(layer_conf.text_size/2)-2);
  if(anchor == "start") {
    pinNum.attr("x", x + layer_conf.space_dot_num + layer_conf.circle_r + layer_conf.circle_stroke_width + layer_conf.rect_stroke_width + mod_pad_num);
  } else {
    pinNum.attr("x", x - layer_conf.space_dot_num - layer_conf.circle_r - layer_conf.circle_stroke_width - layer_conf.rect_stroke_width - mod_pad_num);
  }
  pinNum.style("font-size", layer_conf.text_size + "px");
  pinNum.attr("text-anchor", anchor);
  pinNum.attr("id", "pinNum" + num);
  pinNum.attr("font-weight", "bold");
  pinNum.attr("fill","black");
  pinNum.text(num);
  pinNum.attr("font-family", "sans-serif");
  pinNum.attr("pin_id", num);
  pinNum.attr("pin_arduino", num);

  var pinTxtBg = layer_svg.append("rect");
  pinTxtBg.attr("y", y-(layer_conf.rect_height/2));
  if(anchor == "start") {
    pinTxtBg.attr("x", x + layer_conf.space_dot_num + layer_conf.space_num_txt + layer_conf.num_width + layer_conf.circle_r + layer_conf.circle_stroke_width + layer_conf.rect_stroke_width + mod_pad_num);
  } else {
      pinTxtBg.attr("x", x - layer_conf.space_dot_num - layer_conf.space_num_txt - layer_conf.num_width - layer_conf.txt_width - layer_conf.circle_r - layer_conf.circle_stroke_width - layer_conf.rect_stroke_width - mod_pad_num);
  }
  pinTxtBg.attr("height", layer_conf.rect_height);
  pinTxtBg.attr("width", layer_conf.txt_width);
  pinTxtBg.attr("id", "pinTxtBg" + num);
  pinTxtBg.attr("stroke","black");
  pinTxtBg.attr("fill","white");
  pinTxtBg.attr("pin_id", num);
  pinTxtBg.attr("pin_arduino", num);

  var pinTxt = layer_svg.append("text");
  pinTxt.attr("y", y+(layer_conf.text_size/2)-2);
  if(anchor == "start") {
    pinTxt.attr("x", x + layer_conf.space_dot_num + layer_conf.space_num_txt + layer_conf.num_width + layer_conf.circle_r + layer_conf.circle_stroke_width + (3*layer_conf.rect_stroke_width) + mod_pad_num);
  } else {
    pinTxt.attr("x", x - layer_conf.space_dot_num - layer_conf.space_num_txt - layer_conf.num_width - layer_conf.circle_r - layer_conf.circle_stroke_width - (3*layer_conf.rect_stroke_width) - mod_pad_num);
  }
  pinTxt.style("font-size", layer_conf.text_size + "px");
  pinTxt.attr("text-anchor", anchor);
  pinTxt.attr("id", "pinTxt" + num);
  pinTxt.attr("font-weight", "bold");
  pinTxt.attr("fill","black");
  pinTxt.text(num);
  pinTxt.attr("font-family", "sans-serif");
  pinTxt.attr("pin_id", num);
  pinTxt.pin_arduino = num;
}
