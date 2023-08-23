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
    

    
    window.addEventListener("DOMContentLoaded", (event) => {
    })
    function playRound(p1){ 
          
        let cpu= getComputerChoise();
        console.log(p1+" p1");
        console.log(cpu+" cpu");
        if (p1==cpu){
            document.getElementById("resultadoVersus").innerHTML= p1 + " ties with " + cpu
        }else if((p1=='Rock' && cpu=='Scissor')||(p1=='Scissor' &&  cpu=='Paper')||(p1=='Paper' && cpu=='Rock')){
            document.getElementById("resultadoVersus").innerHTML= p1+" over "+cpu ;
            p1Win++;
        }else {
            document.getElementById("resultadoVersus").innerHTML= cpu+" over "+p1;
            cpuWin++;
        }
        }

