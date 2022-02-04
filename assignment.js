
     //   problem 1

function anaToVori(ana){


    if(ana <= 0 ){
        console.log("this is a invalid input.please enter positive number");
    }
    else{

        const vori = ana/16;
        return vori;
    }

   
   


}
const voriofsona = anaToVori(64);
console.log (voriofsona);


      // problem 2

function pandaCost(singara,somuca,jilapi){

     const singaraPrice = singara*7 ;
     const somucaPrice = somuca*10 ;
     const jilapiPrice = jilapi*15 ;
     const totalCost = singaraPrice + somucaPrice + jilapiPrice ;
     if ( singara<0){
         console.log("You have entered a invalid number of singra");
     }
     else if( somuca<0){
         console.log("You have enetered a invalid number of somuca");
     }
     else if(jilapi<0){
         console.log("You have entered a invaid number of jilapi");

     }
     else{

        return totalCost ;

     }
     


}
 const totalCostOfFoodpanda = pandaCost(-2,-3,4);
 console.log(totalCostOfFoodpanda);


       // problem 3



       function picnicBudget(students){
        const first100Students = 5000;
        const second100Students = 4000;
        const restOfStudents = 3000;
        if(students<=0){
            console.log("You have entered a invalid number of students");
        }
          
        else{
            if(students<=100){
                const  budgetFirst100 = students*5000;
                return budgetFirst100;
              }
              else if(students <=200){
                  first100 = 100*first100Students;
                  restStudents = students - 100;
                  restBudget = restStudents*second100Students;
                 total = first100 + restBudget;
                 return total;
              }
              else{
                  first100 = 100*first100Students;
                  restStudentsOf200 = 100*second100Students;
                  restStudents3 = students-200;
                  restBudget3 = restOfStudents*restStudents3;
                  total3 =  first100+ restStudentsOf200 + restBudget3;
                  return total3;
          
              }
        }

        
    } 
    
    const budgetOfPicnic = picnicBudget(5);
    console.log(budgetOfPicnic);
    

    // problem 4

    const names =["akash","mithun","abdullah","batash","catash","datash","mridul","joti"];


    function addFriend(names){
        let odd = [];
        for(const element of names){
            if(names.length % 2 != 0){
                odd.push(element);
                
            }
        } return odd;
        
    }
    const oddNames = addFriend(names);
    console.log(oddNames);