/*
 * Prefix all definations with Mod_
 * 
 * Definations that add features, just as mass, mount points, and such
 */
function initMods(){
  /*
   * 
   */
  Crafty.c("Mod_RelativeMovement", {
          forward: function(speed){
//	      console.info("speed =", speed);
	      // get direction, move that far forward
//	      console.info(this.x," + Math.cos(",this.rotation," * (",Math.PI,"/180)) * ",speed);
	      //console.info("x[",x,"] y[",y,"]")
	      this.x = this.x + Math.cos(this.rotation * (Math.PI/180)) * speed;
	      this.y = this.y - Math.sin(this.rotation * (Math.PI/180)) * speed;
	      
	  },
	  backwards: function(speed){
	      // get direction, move that far backwards
	      this.x = this.x - Math.cos(this.rotation * (Math.PI/180)) * speed;
	      this.y = this.y + Math.sin(this.rotation * (Math.PI/180)) * speed;
	  },
	  left: function(speed){
	      // get direction, move that far to the left
	      this.x = this.x - Math.cos(this.rotation * (Math.PI/180)) * speed;
	      this.y = this.y - Math.sin(this.rotation * (Math.PI/180)) * speed;
	  },
	  right: function(speed){
	      // get direction, move that far to the right
	      this.x = this.x + Math.cos(this.rotation * (Math.PI/180)) * speed;
	      this.y = this.y + Math.sin(this.rotation * (Math.PI/180)) * speed;
	  }
  });
  
  
  /*
   * adds the ability to attachMount() that will move with the parent
   */
  Crafty.c("Mod_MountPoints",{ 
	  foo: function(){
	  }
  });
  
  /*
   * adds mass to an object
   */
  Crafty.c("Mod_MountPoints",{ 
	  foo: function(){
	  }
  });
}