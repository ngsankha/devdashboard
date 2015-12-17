var data = {"labels": ["11 December", "12 December", "13 December", "14 December", "15 December", "16 December", "17 December"], "datasets": [{"languages": [[], [], [], ["Ruby", "JavaScript", "Bash"], ["Ruby", "Python", "JavaScript"], ["Ruby", "JavaScript", "Python"], ["Ruby", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": [" 0 secs", " 0 secs", " 0 secs", "1 hr 13 mins", "4 hrs ", "4 hrs 23 mins", "47 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.0, 0.0, 1.2527777777777778, 4.058888888888889, 4.418055555555555, 0.7975], "label": "Dataset"}]};
var totalTime = "10 hours 31 minutes";
var languages = ["Ruby", "JavaScript", "Python"];
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
