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


def string_bits(str):
  return str[::2]
-----------------------------------------------


 return movieLists.concatMap(function(movieList){
    return movieList.videos.concatMap(function(video){
        return Array.zip(
        video.boxarts.reduce(function(prev,curr){
          return prev.width*prev.height > curr.width*curr.height ? curr : prev;
        }),
        video.interestingMoments.filter(function(moment){
            return moment.type === "Middle"
        }),
        function(boxart,interestingMoment){
          return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url}
        }
      )
    })
  })
}



-----------------------------

def string_splosion(str):
  word = ''
  for i in range(len(str)):
    word = word + str[:i+1]
  return word
-----------------------------------------------

def last2(str):
  # Screen out too-short string case.
  if len(str) < 2:
    return 0
  
  # last 2 chars, can be written as str[-2:]
  last2 = str[len(str)-2:]
  count = 0
  
  # Check each substring length 2 starting at i
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      count = count + 1

  return count
-----------------------------------------

def array_count9(nums):
  count = 0
  for i in range(len(nums)):
    if nums[i] == 9:
      count += 1
  return count
--------------------------------------------------------

def array_front9(nums):
  if len(nums) >= 4:
    for i in range(4):
      if nums[i] == 9:
        return True
    return False
  else:
    for x in range(len(nums)):
      if nums[x] == 9:
        return True
    return False
--------------------------------------------------------------

def array123(nums):
  for i in range(len(nums)-2):
    if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
      return True
  return False
-----------------------------------------------


def string_match(a, b):
  count = 0
  for i in range(len(b) - 1):
    for x in range(len(a) - 1):
      if b[i] + b[i + 1] == a[x] + a[x + 1]:
        count += 1;
  return count
------------------------------------------

def combo_string(a, b):
  if len(a) < len(b):
    return a + b + a 
  else:
    return b + a + b

------------------------------------------------

function Near_Square(n) {
    if (Math.sqrt(n) % 1 == 0){
        return [Math.sqrt(n), Math.sqrt(n)]
    }
    var a = 1;
    var b = n;
    var bOne = 0;
    var aOne = 0;
    
    for (var i = n; i > 0; i--){
        if (n / i % 1 == 0) {
            bOne = i;
            aOne = n/i;
            if (bOne - aOne < b - a && bOne - aOne > 0){
                a = aOne;
                b = bOne;
            }
        }
    }
    return [a,b]
}==========================================



def first_last6(nums):
  if nums[0] == 6:
    return True
  elif nums[len(nums)-1] == 6:
    return True
  else:
    return False
-----------------------------------------------

def same_first_last(nums):
  if len(nums) >= 1 and nums[0] == nums[len(nums)-1]:
    return True
  else:
    return False

---------------------------------



def common_end(a, b):
  if a[0] == b[0] or a[len(a)-1] == b[len(b)-1]:
    return True
  else:
    return False

----------------------------------------------


def sum3(nums):
  total = 0
  for i in nums:
    total += i
  return total

----------------------------------------

def rotate_left3(nums):
  return nums[1::] + nums[:1:]

-------------------------------------

def rotate_left3(nums):
  return nums[1::] + nums[:1:]

-------------------------------------

function offsets(chain) {
    chain = String(chain).split('')
    var first = Number(chain[0])
    if (chain.length < 2){
        return first
    }
    for (var i = 1; i < chain.length-1; i++){
        var next = Number(chain[i+1]) - Number(chain[i])
        first += next;
    }
    return first
}

--------------------------------------

-------------------------
makeSentence = w => {
    a = '';
    for (i = 0; i < w.length; i++){
        o = '';
        for (j = 0; j < w[i].length; j++){
            o = o + w[i][j]
        }
        a.length === 0 ? a = a + o : a = a + " " + o;
    }
    a = a + ".";
    return a;
}


---------------------------------------------------

function FibonacciSecret(message) {
    message = message.replace(/\s/g, '');
    var fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
    var ans = [];
    for (var i = 0; i < fib.length; i++){
        if (message[fib[i]]) {
            ans.push((message[fib[i]]).toUpperCase());
            console.log(ans);
        }
    }
    ans = ans.join('-');
    return ans;
}



---------------------------------------------------------
isSentencePalindrome = s => {
    s = s.replace(/(\s)|([^a-zA-Z])/g, '').toLowerCase();
    len = s.length;
    s = s.split('');

    s.length % 2 != 0 ? (f = s.slice(0, Math.floor(len/2)).join(''),b = s.slice(Math.ceil(len/2)).reverse().join('')) : (f = s.slice(0, len/2).join(''), b = s.slice(len/2).reverse().join(''));
    
    return f == b;
}

--------------------------------------------------------


function IsPermutationOf(l, r) {
    
    r = r.split('').sort()
    l = l.split('').sort()
    
    for (var i = 0; i < r.length; i++){
        if (r[i] !== l[i]){
            return false
        }
    }
    
    return true
}


