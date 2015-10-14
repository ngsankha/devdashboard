var data = {"labels": ["8 October", "9 October", "10 October", "11 October", "12 October", "13 October", "14 October"], "datasets": [{"languages": [["Ruby", "JavaScript", "Bash"], ["Rust", "Ruby", "JavaScript"], ["Rust", "Python", "JavaScript"], [], ["Ruby", "JavaScript", "YAML"], ["Ruby", "JavaScript"], ["Ruby", "Python", "Java"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hours 19 minutes", "7 hours 12 minutes", "7 hours 39 minutes", "0 minutes", "5 hours 16 minutes", "4 hours 49 minutes", "3 hours 15 minutes"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.343055555555556, 7.288055555555555, 7.703333333333333, 0.0, 5.329444444444444, 4.884166666666666, 3.3002777777777776], "label": "Dataset"}]};
var totalTime = "33 hours 50 minutes";
var languages = ["Ruby", "Rust", "JavaScript"];
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
