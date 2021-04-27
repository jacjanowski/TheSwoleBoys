
$("#navbar").ready(function () {
	$('a').click(function () {
		$('.item.active').removeClass("active");
		$(this).addClass("active");
		$(this).style.color = "green";
	});
});

$(".toggle").click(function () {
	if (this.classList.contains("active")) {
		this.classList.remove("active");
		this.innerHTML = '<i class="add icon"></i>' + "Add Friend";
	} else {
		this.classList.add("active");
		this.innerText = "Added!";
	}
})

$("div.four.column.wide a.item").click(function () {


	if (!this.classList.contains("active")) {
		document.getElementById('placeholder').style.display = "none";
	}

})

$("#inbox").click(function (e) {


	$('#modal_one').modal('show');
	$("#number1").hide();
});

$("#modal_two_link").click(function () {

	$('#modal_two').modal('show');
});

$("#modal_three_link").click(function () {

	$('#modal_three').modal('show');
});
$("#modal_four_link").click(function () {

	$('#modal_four').modal('show');
});
$("#modal_five_link").click(function () {

	$('#modal_five').modal('show');
});

$("#modal_six_link").click(function () {

	$('#modal_six').modal('show');
});
$("#modal_seven_link").click(function () {

	$('#modal_seven').modal('show');
});
$("#modal_eight_link").click(function () {

	$('#modal_eight').modal('show');
});
$("#modal_nine_link").click(function () {

	$('#modal_nine').modal('show');
});
$("#modal_ten_link").click(function () {

	$('#modal_ten').modal('show');
});
$("#modal_eleven_link").click(function () {

	$('#modal_eleven').modal('show');
});






$('ul').on('click', 'li', function () {
	$(this).toggleClass("completed");
});

