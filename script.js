var data = {"labels": ["24 May", "25 May", "26 May", "27 May", "28 May", "29 May", "30 May"], "datasets": [{"languages": [["JavaScript", "Ruby", "Python"], ["Ruby", "JavaScript"], ["JavaScript", "Ruby", "JSON"], ["C"], [], ["Ruby", "Python", "JavaScript"], ["JavaScript", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 4 mins", "1 hr 5 mins", "3 hrs 30 mins", "19 mins", "0 secs", "2 hrs 51 mins", "1 hr 14 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.081111111111111, 1.1211111111111112, 3.535, 0.3225, 0.0, 2.8938888888888887, 1.2597222222222222], "label": "Dataset"}]};
var totalTime = "11 hours 12 minutes";
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
