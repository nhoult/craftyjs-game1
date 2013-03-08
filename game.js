/*
 * 
 */
window.onload = function () {
    //start crafty
    Crafty.init(640, 480);
    
    // init resources such as images, 
    // will display a laoding screen
    initResources();
    // init entity definations
    initEntities();
    // init controls
    initControls();
    // init mods
    initMods();
    
    Crafty.scene("main", function () {
        //var gun02 = Crafty.e("2D, DOM, Ent_Gun, Res_gun02")
        //        .attr({ x: 48, y: 70, z: 2 })
        //        .origin("center")
        //        .Gun();
      
        //create our player entity with some premade components
        var player1 = Crafty.e("2D, DOM, Ent_Ship, Res_ship01, Cont_ArrowControls")
                .attr({ x: 0, y: 0, z: 1 })
                .origin("center")
                .arrowControls(1)
                //.attach(gun02)
                .Ship();
    });
};


