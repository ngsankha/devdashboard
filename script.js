var data = {"labels": ["20 November", "21 November", "22 November", "23 November", "24 November", "25 November", "26 November"], "datasets": [{"languages": [["Ruby", "Python", "ERB"], ["Rust", "JavaScript", "Go"], ["JavaScript", "Markdown"], ["JavaScript", "Ruby", "YAML"], ["Ruby", "JavaScript", "Rust"], ["Ruby", "Rust", "JavaScript"], ["Rust", "Other"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 32 mins", "3 hrs 27 mins", "42 mins", "5 hrs 43 mins", "4 hrs 36 mins", "4 hrs 21 mins", "1 hr 6 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.5902777777777777, 3.455, 0.705, 5.746388888888889, 4.650833333333333, 4.388055555555556, 1.1177777777777778], "label": "Dataset"}]};
var totalTime = "23 hours 39 minutes";
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
