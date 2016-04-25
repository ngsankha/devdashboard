var data = {"labels": ["18 April", "19 April", "20 April", "21 April", "22 April", "23 April", "24 April"], "datasets": [{"languages": [["JavaScript", "JSON", "Other"], ["JavaScript", "Ruby", "YAML"], ["Python", "YAML", "JavaScript"], ["Ruby", "JavaScript", "Makefile"], [], ["Other", "GAS", "C"], ["Bash", "Makefile", "Batchfile"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 59 mins", "2 hrs 58 mins", "41 mins", "30 mins", "0 secs", "1 hr 28 mins", "3 hrs 19 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.0125, 2.995833333333333, 0.7244444444444444, 0.5263888888888889, 0.0, 1.475, 3.3525], "label": "Dataset"}]};
var totalTime = "11 hours 05 minutes";
var languages = ["JavaScript", "Bash", "Other"];
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
