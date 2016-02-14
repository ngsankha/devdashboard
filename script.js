var data = {"labels": ["7 February", "8 February", "9 February", "10 February", "11 February", "12 February", "13 February"], "datasets": [{"languages": [["JavaScript", "Ruby", "Python"], ["Python", "Ruby", "JavaScript"], ["JavaScript", "Python", "JSON"], ["Python", "Ruby", "JavaScript"], ["Ruby", "Text", "Other"], [], ["Python", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hrs 15 mins", "6 hrs 30 mins", "7 hrs 15 mins", "4 hrs 15 mins", "1 hr 12 mins", "0 secs", "17 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.290555555555556, 6.530277777777778, 7.283611111111111, 4.282777777777778, 1.27, 0.0, 0.30583333333333335], "label": "Dataset"}]};
var totalTime = "24 hours 57 minutes";
var languages = ["Python", "JavaScript", "Ruby"];
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
