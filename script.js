var data = {"labels": ["13 January", "14 January", "15 January", "16 January", "17 January", "18 January", "19 January"], "datasets": [{"languages": [["Ruby", "Java", "TeX"], ["Ruby", "TeX", "JavaScript"], ["Ruby", "C++", "JavaScript"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "HTML", "Ruby"], ["Ruby", "Python", "HTML"], ["Python"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 50 mins", "6 hrs 43 mins", "55 mins", "5 hrs 18 mins", "3 hrs 51 mins", "3 hrs 45 mins", "4 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.88, 6.769166666666667, 0.9527777777777777, 5.347777777777778, 3.8744444444444444, 3.7869444444444444, 0.0763888888888889], "label": "Dataset"}]};
var totalTime = "23 hours 41 minutes";
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
