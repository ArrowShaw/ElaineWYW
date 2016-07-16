var data = {
    labels: ["TABLEAU", "SPSS", "R", "HTML", "CSS", "PREMIERE"],
  
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(34,139,34, 0.4)",
            strokeColor: "rgb(34,139,34)",
            pointColor: "rgba(34,139,34,1)",
            pointStrokeColor: "rgb(34,139,34)",
            pointHighlightFill: "rgb(34,139,34)",
            pointHighlightStroke: "rgb(34,139,34)",
            data: [7, 5, 4, 4, 4, 8]
        }
    ]
};

var chartOptions = {
  pointDotStrokeWidth : 3,
  scaleOverride : true, // 目盛の最大値を手動設定（true/false）
  scaleSteps : 10, // 目盛の数
  scaleStartValue : 0, // 目盛の最初の数
  scaleStepWidth : 1, // 目盛の間隔
  angleLineColor : "rgba(205 ,209 ,211 ,1)",
  pointLabelFontSize : 11,
  pointLabelFontColor : "rgba(205 ,209 ,211 ,1)",
  pointLabelFontFamily : "'Roboto Slab', serif",
  scaleLineColor:"rgba(205 ,209 ,211 ,1)"
};

var ctx = document.getElementById("myChart").getContext("2d");
var myRadarChart = new Chart(ctx).Radar(data, chartOptions);