var data = {"labels": ["16 December", "17 December", "18 December", "19 December", "20 December", "21 December", "22 December"], "datasets": [{"languages": [["Ruby", "JavaScript", "Python"], ["Ruby", "JavaScript", "Other"], [], [], [], ["Ruby", "Go", "JavaScript"], ["JavaScript", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 23 mins", "2 hrs 24 mins", " 0 secs", " 0 secs", " 0 secs", "3 hrs 30 mins", "2 hrs 29 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.418055555555555, 2.4497222222222224, 0.0, 0.0, 0.0, 3.536388888888889, 2.4947222222222223], "label": "Dataset"}]};
var totalTime = "12 hours 53 minutes";
var languages = ["Ruby", "JavaScript", "Go"];
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