-------------------------------

function offsets(chain) {
    chain = String(chain).split('')
    var first = Number(chain[0])
    if (chain.length < 2){
        return first
    }
    for (var i = 1; i < chain.length-1; i++){
        var next = Number(chain[i+1]) - Number(chain[i])
        first += next;
    }
    return first
}


--------------------------------------

def rotate_left3(nums):
  return nums[1::] + nums[:1:]

-------------------------------------



function fillTemplate(template, placeholders) {
    for (var i =0, n = placeholders.length; i<n; i++) {
        var newTemp = template.replace("{{"+placeholders[i][0]+"}}",placeholders[i][1])
        if(newTemp != template) {
            template = newTemp;
            i=-1;
        }
    }
    return template;
}


















function SumSquareRoot(lst) {
    var ans = [];
    if (lst.length){
        for (var i = 0; i < lst.length; i++){
            if (Math.sqrt(lst[i])%1 === 0){
                var guy = Math.sqrt(lst[i]);
                for (var j = 0; j < lst.length; j++){
                    if (guy === lst[j]){
                        ans.push(lst[j]);
                        lst.splice(j,1);
                        i--;
                    }
                }
            }
        }
    }
    return ans.reduce(function(a,b){return a + b}, 0)
}
--------------------------------

alpha6=s=>{
    ans=0
    for(i=0;i<s.length;i+=5){
        ans+=s.charCodeAt(i)
    }
    return ans
}

--------------------------------



function fac(num){
    if (num === 1){
        return num;
    }
    return num * fac(num-1);
}

 -----------------------

function AlternatingDigitSum(n) {
    var arr = String(fac(n)).split('').reverse()
    var ans = arr[0];
    for (var i = 0; i < arr.length-1; i++){
        if (i === 0 || i%2 === 0){
            ans = ans - arr[i+1]
        } else {
            ans = ans + arr[i+1]
        }
    }
    return ans%11;
}


------------------------


def sum2(nums):
  if len(nums) == 0:
    return 0
  elif len(nums) == 1:
    return nums[0]
  else:
    return nums[0] + nums[1]

-------------------------------

def make_ends(nums):
  return [nums[0], nums[len(nums)-1]]

----------------------------------------------------------


def has23(nums):
  for x in nums:
    if x == 2 or x ==3:
      return True
    
  return False

------------------------


def cigar_party(cigars, is_weekend):
  if cigars > 39:
    if is_weekend == True:
      return True
    elif cigars < 61:
      return True
  return False

---------------------------------


var TestReact = React.createClass({
    getInitialState: function(){
    return {
        username: 'this is zacharybinks'
    }
  },
  render: function(){
    return (
        <div>
        {this.state.username}
      </div>
    )
  }
});

ReactDOM.render(
    <TestReact />, 
  document.getElementById('app')
);
-----------------------

----------------------------------------------
function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    var results = [];
    for (var i = 0; i < cost_per_minute.length; i++){
        results.push((ride_time * cost_per_minute[i]) + (cost_per_mile[i] * ride_distance))
    }
    
    return results;
}


--------------------------------

function perfectCity(departure, destination) {   
    var i1 = parseInt(departure[0]);
    var i2 = parseInt(destination[0]);    
    if (i1 != departure[0] && i2 != destination[0] && i1 === i2){        
        var d1 = departure[0] - i1;        
        var d2 = destination[0] - i2;           
        var x = Math.min(d1 + d2, (1 - d1) + (1 - d2));                
        return Math.abs(departure[1] - destination[1]) + x;           
    }     var i1 = parseInt(departure[1]);    var i2 = parseInt(destination[1]);     
    if (i1 != departure[1] && i2 != destination[1] && i1 === i2){        var d1 = departure[1] - i1;        
        var d2 = destination[1] - i2;           
        var x = Math.min(d1 + d2, (1 - d1) + (1 - d2));               
        return Math.abs(departure[0] - destination[0]) + x;             
    return Math.abs(departure[0] - destination[0]) + Math.abs(departure[1] - destination[1])}
}
----------------------------------------------



---------------------------
var ButtonFun = React.createClass({
    getInitialState(){
    return {
        number: 9
    }
  },
  handleClick(e){
    console.log('handleClick fired', this.state.number);
    this.setState({
        number: this.state.number + 1
    })
  },
  render(){
    return (
        <button onClick={this.handleClick}>{this.state.number}</button>
    )
  }
});
ReactDOM.render(
<ButtonFun />,
document.getElementById('app')
);
------------------------

------------------------------
var CompContainer = React.createClass({
    getInitialState(){
    return {
        raw: 'this is the first part'
    }
  },
  render(){
    return (
        <div>
      {this.state.raw}
      <HappyDog />
      <HappyCat />
      </div>
    )
  }
});

