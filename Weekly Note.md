---
type: sprint
start: <% tp.date.weekday("YYYY-MM-DD", 0)%>
end: <% tp.date.weekday("YYYY-MM-DD", 6) %>
date: <% tp.file.creation_date() %>
date-created: <% tp.file.creation_date() %>
date-modified: <% tp.file.last_modified_date() %>
---
<% await tp.file.move("/Weekly Notes/" + tp.file.title) %>
<< [[<% tp.date.weekday("[Week of] MMM DD, YYYY",  -7) %>]]  | [[<% tp.date.weekday("[Week of] MMM DD, YYYY",  7) %>]] >>

## Tasks
```dataview
TASK
FROM -"Templates"
WHERE (type = "day" or type="meeting") and date >= date(<% tp.date.weekday("YYYY-MM-DD", 0) %>) and date >= date(<% tp.date.weekday("YYYY-MM-DD", 6) %>)
```

## Weekly Meetings
```dataview
LIST
FROM -"Templates"
WHERE type = "meeting" and date >= date(<% tp.date.weekday("YYYY-MM-DD", 0) %>) and date >= date(<% tp.date.weekday("YYYY-MM-DD", 6) %>)
```
## Daily Notes
```dataview
LIST
FROM -"Templates"
WHERE type = "day" and date >= date(<% tp.date.weekday("YYYY-MM-DD", 0) %>) and date >= date(<% tp.date.weekday("YYYY-MM-DD", 6) %>)
```



