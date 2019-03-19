var questions = [
    {
        prompt: "DO'HA?\n(a)Make it so!\n\(b)To the death\n\(c)That is unfortunate",
        answer: "c"
    },
    {
        prompt: "HIJOL\n(a)Outsider\n\(b)Beam me aboard\n\(c)Speak",
        answer: "b"
    },
    {
        prompt: "QAPLA?\n(a)Success\n\(b)Defend yourself\n\(c)Now!",
        answer: "a"
    },

]

var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    }else{
        alert("Wrong!");
    }
}

alert("You got " +score + " / " + questions.length);

