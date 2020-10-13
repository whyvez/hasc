'use strict';

class HASC {
  constructor(code) {
    this.hasc = code;
  }

  get code() {
    return this.hasc;
  }

  get level() {
    return HASC.getLevel(this.hasc);
  }

  static getLevel(code) {
    return code.split('.').length-1;
  }

  within(code) {
    if (HASC.getLevel(this.hasc) > HASC.getLevel(code)) {
        return this.hasc.match(code)[0] === code;
    } else {
        return false;
    }
  }

  contains(code) {
    if (HASC.getLevel(this.hasc) < HASC.getLevel(code)) {
        return code.match(this.hasc)[0] === this.code;
    } else {
        return false;
    }
  }
}

module.exports = HASC;