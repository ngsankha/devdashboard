var data = {"labels": ["10 October", "11 October", "12 October", "13 October", "14 October", "15 October", "16 October"], "datasets": [{"languages": [["Rust", "Python", "JavaScript"], [], ["Ruby", "JavaScript", "YAML"], ["Ruby", "JavaScript"], ["Ruby", "Python", "Java"], ["Ruby", "JavaScript", "Python"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["7 hours 39 minutes", "0 minutes", "5 hours 16 minutes", "4 hours 49 minutes", "3 hours 15 minutes", "5 hours 46 minutes", "0 minutes"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [7.703333333333333, 0.0, 5.329444444444444, 4.884166666666666, 3.3002777777777776, 5.8469444444444445, 0.0], "label": "Dataset"}]};
var totalTime = "27 hours 03 minutes";
var languages = ["Ruby", "JavaScript", "Rust"];
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
