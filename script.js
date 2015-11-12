var data = {"labels": ["6 November", "7 November", "8 November", "9 November", "10 November", "11 November", "12 November"], "datasets": [{"languages": [["Ruby", "JavaScript", "Other"], ["Ruby", "JavaScript", "Other"], ["TeX"], ["Ruby", "JavaScript", "TeX"], ["Ruby", "JavaScript", "TeX"], ["JavaScript", "JSON", "Other"], ["JavaScript", "Markdown", "JSON"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hrs 9 mins", "1 hr 4 mins", "31 mins", "6 hrs 23 mins", "3 hrs 7 mins", "3 hrs 13 mins", "1 hr 24 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.181111111111111, 1.0877777777777777, 0.5186111111111111, 6.428888888888889, 3.156111111111111, 3.2180555555555554, 1.4036111111111111], "label": "Dataset"}]};
var totalTime = "20 hours 59 minutes";
var languages = ["Ruby", "JavaScript", "TeX"];
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
