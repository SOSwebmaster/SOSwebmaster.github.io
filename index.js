let cardSources = ['img/c-teacher.svg',
				   'img/c-student.svg',
				   'img/c-admin.svg',
				   'img/c-parent.svg']

let fullGame = ['img/title.svg', cardSources, 'img/great-work.svg' ]



/* SHUFFLE */
let shuffleCards = function(arr){
	let newPosition,
		temp;
	for (let i = arr.length - 1; i > 0; i--) {
		newPosition = Math.floor(Math.random() * (i + 1));
		temp = arr[i];
		arr[i] = arr[newPosition];
		arr[newPosition] = temp;
	}
	return arr;
};



var firstImage = document.getElementById('mainImage');
let newArray = shuffleCards(fullGame[1]);
var imageIndex = 0;

function changeImage(){
	imageIndex++;
	
	if (imageIndex < newArray.length + 1) {
		firstImage.setAttribute("src", fullGame[1][imageIndex -1]);
	}
		
	else if (imageIndex == newArray.length + 1) {
		firstImage.setAttribute("src", fullGame[2]); //set firstImage to "great-work card"
		newArray = shuffleCards(cardSources);
	}
	
	else if (imageIndex > newArray.length + 1) {
		location.reload();
	}	
	
}


/*
//TIMER
function restart() {
	var count = 5;
	var interval = setInterval
		(function(){
		  document.getElementById('count').innerHTML=count;
		  count--;
		  if (count === -1){
			clearInterval(interval);
			document.getElementById('count').innerHTML='Done';
			// alert("You're out of time!");
			firstImage.setAttribute("src", fullGame[2]);
		  } // end of 'if statement'
		}, 1000);
}
*/








