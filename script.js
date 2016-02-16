var data = {"labels": ["9 February", "10 February", "11 February", "12 February", "13 February", "14 February", "15 February"], "datasets": [{"languages": [["JavaScript", "Python", "JSON"], ["Python", "Ruby", "JavaScript"], ["Ruby", "Text", "Other"], [], ["JavaScript", "Python", "JSON"], ["Ruby", "Python", "JavaScript"], ["JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["7 hrs 15 mins", "4 hrs 15 mins", "1 hr 12 mins", "0 secs", "2 hrs 5 mins", "4 hrs 55 mins", "1 hr 56 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [7.283611111111111, 4.282777777777778, 1.27, 0.0, 2.1147222222222224, 4.956944444444445, 1.9419444444444445], "label": "Dataset"}]};
var totalTime = "21 hours 51 minutes";
var languages = ["JavaScript", "Python", "Ruby"];
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
