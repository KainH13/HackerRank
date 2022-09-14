// simple class initialization
class Rectangle {
  constructor(height, width, sides) {
    this.height = height;
    this.width = width;
    this.sides = sides;
  }
  // getter
  get area() {
    return this.calcArea();
  }
  // method
  calcArea() {
    return this.height * this.width;
  }
  // generator method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}

// using a class expression and variable
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// static method example
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // called with Point.displayName or Point.distance(p1, p2)
  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

// inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

// cons d = new Dog('Mitzie');
// d.speak(); // Mitzie Barks.
