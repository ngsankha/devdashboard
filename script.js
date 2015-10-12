var data = {"labels": ["6 October", "7 October", "8 October", "9 October", "10 October", "11 October", "12 October"], "datasets": [{"languages": [["JavaScript", "Ruby", "Other"], ["Ruby", "ERB", "Bash"], ["Ruby", "JavaScript", "Bash"], ["Rust", "Ruby", "JavaScript"], ["Rust", "Python", "JavaScript"], [], ["Ruby", "JavaScript", "YAML"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hours 2 minutes", "3 hours 42 minutes", "5 hours 19 minutes", "7 hours 12 minutes", "7 hours 39 minutes", "0 minutes", "3 hours 31 minutes"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2, 3, 5, 7, 7, 0, 3], "label": "Dataset"}]};
var totalTime = "29 hours 41 minutes";
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
