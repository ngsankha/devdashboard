var data = {"labels": ["7 January", "8 January", "9 January", "10 January", "11 January", "12 January", "13 January"], "datasets": [{"languages": [["JavaScript", "Ruby"], [], ["JavaScript", "Ruby"], ["JavaScript", "Ruby", "Text"], ["JavaScript", "Other", "Ruby"], ["Ruby", "JavaScript", "Objective-C"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["7 hrs 8 mins", "0 secs", "1 hr 22 mins", "5 hrs 22 mins", "4 hrs 47 mins", "4 hrs 15 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [7.155555555555556, 0.0, 1.3916666666666666, 5.389722222222222, 4.806666666666667, 4.321944444444444, 0.0], "label": "Dataset"}]};
var totalTime = "23 hours 03 minutes";
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
