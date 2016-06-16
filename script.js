var data = {"labels": ["10 June", "11 June", "12 June", "13 June", "14 June", "15 June", "16 June"], "datasets": [{"languages": [["Other"], [], ["Ruby", "JavaScript", "Java"], ["Ruby", "JavaScript", "Markdown"], ["Bash", "Markdown", "Ruby"], ["Bash", "JavaScript", "Ruby"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "0 secs", "2 hrs 33 mins", "1 hr 43 mins", "38 mins", "1 hr 36 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.0, 2.5858333333333334, 1.7561111111111112, 0.6544444444444445, 1.6316666666666666, 0.0], "label": "Dataset"}]};
var totalTime = "6 hours 37 minutes";
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
