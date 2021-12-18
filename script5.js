const paintWalls = function() {
    console.log("The wall has been painted red");
}
paintWalls();

const paintWallsWArgument = function(wallcolor) {
    console.log("The wall has been painted " + wallcolor);
}
paintWallsWArgument("Green");

const paintWallsWArguments = function(wallcolorNorth, wallcolorSouth) {
    console.log("The north wall has been painted " + wallcolorNorth);
    console.log("The south wall has been painted " + wallcolorSouth);
}
paintWallsWArguments("Blue","Yellow");