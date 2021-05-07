var a;

function setup() {
	frameRate(35);
	createCanvas(600, 600);
	a = new mouseEater();
}

function draw() {
	background(51);
	a.show();
	a.seek();
	a.update();
}

function mouseEater() {
	this.position = createVector(300, 300);
	this.acceleration = createVector(0, 0);
	this.targetTrajectory;
	this.targetPoint = createVector(mouseX, mouseY);

	this.show = function() {
		stroke(255);
		strokeWeight(15);
		point(this.position.x, this.position.y);

		strokeWeight(35);
		point(this.targetPoint.x, this.targetPoint.y);
	}

	this.update = function() {
		// TO-DO: add boundaries to moon
		// maybe a little cute bounce off the walls
		this.acceleration.sub(this.targetTrajectory);
		this.position.add(this.acceleration);
		this.acceleration.limit(30, 30);
		this.targetPoint.set(mouseX, mouseY);
	}

	this.seek = function() {
		this.targetTrajectory = p5.Vector.sub(this.position, this.targetPoint)
		this.targetTrajectory.normalize();
		this.targetTrajectory.mult(6);
	}

	this.debuggingTools = function() {
		console.log(this.targetPoint);
	}
}