var data = {"labels": ["26 October", "27 October", "28 October", "29 October", "30 October", "31 October", "1 November"], "datasets": [{"languages": [["JavaScript", "Ruby"], ["Ruby", "Rust", "JavaScript"], ["Ruby", "JavaScript", "YAML"], ["Ruby", "JavaScript", "Python"], ["Ruby", "Python", "JavaScript"], ["JavaScript", "HTML", "JSON"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 31 mins", "4 hrs 48 mins", "3 hrs 4 mins", "7 hrs 4 mins", "4 hrs ", "56 mins", " 0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.584722222222222, 4.862777777777778, 3.1380555555555554, 7.097222222222222, 4.018611111111111, 0.9672222222222222, 0.0], "label": "Dataset"}]};
var totalTime = "23 hours 40 minutes";
var languages = ["Ruby", "JavaScript", "Python"];
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
