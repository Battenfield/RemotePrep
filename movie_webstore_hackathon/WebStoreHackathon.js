var movies = [];
// movies[0] = {
// 	name: 'Good Will Hunting',
// 	category: 'Drama',
// 	price: '$6.99',
// 	picture: 'http://cdn.miramax.com/media/assets/726_GoodWillHunting_Catalog_Poster-BB_v2_Approved.png',
// 	sellingPoints: ,
// };
var movie = function(name, catArr, price, img, spArr, synopsis){
	this.name = name;
	this.catArr = catArr;
	this.price = price;
	this.img = img;
	this.spArr = spArr;
	this.synopsis = synopsis;
};

// ******************* Movie Creation *****************************
movies.push(new movie('Driving Miss Daisy', ['comedy', 'drama'], '$1.99', 'http://ia.media-imdb.com/images/M/MV5BMTI2Njg4MDM5MF5BMl5BanBnXkFtZTYwMDk4NjM5._V1_UX182_CR0,0,182,268_AL_.jpg', ['Won 4 Oscars'], 'An old Jewish woman and her African-American chauffeur in the American South have a relationship that grows and improves over the years.'
	));
movies.push(new movie('The Brave Little Toaster', ['family', 'comedy', 'cartoon'], '$3.99', 'http://ia.media-imdb.com/images/M/MV5BMTI2ODU3NTA5MF5BMl5BanBnXkFtZTcwNTgzMzUyMQ@@._V1_UY268_CR3,0,182,268_AL_.jpg', ['Good, wholesome fun for the whole family'], 'A toaster, a blanket, a lamp, a radio, and a vacuum cleaner, journey to the city to find their master after being abandoned in their cabin in the woods.'
	));
movies.push(new movie('Conan the Barbarian', ['action', 'fantasy'], '$32.99', 'http://ia.media-imdb.com/images/M/MV5BMTQwMDUyMTcyNF5BMl5BanBnXkFtZTgwMjk2NzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Has Arnold in it!'], 'A vengeful barbarian warrior sets off to avenge his tribe and his parents whom were slain by an evil sorcerer and his warriors when he was a boy.'
	));
movies.push(new movie('Mad Max', ['action', 'drama'], '$2.99', 'http://ia.media-imdb.com/images/M/MV5BMTM4Mjg5ODEzMV5BMl5BanBnXkFtZTcwMDc3NDk0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Won 2 Oscars'], 'In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.'
	));
movies.push(new movie('Ghost', ['romantic comedy', 'thriller'], '$7.99', 'http://ia.media-imdb.com/images/M/MV5BMTU0NzQzODUzNl5BMl5BanBnXkFtZTgwMjc5NTYxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Won 2 Oscars'], 'After an accident leaves a young man dead, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic.'
	));
movies.push(new movie('The Terminator', ['scifi', 'thriller'], '$8.99', 'http://ia.media-imdb.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Won An Oscar'], 'A human-looking indestructible cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.'
	));
movies.push(new movie('Jurrasic Park', ['scifi', 'thriller'], '$2.99', 'http://ia.media-imdb.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['A good movie'], 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.'
	));
movies.push(new movie('Raiders of the Lost Ark', ['scifi', 'drama'], '$8.99', 'http://ia.media-imdb.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Interesting'], 'Archaeologist and adventurer Indiana Jones is hired by the US government to find the Ark of the Covenant before the Nazis.'
	));
movies.push(new movie('Return of the Jedi', ['scifi'], '$9.99', 'http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_UX182_CR0,0,182,268_AL_.jpg', ['Won 2 Oscars'], 'After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star, while Luke struggles to make Vader return from the dark side of the Force.'
	));
movies.push(new movie('Back to the Future II', ['scifi'], '$4.99', 'http://ia.media-imdb.com/images/M/MV5BNjE5ODg4NzY1MF5BMl5BanBnXkFtZTcwMjI3MzYwMg@@._V1_UY268_CR7,0,182,268_AL_.jpg', ['Much fun!'], 'After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985... without interfering with his first trip.'
	));
