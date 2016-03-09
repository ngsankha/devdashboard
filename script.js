var data = {"labels": ["2 March", "3 March", "4 March", "5 March", "6 March", "7 March", "8 March"], "datasets": [{"languages": [["JavaScript", "Ruby", "JSON"], ["JavaScript", "Ruby", "JSON"], ["Ruby"], [], ["JavaScript", "YAML", "JSON"], ["JavaScript", "Ruby"], ["C++", "JavaScript", "Other"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 44 mins", "2 hrs 46 mins", "1 hr 2 mins", "0 secs", "4 hrs 7 mins", "3 hrs 18 mins", "2 hrs 49 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [1.7702777777777778, 2.8202777777777777, 1.0502777777777779, 0.0, 4.143611111111111, 3.331111111111111, 2.83], "label": "Dataset"}]};
var totalTime = "15 hours 56 minutes";
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
