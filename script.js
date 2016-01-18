var data = {"labels": ["11 January", "12 January", "13 January", "14 January", "15 January", "16 January", "17 January"], "datasets": [{"languages": [["JavaScript", "Other", "Ruby"], ["Ruby", "JavaScript", "Objective-C"], ["Ruby", "Java", "TeX"], ["Ruby", "TeX", "JavaScript"], ["Ruby", "C++", "JavaScript"], ["JavaScript", "Ruby", "JSON"], ["Markdown", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 47 mins", "4 hrs 15 mins", "2 hrs 50 mins", "6 hrs 43 mins", "55 mins", "5 hrs 18 mins", "8 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.806666666666667, 4.321944444444444, 2.88, 6.769166666666667, 0.9527777777777777, 5.347777777777778, 0.13555555555555557], "label": "Dataset"}]};
var totalTime = "25 hours 12 minutes";
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
