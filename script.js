var data = {"labels": ["12 January", "13 January", "14 January", "15 January", "16 January", "17 January", "18 January"], "datasets": [{"languages": [["Ruby", "JavaScript", "Objective-C"], ["Ruby", "Java", "TeX"], ["Ruby", "TeX", "JavaScript"], ["Ruby", "C++", "JavaScript"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "HTML", "Ruby"], ["Ruby", "HTML", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 15 mins", "2 hrs 50 mins", "6 hrs 43 mins", "55 mins", "5 hrs 18 mins", "3 hrs 51 mins", "59 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.321944444444444, 2.88, 6.769166666666667, 0.9527777777777777, 5.347777777777778, 3.8744444444444444, 1.0083333333333333], "label": "Dataset"}]};
var totalTime = "25 hours 09 minutes";
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
