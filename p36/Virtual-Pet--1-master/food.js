class Food{
    constructor(){

    }
    getFoodStock(){
        var foodStockRef = database.ref('foodStock');
        foodStockRef.on("value", function(data){
            foodStock = data.val();
        });

    }
    update(food){
        database.ref('/').update({
            foodStock: food
        })
    }
    display(){
        
    }
}