var objHolder2;
var textHolder2;

function preload(){

	objHolder = [];
	textHolder = [];
	objHolder2 = [];
	textHolder2 = [];
	audHolder = [];
	audHolder2 = [];
	invTxt = [];

	box = loadImage("box.jpg");


	
	hairImg = loadImage("timmypete.jpg");
	hair = createSprite(470,250,50, 50);
	hair.addImage(hairImg);
	objHolder[0] = hair;
	objHolder[0].scale = 0.2;
	textHolder[0] = "A photo of when Timmy first met Pete.";

	scrollImg = loadImage("scroll.png",'1scroll');
	scroll2Img = loadImage("scroll_hover.png");
	scroll = createSprite(200,200,40, 40);
	scroll.addImage(scrollImg);
	objHolder[1] = scroll;
	textHolder[1] = "A transcript from Timmy and Pete's court case.";

	scroll2 = createSprite(200,200,40, 40);
	scroll2.addImage(scroll2Img);

	flashImg = loadImage("flashdrive.png");
	flash = createSprite(270,350,40, 40);
	flash.addImage(flashImg);
	objHolder[2] = flash;
	textHolder[2] = "A video of Timmy and Pete's court case.";

	insurImg = loadImage("insurance.png");
	insur = createSprite(900,400,40, 40);
	insur.addImage(insurImg);
	objHolder[3] = insur;
	textHolder[3] = "Insurance that Timmy and Pete took out to insure their adoption.";

	posterImg = loadImage("poster.png");
	poster = createSprite(340,570,40, 40);
	poster.addImage(posterImg);
	objHolder[4] = poster;
	textHolder[4] = "Poster distributed by Legacy Insurance.";

	cardImg = loadImage("abyssCard.png");
	card = createSprite(580,400,40, 40);
	card.addImage(cardImg);
	objHolder[5] = card;
	textHolder[5] = "Card distributed by members of the Abyss Walkers.";

	fluffyBudImg = loadImage("FluffyBud.png");
	fluffyBud = createSprite(580,575,40, 40);
	fluffyBud.addImage(fluffyBudImg);
	objHolder[6] = fluffyBud;
	textHolder[6] = "Timmy's Fluffy Buddy.";

	noteImg = loadImage("note.png");
	note = createSprite(150,700,40, 40);
	note.addImage(noteImg);
	objHolder[7] = note;
	textHolder[7] = "";


}

function setup(){
  w = window.innerWidth;
  h = window.innerHeight;
  canvas = createCanvas(w, h);
  textFont('Roboto Mono');
}

function draw(){
	background(box);
	for(var i = 0; i < objHolder.length; i++){
	drawSprite(objHolder[i]);
	objHolder[i].mouseActive = true;
		if (objHolder[i].mouseIsOver == true){
			objHolder[i].scale = 0.8;
			fill(255);
			textSize(20);
			stroke(0);
			strokeWeight(3);
			text(textHolder[i], w/3 - (0.05 * mouseX), 70);
			scroll.addImage(scrollImg);
			// if(i == 1){
			// 	scroll.addImage(scroll2Img);
			// }
		}
		// else if(objHolder[1].mouseIsOver == false){
		// 	scroll.changeImage('1scroll');
		// }
		else{
			objHolder[i].scale = 0.6;
		}

		if(objHolder[1].mouseIsPressed == true){
			window.open("https://docs.google.com/presentation/d/1WkbUGKLSON_nSaRh-ADSN_1N4CbDA7Hu2s5D8XKPaz0/edit?usp=sharing");
		}
		else if (objHolder[0].mouseIsPressed == true){
			window.location.assign("backstory.html");
		}
		else if (objHolder[6].mouseIsPressed == true){
			window.location.assign("fluffyBud.html");
		}
		else if (objHolder[2].mouseIsPressed == true){
			window.location.assign("video.html");
		}
		else if (objHolder[7].mouseIsPressed == true){
			window.location.assign("https://medium.com/@jiuzhua9/project-1-project-2-documentations-87864245269c");
		}
	}
}

function changeGray(){
	console.log("hey");
}