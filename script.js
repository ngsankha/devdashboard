var data = {"labels": ["2 January", "3 January", "4 January", "5 January", "6 January", "7 January", "8 January"], "datasets": [{"languages": [["HTML", "CSS"], ["JavaScript", "JSON", "Ruby"], ["JavaScript", "JSON", "Markdown"], ["JavaScript", "Rust", "Text"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "Ruby"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 21 mins", "6 hrs 58 mins", "5 hrs 19 mins", "5 hrs 30 mins", "5 hrs 39 mins", "7 hrs 8 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [1.3683333333333334, 6.991666666666666, 5.35, 5.526666666666666, 5.68, 7.155555555555556, 0.0], "label": "Dataset"}]};
var totalTime = "32 hours 04 minutes";
var languages = ["JavaScript", "JSON", "HTML"];
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
