function button() {

    let allCity = ["Karachi", "Lahore", "Islamabad", "Hyderabad", "Peshawar", "Quetta"];
    let userCity = document.getElementById("Inputid").value;

    let myCard = "City did not  Matched!";
    let mySecondCard = "City is Matched!";

   ///flag khte hai ese///
    let cityMatched = false;
    ///flag khte ese////
    
    for(let i = 0; i < allCity.length; i++){
        if(userCity.toLowerCase() == allCity[i].toLowerCase()){
            cityMatched = true;
            break;
        }
    }

        if(cityMatched == false){
            document.getElementById("card").innerText = myCard; 
        }else{
            document.getElementById("card").innerText = mySecondCard;
        }
}
function reset(){
    let userCity = document.getElementById("Inputid").value = "";
    document.getElementById("card").innerText = myCard = ""; 
    document.getElementById("card").innerText = mySecondCard = "";
} 
// document.addEventListener("DOMContentLoaded", function() {
//     const exampleText = ['City Match Checker:','MK Writer'];
//     const exampleTyping = new AutoTyping('.head', exampleText,{
//         typeSpeed: 50,
//         deleteSpeed: 50,
//         waitBeforeDelete: 2000,
//         waitBetweenWords: 500,
//     });
//     exampleTyping.start()
// });