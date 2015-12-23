var data = {"labels": ["17 December", "18 December", "19 December", "20 December", "21 December", "22 December", "23 December"], "datasets": [{"languages": [["Ruby", "JavaScript", "Other"], [], [], [], ["Ruby", "Go", "JavaScript"], ["JavaScript", "Ruby", "Bash"], ["Ruby", "Markdown"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 24 mins", " 0 secs", " 0 secs", " 0 secs", "3 hrs 30 mins", "2 hrs 35 mins", "8 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.4497222222222224, 0.0, 0.0, 0.0, 3.536388888888889, 2.5997222222222223, 0.15166666666666667], "label": "Dataset"}]};
var totalTime = "8 hours 44 minutes";
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
