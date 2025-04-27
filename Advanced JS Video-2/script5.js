//Execution context is a container where function's code is executed and it is always created when a function is called.it consist of 3 things.--1.variable 2.functions inside the parent fn. 3.lexical environment
//jo container hai vo imaginary hota hai ise ham execution context khte hai.
//lexical environment hai ki kin cheezo ko access kar skte hai aur kinko nhi.
//abcd() if this fn has more than one function than it will come under ec only.
function abcd(){
    var a=12;
    function def(){
        var b=12;
    }
}
abcd()
//fn can use its body var inside its body and other fn but it cannot access the var under other fn...i.e.   b nhi chllega.