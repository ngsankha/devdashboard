var data = {"labels": ["1 December", "2 December", "3 December", "4 December", "5 December", "6 December", "7 December"], "datasets": [{"languages": [["Ruby", "JavaScript", "Markdown"], ["Ruby", "Other", "Python"], ["Ruby", "JavaScript"], ["JavaScript", "Ruby", "JSON"], ["Rust"], ["Rust", "JavaScript"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hrs 19 mins", "3 hrs 32 mins", "4 hrs 38 mins", "5 hrs 25 mins", "3 hrs 35 mins", "7 hrs 23 mins", " 0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.378611111111111, 3.5902777777777777, 4.71, 5.4463888888888885, 3.598888888888889, 7.398888888888889, 0.0], "label": "Dataset"}]};
var totalTime = "30 hours 07 minutes";
var languages = ["Ruby", "Rust", "JavaScript"];
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
