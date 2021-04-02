// $('#toggle').click(function(){
// 	$(this).toggleClass('active');
// 	if (this.classList.contains("active")){

// 	}
//  });

$(".toggle").click(function () {
	if (this.classList.contains("active")) {
		this.classList.remove("active");
		this.innerHTML = '<i class="add icon"></i>' + "Add Friend";
	} else {
		this.classList.add("active");
		this.innerText = "Added!";
	}
})

// document.getElementById("toggle").addEventListener("click", function () {

// 	if (this.classList.contains("active")) {
// 		this.classList.remove("active");
// 		this.innerHTML = '<i class="add icon"></i>' + "Add Friend";
// 	} else {
// 		this.classList.add("active");
// 		this.innerText = "Added!";
// 	}
// });


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

$(document).ready(function () {

	$("#modalBtn").click(function () {
		$('#modalShow').modal('show');
	});
	$("#title").animate({
		'font-size': '40px',
		'opacity': '1',
		'color': 'white'
	}, 1000);
});

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
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
	var data = new google.visualization.DataTable();


	data.addColumn('number', 'X');
	data.addColumn('number', 'Bench');





	data.addRows([
		[0, 0],
		[1, 5],
		[2, 15],
		[3, 9],
		[4, 10],
		[5, 5],

	]);

	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Popularity'
		},
		series: {
			1: {
				curveType: 'function'
			}
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));


	chart.draw(data, options);
}

function drawCurveTypes2() {
	var data2 = new google.visualization.DataTable();

	data2.addColumn('number', 'X');
	data2.addColumn('number', 'Dogs');
	data2.addColumn('number', 'Cats');


	data2.addRows([
		[0, 0, 0],
		[1, 5, 3],
		[2, 15, 15],
		[3, 9, 11],
		[4, 10, 17],
		[5, 5, 11],

	]);
	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Popularity'
		},
		series: {
			1: {
				curveType: 'function'
			}
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data2, options);
}

function drawCurveTypes3() {
	var data2 = new google.visualization.DataTable();

	data2.addColumn('number', 'X');
	data2.addColumn('number', 'Dogs');
	data2.addColumn('number', 'Cats');
	data2.addColumn('number', 'Overhead');



	data2.addRows([
		[0, 0, 0, 0],
		[1, 5, 3, 14],
		[2, 15, 15, 9],
		[3, 9, 11, 15],
		[4, 10, 17, 8],
		[5, 5, 11, 19],

	]);
	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Popularity'
		},
		series: {
			1: {
				curveType: 'function'
			}
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data2, options);
}
function drawCurveTypes4() {
	var data2 = new google.visualization.DataTable();

	data2.addColumn('number', 'X');
	data2.addColumn('number', 'Dogs');
	data2.addColumn('number', 'Cats');
	data2.addColumn('number', 'Overhead');
	data2.addColumn('number', 'Squats');


	data2.addRows([
		[0, 0, 0, 0, 0],
		[1, 5, 3, 14, 19],
		[2, 15, 15, 9, 6],
		[3, 9, 11, 15, 15],
		[4, 10, 17, 8, 11],
		[5, 5, 11, 19, 4],

	]);
	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Popularity'
		},
		series: {
			1: {
				curveType: 'function'
			}
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data2, options);
}