//Add blank method to String objects.
String.prototype.blank = function() {
  return !!(this.match(/^\s*$/g));
}

Array.prototype.last = function() {
  return this[this.length-1];
}
