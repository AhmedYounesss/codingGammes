/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse

//Supprimer les espaces entre les valeurs
var temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
// To debug: printErr('Debug messages...');

//Créer une variable temporaire 
var Valtemps = temps[0];

//Créer une boucle for pour voir que le nombre est supérieur à 0 
if(n !== 0){
    for(i=1;i<n;i++){
        //Premiere condition
        if(temps[i] > 0 && temps[i] < Valtemps){
            Valtemps = temps[i]
            //2 eme condition
        }else if(temps[i] < 0 && temps[i] > Valtemps){
            Valtemps = temps[i];
        }
    }
    print(Valtemps);
//afficher 0 si le nombre de valeurs entre est égale à zéro
}else{
    print(0);
}