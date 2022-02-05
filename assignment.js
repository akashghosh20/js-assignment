
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

function pandaCost(singaraQuantity,somucaQuantity,jilapiQuantity){

     const singaraPrice = singaraQuantity*7 ;
     const somucaPrice = somucaQuantity*10 ;
     const jilapiPrice = jilapiQuantity*15 ;
     const totalCost = singaraPrice + somucaPrice + jilapiPrice ;
     if ( singaraQuantity<0){
         console.log("You have entered a invalid number of singraQuantity");
     }
     else if( somucaQuantity<0){
         console.log("You have enetered a invalid number of somucaQuantity");
     }
     else if(jilapiQuantity<0){
         console.log("You have entered a invaid number of jilapiQuantity");

     }
     else{

        return totalCost ;

     }
     


}
 const totalCostOfFoodpanda = pandaCost(2,3,4);
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
    
    const budgetOfPicnic = picnicBudget(250);
    console.log(budgetOfPicnic);
    

    // problem 4

    