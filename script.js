var data = {"labels": ["28 November", "29 November", "30 November", "1 December", "2 December", "3 December", "4 December"], "datasets": [{"languages": [["Rust", "JavaScript", "Markdown"], ["Markdown"], ["Ruby", "Python", "JavaScript"], ["Ruby", "JavaScript", "Markdown"], ["Ruby", "Other", "Python"], ["Ruby", "JavaScript"], ["JavaScript", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["6 hrs 26 mins", "9 mins", "2 hrs 16 mins", "5 hrs 19 mins", "3 hrs 32 mins", "4 hrs 38 mins", "37 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [6.461111111111111, 0.15583333333333332, 2.3097222222222222, 5.378611111111111, 3.5902777777777777, 4.71, 0.6377777777777778], "label": "Dataset"}]};
var totalTime = "23 hours 14 minutes";
var languages = ["Ruby", "Rust", "JavaScript"];
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
