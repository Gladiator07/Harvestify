$(function () {
	var totalRevenue = 2781450,
			totalVisitors = 883000;
	

	// data for drilldown charts
	var dataMonthlyRevenueByCategory = {
		"Men Clothing": {
			color: "#393f63",
			markerSize: 0,
			name: "Men Clothing",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 25987.50 },
				{ x: new Date("1 Feb 2015"), y: 23436.00 },
				{ x: new Date("1 Mar 2015"), y: 29988.00 },
				{ x: new Date("1 Apr 2015"), y: 20790.00 },
				{ x: new Date("1 May 2015"), y: 36288.00 },
				{ x: new Date("1 Jun 2015"), y: 30870.00 },
				{ x: new Date("1 Jul 2015"), y: 28728.00 },
				{ x: new Date("1 Aug 2015"), y: 30996.00 },
				{ x: new Date("1 Sep 2015"), y: 25200.00 },
				{ x: new Date("1 Oct 2015"), y: 21168.00 },
				{ x: new Date("1 Nov 2015"), y: 30996.00 },
				{ x: new Date("1 Dec 2015"), y: 37926.00 }
			]
		},
		"Women Clothing": {
			color: "#e5d8b0",
			markerSize: 0,
			name: "Women Clothing",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 19057.50 },
				{ x: new Date("1 Feb 2015"), y: 15624.00 },
				{ x: new Date("1 Mar 2015"), y: 34272.00 },
				{ x: new Date("1 Apr 2015"), y: 24948.00 },
				{ x: new Date("1 May 2015"), y: 31752.00 },
				{ x: new Date("1 Jun 2015"), y: 26460.00 },
				{ x: new Date("1 Jul 2015"), y: 23940.00 },
				{ x: new Date("1 Aug 2015"), y: 36162.00 },
				{ x: new Date("1 Sep 2015"), y: 30240.00 },
				{ x: new Date("1 Oct 2015"), y: 26460.00 },
				{ x: new Date("1 Nov 2015"), y: 36162.00 },
				{ x: new Date("1 Dec 2015"), y: 43344.00 }
			]
		},
		"Gadgets": {
			color: "#ffb367",
			markerSize: 0,
			name: "Gadgets",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 41580.00 },
				{ x: new Date("1 Feb 2015"), y: 41013.00 },
				{ x: new Date("1 Mar 2015"), y: 42840.00 },
				{ x: new Date("1 Apr 2015"), y: 37422.00 },
				{ x: new Date("1 May 2015"), y: 36288.00 },
				{ x: new Date("1 Jun 2015"), y: 44100.00 },
				{ x: new Date("1 Jul 2015"), y: 38304.00 },
				{ x: new Date("1 Aug 2015"), y: 36162.00 },
				{ x: new Date("1 Sep 2015"), y: 50400.00 },
				{ x: new Date("1 Oct 2015"), y: 63504.00 },
				{ x: new Date("1 Nov 2015"), y: 56826.00 },
				{ x: new Date("1 Dec 2015"), y: 65016.00 }
			]
		},
		"Books": {
			color: "#f98461",
			markerSize: 0,
			name: "Books",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 17325.00 },
				{ x: new Date("1 Feb 2015"), y: 27342.00 },
				{ x: new Date("1 Mar 2015"), y: 25704.00 },
				{ x: new Date("1 Apr 2015"), y: 16632.00 },
				{ x: new Date("1 May 2015"), y: 13608.00 },
				{ x: new Date("1 Jun 2015"), y: 17640.00 },
				{ x: new Date("1 Jul 2015"), y: 23940.00 },
				{ x: new Date("1 Aug 2015"), y: 15498.00 },
				{ x: new Date("1 Sep 2015"), y: 25200.00 },
				{ x: new Date("1 Oct 2015"), y: 21168.00 },
				{ x: new Date("1 Nov 2015"), y: 15498.00 },
				{ x: new Date("1 Dec 2015"), y: 10836.00 }
			]
		},
		"Others": {
			color: "#d9695f",
			markerSize: 0,
			name: "Others",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 69300.00 },
				{ x: new Date("1 Feb 2015"), y: 87885.00 },
				{ x: new Date("1 Mar 2015"), y: 81396.00 },
				{ x: new Date("1 Apr 2015"), y: 108108.00 },
				{ x: new Date("1 May 2015"), y: 108864.00 },
				{ x: new Date("1 Jun 2015"), y: 101430.00 },
				{ x: new Date("1 Jul 2015"), y: 124488.00 },
				{ x: new Date("1 Aug 2015"), y: 139482.00 },
				{ x: new Date("1 Sep 2015"), y: 120960.00 },
				{ x: new Date("1 Oct 2015"), y: 132300.00 },
				{ x: new Date("1 Nov 2015"), y: 118818.00 },
				{ x: new Date("1 Dec 2015"), y: 113778.00 }
			]
		}
	};
	
	// data for drilldown charts
	var dataVisitors = {
		"New vs Returning Visitors": [
			{
				click: visitorsChartDrilldownHandler,
				cursor: "pointer",
				explodeOnClick: false,
				innerRadius: "75%",
				legendMarkerType: "square",
				name: "New vs Returning Visitors",
				radius: "100%",
				showInLegend: true,
				startAngle: 90,
				type: "doughnut",
				dataPoints: [
					{ y: 519960, name: "New Visitors", color: "#393f63" },
					{ y: 363040, name: "Returning Visitors", color: "#f98461" }
				]
			}
		],
		"New Visitors": [
			{
				color: "#393f63",
				name: "New Visitors",
				type: "column",
				dataPoints: [
					{ x: new Date("1 Jan 2015"), y: 33000 },
					{ x: new Date("1 Feb 2015"), y: 35960 },
					{ x: new Date("1 Mar 2015"), y: 42160 },
					{ x: new Date("1 Apr 2015"), y: 42240 },
					{ x: new Date("1 May 2015"), y: 43200 },
					{ x: new Date("1 Jun 2015"), y: 40600 },
					{ x: new Date("1 Jul 2015"), y: 42560 },
					{ x: new Date("1 Aug 2015"), y: 44280 },
					{ x: new Date("1 Sep 2015"), y: 44800 },
					{ x: new Date("1 Oct 2015"), y: 48720 },
					{ x: new Date("1 Nov 2015"), y: 50840 },
					{ x: new Date("1 Dec 2015"), y: 51600 }
				]
			}
		],
		"Returning Visitors": [
			{
				color: "#f98461",
				name: "Returning Visitors",
				type: "column",
				dataPoints: [
					{ x: new Date("1 Jan 2015"), y: 22000 },
					{ x: new Date("1 Feb 2015"), y: 26040 },
					{ x: new Date("1 Mar 2015"), y: 25840 },
					{ x: new Date("1 Apr 2015"), y: 23760 },
					{ x: new Date("1 May 2015"), y: 28800 },
					{ x: new Date("1 Jun 2015"), y: 29400 },
					{ x: new Date("1 Jul 2015"), y: 33440 },
					{ x: new Date("1 Aug 2015"), y: 37720 },
					{ x: new Date("1 Sep 2015"), y: 35200 },
					{ x: new Date("1 Oct 2015"), y: 35280 },
					{ x: new Date("1 Nov 2015"), y: 31160 },
					{ x: new Date("1 Dec 2015"), y: 34400 }
				]
			}
		]
	};
	
	// CanvasJS spline area chart to show revenue from Jan 2015 - Dec 2015
	var revenueSplineAreaChart = new CanvasJS.Chart("revenue-spline-area-chart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		axisX: {
			interval: 2,
			intervalType: "month",
			labelFontColor: "#717171",
			labelFontSize: 16,
			lineColor: "#a2a2a2",
			minimum: new Date("1 Jan 2015"),
			tickColor: "#a2a2a2",
			valueFormatString: "MMM YYYY"
		},
		axisY: {
			gridThickness: 0,
			includeZero: false,
			labelFontColor: "#717171",
			labelFontSize: 16,
			lineColor: "#a2a2a2",
			prefix: "$",
			tickColor: "#a2a2a2"
		},
		toolTip: {
			borderThickness: 0,
			cornerRadius: 0,
			fontStyle: "normal"
		},
		data: [
			{
				color: "#393f63",
				markerSize: 0,
				type: "splineArea",
				yValueFormatString: "$###,###.##",
				dataPoints: [
					{ x: new Date("1 Jan 2015"), y: 173250 },
					{ x: new Date("1 Feb 2015"), y: 195300 },
					{ x: new Date("1 Mar 2015"), y: 214200 },
					{ x: new Date("1 Apr 2015"), y: 207900 },
					{ x: new Date("1 May 2015"), y: 226800 },
					{ x: new Date("1 Jun 2015"), y: 220500 },
					{ x: new Date("1 Jul 2015"), y: 239400 },
					{ x: new Date("1 Aug 2015"), y: 258300 },
					{ x: new Date("1 Sep 2015"), y: 252000 },
					{ x: new Date("1 Oct 2015"), y: 264600 },
					{ x: new Date("1 Nov 2015"), y: 258300 },
					{ x: new Date("1 Dec 2015"), y: 270900 }
				]
			}
		]
	});
	
	revenueSplineAreaChart.render();
	
	// CanvasJS pie chart to show annual revenue by category
	var annualRevenueByCategoryPieChart = new CanvasJS.Chart("annual-revenue-by-category-pie-chart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		legend: {
			fontFamily: "calibri",
			fontSize: 14,
			horizontalAlign: "left",
			verticalAlign: "center",
			itemTextFormatter: function (e) {
				return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalRevenue * 100) + "%";  
			}
		},
		toolTip: {
			backgroundColor: "#ffffff",
			cornerRadius: 0,
			fontStyle: "normal",
			contentFormatter: function (e) {
				return e.entries[0].dataPoint.name + ": " + CanvasJS.formatNumber(e.entries[0].dataPoint.y, "$###,###.00") + " - " + Math.round(e.entries[0].dataPoint.y / totalRevenue * 100) + "%";  
			}
		},
		data: [
			{
				click: monthlyRevenueByCategoryDrilldownHandler,
				cursor: "pointer",
				legendMarkerType: "square",
				showInLegend: true,
				startAngle: 90,
				type: "pie",
				dataPoints: [
					{ y: 342373.50, name:"Men Clothing", color: "#393f63" },
					{ y: 348421.50, name:"Women Clothing", color: "#e5d8b0" },
					{ y: 553455.00, name:"Gadgets", color: "#ffb367" },
					{ y: 230391.00, name:"Books", color: "#f98461" },
					{ y: 1306809.00, name:"Others", color: "#d9695f" }
				]
			}
		]
	});
	
	// CanvasJS multiseries column chart to show monthly revenue by category
	var monthlyRevenueByCategoryColumnChart = new CanvasJS.Chart("monthly-revenue-by-category-column-chart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		axisX: {
			interval: 2,
			intervalType: "month",
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		axisY: {
			gridThickness: 0,
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			maximum: 150000,
			prefix: "$",
			tickColor: "#a2a2a2"
		},
		toolTip: {
			backgroundColor: "#737580",
			borderThickness: 0,
			cornerRadius: 0,
			fontColor: "#ffffff",
			fontSize: 16,
			fontStyle: "normal",
			shared: true
		},
		data: []
	});

	populateMonthlyRevenueByCategoryChart();
	monthlyRevenueByCategoryColumnChart.render();

	var visitorsDrilldownedChartOptions = {
		animationEnabled: true,
		backgroundColor: "transparent",
		axisX: {
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		axisY: {
			gridThickness: 0,
			includeZero: false,
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		toolTip: {
			cornerRadius: 0,
			fontStyle: "normal"
		},
		data: []
	};
	
	var newVsReturningVisitorsChartOptions = {
		animationEnabled: true,
		backgroundColor: "transparent",
		legend: {
			fontFamily: "calibri",
			fontSize: 14,
			itemTextFormatter: function (e) {
				return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
			}
		},
		toolTip: {
			cornerRadius: 0,
			fontStyle: "normal",
			contentFormatter: function (e) {
				return e.entries[0].dataPoint.name + ": " + CanvasJS.formatNumber(e.entries[0].dataPoint.y, "###,###") + " - " + Math.round(e.entries[0].dataPoint.y / totalVisitors * 100) + "%";  
			} 
		},
		data: []
	};	

	// CanvasJS doughnut chart to show new vs returning visitors
	var visitorsChart = new CanvasJS.Chart("visitors-chart", newVsReturningVisitorsChartOptions);
	visitorsChart.options.data = dataVisitors["New vs Returning Visitors"];
	
	visitorsChart.render();

	// CanvasJS spline chart to show users from Jan 2015 - Dec 2015
	var usersSplineChart = new CanvasJS.Chart("users-spline-chart", {
		animationEnabled: true,
		backgroundColor: "transparent",
		axisX: {
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		axisY: {
			gridThickness: 0,
			includeZero: false,
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		toolTip: {
			borderThickness: 1,
			cornerRadius: 0,
			fontStyle: "normal"
		},
		data: [
			{
				color: 	"#393F63", 
				lineThickness: 3,
				markerSize: 0,
				type: "spline",
				dataPoints: [
					{ x: new Date("1 Jan 2015"), y: 55000 },
					{ x: new Date("1 Feb 2015"), y: 62000 },
					{ x: new Date("1 Mar 2015"), y: 68000 },
					{ x: new Date("1 Apr 2015"), y: 66000 },
					{ x: new Date("1 May 2015"), y: 72000 },
					{ x: new Date("1 Jun 2015"), y: 70000 },
					{ x: new Date("1 Jul 2015"), y: 76000 },
					{ x: new Date("1 Aug 2015"), y: 82000 },
					{ x: new Date("1 Sep 2015"), y: 80000 },
					{ x: new Date("1 Oct 2015"), y: 84000 },
					{ x: new Date("1 Nov 2015"), y: 82000 },
					{ x: new Date("1 Dec 2015"), y: 86000 }
				]
			}
		]
	});
	
	usersSplineChart.render();	
	
	//----------------------------------------------------------------------------------//
	var allCharts = [
		revenueSplineAreaChart,
		annualRevenueByCategoryPieChart,
		monthlyRevenueByCategoryColumnChart,
		visitorsChart,
		usersSplineChart
	];
	
	function populateMonthlyRevenueByCategoryChart() {
		for (var prop in dataMonthlyRevenueByCategory)
			if  (dataMonthlyRevenueByCategory.hasOwnProperty(prop))
				monthlyRevenueByCategoryColumnChart.options.data.push( dataMonthlyRevenueByCategory[prop] );
	}
	
	function monthlyRevenueByCategoryDrilldownHandler(e) {
		monthlyRevenueByCategoryColumnChart.options.data = [];

		for (var i = 0; i < annualRevenueByCategoryPieChart.options.data[0].dataPoints.length; i++)
			if (annualRevenueByCategoryPieChart.options.data[0].dataPoints[i].exploded === true)
				monthlyRevenueByCategoryColumnChart.options.data.push( dataMonthlyRevenueByCategory[annualRevenueByCategoryPieChart.options.data[0].dataPoints[i].name] );

		if (monthlyRevenueByCategoryColumnChart.options.data.length === 0)
			populateMonthlyRevenueByCategoryChart();

		monthlyRevenueByCategoryColumnChart.render();
	}
	
	var visitorsChartHeadingDOM = $("#visitors-chart-heading"),
			visitorsChartBackButtonDOM = $("#visitors-chart-back-button"),
			visitorsChartTagDOM = $("#visitors-chart-tag");
	
	function visitorsChartDrilldownHandler (e) {
		visitorsChart = new CanvasJS.Chart("visitors-chart", visitorsDrilldownedChartOptions);
		visitorsChart.options.data = dataVisitors[e.dataPoint.name];
		visitorsChart.render();
		
		// DOM Manipulations
		visitorsChartHeadingDOM.html(e.dataPoint.name);
		visitorsChartBackButtonDOM.toggleClass("invisible");
		visitorsChartTagDOM.toggleClass("invisible");
	}
	
	// binding click event to visitors chart back button to drill up to "New Vs Returning Visitors" doughnut chart
	visitorsChartBackButtonDOM.on("click", function () {
		visitorsChart = new CanvasJS.Chart("visitors-chart", newVsReturningVisitorsChartOptions);
		visitorsChart.options.data = dataVisitors["New vs Returning Visitors"];
		visitorsChart.render();
		
		// DOM Manipulations
		visitorsChartHeadingDOM.html("New vs Returning Visitors");
		visitorsChartBackButtonDOM.toggleClass("invisible");
		visitorsChartTagDOM.toggleClass("invisible");
	});
	
	// chart properties cutomized further based on screen width
	function chartPropertiesCustomization () {
		if ($(window).outerWidth() >= 1200 ) {
			
			annualRevenueByCategoryPieChart.options.legend.horizontalAlign = "left";
			annualRevenueByCategoryPieChart.options.legend.verticalAlign = "center";
			annualRevenueByCategoryPieChart.render();
			
			visitorsChartTagDOM.css("position", "absolute");
			
		} else if ($(window).outerWidth() < 1200) {
			
			annualRevenueByCategoryPieChart.options.legend.horizontalAlign = "center";
			annualRevenueByCategoryPieChart.options.legend.verticalAlign = "top";
			annualRevenueByCategoryPieChart.render();
			
			visitorsChartTagDOM.css("position", "static");
			
		}
	}
	
	function renderAllCharts() {
		for (var i = 0; i < allCharts.length; i++)
			allCharts[i].render();
	}
	
	function sidebarToggleOnClick() {
		$('#sidebar-toggle-button').on('click', function () {
			$('#sidebar').toggleClass('sidebar-toggle');
			$('#page-content-wrapper').toggleClass('page-content-toggle');
			renderAllCharts();
		});	
	}
	
	(function init() {
		chartPropertiesCustomization();
		$(window).resize(chartPropertiesCustomization);
		sidebarToggleOnClick();
	})();
	
});