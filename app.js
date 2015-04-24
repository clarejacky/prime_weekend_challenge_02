// function randomNumber(min, max) {
// 	return Math.floor(Math.random() * (1 + max - min) + min);
// }
var i =0;
var nameArray = ["Scott", "Clare", "Chelsea", "Michelle", "Kasey", "Aaron", "Terry", "Michael", "Tracy", "Erik", "Cody", "Mary", "Vince", "Steve", "Rom", "Brian", "Luke", "Kelly", "Jeanne", "Alicia",];

function chunk (array, size) {
  return array.reduce(function (res, item, index) {
    if (index % size === 0) { res.push([]); }
    res[res.length-1].push(item);
    return res;
  }, []);
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
console.log(shuffleArray(nameArray));

function group(num, nameArray) {
	//var nameArray = shuffleArray(nameArray);
	var nameArray = chunk(nameArray, num);
	return nameArray;

}
console.log(group(10, nameArray));

// 	//var group1 = [nameArray[0], nameArray[1], nameArray[2], nameArray[3], nameArray[4], nameArray[5], nameArray[6], nameArray[7], nameArray[8], nameArray[9]];
// 	//var group2 = [nameArray[10], nameArray[11], nameArray[12], nameArray[13], nameArray[14], nameArray[15], nameArray[16], nameArray[17], nameArray[18], nameArray[19]];	
// //shuffle the array and then pull spots that are fixed. 
// //if each group breakdown pulls from a particular array indice than it would pull that but randomized

$(document).ready(function(){

var nameArray = ["Scott", "Clare", "Chelsea", "Michelle", "Kasey", "Aaron", "Terry", "Michael", "Tracy", "Erik", "Cody", "Mary", "Vince", "Steve", "Rom", "Brian", "Luke", "Kelly", "Jeanne", "Alicia",];

$("#butt2").on("click", function(){
	console.log("Hi");
	// var nameArray = shuffleArray(nameArray);
	nameArray = group(10, nameArray);
	console.log(nameArray);
	for(var i = 0; i < 10; i ++) {
		$("#group1").append("<li>"+nameArray[0][i]+"</li>");
		$("#group2").append("<li>"+nameArray[1][i]+"</li>");
	}

});


$("#butt3").on("click", function(){
	console.log("Hi");
	nameArray = shuffleArray(nameArray);
	nameArray = group(7, nameArray);
	console.log(nameArray);
	for(var i = 0; i < 7; i ++) {
		$("#group1").append("<li>"+nameArray[0][i]+"</li>");
	}
	
	for(i = 0; i < 7; i ++) {
	$("#group2").append("<li>"+nameArray[1][i]+"</li>");
	}
	
	for(i = 0; i < 6; i ++) {
	$("#group3").append("<li>"+nameArray[2][i]+"</li>");
	}

});

$("#butt4").on("click", function(){
	nameArray = shuffleArray(nameArray);
	nameArray = group(5, nameArray);
	console.log(nameArray);
	for(var i = 0; i < 5; i ++) {
		$("#group1").append("<li>"+nameArray[0][i]+"</li>");
		$("#group2").append("<li>"+nameArray[1][i]+"</li>");
		$("#group3").append("<li>"+nameArray[2][i]+"</li>");
		$("#group4").append("<li>"+nameArray[3][i]+"</li>");
	}
	
});

$("#butt5").on("click", function(){
	nameArray = shuffleArray(nameArray);
	nameArray = group(4, nameArray);
	console.log(nameArray);
	for(var i = 0; i < 4; i ++) {
		$("#group1").append("<li>"+nameArray[0][i]+"</li>");
		$("#group2").append("<li>"+nameArray[1][i]+"</li>");
		$("#group3").append("<li>"+nameArray[2][i]+"</li>");
		$("#group4").append("<li>"+nameArray[3][i]+"</li>");
		$("#group5").append("<li>"+nameArray[4][i]+"</li>");
	}
	
});




});


//click one of the buttons 
//depending number - groups created
//when number of groups chosen - selects how many group numbers
// if select 2 groups 
//conditional to check if number has been chosen before 
//run randomNumber on each group and pull those numbers from nameArray
//push names to DOM