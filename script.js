var data = {"labels": ["4 February", "5 February", "6 February", "7 February", "8 February", "9 February", "10 February"], "datasets": [{"languages": [["JavaScript", "Ruby", "ERB"], ["JavaScript", "JSON", "Markdown"], ["HTML", "CSS", "JavaScript"], ["JavaScript", "Ruby", "Python"], ["Python", "Ruby", "JavaScript"], ["JavaScript", "Python", "JSON"], ["Python", "Ruby", "YAML"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 53 mins", "7 hrs 10 mins", "2 hrs 40 mins", "5 hrs 15 mins", "6 hrs 30 mins", "7 hrs 15 mins", "4 hrs 7 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.913055555555555, 7.168611111111111, 2.688888888888889, 5.290555555555556, 6.530277777777778, 7.283611111111111, 4.158055555555555], "label": "Dataset"}]};
var totalTime = "38 hours 01 minutes";
var languages = ["JavaScript", "Python", "Ruby"];
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
