---
type: person
institutions: 
date: <% tp.date.now("yyyy-MM-DD") %>
date-created: <% moment(tp.date.now()).toISOString() %>
---
<% await tp.file.move("/People/" + tp.file.title) %>

## Meetings

```dataview
TABLE date AS "Date", abstract AS "Summary"
WHERE type = "meeting" and contains(attendees, [[<% tp.file.title %>]])
```