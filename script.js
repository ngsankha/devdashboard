var data = {"labels": ["16 January", "17 January", "18 January", "19 January", "20 January", "21 January", "22 January"], "datasets": [{"languages": [["JavaScript", "Ruby", "JSON"], ["JavaScript", "HTML", "Ruby"], ["Ruby", "Python", "HTML"], ["Ruby", "Python", "YAML"], ["Ruby", "Python", "HTML"], ["Ruby", "JavaScript", "Bash"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hrs 18 mins", "3 hrs 51 mins", "3 hrs 45 mins", "7 hrs 6 mins", "4 hrs 38 mins", "4 hrs 50 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.347777777777778, 3.8744444444444444, 3.7869444444444444, 7.165555555555556, 4.663888888888889, 4.9366666666666665, 0.0], "label": "Dataset"}]};
var totalTime = "29 hours 46 minutes";
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
