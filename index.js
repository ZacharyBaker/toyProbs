function findPath(matrix) {
    var currentNumber = 1;
    var Row;
    var Collumn;
    var colMax = matrix[0].length;
    var rowMax = matrix.length;
    var finalNumber = matrix.length * matrix[0].length;
    for (var i = 0; i < matrix.length; i++){
        for (var j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === 1){
                Row = i;
                Collumn = j;
            }
        }
    }
    
    while (currentNumber !== finalNumber){
        
            if (([Row+1] in matrix) && matrix[Row+1][Collumn] === currentNumber + 1 ){
                currentNumber +=1;
                Row +=1;
            
            
            } else if ( [Row-1] in matrix && matrix[Row-1][Collumn] === currentNumber + 1 ){
                    currentNumber +=1;
                    Row -=1;
            } else if ([Collumn+1] in matrix[Row] && matrix[Row][Collumn+1] === currentNumber + 1 ){
                    currentNumber +=1;
                    Collumn +=1;
                
            } else if ([Collumn-1] in matrix[Row] && matrix[Row][Collumn-1] === currentNumber + 1  ){
                    currentNumber +=1;
                    Collumn -=1;
            } else {
                    return false;
                    break;
            
            }
        
    }
    return true;
  
}
//------------------------------


function Round_and_Round(n, a, b) {
    var positive = b > 0;
    var aB = Math.abs(a+b);
    if (aB<=n&&positive){
        return aB;
    } else if (aB<=n&&b===0){
        return a;
    } else if (aB<=n){
        return n-aB;
    } else {
        return (b%n)+a
    }
}

//----------------------------

function hoop(n, m, turns) {
    var truArr = [];
    var fUps = [];
    for (var i = 1; i < m; i++){
        if (i%3 === 0 || i%7 === 0){
            truArr.push(0);
        } else {
            truArr.push(i);
        }
    }
    for (var j = 0; j < turns.length; i++){
        if (truArr[j] !== turns[j]){
            if ((j+1)%n === 0){
                fUps.push(n)
            } else {
                fUps.push((j+1)%n)
            }
        }
    }
    return fUps;
}
//--------------------------