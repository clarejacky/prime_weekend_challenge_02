
var i =0;
var nameArray = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];


function Button (groupNum, spliceVar) {
	this.groupNum = groupNum;
	this.spliceVar = spliceVar
}

function shuffleArray(array) {
    for(var i = (array.length - 1); i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var button2 = new Button( 2, 10);
var button3 = new Button( 3, 7);
var button4 = new Button( 4, 5);
var button5 = new Button( 5, 4);
var button6 = new Button( 6, 3);
var button7 = new Button( 7, 3);
var button8 = new Button( 8, 2);
var button9 = new Button( 9, 2);
var button10 = new Button( 10, 2);


var masterArray = [];

function makeMaster(object) {
	nameArray = shuffleArray(nameArray);
	for (var i = 0; i < object.groupNum - 1; i++)  {
		masterArray[i] = nameArray.splice(0, object.spliceVar);
	}
	masterArray.push(nameArray);
		i = 0;
		while (nameArray.length > object.spliceVar) {
			var temp = nameArray.pop();
			masterArray[i].push(temp);
			i++;
		}
	return masterArray;
	console.log(masterArray);
}


$(document).ready(function(){



$("#refresh").on("click", function(){
	for (var i = 0; i < masterArray.length; i++) {
		for (var j = 0; j < masterArray[i].length; j++) {
			$("#group"+i+"").append("<li>"+masterArray[i][j]+"</li>");
		}
	}
	console.log(masterArray);
});
	

$("#butt2").on("click", function(){
	makeMaster(button2);
	console.log(masterArray);
});
	
$("#butt3").on("click", function(){
	makeMaster(button3);
	console.log(masterArray);
});

$("#butt4").on("click", function(){
	makeMaster(button4);
	console.log(masterArray);
});

$("#butt5").on("click", function(){
	makeMaster(button5);
	console.log(masterArray);
});

$("#butt6").on("click", function(){
	makeMaster(button6);
	console.log(masterArray);
});

$("#butt7").on("click", function(){
	makeMaster(button7);
	console.log(masterArray);
});

$("#butt8").on("click", function(){
	makeMaster(button8);
	console.log(masterArray);
});

$("#butt9").on("click", function(){
	makeMaster(button9);
	console.log(masterArray);
});

$("#butt10").on("click", function(){
	makeMaster(button10);
	console.log(masterArray);
});

});


//click one of the buttons 
//depending number - groups created
//when number of groups chosen - selects how many group numbers
// if select 2 groups 
//conditional to check if number has been chosen before 
//run randomNumber on each group and pull those numbers from nameArray
//push names to DOM