var data = {"labels": ["22 February", "23 February", "24 February", "25 February", "26 February", "27 February", "28 February"], "datasets": [{"languages": [["Ruby"], ["Ruby", "JavaScript", "JSON"], [], [], [], [], ["Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["42 mins", "1 hr 1 min", "0 secs", "0 secs", "0 secs", "0 secs", "7 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.7325, 1.0502777777777779, 0.0, 0.0, 0.0, 0.0, 0.13194444444444445], "label": "Dataset"}]};
var totalTime = "1 hours 54 minutes";
var languages = ["Ruby", "JavaScript", "JSON"];
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
