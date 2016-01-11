var data = {"labels": ["4 January", "5 January", "6 January", "7 January", "8 January", "9 January", "10 January"], "datasets": [{"languages": [["JavaScript", "JSON", "Markdown"], ["JavaScript", "Rust", "Text"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "Ruby"], [], ["JavaScript", "Ruby"], ["Ruby", "JavaScript", "Text"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hrs 19 mins", "5 hrs 30 mins", "5 hrs 39 mins", "7 hrs 8 mins", "0 secs", "1 hr 22 mins", "1 hr 32 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.35, 5.526666666666666, 5.68, 7.155555555555556, 0.0, 1.3916666666666666, 1.5552777777777778], "label": "Dataset"}]};
var totalTime = "26 hours 39 minutes";
var languages = ["JavaScript", "Ruby", "Rust"];
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
