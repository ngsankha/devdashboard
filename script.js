var data = {"labels": ["28 April", "29 April", "30 April", "1 May", "2 May", "3 May", "4 May"], "datasets": [{"languages": [["Ruby", "JavaScript", "Bash"], ["Rust"], [], ["Ruby", "JavaScript", "Other"], ["Ruby", "JavaScript", "PHP"], ["Ruby", "JavaScript"], ["JavaScript", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 38 mins", "2 mins", "0 secs", "2 hrs 57 mins", "1 hr 42 mins", "0 secs", "11 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.667222222222222, 0.036944444444444446, 0.0, 2.985, 1.7358333333333333, 0.0044444444444444444, 0.20444444444444446], "label": "Dataset"}]};
var totalTime = "7 hours 38 minutes";
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
