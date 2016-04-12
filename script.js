var data = {"labels": ["5 April", "6 April", "7 April", "8 April", "9 April", "10 April", "11 April"], "datasets": [{"languages": [["JavaScript", "Ruby"], ["JavaScript", "Ruby"], ["JavaScript"], [], [], ["JavaScript", "Ruby"], ["Bash", "Ruby", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["9 mins", "37 mins", "19 mins", "0 secs", "0 secs", "21 mins", "44 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.16805555555555557, 0.6372222222222222, 0.3375, 0.0, 0.0, 0.38472222222222224, 0.7508333333333334], "label": "Dataset"}]};
var totalTime = "2 hours 16 minutes";
var languages = ["JavaScript", "Bash", "Ruby"];
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
