

        // Check if file is completely ready
        $(document).ready(function () {
  
            // Adding click event on id div-1
            // if it clicked then anonymous
            // function will be called
            $('#l1').click(function () {
  
                // Load the exertnal html
                // here this refers to 
                // current selector
                $('#target').load('intro.html');

            });
        });
        
        $(document).ready(function () {
            $('#l2').click(function () {
                $('#target').load('why.html');
            });
        });
        
        $(document).ready(function () {
            $('#l3').click(function () {
                $('#target').load('js_java.html');
            });
        });
        
        $(document).ready(function () {
            $('#l4').click(function () {
                $('#target').load('hw.html');
            });
        });
        
        $(document).ready(function () {
            $('#l5').click(function () {
                $('#target').load('var.html');
            });
        });
        $(document).ready(function () {
            $('#l6').click(function () {
                $('#target').load('vard.html');
            });
        });
        $(document).ready(function () {
            $('#l7').click(function () {
                $('#target').load('varscope.html');
            });
        });

