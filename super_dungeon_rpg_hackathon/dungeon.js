var weapon;
var hit_points = 3;


$('#sword').click(function() {
		weapon = 'sword';
		$('img').attr('src', 'http://vignette1.wikia.nocookie.net/zelda/images/7/72/Master_Sword_(A_Link_Between_Worlds).png/revision/latest?cb=20140111063730')
  		$('img').css('width', '20%');
	});

$('#bow').click(function() {
		weapon = 'bow';
		$('img').attr('src', 'http://vignette2.wikia.nocookie.net/zelda/images/1/15/Bow_(A_Link_to_the_Past).png/revision/latest?cb=20090321144101');
	});

$('.first').click(function() {
	$('h1').text("You have chosen a " + weapon);
	$('#top > p').text("You have decided to go to the dungeon to save the princess and gain the goblet of immortality.");
  var killedTrolls = "<h1> You killed the trolls without taking damage -0HP </h1>" +
	"<p> Hit Points: " + hit_points + " remaining.</p>";
	$('#bottom').html("<p>You're in Transylvania and you find the entrance to the dungeon. It looks uninviting.</p>" +
  	"<p> You are walking through a corridor. All of a sudden, you got ambushed by two trolls from both sides.</p>" +
  	"<p>What do you do?</p>" +
  	"<button class = 'second btn' id = 'flank'> Flank </button>" +
  	"<button class = 'second btn' id = 'assault'> Assault </button>" +
  	"<button class = 'second btn' id = 'defend'> Defend </button>");

    $('#flank').click(function() {
		$('#top').html(killedTrolls);
	});

	$('#assault').click(function() {
	if (weapon === 'sword') {
		$('#top').html(killedTrolls);
		}

	else {
		hit_points-=1;
		$('#top').html(killedTrolls);
		}
	});


	$('#defend').click(function() {
		if (weapon === 'sword') {
			hit_points-=1;
			$('#top').html(killedTrolls);
		}
		else {
			hit_points-=2;
			$('#top').html(killedTrolls);
		}
	});

  $('.second').click(function(){
    $('#bottom').html("<p>You step over the bodies of the trolls and continue down the coridor. The further you get from the last tourch, the less you can see. You begin to use the wall as a guide when your front foot slips in to blackness. It's a trap door!. You grab the wall and hang on.</p>");
		$('bottom').append("<p>Reaching down to feel the floor, you realize that the trap door is the full width of the coridor. How do you want to proceed?</p>")
		$('bottom').append("<button class='last btn' id= 'jump'> Jump It </button>" +
	  "<button class = 'last btn' id = 'skirt'> Skirt along the Wall </button> ");

		$('#jump').click(function() {
			hit_points-=1;
			$('#top').html("<p>You throw a small pebble across the hole to judge the distance. You then count the amount of steps to edge and get a running start.  As fast as you can you take 1 , 2, annnnnd 3!!!! Not accounting for the larger steps taken while running your leaping step barely touchs the surface edge, reducing your jump.  Your body bangs on the vertical wall of the hole but you get your arms on the the other side and pull yourself up. You took -1HP damage. <br><p> Hit Points: " + hit_points + " remaining.</p>");
		});

		$('#skirt').click(function() {
			$('#top').html("<p>You inch your way accross the wall and bump into a mounted torch. You get low enough to bypass the torch and make it to the other side. You took 0HP damage. <br><p> Hit Points: " + hit_points + " remaining.</p>");
		});
	})

	$('.last').click(function() {
		$('#bottom').html("<p>You encounter the boss!</p>" +
		"<button class = 'btn' id = 'run'> Run! </button>" +
		"<button class = 'btn' id = 'fight'> Fight! </button>");

		$('#fight').click( function() {
		if (weapon === 'sword') {
			hit_points -= 1;
		}
		else {
			hit_points -= 2;
		}
		if (hit_points > 0) {
      		$('#top').html("<h1>You saved the princess and gained the goblet! Congratulations</h1>");
      		$('#bottom').html("");
    	}
    	else {
      		$('#top').html("<h1>You're dead. GAME OVER!</h1>");
      		$('#bottom').html("");
      	}
		});

		$('#run').click( function() {
		$('#top').html("<h1> You abandoned the princess. The game is over. </h1>");
		$('#bottom').html("");

		});

	});

});
