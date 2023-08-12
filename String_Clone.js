// Define class StringClone
function StringClone(s) {
    this.value = s || '';
    Object.defineProperty(this, 'length', {get:
                function () { return this.value.length; }});    //(3)
};
StringClone.prototype = Object.create(String.prototype);        //(1)
StringClone.prototype.toString = StringClone.prototype.valueOf
                               = function(){return this.value}; //(2)

                               StringClone.prototype[Symbol.toPrimitive] = function(hint) {
                                return this.value;
                              }

// Example, create instance author:
var author = new StringClone('John Doe');  
author.length;           // 8
author.toUpperCase();    // JOHN DOE

// Extend class with a trivial method
StringClone.prototype.splitName = function(){
     var name = {first: this.substr(0,4), last: this.substr(4) };
     return name;
}

author.splitName().first; // John
author.splitName().last;  // Doe


console.log('author', author);

// Seems too combersome.