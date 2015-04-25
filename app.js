
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

var groupSize;

function makeMaster(object) {
	nameArray = shuffleArray(nameArray);
	groupSize = object.groupNum;
	// for (var i = 0; i < object.groupNum - 1; i++)  {
	// 	masterArray[i] = nameArray.splice(0, object.spliceVar);
	// }
	// masterArray.push(nameArray);
	// 	i = 0;
	// 	while (nameArray.length > object.spliceVar) {
	// 		var ell = nameArray.pop();
	// 		masterArray[i].push(ell);
	// 		i++;
	// 	}
	// return masterArray;
	// console.log(masterArray);
}

function refresh() {
	var count = 0;
	for (var i = 0; i < nameArray.length; i++) {
			$("#group"+count).append("<li>"+nameArray[i]+"</li>");
			$("#group"+count).show();
			count++;
			if (count == groupSize) {
				count = 0;
			}
	}
}

$(document).ready(function(){

$("ul").hide();

$("#refresh").on("click", function(){
	// if(masterArray.length == 0){
	// 	alert("Please select a group number");
	// } else {
		$("ul").empty();
		// makeMaster(object);
		refresh();
});
	

$("#butt2").on("click", function(){
	makeMaster(button2);
	
});
	
$("#butt3").on("click", function(){
	makeMaster(button3);

});

$("#butt4").on("click", function(){
	makeMaster(button4);
	
});

$("#butt5").on("click", function(){
	makeMaster(button5);
	
});

$("#butt6").on("click", function(){
	makeMaster(button6);

});

$("#butt7").on("click", function(){
	makeMaster(button7);

});

$("#butt8").on("click", function(){
	makeMaster(button8);
	
});

$("#butt9").on("click", function(){
	makeMaster(button9);
	
});

$("#butt10").on("click", function(){
	makeMaster(button10);
	
});

});


//click one of the buttons 
//depending number - groups created
//when number of groups chosen - selects how many group numbers
// if select 2 groups 
//conditional to check if number has been chosen before 
//run randomNumber on each group and pull those numbers from nameArray
//push names to DOM