/*
  US Map Choropleth with Bar
  Copyright: VIDA LAB INC.
  License: BSD
*/0

/*--- IMPORTANT GUIDELINES ---
1. Use div #canvas-svg for svg rendering
    var svg = d3.select("#canvas-svg");
2. 'data' variable contains JSON data from Data tab
    Do NOT overwrite this variable 
3. To define customizable properties, use capitalized variable names,
    and define them in Properties tab ---*/

var WIDTH = 800, HEIGHT = 400;

var COLOR_COUNTS = 9;

var SCALE = 0.7;

var MAIN_CATEGORY = config.mainCategory;
var AVG_CATEGORY = config.averageCategory;

function Interpolate(start, end, steps, count) {
    var s = start,
        e = end,
        final = s + (((e - s) / steps) * count);
    return Math.floor(final);
}

function Color(_r, _g, _b) {
    var r, g, b;
    var setColors = function(_r, _g, _b) {
        r = _r;
        g = _g;
        b = _b;
    };

    setColors(_r, _g, _b);
    this.getColors = function() {
        var colors = {
            r: r,
            g: g,
            b: b
        };
        return colors;
    };
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var COLOR_FIRST = config.color1, COLOR_LAST = config.color2;

var rgb = hexToRgb(COLOR_FIRST);

var COLOR_START = new Color(rgb.r, rgb.g, rgb.b);

rgb = hexToRgb(COLOR_LAST);
var COLOR_END = new Color(rgb.r, rgb.g, rgb.b);

var MAP_CATEGORY = config.stateDataColumn;
var MAP_VALUE = config.valueDataColumn;

var width = WIDTH,
    height = HEIGHT;

var valueById = d3.map();

var startColors = COLOR_START.getColors(),
    endColors = COLOR_END.getColors();

var colors = [];

for (var i = 0; i < COLOR_COUNTS; i++) {
  var r = Interpolate(startColors.r, endColors.r, COLOR_COUNTS, i);
  var g = Interpolate(startColors.g, endColors.g, COLOR_COUNTS, i);
  var b = Interpolate(startColors.b, endColors.b, COLOR_COUNTS, i);
  colors.push(new Color(r, g, b));
}

var quantize = d3.scale.quantize()
    .domain([0, 1.0])
    .range(d3.range(COLOR_COUNTS).map(function(i) { return i }));

var path = d3.geo.path();

var svg = d3.select("#canvas-svg").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.tsv("https://s3-us-west-2.amazonaws.com/vida-public/geo/us-state-names.tsv", function(error, names) {

name_id_map = {};
id_name_map = {};

for (var i = 0; i < names.length; i++) {
  name_id_map[names[i].name] = names[i].id;
  id_name_map[names[i].id] = names[i].name;
}

data.forEach(function(d) {
  var id = name_id_map[d[MAP_CATEGORY]];
  valueById.set(id, +d[MAP_VALUE]); 
});

quantize.domain([d3.min(data, function(d){ return +d[MAP_VALUE] }),
  d3.max(data, function(d){ return +d[MAP_VALUE] })]);

function makeBars() {
  var names = [],
      ids = [],
      name_values = [],
      values = [],
      chart,
      width = 400,
      bar_height = 20,
      height = (bar_height + 2 * gap) * names.length;
  
  var total_categories = 0, categories_count = 0;
  Object.keys(name_id_map).forEach(function(n) {
    if (valueById.get(+name_id_map[n])) {
      ids.push(+name_id_map[n]);
      values.push(valueById.get(+name_id_map[n]));
      name_values.push({name: n, value: valueById.get(+name_id_map[n])});
      total_categories += valueById.get(+name_id_map[n]);
      categories_count++;
    }
  });
  
  values.push(Math.round(total_categories / categories_count));
  name_values.push({name: AVG_CATEGORY, value: Math.round(total_categories / categories_count)});
  
  values = values.sort(function(a, b) {
    return -(a - b);
  });
  
  name_values = name_values.sort(function(a, b) {
    return -(a.value - b.value);
  });
  
  name_values.forEach(function(d) {
    names.push(d.name);
  });

  var left_width = 150;
  
  var x = d3.scale.linear()
     .domain([0, d3.max(values)])
     .range([0, width]);
  
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top");
 
  var gap = 2;
  // redefine y for adjusting the gap
  var y = d3.scale.ordinal()
    .domain(names)
    .rangeBands([0, (bar_height + 2 * gap) * names.length]);

  chart = d3.select("#canvas-svg")
    .append('svg')
    .attr('class', 'chart')
    .attr('width', left_width + width + 100)
    .attr('height', (bar_height + gap * 2) * names.length + 60)
    .append("g")
    .attr("transform", "translate(10, 40)");

  chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + left_width + ", 0)")
    .call(xAxis)
  .append("text")
    .attr("transform", "rotate(0) translate(" + (width) + ", " + (0) + ")")
    .attr("y", -30)
    .attr("dy", "0em")
    .style("text-anchor", "end")
    .text(MAP_VALUE);

  chart.selectAll(".tick").append("line")
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", 0)
    .attr("y2", (bar_height + gap * 2) * names.length);

  chart.selectAll("rect")
    .data(name_values)
    .enter().append("rect")
    .attr("x", left_width)
    .attr("y", function(d) { return y(d.name) + gap; })
    .attr("name", function(d, i) {
      return d.name;
    })
    .attr("width", function(d, i) {
      return x(d.value);
    })
    .attr("height", bar_height)
    .style("fill", function(d) {
      var i = quantize(d.value);
      var color = colors[i].getColors();
      return "rgb(" + color.r + "," + color.g +
          "," + color.b + ")";
    })
    .attr("class", function(d) {
      if (d.name === MAIN_CATEGORY || d.name === AVG_CATEGORY) {
        return "main-category-bar";
      } else {
        return "category-bar";
      }
    });

  chart.selectAll("text.score")
    .data(name_values)
    .enter().append("text")
    .attr("x", function(d) { return x(d.value) + left_width; })
    .attr("y", function(d, i){ return y(d.name) + y.rangeBand()/2; } )
    .attr("dx", 5)
    .attr("dy", ".36em")
    .attr("text-anchor", "left")
    .attr('class', 'score')
    .text(function(d) {
      return d.value;
    });
 
  chart.selectAll("text.name")
    .data(name_values)
    .enter().append("text")
    .attr("x", left_width / 2)
    .attr("y", function(d, i){
      return y(d.name) + y.rangeBand()/2; } )
    .attr("dy", ".36em")
    .attr("text-anchor", "middle")
    .attr('class', function(d) {
      if (d.name === MAIN_CATEGORY || d.name === AVG_CATEGORY) {
        return "main-category-text";
      } else {
        return "";
      }
    })
    .text(function(d) {
      return d.name;
    });
}

function makeMap(us) {
  svg.append("g")
      .attr("class", "categories-choropleth")
    .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
      .attr("transform", "scale(" + SCALE + ")")
      .style("fill", function(d) {
        if (valueById.get(d.id)) {
          var i = quantize(valueById.get(d.id));
          var color = colors[i].getColors();
          return "rgb(" + color.r + "," + color.g +
              "," + color.b + ")";
        } else {
          return "";
        }
      })
      .attr("d", path)
      .on("mousemove", function(d) {
          var html = "";

          html += "<div class=\"tooltip_kv\">";
          html += "<span class=\"tooltip_key\">";
          html += id_name_map[d.id];
          html += "</span>";
          html += "<span class=\"tooltip_value\">";
          html += (valueById.get(d.id) ? valueById.get(d.id) : "");
          html += "";
          html += "</span>";
          html += "</div>";
          
          $("#tooltip-container").html(html);
          $(this).attr("fill-opacity", "0.8");
          $("#tooltip-container").show();
          
          var coordinates = d3.mouse(this);
          
          var map_width = $('.categories-choropleth')[0].getBoundingClientRect().width;
          
          if (d3.event.layerX < map_width / 2) {
            d3.select("#tooltip-container")
              .style("top", (d3.event.layerY + 15) + "px")
              .style("left", (d3.event.layerX + 15) + "px");
          } else {
            var tooltip_width = $("#tooltip-container").width();
            d3.select("#tooltip-container")
              .style("top", (d3.event.layerY + 15) + "px")
              .style("left", (d3.event.layerX - tooltip_width - 30) + "px");
          }
      })
      .on("mouseout", function() {
              $(this).attr("fill-opacity", "1.0");
              $("#tooltip-container").hide();
          })
        
      .on("click", function(d) {
        alert(JSON.stringify(d));
        //location.href='http://www.mardianputera.com'
      });

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "categories")
      .attr("transform", "scale(" + SCALE + ")")
      .attr("d", path);
}

d3.json("https://s3-us-west-2.amazonaws.com/vida-public/geo/us.json", function(error, us) {
  makeMap(us);
  makeBars(data);
});

});
