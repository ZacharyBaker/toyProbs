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