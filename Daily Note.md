---
type: day
date: <% tp.file.creation_date() %>
date-created: <% tp.file.creation_date() %>
date-modified: <% tp.file.last_modified_date() %>
---
<% await tp.file.move("/Daily Notes/" + tp.file.title) %>
<< [[<% tp.date.now("dddd, MMM D YYYY", -1) %>]] | [[<% tp.date.weekday("[Week of] MMM DD, YYYY", 0)%>]] | [[<% tp.date.now("dddd, MMM D YYYY", 1) %>]] >>

## Tasks
- [ ]

## Meetings
- 