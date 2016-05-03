var data = {"labels": ["26 April", "27 April", "28 April", "29 April", "30 April", "1 May", "2 May"], "datasets": [{"languages": [["Ruby", "Bash", "JavaScript"], ["Ruby", "JavaScript", "Logos"], ["Ruby", "JavaScript", "Bash"], ["Rust"], [], ["Ruby", "JavaScript", "Other"], ["PHP", "Ruby", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 47 mins", "2 hrs 10 mins", "2 hrs 38 mins", "2 mins", "0 secs", "2 hrs 57 mins", "49 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.8513888888888888, 2.2191666666666667, 2.667222222222222, 0.036944444444444446, 0.0, 2.985, 0.8419444444444445], "label": "Dataset"}]};
var totalTime = "12 hours 36 minutes";
var languages = ["Ruby", "JavaScript", "Bash"];
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
