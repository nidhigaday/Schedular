var Team = ["Sidney", "Andy", "Cyril", "Jonathan", "Victor", "Saurabh", "Alan", "Tony", "Nidhi", "Sarita", "Rick", "Vinoo", "Wail", "Teddy"];

var agentName;

var weekOne = [
	Sunday = [],
	Monday = [],
	Tuesday = [],
	Wednesday = [],
	Thursday = [],
	Friday = [],
	Saturday = []
];

var weekTwo = [
	Sunday = [],
	Monday = [],
	Tuesday = [],
	Wednesday = [],
	Thursday = [],
	Friday = [],
	Saturday = []
];

var weekThree = [
	Sunday = [],
	Monday = [],
	Tuesday = [],
	Wednesday = [],
	Thursday = [],
	Friday = [],
	Saturday = []
];

var weekFour = [
	Sunday = [],
	Monday = [],
	Tuesday = [],
	Wednesday = [],
	Thursday = [],
	Friday = [],
	Saturday = []
];

var monthWeeks = [weekOne, weekTwo, weekThree, weekFour];
var counter = 0;
var off = 0;

//fucntion declaration
var Populator = function (name, Day, Week) {
var x, i, y, m;

for (m = 0; m < Team.length; m++){


loop1:
// loop for 1 month or 4 weeks

	for (x = 0; x < monthWeeks.length;) {
		console.log(x);
	var weekLength = monthWeeks[x].length;
	console.log(weekLength);
	//weeklength is number of days in one week i.e. 7

	loop2:
	// loop for 7 days in the week

		for (i = 0; i < weekLength; i++) {
			var dayLength = monthWeeks[x][i].length;
			/* monthWeeks[x] is xth week of the month. For example, 4th week of the month
			similarly, [i] is the ith day of the week. For example, 5th day of the 4th week of the month will be monthWeeks[4][5]
			*/

			if (i===0 && i===Day) {
				if (name == "Nidhi") {
					console.log("Cannot schedule " + name + " on Sunday");
					off++;
					console.log(off);
				}
				else if (name == "Sidney") {
					console.log("Cannot schedule " + name + " on Sunday");
					off++;
					console.log(off);
				}
				else if (name == "Cyril") {
					console.log("Cannot schedule " + name + " on Sunday");
					off++;
					console.log(off);
				}
				else if (name == "Alan") {
					console.log("Cannot schedule " + name + " on Sunday");
					off++;
					console.log(off);
				}
				else if (name == "Saurabh") {
					console.log("Cannot schedule " + name + " on Sunday");
					off++;
					console.log(off);
				}
				else if (dayLength < 6) {
					if (counter == 5 && off < 2) {
							//counter = 0;
							off++;
							console.log("Scheduled " + name + " for 5 days in this week!");
							console.log("i is "+i);
							i = i + 2;
							console.log("i is "+i);
					}
					else if (counter == 5 && off == 2) {
						counter = 0;
						console.log("scheduled for 5 days and took 2 offs in week");
						off = 0;
						break loop2;
					}
					else if (counter < 5) {
						console.log(dayLength);
						monthWeeks[x][i][dayLength] = name;
						console.log(monthWeeks[x][i]);
						counter++;
					}
				}
				else {
					console.log("All slots are full for Sunday, populating Monday");
					if (off < 2) {
						off++;
						console.log("off counter is " + off);
					} else if (off == 2){
						counter = 0;
						console.log(" on full off counter, counter is " + counter);
						i = i + 1;
						off = 0;
					}
				}
			}


			if (i == 1) {
				if (name == "Nidhi") {
					console.log("Cannot schedule "+name + " on Monday");
					off++;
				}
				/*else if (name == "Victor") {
					console.log("Cannot schedule " + name + " on Monday");
					off++;
					console.log(off);
				}
				else if (name == "Cyril") {
					console.log("Cannot schedule " + name + " on Monday");
					off++;
					console.log(off);
				}
				else if (name == "Priya") {
					console.log("Cannot schedule " + name + " on Monday");
					off++;
					console.log(off);
				}*/
				else if (dayLength < 6) {
					if (counter == 5 && off < 2) {
						//counter = 0;
						off++;
						console.log("Scheduled " + name + " for 5 days in this week!");
						console.log("i is "+i);
						i = i + 2;
						console.log("i is "+i);
					}
					else if (counter == 5 && off == 2) {
						counter = 0;
						console.log("scheduled for 5 days and took 2 offs in week");
						off = 0;
						break loop2;
					}
					else if (counter < 5) {
						console.log(dayLength);
						monthWeeks[x][i][dayLength] = name;
						console.log(monthWeeks[x][i]);
						counter++;
					}
				}
				else {
					console.log("All slots are full for Monday, populating Tuesday");
					if (off < 2) {
						off++;
						console.log("off counter is " + off);
					} else if (off == 2){
						counter = 0;
						console.log(" on full off counter, counter is " + counter);
						i = i + 1;
						off = 0;
					}
				}
			}

			if (i == 2) {
				if (name == "Saurabh") {
					console.log("Cannot schedule "+name + " on Tuesday");
					off++;
				}
				/*else if (name == "Alan") {
					console.log("Cannot schedule " + name + " on Tuesday");
					off++;
					console.log(off);
				}*/
				else if (dayLength < 7) {
					if (counter == 5 && off < 2) {
						//counter = 0;
						off++;
						console.log("Scheduled " + name + " for 5 days in this week!");
						console.log("i is "+i);
						i = i + 2;
						console.log("i is "+i);
					}
					else if (counter == 5 && off == 2) {
						counter = 0;
						console.log("scheduled for 5 days and took 2 offs in week");
						off = 0;
						break loop2;
					}
					else if (counter < 5) {
						console.log(dayLength);
						monthWeeks[x][i][dayLength] = name;
						console.log(monthWeeks[x][i]);
						counter++;
					}
				}
				else {
					console.log("All slots are full for Tuesday, populating Wednesday");
					if (off < 2) {
						off++;
						console.log("off counter is " + off);
					} else if (off == 2){
						counter = 0;
						console.log(" on full off counter, counter is " + counter);
						i = i + 1;
						off = 0;
					}
				}
			}

			if (i == 3) {
				/*if (name == "Alan") {
					console.log("Cannot schedule " + name + " on Wednesday");
					off++;
					console.log(off);
				}
				else if (name == "Rick") {
					console.log("Cannot schedule " + name + " on Wednesday");
					off++;
					console.log(off);
				}*/
				if (dayLength < 6) {
					if (counter == 5 && off < 2) {
						//counter = 0;
						off++;
						console.log("Scheduled " + name + " for 5 days in this week!");
						console.log("i is "+i);
						i = i + 2;
						console.log("i is "+i);
					}
					else if (counter == 5 && off == 2) {
						counter = 0;
						console.log("scheduled for 5 days and took 2 offs in week");
						off = 0;
						break loop2;
					}
					else if (counter < 5) {
						console.log(dayLength);
						monthWeeks[x][i][dayLength] = name;
						console.log(monthWeeks[x][i]);
						counter++;
					}
				}
				else {
					console.log("All slots are full for Wednesday, populating Thursday");
					if (off < 2) {
						off++;
						console.log("off counter is " + off);
					} else if (off == 2){
						counter = 0;
						console.log(" on full off counter, counter is " + counter);
						i = i + 1;
						off = 0;
					}
				}
			}

			if (i == 4) {
				if (dayLength < 5) {
					if (counter == 5 && off < 2) {
						//counter = 0;
						off++;
						console.log("Scheduled " + name + " for 5 days in this week!");
						console.log("i is "+i);
						i = i + 2;
						console.log("i is "+i);
					}
					else if (counter == 5 && off == 2) {
						counter = 0;
						console.log("scheduled for 5 days and took 2 offs in week");
						off = 0;
						break loop2;
					}
					else if (counter < 5) {
						console.log(dayLength);
						monthWeeks[x][i][dayLength] = name;
						console.log(monthWeeks[x][i]);
						counter++;
					}
				}
				else {
					console.log("All slots are full for Thursday, populating Friday");
					if (off < 2) {
						off++;
						console.log("off counter is " + off);
					} else if (off == 2){
						counter = 0;
						console.log(" on full off counter, counter is " + counter);
						i = i + 1;
						off = 0;
					}
				}
			}

			if (i == 5) {
				if (name == "Andy") {
					console.log("Cannot schedule " + name + " on Friday");
					off++;
					console.log(off);
				}
				/*else if (name == "Alan") {
					console.log("Cannot schedule " + name + " on Friday");
					off++;
					console.log(off);
				}
				else if (name == "Vinoo") {
					console.log("Cannot schedule " + name + " on Friday");
					off++;
					console.log(off);
				}
				else if (name == "Sarita") {
					console.log("Cannot schedule " + name + " on Friday");
					off++;
					console.log(off);
				}*/
				else if (dayLength < 5) {
					if (counter == 5 && off < 2) {
						//counter = 0;
						off++;
						console.log("Scheduled " + name + " for 5 days in this week!");
						console.log("i is "+i);
						i = i + 2;
						console.log("i is "+i);
					}
					else if (counter == 5 && off == 2) {
						counter = 0;
						console.log("scheduled for 5 days and took 2 offs in week");
						off = 0;
						break loop2;
					}
					else if (counter < 5) {
						console.log(dayLength);
						monthWeeks[x][i][dayLength] = name;
						console.log(monthWeeks[x][i]);
						counter++;
						console.log("counter = "+counter);
					}
				}
				else {
					console.log("All slots are full for Friday, populating Saturday");
					if (off < 2) {
						off++;
						console.log("off counter is " + off);
					} else if (off == 2){
						counter = 0;
						console.log(" on full off counter, counter is " + counter);
						i = i + 1;
						off = 0;
					}
				}
			}

			if (i == 6) {
				if (name == "Andy") {
					console.log("Cannot schedule " + name + " on Saturday");
					off++;
					console.log(off);
				}
				else if (name == "Alan") {
					console.log("Cannot schedule " + name + " on Saturday");
					off++;
					console.log(off);
				}
				else if (name == "Sidney") {
					console.log("Cannot schedule " + name + " on Saturday");
					off++;
					console.log(off);
				}
				/*else if (name == "Vinoo") {
					console.log("Cannot schedule " + name + " on Saturday");
					off++;
					console.log(off);
				}
				else if (name == "Jonathan") {
					console.log("Cannot schedule " + name + " on Saturday");
					off++;
					console.log(off);
				}*/
				else if (dayLength < 6) {
					if (counter == 5 && off < 2) {
						//counter = 0;
						off++;
						console.log("Scheduled " + name + " for 5 days in this week!");
						console.log("i is "+i);
						i = i + 2;
						console.log("i is "+i);
					}
					else if (counter == 5 && off == 2) {
						counter = 0;
						off = 0;
						console.log("scheduled for 5 days and took 2 offs in week");
						//break loop2;
					}else if (counter < 5) {
						console.log(dayLength);
						monthWeeks[x][i][dayLength] = name;
						console.log(monthWeeks[x][i]);
						counter++;
						console.log(counter);
					}
				}
				else {
					console.log("All slots are full for Saturday");
					if (off < 2) {
						off++;
						console.log("off counter is " + off);
					} else if (off == 2){
						counter = 0;
						console.log(" on full off counter, counter is " + counter);
						i = i + 1;
						off = 0;
					}
					break loop2;
				}
			}

			if (i > 6) {
				if (counter == 5 && off < 2) {
					off++;
					console.log("i is "+i);
					i = i + 2;
					console.log("i is "+i);
				}
				break loop2;
			}
		}

		if (counter == 5 && off == 2) {
			counter = 0;
			off = 0;
			console.log("breaking week loop now");
		}
		console.log(monthWeeks[x]);
		x = x + 1;
		if ( x > 4) {
			break loop1;
		} else {
			continue loop1;
		}
	}
}
};

console.log(weekOne);