//click on X to delete 'todo'
$('ul').on('click', 'span', function (event) {
	$(this).parent().fadeOut(1000, function () {
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		//create a new 'li' and add to 'ul'
		$('ul').append('<li><span><i class="fa fa-trash"></i></span>' + todoText + '</li>');

	}
});

$('.fa-plus').click(function () {
	$("input[type='text']").fadeToggle();
});



// $('.animated').click(function () {
// 	$('.item span').wrap("<strike>");
// 	//$('a').css("text-decoration", "line-through");
// });

function showInput() {
	var x = document.getElementById("inputGoal");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// $(document).ready(function () {

// 	$("#modalBtn").click(function () {
// 		$('#modalShow').modal('show');
// 	});
// 	$("#title").animate({
// 		'font-size': '40px',
// 		'opacity': '1',
// 		'color': 'white'
// 	}, 1000);
// });

$(document).ready(function () {
	$('a').click(function () {
		$('.item.active').removeClass("active");
		$(this).addClass("active");
	});


	document.getElementById("add").onclick = function () {

		var text = document.getElementById("input").value;
		if (!text || text[0] === " ") {
			return;
		}
		var presetData1 = "<div style='overflow: auto;' class='item'>";
		var presetData2 = "<div class='ui right floated green animated button' tabindex='0'>";
		var presetData3 = "<div class='visible content'>Done</div><div class='hidden content'><i class='check icon'></i></div></div></div>";
		var li = "<span>" + text + "</span>";
		li = presetData1 + li + presetData2 + presetData3;
		document.getElementById("list").innerHTML += li;
		document.getElementById("input").value = ""; // clear the value
	}

});
$('.tabular.menu .item').tab();

// $(window).scroll(function () {
// 	$("#fade-scroll").each(function () {
// 		$(this).css("opacity", 1 - $(window).scrollTop() / $('#fade-scroll').height());
// 	});

// });


// $(document).on('scroll', function () {
// 	var pageTop = $(document).scrollTop();
// 	var pageBottom = pageTop + $(window).height();
// 	var tags = $('section');

// 	for (var i = 0; i < tags.length; i++) {
// 		var tag = tags[i];

// 		if ($(tag).position().top < pageBottom) {
// 			$(tag).addClass('visible');
// 		} else {
// 			$(tag).removeClass('visible');
// 		}
// 	}
// });

google.charts.load('current', {
	packages: ['corechart', 'line']
});
google.charts.load('current', { 'packages': ['bar'] });
// google.charts.setOnLoadCallback(drawChart);
// google.charts.setOnLoadCallback(drawCurveTypes);
google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);

// let cruveTypesrows = [
// 	[new Date('2021-03-15'), 145],
// 	[new Date('2021-03-22'), 155],
// 	[new Date('2021-03-29'), 165],
// 	[new Date('2021-04-05'), 160],
// 	[new Date('2021-04-12'), 175],
// 	[new Date('2021-04-19'), 180],

// ]

// function drawCurveTypes() {
// 	var data = new google.visualization.DataTable();


// 	data.addColumn('date', 'X');
// 	data.addColumn('number', 'Bench');





// 	data.addRows(cruveTypesrows);

// 	var options = {
// 		hAxis: {
// 			title: 'Date',
//             format: 'M/d/yy',
// 		},
// 		vAxis: {
// 			title: '1 Rep Max'
// 		},
// 		series: {
// 			1: {
// 				curveType: 'function'
// 			}
// 		}
// 	};

// 	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));


// 	chart.draw(data, options);
// }

// function drawCurveTypes2() {
// 	var data2 = new google.visualization.DataTable();

// 	data2.addColumn('number', 'X');
// 	data2.addColumn('number', 'Bench');
// 	data2.addColumn('number', 'Deadlift');


// 	data2.addRows([
// 		[0, 0, 0],
// 		[1, 5, 3],
// 		[2, 15, 15],
// 		[3, 9, 11],
// 		[4, 10, 17],
// 		[5, 5, 11],

// 	]);
// 	var options = {
// 		hAxis: {
// 			title: 'Month'
// 		},
// 		vAxis: {
// 			title: 'Weight (lbs)'
// 		},
// 		series: {
// 			1: {
// 				curveType: 'function'
// 			}
// 		}
// 	};

// 	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
// 	chart.draw(data2, options);
// }

// function drawCurveTypes3() {
// 	var data2 = new google.visualization.DataTable();

// 	data2.addColumn('number', 'X');
// 	data2.addColumn('number', 'Bench');
// 	data2.addColumn('number', 'Deadlift');
// 	data2.addColumn('number', 'Overhead');



// 	data2.addRows([
// 		[0, 0, 0, 0],
// 		[1, 5, 3, 14],
// 		[2, 15, 15, 9],
// 		[3, 9, 11, 15],
// 		[4, 10, 17, 8],
// 		[5, 5, 11, 19],

// 	]);
// 	var options = {
// 		hAxis: {
// 			title: 'Month'
// 		},
// 		vAxis: {
// 			title: 'Weight (lbs)'
// 		},
// 		series: {
// 			1: {
// 				curveType: 'function'
// 			}
// 		}
// 	};

// 	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
// 	chart.draw(data2, options);
// }
// function drawCurveTypes4() {
// 	var data2 = new google.visualization.DataTable();

// 	data2.addColumn('number', 'X');
// 	data2.addColumn('number', 'Bench');
// 	data2.addColumn('number', 'Deadlift');
// 	data2.addColumn('number', 'Overhead');
// 	data2.addColumn('number', 'Squats');


// 	data2.addRows([
// 		[0, 0, 0, 0, 0],
// 		[1, 5, 3, 14, 19],
// 		[2, 15, 15, 9, 6],
// 		[3, 9, 11, 15, 15],
// 		[4, 10, 17, 8, 11],
// 		[5, 5, 11, 19, 4],

// 	]);
// 	var options = {
// 		hAxis: {
// 			title: 'Month'
// 		},
// 		vAxis: {
// 			title: 'Weight (lbs)'
// 		},
// 		series: {
// 			1: {
// 				curveType: 'function'
// 			}
// 		}
// 	};

// 	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
// 	chart.draw(data2, options);
// }

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Mon', 145, 146, 145, 148],
		['Tue', 145, 145, 147, 147],
		['Wed', 146, 147, 148, 148],
		['Thu', 147, 147, 146, 147],
		['Fri', 146, 146, 149, 150]
		// Treat the first row as data.
	], true);


	var options = {
		title: '1-Week Progression',
		vAxis: {
			title: 'Weight (lbs)',
			titleTextStyle: {
				color: '#000000',
				fontSize: 18
			}
		},
		hAxis: {
			title: 'Increase/Decrease in Weight Overtime',
			titleTextStyle: {
				color: '#000000',
				fontSize: 18
			}
		},
		legend: 'none',
		bar: { groupWidth: '100%' }, // Remove space between bars.
		candlestick: {
			fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
			risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
		}
	};

	var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div2'));
	chart.draw(data, options);
}

