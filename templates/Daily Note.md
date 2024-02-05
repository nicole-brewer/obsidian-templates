---
type: day
date: <% tp.file.title %>
date-created: <% moment(tp.date.now()).toISOString() %>
---
<% await tp.file.move("/Daily Notes/" + tp.file.title) %>
<< [[<% tp.date.now("yyyy-MM-DD", -1) %>]] | [[<% tp.date.weekday("[Week of] MMM DD, YYYY", 0)%>]] | [[<% tp.date.now("yyyy-MM-DD", 1) %>]] >>
##### [[<% tp.date.now("yyyy-MM-DD") %>|Daily Log]] | [Personal Journal Entry](obsidian://vault/personal/<% tp.date.now("yyyy-MM-DD") %>)

