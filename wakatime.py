import urllib2, json, calendar, operator
from datetime import date, datetime, timedelta

prefix = 'https://wakatime.com/api/v1/'
with open('API_KEY', 'r') as f:
  api_key = f.read().strip()
today = date.today()
week_old = datetime.combine(today, datetime.min.time()) - timedelta(days=7)

url = prefix + 'users/current/summaries?start=' + week_old.strftime('%m/%d/%Y') + '&end=' + today.strftime('%m/%d/%Y') + '&api_key=' + api_key
print "Making HTTP Request"
handler = urllib2.urlopen(url)
json_data = json.load(handler)

languages = {}
days = []
total = 0

def top3(languages):
  results = []
  sorted_languages = sorted(languages.items(), key=operator.itemgetter(1), reverse=True)
  for language in sorted_languages:
    if len(results) == 3:
      break
    results.append(language[0])
  return results

print "Processing data"
for day in json_data['data']:
  curr_date = date.fromtimestamp(int(day['range']['start']))
  total_sec = day['grand_total']['total_seconds']
  total += total_sec
  total_str = day['grand_total']['text']
  human_date = str(curr_date.day) + ' ' + calendar.month_name[curr_date.month]
  curr_languages = {}

  for language in day['languages']:
    name = language['name']
    if name not in languages:
      languages[name] = 0
    if name not in curr_languages:
      curr_languages[name] = 0
    languages[name] += language['total_seconds']
    curr_languages[name] += language['total_seconds']

  top_languages = top3(curr_languages)
  day_data = { 'languages': top_languages, 'date': human_date, 'total': total_sec, 'total_str': total_str }
  days.append(day_data)

print "Dumping JSON"
data = { 'days': days, 'summary': { 'total': total, 'languages': top3(languages) } }
with open('summary.json', 'w') as f:
  json.dump(data, f)
