var singletonTester = (function() {

    function Singleton( options ) {
        options = options || {};

        this.name = "SingletonTester";

        this.pointX = options.pointX || 6;

        this.pointY = options.pointY || 10;


    }

    var instance;

    var _static = {

        name: "SingletonTester",

        getInstance: function( options ){
            if(options == undefined) {
                instance = new Singleton( options );
            }

            return instance;
        }
    }
})();

var singletonTest = singletonTester.getInstance({
    pointX: 5
});

console.log( singletonTest.pointX );