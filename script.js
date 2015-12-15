var data = {"labels": ["9 December", "10 December", "11 December", "12 December", "13 December", "14 December", "15 December"], "datasets": [{"languages": [["JavaScript", "JSON", "Rust"], [], [], [], [], ["Ruby", "JavaScript", "Bash"], ["Ruby", "Other", "YAML"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hrs 13 mins", " 0 secs", " 0 secs", " 0 secs", " 0 secs", "1 hr 13 mins", "2 hrs 15 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.240277777777778, 0.0, 0.0, 0.0, 0.0, 1.2527777777777778, 2.2894444444444444], "label": "Dataset"}]};
var totalTime = "8 hours 46 minutes";
var languages = ["JavaScript", "Ruby", "Other"];
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
