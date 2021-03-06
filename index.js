// # Vector2
// An object representing a 2D vector.
// Based on the [Vector2 class from LibGDX.](http://libgdx.badlogicgames.com/nightlies/docs/api/com/badlogic/gdx/math/Vector2.html)

// Written by [Rahat Ahmed](http://rahatah.me/d).

// ## Vector2(Vector2)
// ## Vector2(x, y)
// Constructor for Vector2.
function Vector2(x, y) {
	this.set(x, y);
}

// ## add(Vector2)
// ## add(x, y)
// Adds given values to this vector.
// Returns this vector for chaining.
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

// ## angle
// ### angle()
// Returns the angle in radians of this vector
// relative to the x-axis (counter-clockwise)
// in the range 0 to 2 * PI.
// ### angle(radians)
// Rotates this vector to the given angle in radians.
// Returns this vector for chaining.
Vector2.prototype.angle = function(rad) {
	if(rad !== undefined)
		return this.set(this.length(), 0).rotate(rad);
	var angle = Math.atan2(this.y, this.x);
	if(angle < 0) angle += Math.PI*2;
	return angle;
};

// ## angleDeg
// ### angleDeg()
// Same as angle() but in degrees.
// ### angleDeg(degrees)
// Same as angle(radians) but in degrees.
Vector2.prototype.angleDeg = function(deg) {
	if(deg !== undefined)
		return this.angle(deg / 180 * Math.PI);
	return this.angle() * 180 / Math.PI;
};

// ## clone()
// ## copy()
// Returns a new identical Vector2.
Vector2.prototype.clone = Vector2.prototype.copy = function() {
	return new Vector2(this.x, this.y);
};

// ## cross(Vector2)
// ## cross(x, y)
// Returns the cross product of this vector and another.
Vector2.prototype.cross = function(x, y) {
	if(x instanceof Vector2)
		return this.x * x.y - this.y * x.x;
	return this.x * y - this.y * x;
};

// ## distance(Vector2)
// ## distance(x, y)
// Returns the distance between this vector and another.
Vector2.prototype.distance = function(x, y) {
	var distSq = this.distanceSq(x, y);
	if(distSq === undefined)
		return undefined;
	return Math.sqrt(distSq);
};

// ## distanceSq(Vector2)
// ## distanceSq(x, y)
// Returns the distance squared of this vector and another.
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

// ## dot(Vector2)
// ## dot(x, y)
// Returns the dot product of this vector and another.
Vector2.prototype.dot = function(x, y) {
	if(x instanceof Vector2)
		return this.x * x.x + this.y * x.y;
	return this.x * x + this.y * y;
};

// ## equals
// ### equals(Vector2)
// Returns true if this and another vector2 are equal.
// ### equals(Vector2, epsilon)
// Returns true if this and another vector2 are equal within an epsilon.
// ### equals(x, y)
// Returns true if this vector equals given x, y components.
// ### equals(x, y, epsilon)
// Returns true if this vector equals given x, y components within an epsilon.
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

// ## length()
// Returns the length of this vector.
Vector2.prototype.length = function() {
	return Math.sqrt(this.lengthSq());
};

// ## lengthSq()
// Returns the length squared of this vector.
Vector2.prototype.lengthSq = function() {
	return this.x * this.x + this.y * this.y;
};

// ## negate()
// Negates this vector. (Multiplies x and y by -1).
// Returns this vector for chaining.
Vector2.prototype.negate = function() {
	return this.scale(-1);
};

// ##normalize()
// Normalizes this vector.
// Returns this vector for chaining.
Vector2.prototype.normalize = function() {
	return this.scale(1/this.length());
};

// ## rotate(radians)
// Rotates this vector by an angle in degrees counter-clockwise.
// Returns this vector for chaining.
Vector2.prototype.rotate = function(rad) {
	var cos = Math.cos(rad);
	var sin = Math.sin(rad);
	return this.set(this.x * cos - this.y * sin,
			this.x * sin + this.y * cos);
};

// ## rotateDeg(degrees)
// Same as rotate but in degrees.
Vector2.prototype.rotateDeg = function(deg) {
	return this.rotate(deg / 180 * Math.PI)
};

// ## scale(scale)
// ## scale(scaleX, scaleY)
// Scales this vector by a scalar.
// Second argument to scale y separate from x is optional.
// Returns this vector for chaining.
Vector2.prototype.scale = function(scaleX, scaleY) {
	this.x *= scaleX;
	this.y *= (scaleY || scaleX);
	return this;
};

// ## set(Vector2)
// ## set(x, y)
// Sets this vector to the given values.
// Returns this vector for chaining.
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

// ## setPolar(radians, length)
// Set this vector by angle in degrees and magnitude.
// Returns this vector for chaining.
Vector2.prototype.setPolar = function(rad, length) {
	return this.set(length, 0).rotate(rad);
};

// ## setPolarDeg(degrees, length)
// Same as setPolar but in degrees.
Vector2.prototype.setPolarDeg = function(deg, length) {
	return this.setPolar(deg / 180 * Math.PI, length);
};

// ## sub(Vector2)
// ## sub(x, y)
// Same as add, but subtracting.
// Returns this vector for chaining.
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

// ## toString()
// Returns a string representation of this vector.
Vector2.prototype.toString = function() {
	return "(" + this.x + ", " + this.y + ")";
};

module.exports = Vector2;