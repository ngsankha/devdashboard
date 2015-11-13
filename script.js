var data = {"labels": ["7 November", "8 November", "9 November", "10 November", "11 November", "12 November", "13 November"], "datasets": [{"languages": [["Ruby", "JavaScript", "Other"], ["TeX"], ["Ruby", "JavaScript", "TeX"], ["Ruby", "JavaScript", "TeX"], ["JavaScript", "JSON", "Other"], ["JavaScript", "Markdown", "JSON"], ["TeX", "Ruby", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["1 hr 4 mins", "31 mins", "6 hrs 23 mins", "3 hrs 7 mins", "3 hrs 13 mins", "1 hr 24 mins", "4 hrs 9 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [1.0877777777777777, 0.5186111111111111, 6.428888888888889, 3.156111111111111, 3.2180555555555554, 1.4036111111111111, 4.183055555555556], "label": "Dataset"}]};
var totalTime = "19 hours 59 minutes";
var languages = ["Ruby", "JavaScript", "TeX"];
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
