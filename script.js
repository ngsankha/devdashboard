var data = {"labels": ["5 February", "6 February", "7 February", "8 February", "9 February", "10 February", "11 February"], "datasets": [{"languages": [["JavaScript", "JSON", "Markdown"], ["HTML", "CSS", "JavaScript"], ["JavaScript", "Ruby", "Python"], ["Python", "Ruby", "JavaScript"], ["JavaScript", "Python", "JSON"], ["Python", "Ruby", "JavaScript"], ["Ruby", "Text", "Other"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["7 hrs 10 mins", "2 hrs 40 mins", "5 hrs 15 mins", "6 hrs 30 mins", "7 hrs 15 mins", "4 hrs 15 mins", "45 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [7.168611111111111, 2.688888888888889, 5.290555555555556, 6.530277777777778, 7.283611111111111, 4.282777777777778, 0.8055555555555556], "label": "Dataset"}]};
var totalTime = "34 hours 03 minutes";
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
