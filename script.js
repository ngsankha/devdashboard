var data = {"labels": ["16 October", "17 October", "18 October", "19 October", "20 October", "21 October", "22 October"], "datasets": [{"languages": [["JavaScript", "Ruby"], ["JavaScript", "JSON", "Ruby"], ["JavaScript", "Ruby"], [], [], [], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["40 minutes", "2 hours 5 minutes", "58 minutes", "0 minutes", "0 minutes", "0 minutes", "0 minutes"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.6902777777777778, 2.116388888888889, 0.9877777777777778, 0.0, 0.0, 0.0, 0.0], "label": "Dataset"}]};
var totalTime = "3 hours 47 minutes";
var languages = ["JavaScript", "Ruby", "JSON"];
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
