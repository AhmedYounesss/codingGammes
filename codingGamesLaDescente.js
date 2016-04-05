/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop

while (true) {
    
    
    var maximum = 0;
    
    var imaximum = 0;
    for ( var i = 0; i < 8; i++) {
        
        var mountainH = parseInt(readline());
        if (mountainH > maximum) {
            maximum = mountainH;
            imaximum = i;
        }
    }

    print(imaximum);
}