/*
 * Prefix all definations with Ent_
 * 
 */
function initEntities(){
      Crafty.c("Ent_Ship", {
        Ship: function(){
            this.requires("Collision")
            .bind("NewDirection",
                function (direction) {            
                    if (direction.x < 0) {
                    //    if (!this.isPlaying("walk_left"))
                    //        this.stop().animate("walk_left", 10, -1);
                    }
                    if (direction.x > 0) {
                    //    if (!this.isPlaying("walk_right"))
                    //        this.stop().animate("walk_right", 10, -1);
                    }
                    if (direction.y < 0) {
                    //    if (!this.isPlaying("walk_up"))
                    //        this.stop().animate("walk_up", 10, -1);
                    }
                    if (direction.y > 0) {
                    //    if (!this.isPlaying("walk_down"))
                    //        this.stop().animate("walk_down", 10, -1);
                    }
                    if(!direction.x && !direction.y) {
                        //this.stop();
                    }
                })
                // A rudimentary way to prevent the user from passing solid areas
                .bind('Moved', function(from) {
                    if(this.hit('solid')){
                        this.attr({x: from.x, y:from.y});
                    }
                }).onHit("fire", function() {
                    this.destroy();
                    // die animation/sound/gore
                });
              return this;
          }
      });
      
      Crafty.c("Ent_Gun", {
	Gun: function(){
	  return this;
	}
      });
      
}