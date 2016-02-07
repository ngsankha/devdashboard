var data = {"labels": ["1 February", "2 February", "3 February", "4 February", "5 February", "6 February", "7 February"], "datasets": [{"languages": [["JavaScript", "Ruby", "JSON"], ["JavaScript", "JSON", "YAML"], ["JavaScript", "Ruby", "Other"], ["JavaScript", "Ruby", "ERB"], ["JavaScript", "JSON", "Markdown"], ["HTML", "CSS", "JavaScript"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 22 mins", "4 hrs 35 mins", "7 hrs 24 mins", "4 hrs 53 mins", "7 hrs 10 mins", "2 hrs 40 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.376666666666667, 4.606388888888889, 7.438611111111111, 4.913055555555555, 7.168611111111111, 2.688888888888889, 0.0], "label": "Dataset"}]};
var totalTime = "31 hours 11 minutes";
var languages = ["JavaScript", "Ruby", "HTML"];
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
