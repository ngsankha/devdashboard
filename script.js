var data = {"labels": ["6 June", "7 June", "8 June", "9 June", "10 June", "11 June", "12 June"], "datasets": [{"languages": [[], [], [], [], ["Other"], [], ["Ruby", "JavaScript", "Java"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "0 secs", "0 secs", "0 secs", "0 secs", "0 secs", "2 hrs 33 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.5858333333333334], "label": "Dataset"}]};
var totalTime = "2 hours 35 minutes";
var languages = ["Ruby", "JavaScript", "Java"];
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
