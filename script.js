var data = {"labels": ["27 January", "28 January", "29 January", "30 January", "31 January", "1 February", "2 February"], "datasets": [{"languages": [["JavaScript", "Ruby", "Other"], ["JavaScript", "Rust", "Ruby"], ["Rust", "Markdown", "PowerShell"], [], ["JavaScript", "JSON", "Other"], ["JavaScript", "Ruby", "JSON"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["6 hrs 16 mins", "6 hrs 6 mins", "1 hr 55 mins", "0 secs", "6 hrs 12 mins", "4 hrs 22 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [6.301944444444445, 6.169444444444444, 1.92, 0.0, 6.218333333333334, 4.376666666666667, 0.0], "label": "Dataset"}]};
var totalTime = "24 hours 59 minutes";
var languages = ["JavaScript", "Rust", "Ruby"];
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
