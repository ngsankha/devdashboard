var data = {"labels": ["21 May", "22 May", "23 May", "24 May", "25 May", "26 May", "27 May"], "datasets": [{"languages": [[], ["Python", "Ruby", "JavaScript"], ["JavaScript", "JSON", "Markdown"], ["JavaScript", "Ruby", "Python"], ["Ruby", "JavaScript"], ["JavaScript", "Ruby", "JSON"], ["C"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "16 mins", "56 mins", "2 hrs 4 mins", "1 hr 5 mins", "3 hrs 30 mins", "19 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.2872222222222222, 0.9569444444444445, 2.081111111111111, 1.1211111111111112, 3.535, 0.3225], "label": "Dataset"}]};
var totalTime = "8 hours 18 minutes";
var languages = ["JavaScript", "Ruby", "Python"];
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
