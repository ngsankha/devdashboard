var data = {"labels": ["3 May", "4 May", "5 May", "6 May", "7 May", "8 May", "9 May"], "datasets": [{"languages": [["Ruby", "JavaScript"], ["Ruby", "JavaScript", "Bash"], ["Ruby", "Bash", "Other"], [], ["Rust", "Markdown", "Other"], ["Ruby", "Python", "Java"], ["Ruby", "Bash", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "35 mins", "34 mins", "0 secs", "5 hrs 8 mins", "1 hr 30 mins", "2 hrs 11 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0044444444444444444, 0.6066666666666667, 0.5847222222222223, 0.0, 5.137222222222222, 1.5266666666666666, 2.2044444444444444], "label": "Dataset"}]};
var totalTime = "10 hours 03 minutes";
var languages = ["Rust", "Ruby", "Bash"];
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
