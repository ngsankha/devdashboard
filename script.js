var data = {"labels": ["2 February", "3 February", "4 February", "5 February", "6 February", "7 February", "8 February"], "datasets": [{"languages": [["JavaScript", "JSON", "YAML"], ["JavaScript", "Ruby", "Other"], ["JavaScript", "Ruby", "ERB"], ["JavaScript", "JSON", "Markdown"], ["HTML", "CSS", "JavaScript"], ["JavaScript", "Ruby", "Python"], ["Python", "Ruby", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 35 mins", "7 hrs 24 mins", "4 hrs 53 mins", "7 hrs 10 mins", "2 hrs 40 mins", "5 hrs 15 mins", "2 hrs 36 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.606388888888889, 7.438611111111111, 4.913055555555555, 7.168611111111111, 2.688888888888889, 5.290555555555556, 2.6244444444444444], "label": "Dataset"}]};
var totalTime = "34 hours 43 minutes";
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
