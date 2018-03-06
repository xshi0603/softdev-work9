var c = document.getElementById("svgg");
var cbutton = document.getElementById("cbutton");

var createCircle = function (x, y, r, svg) {

	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", r);
	c1.setAttribute("fill", "blue");
	c1.addEventListener('click', changeGreen, true);
	svg.append( c1);

};

var createRandomCircle = function(e) {

	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var r = 10;
	var x = Math.floor(Math.random() * (500-r));
	var y = Math.floor(Math.random() * (500-r));
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", r);
	c1.setAttribute("fill", "pink");
	c1.addEventListener('click', changeGreen, true);
	c.append( c1);

	c.removeChild(this);
	e.stopPropagation();
};

var changeGreen = function(e) {

    //console.log("changing colora");;
    this.setAttribute("fill", "green");
    this.removeEventListener('click', changeGreen, true);
    this.addEventListener('click', createRandomCircle, true);
    e.stopPropagation();
    
    
};

//----------------EVENT LISTENERS---------------------
c.addEventListener('click', function(e) {

	createCircle(e.offsetX, e.offsetY, 10, this);
	//addEventListeners();

    });


cbutton.addEventListener('click', function() {
	
	while (c.firstChild) {
	    c.removeChild(c.firstChild);
	}	
	first = true;

    });
