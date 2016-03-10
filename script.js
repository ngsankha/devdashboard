var data = {"labels": ["4 March", "5 March", "6 March", "7 March", "8 March", "9 March", "10 March"], "datasets": [{"languages": [["Ruby"], [], ["JavaScript", "YAML", "JSON"], ["JavaScript", "Ruby"], ["JavaScript", "C++", "Ruby"], ["JavaScript", "YAML", "Ruby"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 2 mins", "0 secs", "4 hrs 7 mins", "3 hrs 18 mins", "3 hrs 35 mins", "3 hrs 15 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [1.0502777777777779, 0.0, 4.143611111111111, 3.331111111111111, 3.6030555555555557, 3.2794444444444446, 0.0], "label": "Dataset"}]};
var totalTime = "15 hours 24 minutes";
var languages = ["JavaScript", "Ruby", "C++"];
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
