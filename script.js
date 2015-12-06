var data = {"labels": ["30 November", "1 December", "2 December", "3 December", "4 December", "5 December", "6 December"], "datasets": [{"languages": [["Ruby", "Python", "JavaScript"], ["Ruby", "JavaScript", "Markdown"], ["Ruby", "Other", "Python"], ["Ruby", "JavaScript"], ["JavaScript", "Ruby", "JSON"], ["Rust"], ["Rust", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 16 mins", "5 hrs 19 mins", "3 hrs 32 mins", "4 hrs 38 mins", "5 hrs 25 mins", "3 hrs 35 mins", "1 hr 25 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.3097222222222222, 5.378611111111111, 3.5902777777777777, 4.71, 5.4463888888888885, 3.598888888888889, 1.4236111111111112], "label": "Dataset"}]};
var totalTime = "26 hours 27 minutes";
var languages = ["Ruby", "JavaScript", "Rust"];
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
