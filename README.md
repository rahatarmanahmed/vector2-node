vector2-node
============
An object representing a 2D vector.

## Vector2(Vector2)
## Vector2(x, y)
Constructor for Vector2.

## add(Vector2)
## add(x, y)
Adds given values to this vector.
Returns this vector for chaining.

## clone()
## copy()
Returns a new identical Vector2.

## cross(Vector2)
## cross(x, y)
Returns the cross product of this vector and another.

## distance(Vector2)
## distance(x, y)
Returns the distance between this vector and another.

## distanceSq(Vector2)
## distanceSq(x, y)
Returns the distance squared of this vector and another.

## dot(Vector2)
## dot(x, y)
Returns the dot product of this vector and another.

## equals
### equals(Vector2)
Returns true if this and another vector2 are equal.
### equals(Vector2, epsilon)
Returns true if this and another vector2 are equal within an epsilon.
### equals(x, y)
Returns true if this vector equals given x, y components.
### equals(x, y, epsilon)
Returns true if this vector equasl given x, y components within an epsilon.

## getAngle()
Returns the angle in radians of this vector
relative to the x-axis (counter-clockwise)
in the range 0 to 2 * PI.

## getAngleDeg()
Same as getAngle, but in degrees.

## length()
Returns the length of this vector.

## lengthSq()
Returns the length squared of this vector.

## negate()
Negates this vector. (Multiplies x and y by -1).
Returns this vector for chaining.

##normalize()
Normalizes this vector.
Returns this vector for chaining.

## rotate(radians)
Rotates this vector by an angle in degrees counter-clockwise.
Returns this vector for chaining.

## rotateDeg(degrees)
Same as rotate but in degrees.

## scale(scale)
## scale(scaleX, scaleY)
Scales this vector by a scalar.
Second argument to scale y separate from x is optional.
Returns this vector for chaining.

## set(Vector2)
## set(x, y)
Sets this vector to the given values.
Returns this vector for chaining.

## setAngle(radians)
Rotates this vector to the given angle in radians.
Returns this vector for chaining.

## setAngleDeg(degrees)
Same as setAngle but in degrees.

## setPolar(radians, length)
Set this vector by angle in degrees and magnitude.
Returns this vector for chaining.

## setPolarDeg(degrees, length)
Same as setPolar but in degrees.

## sub(Vector2)
## sub(x, y)
Same as add, but subtracting.
Returns this vector for chaining.

## toString()
Returns a string representation of this vector.

