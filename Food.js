class Food{
    constructor(){ }
    var = foodStock;
    var = lastFed;

    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFood(){
        
    }

    display(){
        fill("white");
        textSize(15);
        if(lastFed >= 12){
            test("Last Feed : " + lastFed % 12 + " PM ", 350,30);
         }
         else if(lastFed == 0){
             text("Last Feed : 12 AM",350,30);
         }
         else{
            text("Last Fed : " + lastFed +" AM ",350,30);
         }
    }
}