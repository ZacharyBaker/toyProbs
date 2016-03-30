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


function Sudoku(s) {
    var check = [1,2,3,4,5,6,7,8,9]; 
    var _col = [],
        gridRow,
        gridCol,
        gridIndex,
        _grid = [];
    
    for (var i = 0; i < s.length; i++){
        
        _col.push([]);
        _grid.push([]);
    }
    console.log(_grid);
    for (var i = 0; i < s.length; i++){
        check.forEach(function(e){
            if (s[i].indexOf(e) === -1){return false;}
        });
        
        s[i].forEach(function(e,x){
            _col[x].push(e);
            
           gridRow = Math.floor( i / 3 );
            
           gridCol = Math.floor( x / 3 );


           gridIndex = gridRow * 3 + gridCol;

           _grid[gridIndex].push(e); 
        });
        
    }

    _col.forEach(function(e){
            check.forEach(function(el){
                if (e.indexOf(el) === -1){return false;}
            })
    });
    
    _grid.forEach(function(e){
            check.forEach(function(el){
                if (e.indexOf(el) === -1){return false;}
            })
    });
    return true;
}
---------------------------------------------------

m = 1
ReduceDirections = d => {
    while (m) {
        for (i = 0; i < d.length-1; i++){
            a=d[i][0]
            b=d[i+1][0]
            if (a == 'N' && b == 'S' || 
                a == 'S' && b == 'N' ||
                a == 'E' && b == 'W' ||
                a == 'W' && b == 'E') {
                d.splice(i, 2)
                i=-1
            } else {
                m = 0
            }
        }
    }
    
    return d
}

-------------------------------------------


function fileNaming(names) {
    var obj = {},
        arr = [];
    for (var i = 0; i < names.length; i++){
        if (obj[names[i]] === undefined){
            obj[names[i]] = 0
            arr.push(names[i])
        } else {
            obj[names[i]]++
            var newKey = names[i] + '(' + obj[names[i]] + ')'
            if (obj[newKey] === undefined){
                arr.push(newKey)
                obj[newKey] = 0
            } else {
                i--
            }
        }
    }
    return arr;
}
-----------------------------