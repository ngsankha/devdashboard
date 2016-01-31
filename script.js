var data = {"labels": ["24 January", "25 January", "26 January", "27 January", "28 January", "29 January", "30 January"], "datasets": [{"languages": [["Ruby", "JavaScript", "Bash"], ["JavaScript", "HTML"], ["JavaScript", "Ruby", "Markdown"], ["JavaScript", "Ruby", "Other"], ["JavaScript", "Rust", "Ruby"], ["Rust", "Markdown", "PowerShell"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 54 mins", "1 hr 5 mins", "3 hrs 19 mins", "6 hrs 16 mins", "6 hrs 6 mins", "1 hr 55 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [1.9441666666666666, 1.0883333333333334, 3.345, 6.301944444444445, 6.169444444444444, 1.92, 0.0], "label": "Dataset"}]};
var totalTime = "20 hours 46 minutes";
var languages = ["JavaScript", "Ruby", "Rust"];
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
