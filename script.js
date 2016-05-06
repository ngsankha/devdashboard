var data = {"labels": ["29 April", "30 April", "1 May", "2 May", "3 May", "4 May", "5 May"], "datasets": [{"languages": [["Rust"], [], ["Ruby", "JavaScript", "Other"], ["Ruby", "JavaScript", "PHP"], ["Ruby", "JavaScript"], ["Ruby", "JavaScript", "Bash"], ["Ruby", "Bash"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 mins", "0 secs", "2 hrs 57 mins", "1 hr 42 mins", "0 secs", "35 mins", "31 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.036944444444444446, 0.0, 2.985, 1.7358333333333333, 0.0044444444444444444, 0.6066666666666667, 0.5294444444444445], "label": "Dataset"}]};
var totalTime = "5 hours 53 minutes";
var languages = ["Ruby", "JavaScript", "PHP"];
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
