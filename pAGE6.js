//class kookie{
   // constructor(){}
    function kth(){
      
      background(214, 130, 247);
     
      var lolo = createInput("Browse Products");
      //fill("black");
      
     var myg = createButton("SEARCH");
      
      //fill("black");
      if(state===5){
        myg.position(100,160);
        lolo.position(170,160);
      }
    
   

      miCasa.mousePressed(function(){
        appState = 4;
        state = 4;
        background(214, 130, 247);
        myg.hide();
        lolo.hide();
        ARMY();
    })
    look.mousePressed(function(){
        appState = 5;
        state = 5;
        background(214, 130, 247);
        myg.hide();
        lolo.hide();
        kth();
    })
    marioKart.mousePressed(function(){
        appState = 6;
        state = 6;
        background(214, 130, 247);
        myg.hide();
        lolo.hide();
        banana();
    })
    sun.mousePressed(function(){
        appState = 7;
        state = 7;
        background(214, 130, 247);
        myg.hide();
        lolo.hide();
        idkwth();
    })
      
   }
