var data = {"labels": ["16 March", "17 March", "18 March", "19 March", "20 March", "21 March", "22 March"], "datasets": [{"languages": [["Markdown", "Ruby", "JavaScript"], ["Ruby", "JavaScript", "Markdown"], ["Python"], [], [], ["Python", "Markdown", "Ruby"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 10 mins", "55 mins", "1 hr 34 mins", "0 secs", "0 secs", "30 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.1980555555555554, 0.95, 1.5680555555555555, 0.0, 0.0, 0.5072222222222222, 0.0], "label": "Dataset"}]};
var totalTime = "5 hours 13 minutes";
var languages = ["Python", "Ruby", "Markdown"];
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
