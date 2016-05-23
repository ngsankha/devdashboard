var data = {"labels": ["16 May", "17 May", "18 May", "19 May", "20 May", "21 May", "22 May"], "datasets": [{"languages": [["Ruby", "JavaScript"], ["Ruby", "Python", "JavaScript"], ["Ruby", "JavaScript", "Python"], ["JavaScript", "Ruby"], ["JavaScript"], [], ["Python", "Ruby", "JavaScript"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["2 hrs 1 min", "6 hrs 3 mins", "3 hrs 31 mins", "1 hr 56 mins", "15 mins", "0 secs", "16 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [2.043888888888889, 6.0875, 3.5527777777777776, 1.9602777777777778, 0.25916666666666666, 0.0, 0.2872222222222222], "label": "Dataset"}]};
var totalTime = "14 hours 11 minutes";
var languages = ["Ruby", "JavaScript", "Python"];
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
