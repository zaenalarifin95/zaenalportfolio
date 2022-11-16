var chart;
		var legend;

		var chartData = [{
				country: "Microsoft Office",
				value: 900
			},
			{
				country: "MySQL",
				value: 360
			},
			{
				country: "UiPath RPA",
				value: 500
			},
			{
				country: "Wordpress",
				value: 600
			},
			{
				country: "PHP",
				value: 500
			},
			{
				country: "HTML",
				value: 500
			},
			{
				country: "CSS",
				value: 350
			}
		];

		AmCharts.ready(function () {
			// PIE CHART
			chart = new AmCharts.AmPieChart();
			chart.dataProvider = chartData;
			chart.titleField = "country";
			chart.valueField = "value";
			chart.outlineColor = "";
			chart.outlineAlpha = 0.8;
			chart.outlineThickness = 2;
			// this makes the chart 3D
			chart.depth3D = 20;
			chart.angle = 30;

			// WRITE
			chart.write("chartdiv");
		});