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
       var p1;
        p1ChoseRock =function p1Rock(){
            let p1='Rock';
            console.log(p1)
            return p1
        }
        p1ChosePaper= function p1Paper(){
            let p1='Paper';
           
            // return  p1Paper(p1)
        }
        p1ChoseScissor= function p1Scissor(){
            let p1='Scissor';
            console.log(p1)
            return p1
        }

 
        


    let piedra1= document.getElementById('piedra');
    window.addEventListener("DOMContentLoaded", (event) => {
    
    piedra1.addEventListener('click',() => {    
         p1ChoseRock();
         p1CpuVersus();
           
   });
    document.getElementById("papel").addEventListener('click',() => {    
        p1ChosePaper();
        p1CpuVersus();
            
    });
    document.getElementById("tijera").addEventListener('click',() => {    
        p1ChoseScissor();  
        p1CpuVersus();
          
    })});
    function p1CpuVersus(){ 
        
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