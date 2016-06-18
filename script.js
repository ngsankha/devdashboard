var data = {"labels": ["12 June", "13 June", "14 June", "15 June", "16 June", "17 June", "18 June"], "datasets": [{"languages": [["Ruby", "JavaScript", "Java"], ["Ruby", "JavaScript", "Markdown"], ["Bash", "Markdown", "Ruby"], ["Bash", "JavaScript", "Ruby"], ["Ruby", "Bash", "JavaScript"], [], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 33 mins", "1 hr 43 mins", "38 mins", "1 hr 36 mins", "38 mins", "0 secs", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.5858333333333334, 1.7561111111111112, 0.6544444444444445, 1.6316666666666666, 0.6558333333333334, 0.0, 0.0], "label": "Dataset"}]};
var totalTime = "7 hours 17 minutes";
var languages = ["Ruby", "JavaScript", "Bash"];
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
