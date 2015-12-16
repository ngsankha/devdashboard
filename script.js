var data = {"labels": ["10 December", "11 December", "12 December", "13 December", "14 December", "15 December", "16 December"], "datasets": [{"languages": [[], [], [], [], ["Ruby", "JavaScript", "Bash"], ["Ruby", "Python", "JavaScript"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": [" 0 secs", " 0 secs", " 0 secs", " 0 secs", "1 hr 13 mins", "4 hrs ", " 0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.0, 0.0, 0.0, 1.2527777777777778, 4.058888888888889, 0.0], "label": "Dataset"}]};
var totalTime = "5 hours 18 minutes";
var languages = ["Ruby", "Python", "JavaScript"];
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
