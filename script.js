var data = {"labels": ["11 March", "12 March", "13 March", "14 March", "15 March", "16 March", "17 March"], "datasets": [{"languages": [[], ["Python", "Ruby"], ["Ruby", "JavaScript"], ["JavaScript", "Ruby", "XML"], ["Ruby", "Java", "Other"], ["Markdown", "Ruby", "JavaScript"], ["Ruby", "Markdown"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "56 mins", "15 mins", "1 hr 46 mins", "2 hrs 7 mins", "2 hrs 10 mins", "50 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.9494444444444444, 0.29055555555555557, 1.7841666666666667, 2.1505555555555556, 2.1980555555555554, 0.8555555555555555], "label": "Dataset"}]};
var totalTime = "8 hours 13 minutes";
var languages = ["Ruby", "JavaScript", "Markdown"];
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
