player_1=localStorage.getItem("player_1");
player_2=localStorage.getItem("player_2");

player_1_score=0;
player_2_score=0;

document.getElementById("player_1").innerHTML=player_1+" : ";
document.getElementById("player_2").innerHTML=player_2+" : ";

document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question turn - " + player_1;
document.getElementById("player_answer").innerHTML="Answer turn - " + player_2;

function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    actual_answer= parseInt(num1)*parseInt(num2);
    console.log(actual_answer);

     question_num=" <h4>Q. "+num1+" X "+num2+"</h4>";
     input_box="<br> Answer : <input type='text' id='input_check_box'>";
     check_btn="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";

     row=question_num+input_box+check_btn;

     document.getElementById("output").innerHTML=row;
     document.getElementById("num1").value="";
     document.getElementById("num2").value="";
     
}

question_turn="player_1";
answer_turn="player_2";

function check(){

    get_answer=document.getElementById("input_check_box").value;
    console.log(get_answer);

    if(get_answer==actual_answer){

       if(answer_turn=="player_1"){
        player_1_score=player_1_score+1;
        document.getElementById("player_1_score").innerHTML=player_1_score;
       }
       else
       {
        player_2_score=player_2_score+1;
        document.getElementById("player_2_score").innerHTML=player_2_score;
       }
    }

    if(question_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question turn - " + player_2;
    }
     else
     {
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question turn - " + player_1;
     }

     if(answer_turn=="player_1"){
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer turn - " + player_2;
    }
     else
     {
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer turn - " + player_1;
     }

     document.getElementById("output").innerHTML="";


}