var data = {"labels": ["12 May", "13 May", "14 May", "15 May", "16 May", "17 May", "18 May"], "datasets": [{"languages": [["JavaScript", "Ruby", "JSON"], ["Ruby", "JavaScript"], [], ["JavaScript", "Ruby", "JSON"], ["Ruby", "JavaScript"], ["Ruby", "Python", "JavaScript"], ["Ruby", "JavaScript", "JSON"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 23 mins", "25 mins", "0 secs", "2 hrs 52 mins", "2 hrs 1 min", "6 hrs 3 mins", "2 hrs 52 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.4044444444444446, 0.43777777777777777, 0.0, 2.906111111111111, 2.043888888888889, 6.0875, 2.888611111111111], "label": "Dataset"}]};
var totalTime = "16 hours 46 minutes";
var languages = ["Ruby", "JavaScript", "Python"];
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
