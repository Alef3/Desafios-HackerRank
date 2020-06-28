function catAndMouse(x, y, z) {
    //Distancia dos gatos até o rato
    var distCatA = z - x;
    var distCatB = z - y;
    
    //Módulo da distância
    if(distCatA < 0) distCatA = distCatA * (-1);
    if(distCatB < 0) distCatB = distCatB * (-1);
    
    if(distCatA == distCatB) return "Mouse C";
    else if(distCatA < distCatB) return "Cat A";
        else return "Cat B";

}