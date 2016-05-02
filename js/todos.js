(function(window, ns) {
    var todo = {
        get: function() {
            return "todo";
        },
        getInt: function() {
            return 100;
        }
    };
    window[ns] = todo;    
})(window, "todo");