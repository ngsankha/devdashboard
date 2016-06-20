var data = {"labels": ["14 June", "15 June", "16 June", "17 June", "18 June", "19 June", "20 June"], "datasets": [{"languages": [["Bash", "Markdown", "Ruby"], ["Bash", "JavaScript", "Ruby"], ["Ruby", "Bash", "JavaScript"], [], ["Rust"], ["JSON", "Ruby", "Markdown"], ["Rust"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["38 mins", "1 hr 36 mins", "38 mins", "0 secs", "54 mins", "18 mins", "21 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.6544444444444445, 1.6316666666666666, 0.6558333333333334, 0.0, 0.9047222222222222, 0.31666666666666665, 0.3661111111111111], "label": "Dataset"}]};
var totalTime = "4 hours 31 minutes";
var languages = ["Bash", "Rust", "Ruby"];
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
