var data = {"labels": ["15 February", "16 February", "17 February", "18 February", "19 February", "20 February", "21 February"], "datasets": [{"languages": [["JavaScript", "Python", "Ruby"], ["JavaScript", "Python", "Ruby"], ["Ruby", "Python", "JavaScript"], ["Java", "JavaScript", "Python"], ["Markdown", "Java", "XML"], [], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs 25 mins", "3 hrs 9 mins", "2 hrs 14 mins", "4 hrs 23 mins", "5 hrs 5 mins", "0 secs", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.460555555555556, 3.2202777777777776, 2.290277777777778, 4.462777777777778, 5.12, 0.0, 0.0], "label": "Dataset"}]};
var totalTime = "19 hours 33 minutes";
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