function drawChart2() {
	var data = google.visualization.arrayToDataTable([
		['Week 1', 140, 140, 145, 145],
		['Week 2', 144, 145, 147, 147],
		['Week 3', 145, 145, 142, 146],
		['Week 4', 145, 145, 147, 147],
		['Week 5', 146, 147, 149, 150]
		// Treat the first row as data.
	], true);


	var options = {
		title: '5-Week Progression',
		vAxis: {
			title: 'Weight (lbs)',
			titleTextStyle: {
				color: '#000000',
				fontSize: 18
			}
		},
		hAxis: {
			title: 'Increase/Decrease in Weight Overtime',
			titleTextStyle: {
				color: '#000000',
				fontSize: 18
			}
		},
		legend: 'none',
		bar: { groupWidth: '100%' }, // Remove space between bars.
		candlestick: {
			fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
			risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
		}
	};

	var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div2'));
	chart.draw(data, options);
}

function drawChart3() {
	var data = google.visualization.arrayToDataTable([
		['January', 135, 135, 140, 140],
		['February', 139, 141, 140, 145],
		['March', 142, 143, 144, 144],
		['April', 143, 146, 145, 147],
		['May', 146, 146, 150, 153]
		// Treat the first row as data.
	], true);


	var options = {
		title: '5-Month Progression',
		vAxis: {
			title: 'Weight (lbs)',
			titleTextStyle: {
				color: '#000000',
				fontSize: 18
			}
		},
		hAxis: {
			title: 'Increase/Decrease in Weight Overtime',
			titleTextStyle: {
				color: '#000000',
				fontSize: 18
			}
		},
		legend: 'none',
		bar: { groupWidth: '100%' }, // Remove space between bars.
		candlestick: {
			fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
			risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
		}
	};

	var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div2'));
	chart.draw(data, options);
}


function drawChart4() {
	var data = google.visualization.arrayToDataTable([
		['Exercise', 'Miles Traveled', 'Time Elapsed (hour)', 'Weight lost'],
		['Cycling', 10, 1, 2],
		['Running', 5, .8, 3],
		['Swimming', 5, 1, 2],
		['Stairs', 2, .5, 1]
	]);

	var options = {
		chart: {
			title: 'Your Endurance Performance in The Last Week',
			subtitle: 'Associates Workouts with Time and Weight Loss',
		},
		bars: 'horizontal' // Required for Material Bar Charts.
	};

	var chart = new google.charts.Bar(document.getElementById('barchart_material'));

	chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawChart5() {
	var data = google.visualization.arrayToDataTable([
		['Exercise', 'Miles Traveled', 'Time Elapsed (hour)', 'Weight lost'],
		['Cycling', 55, 6, 8],
		['Running', 24, 4, 9],
		['Swimming', 18, 5, 6],
		['Stairs', 11, 3, 5]
	]);

	var options = {
		chart: {
			title: 'Your Endurance Performance in the Last 5 Weeks',
			subtitle: 'Associates Workouts with Time and Weight Loss',
		},
		bars: 'horizontal' // Required for Material Bar Charts.
	};

	var chart = new google.charts.Bar(document.getElementById('barchart_material'));

	chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawChart6() {
	var data = google.visualization.arrayToDataTable([
		['Exercise', 'Miles Traveled', 'Time Elapsed (hour)', 'Weight lost'],
		['Cycling', 300, 60, 25],
		['Running', 200, 42, 31],
		['Swimming', 79, 56, 17],
		['Stairs', 51, 39, 11]
	]);

	var options = {
		chart: {
			title: 'Your Endurance Performance in The Last 5 Months',
			subtitle: 'Associates Workouts with Time and Weight Loss',
		},
		bars: 'horizontal' // Required for Material Bar Charts.
	};

	var chart = new google.charts.Bar(document.getElementById('barchart_material'));

	chart.draw(data, google.charts.Bar.convertOptions(options));
}