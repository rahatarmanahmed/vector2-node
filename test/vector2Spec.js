var Vector2 = require('../index.js');
var epsilon = 0.0000000001;

describe("Vector2 test suite:", function() {
	var a, b, c;
	beforeEach(function() {
		// Vector matcher
		this.addMatchers({
			toBeVector: function(x, y) {
				return this.actual.equals(x, y, epsilon);
			}
		});
		// Arbitrary test values
		a = new Vector2();
		b = new Vector2(1, 2);
		c = new Vector2(-2, 3);
	});

	it("constructor/set", function() {
		expect(a).toBeVector(0, 0);
		expect(b).toBeVector(1, 2);
		expect(c).toBeVector(-2, 3);
	});

	describe("add", function() {
		it("two scalars", function() {
			expect(b.add(10, -10)).toBeVector(11, -8);
			expect(b).toBeVector(11, -8);
		});

		it("Vector2", function() {
			expect(b.add(c)).toBeVector(-1, 5);
			expect(b).toBeVector(-1, 5);
		});
	});

	describe("angle", function() {
		it("get", function() {
			expect(a.angle()).toBe(0);
			expect(b.angle()).toBe(1.1071487177940904);
			expect(new Vector2(1, -1).angle()).toBe(5.497787143782138);
		});


		it("set", function() {
			b.angle(0);
			expect(b).toBeVector(Math.sqrt(5), 0);
			expect(c.angle(Math.PI/4)).toBeVector(Math.sqrt(13)*Math.sqrt(2)/2, Math.sqrt(13)*Math.sqrt(2)/2);
		});
	});

	describe("angleDeg", function() {
		it("get", function() {
			expect(a.angleDeg()).toBe(0);
			expect(b.angleDeg()).toBe(63.43494882292201);
			expect(new Vector2(1, -1).angleDeg()).toBe(315);
		});

		it("set", function() {
			b.angleDeg(0);
			expect(b).toBeVector(Math.sqrt(5), 0);
			expect(c.angleDeg(45)).toBeVector(Math.sqrt(13)*Math.sqrt(2)/2, Math.sqrt(13)*Math.sqrt(2)/2);
		});
	});
	

	it("copy/clone", function() {
		var d = a.copy();
		expect(d).toBeVector(0, 0);
		d.add(1, 1);
		expect(d).toBeVector(1, 1);
		expect(a).toBeVector(0, 0);
	});

	it("cross", function() {
		expect(b.cross(c)).toBe(7);
		expect(b.cross(-2, 3)).toBe(7);
	});

	it("distance", function() {
		expect(b.distance(c)).toBe(Math.sqrt(10));
		expect(b.distance(-2, 3)).toBe(Math.sqrt(10));
		expect(b.distance()).toBeUndefined();
	});

	it("distanceSq", function() {
		expect(b.distanceSq(c)).toBe(10);
		expect(b.distanceSq(-2, 3)).toBe(10);
		expect(b.distanceSq()).toBeUndefined();
	});

	it("dot", function() {
		expect(b.dot(c)).toBe(4);
		expect(b.dot(-2, 3)).toBe(4);
	});

	describe("equals", function() {

		it("other Vector2", function() {
			expect(a.equals(a)).toBeTruthy();
			expect(a.equals(b)).toBeFalsy();
			expect(a.equals(new Vector2(0, 0))).toBeTruthy();
			expect(a.equals(new Vector2(1, 1))).toBeFalsy();
		});
		it("two scalars", function() {
			expect(a.equals(0, 0)).toBeTruthy();
			expect(a.equals(1, 2)).toBeFalsy();
		});
		it("invalid", function() {
			expect(a.equals(0)).toBeFalsy();
			expect(a.equals()).toBeFalsy();
		});
		it("epsilon", function() {
			expect(a.equals(new Vector2(0, 0.0001), 0.001)).toBeTruthy();
			expect(a.equals(new Vector2(0, 0.001), 0.0001)).toBeFalsy();
			expect(a.equals(0, 0.0001, 0.001)).toBeTruthy();
			expect(a.equals(0, 0.001, 0.0001)).toBeFalsy();
		});

	});

	it("length", function() {
		expect(a.length()).toBe(0);
		expect(b.length()).toBe(Math.sqrt(5));
		expect(c.length()).toBe(Math.sqrt(13));
	});

	it("lengthSq", function() {
		expect(a.lengthSq()).toBe(0);
		expect(b.lengthSq()).toBe(5);
		expect(c.lengthSq()).toBe(13);
	});

	it("negate", function() {
		expect(a.negate()).toBeVector(0, 0);
		expect(b.negate()).toBeVector(-1, -2);
		expect(c.negate()).toBeVector(2, -3);
		expect(b).toBeVector(-1, -2);
	});

	it("normalize", function() {
		expect(new Vector2(0, 20).normalize()).toBeVector(0, 1);
		expect(new Vector2(0, -20).normalize()).toBeVector(0, -1);
		expect(new Vector2(20, 0).normalize()).toBeVector(1, 0);
		expect(new Vector2(-20, 0).normalize()).toBeVector(-1, 0);
		b.normalize();
		expect(b).toBeVector(0.4472135954999579, 0.8944271909999159);
	});

	it("rotate", function() {
		var d = new Vector2(1, 0).rotate(Math.PI/2);
		expect(d).toBeVector(0, 1);
		expect(d.rotate(-Math.PI/4)).toBeVector(Math.sqrt(2)/2, Math.sqrt(2)/2);
	});

	it("rotateDeg", function() {
		var d = new Vector2(1, 0).rotateDeg(90);
		expect(d).toBeVector(0, 1);
		expect(d.rotateDeg(-45)).toBeVector(Math.sqrt(2)/2, Math.sqrt(2)/2);
	});

	it("scale", function() {
		expect(b.scale(2)).toBeVector(2, 4);
		expect(b).toBeVector(2, 4);
		expect(b.scale(-1)).toBeVector(-2, -4);
		expect(b.scale(0.5)).toBeVector(-1, -2);
		expect(b.scale(1,-1)).toBeVector(-1, 2);
	});


	it("setPolar", function() {
		b.setPolar(0, 1);
		expect(b).toBeVector(1, 0);
		expect(b.setPolar(Math.PI/4, 2)).toBeVector(Math.sqrt(2), Math.sqrt(2));
	});

	it("setPolarDeg", function() {
		b.setPolarDeg(0, 1);
		expect(b).toBeVector(1, 0);
		expect(b.setPolarDeg(45, 2)).toBeVector(Math.sqrt(2), Math.sqrt(2));
	});

	describe("sub", function() {
		it("two scalars", function() {
			expect(b.sub(10, -10)).toBeVector(-9, 12);
			expect(b).toBeVector(-9, 12);
		});

		it("Vector2", function() {
			expect(b.sub(c)).toBeVector(3, -1);
			expect(b).toBeVector(3, -1);
		});
	});

	it("toString", function() {
		expect(a.toString()).toBe("(0, 0)");
		expect(b.toString()).toBe("(1, 2)");
		expect(c.toString()).toBe("(-2, 3)");
	});
});