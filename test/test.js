function aa() {
    console.log('I am outside')
}

;
(function() {
    if (false) {
        function bb() {
            console.log('I am inside')
        }
    }
    aa()
}())