    let p1Win=0;
    let cpuWin=0;
    
    function getComputerChoise (){
        switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
        }
    };
    function game(){
        if (cpuWin==5){
             cpuWin=0 , p1Win=0;
            document.getElementById("resultadoVersus").innerHTML="";
            document.getElementById("p1").innerHTML="PLAYER 1: " + p1Win;
            document.getElementById("cpu").innerHTML="ENEMY: " + cpuWin;
            alert("When you fail, the most important part is learning and trying again");
           
            
        } else if (p1Win==5){
            cpuWin=0 , p1Win=0   ;
            document.getElementById("resultadoVersus").innerHTML="";
            document.getElementById("p1").innerHTML="PLAYER 1: " + p1Win;
            document.getElementById("cpu").innerHTML="ENEMY: " + cpuWin;
            alert("A win doesn't get you to the top, keep going!");
            
        } };

    
    window.addEventListener("DOMContentLoaded", (event) => { })

        function playRound(p1){ 
            
            let cpu= getComputerChoise();
            console.log(p1+" p1");
            console.log(cpu+" cpu");
            if (p1==cpu){
                document.getElementById("resultadoVersus").innerHTML= p1 + " ties with " + cpu;
                
            }else if((p1=='Rock' && cpu=='Scissor')||(p1=='Scissor' &&  cpu=='Paper')||(p1=='Paper' && cpu=='Rock')){
                document.getElementById("resultadoVersus").innerHTML= p1+" over "+cpu ;
                p1Win++;
                document.getElementById("p1").innerHTML="PLAYER 1: " + p1Win;
                game();
            }else {
                document.getElementById("resultadoVersus").innerHTML= cpu+" over "+p1;
                cpuWin++;
                document.getElementById("cpu").innerHTML="ENEMY: " + cpuWin;
                game();
            ;}}

            
    

