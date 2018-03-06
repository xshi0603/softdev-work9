var c = document.getElementById("svgg");
var cbutton = document.getElementById("cbutton");

var x1 = 0;
var x2 = 0;

var y1 = 0;
var y2 = 0;

var first = true;

c.addEventListener('click', function(e) {

	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", e.offsetX);
	c1.setAttribute("cy", e.offsetY);
	c1.setAttribute("r", 10);
	c.append( c1);

	if (first) {
	    first = !first;
	    x1 = e.offsetX;
	    y1 = e.offsetY;
	}
	else {
	    x2 = x1;
	    y2 = y1;
	    x1 = e.offsetX;
	    y1 = e.offsetY;
	    c1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	    c1.setAttribute("x1", x1);
	    c1.setAttribute("x2", x2);
	    c1.setAttribute("y1", y1);
	    c1.setAttribute("y2", y2);
	    c1.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
	    c.append( c1);
	}	    

    });


cbutton.addEventListener('click', function() {
	
	while (c.firstChild) {
	    c.removeChild(c.firstChild);
	}	
	first = true;

    });
