var data = {"labels": ["30 October", "31 October", "1 November", "2 November", "3 November", "4 November", "5 November"], "datasets": [{"languages": [["Ruby", "Python", "JavaScript"], ["JavaScript", "HTML", "JSON"], ["HTML", "Markdown", "SCSS"], ["Python", "JavaScript", "Ruby"], ["Python", "Ruby", "JSON"], ["Ruby", "JavaScript", "ERB"], ["Ruby", "ERB", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["4 hrs ", "56 mins", "1 hr 39 mins", "8 hrs 51 mins", "4 hrs 54 mins", "3 hrs 5 mins", "4 hrs 7 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [4.018611111111111, 0.9672222222222222, 1.6647222222222222, 8.945, 4.956388888888889, 3.1327777777777777, 4.1433333333333335], "label": "Dataset"}]};
var totalTime = "27 hours 49 minutes";
var languages = ["Ruby", "Python", "JavaScript"];
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
