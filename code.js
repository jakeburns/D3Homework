var s = document.createElement("script");
s.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0];
body.after(s);

// paste first four lines first

var animals= ["penguin", "mouse", "cat", "dog"]

d3.select("body").append("ul")

var unorderedList = d3.select("ul");

animals.forEach(function(e){unorderedList.append("li").text(e)})
