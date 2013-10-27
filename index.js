/*
	An object that represents a 2D vector.
*/
function Vector2(x, y) {
	this.set(x, y);
}

/*
	Adds given values to this vector.
	Accepts either a Vector2 or an x and y value.
*/
Vector2.prototype.add = function(x, y) {
	if(x instanceof Vector2)
	{
		this.x += x.x;
		this.y += x.y;
	}
	else
	{
		this.x += x || 0;
		this.y += y || 0;
	}
	return this;
};

/*
	Returns a new identical Vector2.
*/
Vector2.prototype.clone = Vector2.prototype.copy = function() {
	return new Vector2(this.x, this.y);
};

/*
	Returns the cross product of this vector and another.
	Accepts either a Vector2 or an x and y value.
*/
Vector2.prototype.cross = function(x, y) {
	if(x instanceof Vector2)
		return this.x * x.y - this.y * x.x;
	return this.x * y - this.y * x;
};

/*
	Returns the distance between this vector and another.
	Accepts either a Vector2 or an x and y value.
*/
Vector2.prototype.distance = function(x, y) {
	var distSq = this.distanceSq(x, y);
	if(distSq === undefined)
		return undefined;
	return Math.sqrt(distSq);
};

/* 
	Returns the distance squared of this vector and another.
	Accepts either a Vector2 or an x and y value.
*/
Vector2.prototype.distanceSq = function(x, y) {
	var dx, dy;
	if(x instanceof Vector2)
	{
		dx = x.x - this.x;
		dy = x.y - this.y;
	}
	else if(y !== undefined)
	{
		dx = x - this.x;
		dy = y - this.y;
	}
	else
		return undefined;
	return dx * dx + dy * dy;
};

/*
	Returns the dot product of this vector and another.
	Accepts either a Vector2 or an x and y value.
*/
Vector2.prototype.dot = function(x, y) {
	if(x instanceof Vector2)
		return this.x * x.x + this.y * x.y;
	return this.x * x + this.y * y;
};

/*
	Returns true if this and another vector are equal or within an epsilon value
	Accepts either a Vector2 or an x and y value, and an optional epsilon value.
*/
Vector2.prototype.equals = function(x, y, epsilon) {
	
	if(x instanceof Vector2)
	{
		y = y || 0;
		return Math.abs(this.x - x.x) <= y && Math.abs(this.y - x.y) <= y;
	}
	else if(y !== undefined)
	{
		epsilon = epsilon || 0;
		return Math.abs(this.x - x) <= epsilon && Math.abs(this.y - y) <= epsilon;
	}
	else
		return false;
};

/*
	Returns the angle in radians of this vector
	relative to the x-axis (counter-clockwise).
	Will return a value between 0 and 2*pi
*/
Vector2.prototype.getAngle = function() {
	var angle = Math.atan2(this.y, this.x);
	if(angle < 0) angle += Math.PI*2;
	return angle;
};

/*
	Same as getAngle, but in degrees.
*/
Vector2.prototype.getAngleDeg = function() {
	return this.getAngle() * 180 / Math.PI;
};

/*
	Returns the length of this vector
*/
Vector2.prototype.length = function() {
	return Math.sqrt(this.lengthSq());
};

/*
	Returns the length squared of this vector
*/
Vector2.prototype.lengthSq = function() {
	return this.x * this.x + this.y * this.y;
};

/*
	Negates this vector. (Multiplies x and y by -1);
*/
Vector2.prototype.negate = function() {
	return this.scale(-1);
};

/*
	Normalizes this vector.
*/
Vector2.prototype.normalize = function() {
	return this.scale(1/this.length());
};

/*
	Rotates this vector by an angle in degrees counter-clockwise.
*/
Vector2.prototype.rotate = function(rad) {
	var cos = Math.cos(rad);
	var sin = Math.sin(rad);
	return this.set(this.x * cos - this.y * sin,
			this.x * sin + this.y * cos);
};

/*
	Same as rotate but in degrees.
*/
Vector2.prototype.rotateDeg = function(deg) {
	return this.rotate(deg / 180 * Math.PI)
};

/*
	Scales this vector by a scalar.
	Second argument to scale y separate from x is optional.
*/
Vector2.prototype.scale = function(scaleX, scaleY) {
	this.x *= scaleX;
	this.y *= (scaleY || scaleX);
	return this;
};

/*
	Sets this vector to the given values.
	Accepts either a Vector2 or an x and y value.
*/
Vector2.prototype.set = function(x, y) {
	if(x instanceof Vector2)
	{
		this.x = x.x;
		this.y = x.y;
	}
	else
	{
		this.x = x || 0;
		this.y = y || 0;
	}
	return this;
};

/*
	Rotates this vector to the given angle in radians.
*/
Vector2.prototype.setAngle = function(rad) {
	return this.set(this.length(), 0).rotate(rad);
};

/*
	Same as setAngle but in degrees.
*/
Vector2.prototype.setAngleDeg = function(deg) {
	return this.setAngle(deg / 180 * Math.PI);
};

/*
	Set this vector by angle in degrees and magnitude.
*/
Vector2.prototype.setPolar = function(rad, length) {
	return this.set(length, 0).rotate(rad);
};

/*
	Same as setPolar but in degrees.
*/
Vector2.prototype.setPolarDeg = function(deg, length) {
	return this.setPolar(deg / 180 * Math.PI, length);
};

/*
	Same as add, but subtracting.
*/
Vector2.prototype.sub = function(x, y) {
	if(y !== undefined)
	{
		this.x -= x;
		this.y -= y;
	}
	else
	{
		this.x -= x.x;
		this.y -= x.y;
	}
	return this;
};

/*
	Returns a string representation of this vector.
*/
Vector2.prototype.toString = function() {
	return "(" + this.x + ", " + this.y + ")";
};
//Vector2.prototype.crossproduct
//Vector2.prototype.dotproduct

module.exports = Vector2;