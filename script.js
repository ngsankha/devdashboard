var data = {"labels": ["6 April", "7 April", "8 April", "9 April", "10 April", "11 April", "12 April"], "datasets": [{"languages": [["JavaScript", "Ruby"], ["JavaScript"], [], [], ["JavaScript", "Ruby"], ["JavaScript", "Bash", "Ruby"], ["Bash", "Makefile"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["37 mins", "19 mins", "0 secs", "0 secs", "21 mins", "1 hr 26 mins", "34 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.6372222222222222, 0.3375, 0.0, 0.0, 0.38472222222222224, 1.4758333333333333, 0.5811111111111111], "label": "Dataset"}]};
var totalTime = "3 hours 24 minutes";
var languages = ["JavaScript", "Bash", "Ruby"];
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
