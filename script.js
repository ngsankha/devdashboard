var data = {"labels": ["8 December", "9 December", "10 December", "11 December", "12 December", "13 December", "14 December"], "datasets": [{"languages": [["JavaScript", "Ruby", "JSON"], ["JavaScript", "JSON", "Rust"], [], [], [], [], ["JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["8 hrs 16 mins", "5 hrs 13 mins", " 0 secs", " 0 secs", " 0 secs", " 0 secs", "17 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [8.286944444444444, 5.240277777777778, 0.0, 0.0, 0.0, 0.0, 0.2911111111111111], "label": "Dataset"}]};
var totalTime = "13 hours 49 minutes";
var languages = ["JavaScript", "JSON", "Ruby"];
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
