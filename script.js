var data = {"labels": ["1 March", "2 March", "3 March", "4 March", "5 March", "6 March", "7 March"], "datasets": [{"languages": [["Ruby", "JavaScript", "Other"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "Ruby", "JSON"], ["Ruby"], [], ["JavaScript", "YAML", "JSON"], ["JavaScript", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 5 mins", "1 hr 44 mins", "2 hrs 46 mins", "1 hr 2 mins", "0 secs", "4 hrs 7 mins", "2 hrs 22 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.1077777777777778, 1.7702777777777778, 2.8202777777777777, 1.0502777777777779, 0.0, 4.143611111111111, 2.382222222222222], "label": "Dataset"}]};
var totalTime = "14 hours 16 minutes";
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
