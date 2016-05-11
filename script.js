var data = {"labels": ["4 May", "5 May", "6 May", "7 May", "8 May", "9 May", "10 May"], "datasets": [{"languages": [["Ruby", "JavaScript", "Bash"], ["Ruby", "Bash", "Other"], [], ["Rust", "Markdown", "Other"], ["Ruby", "Python", "Java"], ["Ruby", "JavaScript", "Python"], ["Python"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["35 mins", "34 mins", "0 secs", "5 hrs 8 mins", "1 hr 30 mins", "3 hrs 12 mins", "13 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.6066666666666667, 0.5847222222222223, 0.0, 5.137222222222222, 1.5266666666666666, 3.2222222222222223, 0.2175], "label": "Dataset"}]};
var totalTime = "11 hours 17 minutes";
var languages = ["Rust", "Ruby", "Python"];
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
