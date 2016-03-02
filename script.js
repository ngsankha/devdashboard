var data = {"labels": ["24 February", "25 February", "26 February", "27 February", "28 February", "29 February", "1 March"], "datasets": [{"languages": [[], [], [], [], ["Ruby"], ["Ruby"], ["Ruby", "JavaScript", "Other"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "0 secs", "0 secs", "0 secs", "1 hr 1 min", "1 hr 8 mins", "2 hrs 5 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.0, 0.0, 0.0, 1.0602777777777779, 1.1436111111111111, 2.1077777777777778], "label": "Dataset"}]};
var totalTime = "4 hours 18 minutes";
var languages = ["Ruby", "JavaScript", "Other"];
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
