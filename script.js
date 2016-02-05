var data = {"labels": ["29 January", "30 January", "31 January", "1 February", "2 February", "3 February", "4 February"], "datasets": [{"languages": [["Rust", "Markdown", "PowerShell"], [], ["JavaScript", "JSON", "Other"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "JSON", "YAML"], ["JavaScript", "Ruby", "Other"], ["JavaScript", "Ruby", "ERB"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 55 mins", "0 secs", "6 hrs 12 mins", "4 hrs 22 mins", "4 hrs 35 mins", "7 hrs 24 mins", "4 hrs 16 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [1.92, 0.0, 6.218333333333334, 4.376666666666667, 4.606388888888889, 7.438611111111111, 4.288055555555555], "label": "Dataset"}]};
var totalTime = "28 hours 50 minutes";
var languages = ["JavaScript", "Ruby", "JSON"];
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
