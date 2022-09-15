        var player1 = '';
        var array=[];
       function Add(){
        // if(player1 != '' && sum >= 50) {
            if(sum >= 50) {
                let tBody = '';
                array.map(ele =>{
                    tBody = tBody +"<tr><td>" + ele.name +"</td><td>"+ ele.totalDiceNumbers +"</td><td>"+ ele.sum +'</td></tr>'
                })
                // let tr = "<tr><td>" + player1+ "</td><td>" +totalDiceNumbers + "</td><td>" + sum + "</td></tr>";
                // tBody.insertAdjacentHTML('beforeend', tr);     
                // player1 = '';
                document.getElementById('body').innerHTML =  tBody
            }
            else {
                alert('Click on Try Again Button');
            }
        
            totalDiceNumbers = 0;
            sum = 0;   
        }
        // else {
        //     alert('Please continue game');
        // }
       //}
    function TryAgain(){
        totalDiceNumbers = 0;
        sum = 0;   
    }
      

        
        function editNames() {
            player1 = prompt("Player Name");
            document.querySelector("p.Player1") .innerHTML = player1;
            
             
        }
       function start(){
        if(totalDiceNumbers !=0 && sum !=0){
               
            player1='';
            totalDiceNumbers = 0;
             sum=0;
        }else{
            alert('Now you can edit your name ')
        }        
        }
        let totalDiceNumbers = 0
        let sum =0;
        let pow = 0;
       
        function rollDice() {
        if(player1 === '') {
            alert('CLICK ON START BUTTON AND THEN ENTER THE NAME');
        }
        else {
          
            if(sum<=50){
                totalDiceNumbers = totalDiceNumbers+1;
                
        // console.log(totalDiceNumbers)
       
       
            var randomNumber1 = Math.floor(Math.random() * 10) + 1 ;
                     sum = sum + randomNumber1;
                    //  console.log(sum)
                     
               }
               document.getElementById('name').innerHTML="Player Name: " + "  "+player1;
               document.getElementById("demo").innerHTML= "Total sum: "+ " "+ sum + "    ";
               document.getElementById("roll").innerHTML= "No of Rolls: "+ totalDiceNumbers;
              
            
        }
      
 
   
                if (sum===50) {
                    document.querySelector("h1").innerHTML =`${player1 } you are winner! you get ${sum} on dice # ${totalDiceNumbers}`;
                    let winner = {
                        name : player1,
                        totalDiceNumbers :totalDiceNumbers,
                        sum : sum
                    }
                          array.push(winner);
                          array.sort((a,b)=>{
                            return a.totalDiceNumbers-b.totalDiceNumbers
                        })
                        Add()
                }

                else if(sum>50){
                    document.querySelector("h1").innerHTML=`${player1 } you are looser! you get ${sum} on dice # ${totalDiceNumbers}`;
                }
                
            }
           