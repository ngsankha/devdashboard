var data = {"labels": ["16 April", "17 April", "18 April", "19 April", "20 April", "21 April", "22 April"], "datasets": [{"languages": [["JavaScript", "Ruby"], ["JavaScript", "C++", "Other"], ["JavaScript", "JSON", "Other"], ["JavaScript", "Ruby", "YAML"], ["Python", "YAML", "JavaScript"], ["Ruby", "JavaScript", "Makefile"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 29 mins", "2 hrs 15 mins", "1 hr 59 mins", "2 hrs 58 mins", "41 mins", "30 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [1.4891666666666667, 2.2758333333333334, 2.0125, 2.995833333333333, 0.7244444444444444, 0.5263888888888889, 0.0], "label": "Dataset"}]};
var totalTime = "10 hours 01 minutes";
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
