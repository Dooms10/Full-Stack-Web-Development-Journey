function abcd(){
    for(let i=1;i<12;i++){//let will be used only in these braces
        console.log(i);
    }
    console.log(i);//in braces ke baad let ko use kra toh console mei error show hui hai i is not defined.
}
abcd();