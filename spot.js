class Spot {
  //declare the fields
  #xCoord;
  #yCoord;
  #diameter;

  //declare the constructor
  constructor(x, y, d) {
    this.#xCoord = x;
    this.#yCoord = y;
    this.#diameter = d;
  }

  //declare the functions
  draw() {
    ellipse(this.#xCoord, this.#yCoord, this.#diameter, this.#diameter);
  }

  moveUp() {
    if (this.#yCoord > 15) {
      //Boundaries
      this.#yCoord = this.#yCoord - 5;
    }
  } // End of moveUp

  moveDown() {
    if (this.#yCoord < 185) {
      this.#yCoord = this.#yCoord + 5;
    }
  } // End of moveDown

  moveLeft() {
    if (this.#xCoord > 15) {
      this.#xCoord = this.#xCoord - 5;
    }
  } // End of moveLeft

  moveRight() {
    if (this.#xCoord < 185) {
      this.#xCoord = this.#xCoord + 5;
    }
  } // End of moveRight

  //Declare getters and setters
  get xCoord() {
    return this.#xCoord;
  }
  get yCoord() {
    return this.#yCoord;
  }
  get diameter() {
    return this.#diameter;
  }

  set xCoord(xCoord) {
    this.#xCoord = xCoord;
  }
  set yCoord(yCoord) {
    this.#yCoord = yCoord;
  }
  set diameter(diameter) {
    this.#diameter = diameter;
  }
}
