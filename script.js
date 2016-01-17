var data = {"labels": ["10 January", "11 January", "12 January", "13 January", "14 January", "15 January", "16 January"], "datasets": [{"languages": [["JavaScript", "Ruby", "Text"], ["JavaScript", "Other", "Ruby"], ["Ruby", "JavaScript", "Objective-C"], ["Ruby", "Java", "TeX"], ["Ruby", "TeX", "JavaScript"], ["Ruby", "C++", "JavaScript"], ["JavaScript", "Ruby", "JSON"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hrs 22 mins", "4 hrs 47 mins", "4 hrs 15 mins", "2 hrs 50 mins", "6 hrs 43 mins", "55 mins", "3 hrs 9 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.389722222222222, 4.806666666666667, 4.321944444444444, 2.88, 6.769166666666667, 0.9527777777777777, 3.1894444444444443], "label": "Dataset"}]};
var totalTime = "28 hours 18 minutes";
var languages = ["JavaScript", "Ruby", "TeX"];
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