var HappyDog = React.createClass({
    getInitialState(){
    return {
    dog: 'Bark! This is the second part'
    }
  },
  render(){
    return (
        <div>
        {this.state.dog}
      </div>
    )
  }
});

var HappyCat = React.createClass({
    getInitialState(){
    return {
        cat: 'Meow! This is the third part'
    }
  },
  render(){
    return (
        <div>
        {this.state.cat}
      </div>
    )
  }
})
ReactDOM.render(
<CompContainer />,
document.getElementById('app')
)
-----------------------

--------------------------------

var CompContainer = React.createClass({
    getInitialState(){
    return {
        raw: 'this is the first part'
    }
  },
  changeState(stuff){
    this.setState({
        raw: stuff
    })
  },
  render(){
    return (
        <div>
         {this.state.raw}
             <HappyDog changeShiz={this.changeState} />
      </div>
    )
  }
});

var HappyDog = React.createClass({
    getInitialState(){
    return {
        dog: 'Bark! This is the second part',
        change: ''
    }
  },
  updateStuff(e){
    this.setState({
        change: e.target.value
    })
  },
  makeAPlay(){
    this.props.changeShiz(this.state.change);
    this.setState({
        change: ''
    });
  },
  render(){
    return (
        <div>
        
        <input type="text" value={this.state.change} onChange={this.updateStuff} />
        <button onClick={this.makeAPlay}> Change Shizz Breh </button>
      </div>
    )
  }
});

ReactDOM.render(
<CompContainer />,
document.getElementById('app')
);
-----------------------------------------


---------------------------------------
var Grandpa = React.createClass({
    getInitialState(){
    return {
        grandpa: "Pablo"
    }
  },
  changeGrandpa(name){
    this.setState({
        grandpa: name
    })
  },
  render(){
    return (
        <div>
        Who is your Grandpa?    {this.state.grandpa}
        <Daddy changeG={this.changeGrandpa} />
      </div>
    )
  }
});

var Daddy = React.createClass({
    getInitialState(){
    return {
        daddy: "Tomas",
        grandpaToChange: ""
    }
  },
  updateGrandpaToChange(e){
    this.setState({
        grandpaToChange: e.target.value
    });
  },
  newGrandpa(){
    this.props.changeG(this.state.grandpaToChange);
    this.setState({
        grandpaToChange: ''
    });
  },
  changeDad(name){
    this.setState({
        daddy: name
    })
  },
  render(){
    return (
        <div>
      Who is your Daddy? {this.state.daddy} <br/>
      <input type="text" value={this.state.value} onChange={this.updateGrandpaToChange} />
      <button onClick={this.newGrandpa}> Change your Grandpa! </button>
      <Child changeD={this.changeDad} />
      </div>
    )
  }
});

var Child = React.createClass({
    getInitialState(){
    return {
        child: 'Rocco',
      dadToChange: ''
    }
  },
  updateDadToChange(e){
    this.setState({
        dadToChange: e.target.value
    })
  },
  changeDaddy(){
    this.props.changeD(this.state.dadToChange)
    this.setState({
        dadToChange: ''
    })
  },
  render(){
    return (
        <div>
            My name is {this.state.child}!!! <br/> I'mma bout to change my daddy
            <br/> <input type="text" value={this.state.dadToChange} onChange={this.updateDadToChange} />
            <button onClick={this.changeDaddy} > Change yo daddy </button>
        </div>
    )
  }
});

ReactDOM.render(<Grandpa />, document.getElementById('app'));


-------------------------

function stringMaze(maze) {
    var seen = [];
    var i = 0;
    var count = 0;
    while (seen.indexOf(i) == -1) {
        if (i == maze.length - 1) return count;
        seen.push(i);
        i = (i + maze.charCodeAt(i) - 'a'.charCodeAt(0) + 1) % maze.length;
        ++count;
    }
    return -1;
}

-------------------------------

function Square_Check(p) {
    var a = latice(0,1, p);
    var b = latice(0,2, p);
    var c = latice(0,3, p);
    var m = latice(1,2, p);
    var n = latice(1,3, p);
    var z = latice(2,3, p);
    var dia = Math.max(a,b,c);
    if (Math.max(m,n,z) != dia) {
        return 0;
    }
    if (m == dia) {
        if (a == b && b == n && n == z){
            return 1;
        }
        return 0;
    }
    if (n == dia) {
        if (a == c && c == m && m == z){
            return 1;
        }
        return 0;
    }
    if (z == dia) {
        if (b == c && c == m && m == n){
            return 1;
        }
        return 0;
    }
    return 0;
}

function latice(a, b, points) {
    return (Math.abs(points[2 * a] - points[2 * b])) + (Math.abs(points[2 * a + 1] - points[2 * b + 1]))
}

