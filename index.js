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
function helptoclone(A) {
    var ans = 0;
    for (var i = 0; i < A.length; i++){
        for (var j = i + 1; j < A.length; j++){
            if (A[i] * A[j] % 2 == 0){
                ans++
            }
        }
    }
    return ans
}


--------------------------------------------





nextNumber = N => {
    o = N.toString(2).split('').reduce((p,c) => { return p + c*1},0)
    var b;
    while (b !== o){
        N++
        b = N.toString(2).split('').reduce((p,c) => { return p + c*1},0)
    }
    return N
}
-------------------------

function stepOnCrack2(first, n) {
    var a = [1,0,0,1,0,1,1,0]
    var b = [0,1,1,0,1,0,0,1]
    var guy;
    if (first == 'left'){guy = b} else { guy = a }
    while (guy.length < n){
        guy.forEach(function(e) { if (e == 1) {
                                guy.push(0)
                                } else {
                                    guy.push(1) }
                                })
    }
    return guy[n-1] == 1 ? 'right' : 'left'              
}

---------------------------------------


function superEven2(n) {
    var counter = 0;
    var superEvens = []
    while (superEvens.length < n){
        var dude = String(counter).split('');
        var yes = dude.every(e => e%2 == 0)
        if (yes){
             superEvens.push(counter);
        }
                counter+=2;
            
    }
    return superEvens[superEvens.length-1];
}

-------------------------------------

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

---------------------------------


function supereven(k) {
    var counter = 0;
    var guess = 2,
        suprEven,
        spl;
    while (counter < k){
        spl = guess.toString().split('');
        suprEven = spl.every(function(e){
            return e%2===0;
        })
        if (suprEven){
            counter++;
        }
        if (suprEven&&counter===k){
          return guess;
          }
        guess+=2;
    }
    
}


============================

function supereven(k) {
    var counter = 0;
    var guess = 1;
    while (counter < k){
        var spl = guess.toString().split('');
        var suprEven = spl.every(function(e){
            return e%2===0;
        })
        if (suprEven){
            counter++;
        }
        if (suprEven&&counter===k){
          return guess;
          }
        guess++;
    }
    
}

-----------------------------


function Cipher_Zeroes(N) {
    var v = 0;
    N.split('').forEach(e => {
        if (/[069]/.test(e)){
            v += 1;
        }
        if (e == '8'){
            v += 2;
        }
    })
    if (v > 0 && v%2 == 0) return parseInt((v - 1).toString(2))
    if (v > 0) return parseInt((v + 1).toString(2))
    if (v == 0) return 0
}
--------------------



function Cipher_Zeroes(N) {
    var v = 0;
    N.split('').forEach(function(e){
        if (/[069]/.test(e)){
            v += 1;
        }
        if (e == '8'){
            v += 2;
        }
    })
    if (v > 0 && v%2 == 0){
        return parseInt((v - 1).toString(2));
    }
    if (v > 0){
        return parseInt((v + 1).toString(2));
    }
    if (v == 0) return 0;
}


-----------------------



def pos_neg(a, b, negative):
  if negative == True:
    if a < 0 and b < 0:
      return True
    else:
      return False
  else:
    if a < 0 and b > 0 or a > 0 and b < 0:
      return True
    else:
      return False
--------------------------------------


def not_string(str):
  if str.find("not") == 0:
    return str
  else:
    return 'not ' + str
------------------------------------------


def missing_char(str, n):
  first_half = str[:n]
  second_half = str[n+1:]
  return first_half + second_half
----------------------------------------

def front_back(str):
  if len(str) > 1:
    new_first = str[len(str) - 1:]
    new_last = str[:1]
    middle = str[1:len(str) - 1]
    return new_first + middle + new_last
  else:
    return str
-------------------------------------

def front3(str):
  if len(str) <= 3:
    return str*3
  else:
    front = str[:3]
    return front*3
----------------------------------------------



def string_times(str, n):
  return str*n
-----------------------------------------------