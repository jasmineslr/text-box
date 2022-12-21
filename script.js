
let myCond=new RegExp('[a-zA-Z]');
document.getElementById("userText").onkeyup=function(e){
    let myValue=e.target.value;
    let myLength=myValue.length;
    // myLength=myLength.filter(function(a){
    //     return a != ""
    // })
    console.log(myLength)
    let myWords=myValue.split(" ");
    myWords=myWords.filter(function(b){
        return b.match(myCond)
    });
    let words=myWords.length;
    document.getElementById("result").innerHTML=" Charecters :"+ myLength +"<br>"+ "Words :" + words;
}
// document.getElementById("userText").onkeyup=function(e){
//     let myValue=e.target.value;
//     let Charecters=myValue.length;
//     let Words=myValue.split(" ");
//     Words=Words.filter(function(el){
//         return el != ""
//     })
//     let myWords=Words.length;
//     let myResult=Charecters + "<br>" + myWords;
//     document.getElementById("result").innerHTML=myResult;
// }