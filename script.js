var data = {"labels": ["10 May", "11 May", "12 May", "13 May", "14 May", "15 May", "16 May"], "datasets": [{"languages": [["Ruby", "JavaScript", "Bash"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "Ruby", "JSON"], ["Ruby", "JavaScript"], [], ["JavaScript", "Ruby", "JSON"], ["Ruby", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 22 mins", "4 hrs 39 mins", "2 hrs 23 mins", "25 mins", "0 secs", "2 hrs 52 mins", "1 hr 22 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.4330555555555557, 4.6866666666666665, 2.4044444444444446, 0.43777777777777777, 0.0, 2.906111111111111, 1.3977777777777778], "label": "Dataset"}]};
var totalTime = "15 hours 15 minutes";
var languages = ["JavaScript", "Ruby", "JSON"];
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
