var data = {"labels": ["3 December", "4 December", "5 December", "6 December", "7 December", "8 December", "9 December"], "datasets": [{"languages": [["Ruby", "JavaScript"], ["JavaScript", "Ruby", "JSON"], ["Rust"], ["Rust", "JavaScript"], ["JavaScript", "Text", "JSON"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "Rust"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 38 mins", "5 hrs 25 mins", "3 hrs 35 mins", "7 hrs 23 mins", "6 hrs 10 mins", "8 hrs 16 mins", "13 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.71, 5.4463888888888885, 3.598888888888889, 7.398888888888889, 6.223888888888889, 8.286944444444444, 0.22416666666666665], "label": "Dataset"}]};
var totalTime = "35 hours 53 minutes";
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
