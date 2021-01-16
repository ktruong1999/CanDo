function tnamechange(){
	var name=document.getElementById('name').value;
	document.getElementById('track-title').innerHTML=name;
}


function changebrown(){
	document.getElementById('fishy').src='graphics/fish/FISH.svg';
}

function changeyellow(){
	document.getElementById('fishy').src='graphics/fish/yellow fish.svg';
}

function changepink(){
	document.getElementById('fishy').src='graphics/fish/pink fish.svg';
}

function changeblue(){
	document.getElementById('fishy').src='graphics/fish/bloo fish.svg';
}

let counter=1;

function changenode(x){
//add 100 in each direction
	if(x<5){
	let current_node = document.getElementById('node'+counter);
	switch(x){
		case 1:
			current_node.src='graphics/track/video res.svg';
			break;
		case 2:
			current_node.src='graphics/track/book res.svg';
			break;
		case 3:
			current_node.src='graphics/track/live res.svg'
			break;
		case 4:
			current_node.src='graphics/track/end.svg';
			break;
	}

		current_node.style.border='none';
		//next_node.style.border='10px solid #C9E873';
		//next_node.style.border-radius='100px';



		//border:10px solid #C9E873; border-radius:100px;


	counter+=1;
	}
}