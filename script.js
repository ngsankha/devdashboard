var data = {"labels": ["4 November", "5 November", "6 November", "7 November", "8 November", "9 November", "10 November"], "datasets": [{"languages": [["Ruby", "JavaScript", "ERB"], ["Ruby", "ERB", "JavaScript"], ["Ruby", "JavaScript", "Other"], ["Ruby", "JavaScript", "Other"], ["TeX"], ["Ruby", "JavaScript", "TeX"], ["JavaScript", "TeX", "OpenEdge ABL"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 5 mins", "4 hrs 7 mins", "5 hrs 9 mins", "1 hr 4 mins", "31 mins", "6 hrs 23 mins", "1 hr 32 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.1327777777777777, 4.1433333333333335, 5.181111111111111, 1.0877777777777777, 0.5186111111111111, 6.428888888888889, 1.57], "label": "Dataset"}]};
var totalTime = "22 hours 03 minutes";
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
