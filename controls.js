/*
 * prefit all controls with Cont_
 */
function initControls(){
     Crafty.c("Cont_ArrowControls", {
        init: function() {
            //this.requires('Multiway');
            this.requires('2D, Keyboard, Mod_RelativeMovement');
        },
        
        arrowControls: function(speed) {
        //    this.multiway(speed, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
        
            this.bind('KeyDown', 
		      function () { 
			if (this.isDown('SPACE')) {
			  this.rotation=this.rotation+45;
			}
			if (this.isDown('UP_ARROW')) {
			  this.forward(1);
			}
			if (this.isDown('DOWN_ARROW')) {
			  this.backwards(1);
			}
			if (this.isDown('RIGHT_ARROW')) {
			  this.right(1);
			}
			if (this.isDown('LEFT_ARROW')) {
			  this.left(1);
			}
		      })
            return this;
        }
        
    });
}