movies.push(new movie('Good Will Hunting', ['drama'], '$6.99', 'http://ia.media-imdb.com/images/M/MV5BMTk0NjY0Mzg5MF5BMl5BanBnXkFtZTcwNzM1OTM2MQ@@._V1_UY268_CR0,0,182,268_AL_.jpg', ['Academy Award for best supporting Actor'], "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life."
	));
movies.push(new movie('The Big Short', ['biography', 'comedy', 'drama'], '$14.99', 'http://ia.media-imdb.com/images/M/MV5BMjM2MTQ2MzcxOF5BMl5BanBnXkFtZTgwNzE4NTUyNzE@._V1_UX182_CR0,0,182,268_AL_.jpg', ["Academy Award for Best Driector", "Academy Award for best film editing", "Academy Award for Best Adapted Screenplay"]
	, "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight."));
movies.push(new movie('American Sniper', ['Action','biography','Drama'], '$14.99', 'http://ia.media-imdb.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Academy Award for Best Picture'], "Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home to his wife and kids after four tours of duty, however, Chris finds that it is the war he can't leave behind."
	));
movies.push(new movie('The Imitation Game', ['biography','drama','thriller'], '$9.99', 'http://ia.media-imdb.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Academy Award for Best Writing', 'Academy Award for Best Adapted Screenplay', 'Nominated for Best Picture'], "During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians."
	));
movies.push(new movie('12 Years a Slave', ['biography','drama','history'], '$14.99', 'http://ia.media-imdb.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Academy Award for Best Picture'], 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.'
	));
movies.push(new movie('Little Miss Sunshine', ['drama', 'comedy'], '$7.99', 'http://ia.media-imdb.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Academy Award for best supporting Actor', 'Best Writing, Original Screenplay'], "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus."
	));
movies.push(new movie('Birdman', ['comedy', 'drama'], '$9.99', 'http://ia.media-imdb.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Academy Award for best motion picture'], "Illustrated upon the progress of his latest Broadway play, a former popular actor's struggle to cope with his current life as a wasted actor is shown."
	));
movies.push(new movie('Ground ', ['comedy'], '$5.99', 'http://ia.media-imdb.com/images/M/MV5BMTU0MzQyNTExMV5BMl5BanBnXkFtZTgwMjA0Njk1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['BAFTA best screenplay award'], "A weatherman finds himself living the same day over and over again."
	));
movies.push(new movie('The Wolf of Wall Street', ['comedy'], '$6.99', 'http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Nominated for Best Performance by an Actor'], "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."
	));
movies.push(new movie('The Grand Budapest Hotel', ['comedy', 'drama'], '$6.99', 'http://ia.media-imdb.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg', ['Nominated for Academy Award for best motion picture'], "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend."
	));

//jquery func to append to the webpage
var filterByGenre = function(genre){
	$('#movieSection').replaceWith('<div id="movieSection"></div>');
	$('#store').append('<div id="movieSection"></div>')
	movies.forEach(function(item, i, arr){
		if (item.catArr.indexOf(genre) >= 0 || genre === undefined){
			$('#movieSection').append('<div id=movie' + i + ' class="col-md-3"></div');
			$('#movie' + i).append("<div class='name'>" + item.name + "</div>");
			$('#movie' + i).append('<div class="category">' + item.catArr.join(', ') + '</div>');
			$('#movie' + i).append("<div class='movie_img'><img src=" + item.img + "></div>")
			$('#movie' + i).append('<div class="sp">' + item.spArr.join('<br>') + '</div>');
			$('#movie' + i).append("<div class='price'>" + item.price + "</div>");
			$('#movie' + i).append("<div id='synopsis' class='hidden'>" + item.synopsis + "</div>");
		}
	})
}

filterByGenre();

$('#allproducts').click(function(){
	filterByGenre();
	$(this).addClass('active').siblings().removeClass('active');
});

$('#drama').click(function(){
	filterByGenre('drama');
	$(this).addClass('active').siblings().removeClass('active');
});

$('#comedy').click(function(){
	filterByGenre('comedy');
	$(this).addClass('active').siblings().removeClass('active');
});

$('.movie_img').hover(function(){
	$(this).parent().children().removeClass('hidden');
}, function(){
	$(this).parent().find('#synopsis').addClass('hidden');
})
