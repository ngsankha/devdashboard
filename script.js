var data = {"labels": ["29 December", "30 December", "31 December", "1 January", "2 January", "3 January", "4 January"], "datasets": [{"languages": [["Ruby", "JavaScript", "Python"], ["JavaScript", "Ruby", "Rust"], ["JavaScript", "CSS", "HTML"], ["JavaScript", "CSS", "HTML"], ["HTML", "CSS"], ["JavaScript", "JSON", "Ruby"], ["Python"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["6 hrs 19 mins", "5 hrs 55 mins", "3 hrs 6 mins", "1 hr 47 mins", "1 hr 21 mins", "6 hrs 58 mins", "5 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [6.336944444444445, 5.961388888888889, 3.104722222222222, 1.7947222222222223, 1.3683333333333334, 6.991666666666666, 0.08972222222222222], "label": "Dataset"}]};
var totalTime = "25 hours 38 minutes";
var languages = ["JavaScript", "Ruby", "HTML"];
var ctx = document.getElementById("chart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data, {
  tooltipTemplate: function(valuesObject){
    var label = valuesObject.label;
    var idx = data.labels.indexOf(label);
    var result = data.datasets[0].time[idx];
    if (data.datasets[0].languages[idx].length !== 0)
      result += " [" + data.datasets[0].languages[idx].join(", ") + "]"
    return result;
  }
});
document.getElementById("summary").innerHTML = "I have written code for " + totalTime + " in the last week in mostly " + languages.join(", ") + ".";
