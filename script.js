var data = {"labels": ["20 October", "21 October", "22 October", "23 October", "24 October", "25 October", "26 October"], "datasets": [{"languages": [[], [], [], [], [], [], ["JavaScript", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 minutes", "0 minutes", "0 minutes", "0 minutes", "0 minutes", "0 minutes", "1 hr 48 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.8352777777777778], "label": "Dataset"}]};
var totalTime = "1 hours 50 minutes";
var languages = ["JavaScript", "Ruby"];
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
