
var testModule = (function(){

    var counter = 0;

    return {
        incrementCounter: function() {
            return ++counter;
        },
        restoreCount: function() {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    }
})();

testModule.incrementCounter();

testModule.restoreCount();

var myNamespace = (function() {

    var myPrivateVar = 0;

    var myPrivateMethod = function( foo ){
        console.log(foo);
    }

    return  {

        myPrivateMethod: "foo",
        
        myPublicFunction: function( bar ) {
            myPrivateVar++;

            myPrivateMethod( bar );
        }
    }
})();

var basketModule = (function() {

    var basket = [];
    function doSomethingPrivate() {
        // ...
    }

    function doSomethingElsePrivate() {
        // ...
    }

    return {
        addItem: function( value ){
            basket.push(value);
        },

        getItemCount: function() {
            return basket.length;
        },

        doSomething: doSomethingElsePrivate,
        
        getTotal: function() {

            var itemCount = this.getItemCount(),
            total = 0;

            while(itemCount--) {
                total += basket[itemCount].price;
            }

            return total;
        }
    };
});