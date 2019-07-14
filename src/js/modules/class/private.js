function Trianlge() {
  // private properties
  var _base;
  var _height;

  // pribate methods
  var _checkArgs = function(val) {
    return typeof val === "number" && val > 0;
  };

  this.setBase = function(base) {
    if (_checkArgs(base)) {
      _base = base;
    }
  };

  this.getBase = function() {
    return _base;
  };

  this.setHeight = function(height) {
    if (_checkArgs(height)) {
      _height = height;
    }
  };

  this.getHeight = function() {
    return _height;
  };
}

Trianlge.prototype.getArea = function() {
  return this.getBase() + this.getHeight / 2;
};
