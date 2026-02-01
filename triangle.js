class Triangle {
  //Declare the fields
  #x1;
  #y1;
  #x2;
  #y2;
  #x3;
  #y3;

  //Declare the constructor
  constructor(x1, y1, x2, y2, x3, y3) {
    this.#x1 = x1;

    this.#y1 = y1;

    this.#x2 = x2;

    this.#y2 = y2;

    this.#x3 = x3;

    this.#y3 = y3;
  }

  //Declare the functions
  draw() {
    triangle(this.#x1, this.#y1, this.#x2, this.#y2, this.#x3, this.#y3);
  }
  moveUp() {
    if (this.#y1 > 0 && this.#y2 > 0 && this.#y3 > 0) {
      this.#y1 = this.#y1 - 5;
      this.#y2 = this.#y2 - 5;
      this.#y3 = this.#y3 - 5;
    }
  } //End of moveUp

  moveDown() {
    if (this.#y1 < 200 && this.#y2 < 200 && this.#y3 < 200) {
      this.#y1 = this.#y1 + 5;
      this.#y2 = this.#y2 + 5;
      this.#y3 = this.#y3 + 5;
    }
  } //End of moveDown
  moveLeft() {
    if (this.#x1 > 0 && this.#x2 > 0 && this.#x3 > 0) {
      this.#x1 = this.#x1 - 5;
      this.#x2 = this.#x2 - 5;
      this.#x3 = this.#x3 - 5;
    }
  } //End of moveLeft
  moveRight() {
    if (this.#x1 < 200 && this.#x2 < 200 && this.#x3 < 200) {
      this.#x1 = this.#x1 + 5;
      this.#x2 = this.#x2 + 5;
      this.#x3 = this.#x3 + 5;
    }
  } //End of moveRight

  //Declare getters and setters

  //Getters
  get x1() {
    return this.#x1;
  }

  get y1() {
    return this.#y1;
  }

  get x2() {
    return this.#x2;
  }

  get y2() {
    return this.#y2;
  }

  get x3() {
    return this.#x3;
  }

  get y3() {
    return this.#y3;
  }

  //Setters
  set x1(x1) {
    this.#x1 = x1;
  }

  set y1(y1) {
    this.#y1 = y1;
  }

  set x2(x2) {
    this.#x2 = x2;
  }

  set y2(y2) {
    this.#y2 = y2;
  }

  set x3(x3) {
    this.#x3 = x3;
  }

  set y3(y3) {
    this.#y3 = y3;
  }
}
