---
type: day
date: <% tp.file.title %>
date-created: <% moment(tp.date.now()).toISOString() %>
---
<% await tp.file.move("/Daily Notes/" + tp.file.title) %>
<< [[<% tp.date.now("dddd MMM DD, YYYY", -1) %>]] | [[<% tp.date.weekday("[Week of] MMM DD, YYYY", 0)%>]] | [[<% tp.date.now("dddd MMM DD, YYYY", 1) %>]] >>
##### [[<% tp.date.now("yyyy-MM-DD") %>|Daily Log]] | [Personal Journal Entry](obsidian://vault/personal/<% tp.date.now("yyyy-MM-DD") %>)


## Meetings

```dataview
TABLE date AS "Date", abstract AS "Summary"
WHERE type = "meeting" AND file.day = date("<% tp.date.now("YYYY-MM-DD") %>")
SORT file.day DESC
```