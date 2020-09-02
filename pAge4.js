class JJK{
   constructor(){}
   bunny(){
    background(214, 130, 247);
    miCasa = createButton("Home");
    look = createButton("Search");
 marioKart = createButton("Your Orders");
    sun = createButton("Settings");
    miCasa.position(50,350);
    look.position(110,350);
    marioKart.position(170,350);
    sun.position(265,350);

    miCasa.mousePressed(function(){
        appState = 4;
        state = 4;
        background(214, 130, 247);
       // sun.hide();
        //marioKart.hide();
       // look.hide();
        ARMY();
    })
    look.mousePressed(function(){
        appState = 5;
        state = 5;
        background(214, 130, 247);
       // sun.hide();
       // miCasa.hide();
       // marioKart.hide();
        kth();
    })
    marioKart.mousePressed(function(){
        appState = 6;
        state = 6;
        background(214, 130, 247);
       // look.hide();
       // sun.hide();
       // miCasa.hide();
        banana();
    })
    sun.mousePressed(function(){
        appState = 7;
        state = 7;
        background(214, 130, 247);
       // look.hide();
       // miCasa.hide();
       // marioKart.hide();
        idkwth();
    })
    }
}