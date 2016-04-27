var data = {"labels": ["20 April", "21 April", "22 April", "23 April", "24 April", "25 April", "26 April"], "datasets": [{"languages": [["Python", "YAML", "JavaScript"], ["Ruby", "JavaScript", "Makefile"], [], ["Other", "GAS", "C"], ["Bash", "Makefile", "Batchfile"], ["Bash", "Ruby", "JavaScript"], ["Ruby", "Bash"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["41 mins", "30 mins", "0 secs", "1 hr 28 mins", "4 hrs 51 mins", "1 hr 20 mins", "40 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.7244444444444444, 0.5263888888888889, 0.0, 1.475, 4.865277777777778, 1.3711111111111112, 0.6794444444444444], "label": "Dataset"}]};
var totalTime = "9 hours 38 minutes";
var languages = ["Bash", "Ruby", "Makefile"];
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
