var data = {"labels": ["18 November", "19 November", "20 November", "21 November", "22 November", "23 November", "24 November"], "datasets": [{"languages": [["Ruby", "JavaScript", "Rust"], ["Ruby", "JavaScript", "C++"], ["Ruby", "Python", "ERB"], ["Rust", "JavaScript", "Go"], ["JavaScript", "Markdown"], ["JavaScript", "Ruby", "YAML"], ["Ruby", "JavaScript", "Diff"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 47 mins", "2 hrs 4 mins", "3 hrs 32 mins", "3 hrs 27 mins", "42 mins", "5 hrs 43 mins", "3 hrs 36 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.854722222222222, 2.1025, 3.5902777777777777, 3.455, 0.705, 5.746388888888889, 3.6466666666666665], "label": "Dataset"}]};
var totalTime = "23 hours 06 minutes";
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
