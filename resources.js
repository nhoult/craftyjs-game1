/*
 * prefix all resources with Res_
 */
function initResources() {
    // load the ship sprite
    Crafty.sprite(128,128,"data/ship01_128x128.png", {
    //Crafty.sprite(48,48,"data/test.svg", { // svg test
        Res_ship01: [0,0]
    });
    
    Crafty.sprite(32,32,"data/gun02.png", {
        Res_gun02: [0,0]
    });
    
    //the loading screen that will display while our assets load
    Crafty.scene("loading", function () {
        //load takes an array of assets and a callback when complete
        Crafty.load(["data/ship01_128x128.png"], function () {
            Crafty.scene("main"); //when everything is loaded, run the main scene
        });

        //black background with some loading text
        Crafty.background("#000");
        Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 150, y: 120 })
                .text("Loading")
                .css({ "text-align": "center" });
    });
    
    //automatically play the loading scene
    Crafty.scene("loading");
}