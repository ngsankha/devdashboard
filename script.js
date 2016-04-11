var data = {"labels": ["4 April", "5 April", "6 April", "7 April", "8 April", "9 April", "10 April"], "datasets": [{"languages": [["Bash", "Java", "JavaScript"], ["JavaScript", "Ruby"], ["JavaScript", "Ruby"], ["JavaScript"], [], [], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 5 mins", "9 mins", "37 mins", "19 mins", "0 secs", "0 secs", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.115833333333334, 0.16805555555555557, 0.6372222222222222, 0.3375, 0.0, 0.0, 0.0], "label": "Dataset"}]};
var totalTime = "5 hours 15 minutes";
var languages = ["Bash", "JavaScript", "Java"];
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
