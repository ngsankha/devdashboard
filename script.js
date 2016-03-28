var data = {"labels": ["21 March", "22 March", "23 March", "24 March", "25 March", "26 March", "27 March"], "datasets": [{"languages": [["Python", "Markdown", "Ruby"], ["Python", "Java", "Bash"], ["Java", "XML"], [], [], ["HTML", "JavaScript"], ["JavaScript", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["30 mins", "5 hrs 16 mins", "58 mins", "0 secs", "0 secs", "0 secs", "1 hr 6 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.5072222222222222, 5.29, 0.9872222222222222, 0.0, 0.0, 0.005, 1.1375], "label": "Dataset"}]};
var totalTime = "7 hours 55 minutes";
var languages = ["Python", "Java", "JavaScript"];
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
