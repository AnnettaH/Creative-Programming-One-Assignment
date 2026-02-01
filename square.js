class Square {
  //declare the fields
  #xCoord;
  #yCoord;
  #length;

  //declare the constructor
  constructor(x, y, l) {
    this.#xCoord = x;
    this.#yCoord = y;
    this.#length = l;
  }

  //declare the functions
  draw() {
    square(this.#xCoord, this.#yCoord, this.#length);
  }

  moveUp() {
    if (this.#yCoord > 0) {
      //Boundaries
      this.#yCoord = this.#yCoord - 5;
    }
  } // End of moveUp

  moveDown() {
    if (this.#yCoord < 175) {
      this.#yCoord = this.#yCoord + 5;
    }
  } // End of moveDown

  moveLeft() {
    if (this.#xCoord > 0) {
      this.#xCoord = this.#xCoord - 5;
    }
  } // End of moveLeft

  moveRight() {
    if (this.#xCoord < 175) {
      // 175 = canvas - length of square;
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
  get length() {
    return this.#length;
  }

  set xCoord(xCoord) {
    this.#xCoord = xCoord;
  }
  set yCoord(yCoord) {
    this.#yCoord = yCoord;
  }
  set length(length) {
    this.#length = length;
  }
}
