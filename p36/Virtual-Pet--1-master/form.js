class Form{
    constructor(){

    }
    
    display(){
        var title = createElement('h2');
        title.html("Virtual Pet 2 -'Take good care of your pet' ");
        title.position(520, 0);

        var button = createButton("Feed Pet");
        button.position(400,200);
        
        button.mousePressed(function(){
           
            foodStock = foodStock-1;
            dog.addImage(hdogI);

        })

        var button2 = createButton("Add Food");
        button2.position(400,230);
        
        button2.mousePressed(function(){
           
            foodStock = foodStock+1;
            dog.addImage(dogI);
         
        })
    }
}