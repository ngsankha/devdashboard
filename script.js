var data = {"labels": ["8 March", "9 March", "10 March", "11 March", "12 March", "13 March", "14 March"], "datasets": [{"languages": [["JavaScript", "C++", "Ruby"], ["JavaScript", "YAML", "Ruby"], ["JavaScript", "Ruby", "YAML"], [], ["Python", "Ruby"], ["Ruby", "JavaScript"], ["JavaScript", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 35 mins", "3 hrs 15 mins", "2 hrs 45 mins", "0 secs", "56 mins", "15 mins", "43 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.6030555555555557, 3.2916666666666665, 2.7880555555555557, 0.0, 0.9494444444444444, 0.29055555555555557, 0.7430555555555556], "label": "Dataset"}]};
var totalTime = "11 hours 39 minutes";
var languages = ["JavaScript", "Ruby", "C++"];
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
