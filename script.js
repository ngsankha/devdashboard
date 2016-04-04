var data = {"labels": ["28 March", "29 March", "30 March", "31 March", "1 April", "2 April", "3 April"], "datasets": [{"languages": [["JavaScript", "Ruby", "JSON"], ["JavaScript", "Markdown", "Ruby"], ["JavaScript", "Markdown", "Ruby"], ["JavaScript", "JSON", "Ruby"], ["Python", "Text"], ["Java", "Markdown", "Python"], ["Makefile", "Bash", "Java"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 13 mins", "59 mins", "3 hrs 40 mins", "2 hrs 22 mins", "44 mins", "1 hr 22 mins", "1 hr 16 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [1.2566666666666666, 0.9961111111111111, 3.7130555555555556, 2.3880555555555554, 0.7619444444444444, 1.3844444444444444, 1.2944444444444445], "label": "Dataset"}]};
var totalTime = "11 hours 47 minutes";
var languages = ["JavaScript", "Markdown", "Python"];
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
