var data = {"labels": ["31 December", "1 January", "2 January", "3 January", "4 January", "5 January", "6 January"], "datasets": [{"languages": [["JavaScript", "CSS", "HTML"], ["JavaScript", "CSS", "HTML"], ["HTML", "CSS"], ["JavaScript", "JSON", "Ruby"], ["JavaScript", "JSON", "Markdown"], ["JavaScript", "Rust", "Text"], ["JavaScript", "JSON"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 6 mins", "1 hr 47 mins", "1 hr 21 mins", "6 hrs 58 mins", "5 hrs 19 mins", "5 hrs 30 mins", "2 hrs 4 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.104722222222222, 1.7947222222222223, 1.3683333333333334, 6.991666666666666, 5.35, 5.526666666666666, 2.081111111111111], "label": "Dataset"}]};
var totalTime = "26 hours 13 minutes";
var languages = ["JavaScript", "HTML", "CSS"];
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
