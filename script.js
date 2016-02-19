var data = {"labels": ["13 February", "14 February", "15 February", "16 February", "17 February", "18 February", "19 February"], "datasets": [{"languages": [["JavaScript", "Python", "JSON"], ["Ruby", "Python", "JavaScript"], ["JavaScript", "Python", "Ruby"], ["JavaScript", "Python", "Ruby"], ["Ruby", "Python", "JavaScript"], ["Java", "JavaScript", "Python"], ["XML", "Java", "Other"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 5 mins", "4 hrs 55 mins", "4 hrs 25 mins", "3 hrs 9 mins", "2 hrs 14 mins", "4 hrs 23 mins", "20 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.1147222222222224, 4.956944444444445, 4.460555555555556, 3.2202777777777776, 2.290277777777778, 4.462777777777778, 0.3511111111111111], "label": "Dataset"}]};
var totalTime = "21 hours 51 minutes";
var languages = ["JavaScript", "Ruby", "Python"];
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
