---
type: meeting
attendees: 
date: <% tp.date.now("yyyy-MM-DD") %>
date-created: <% moment(tp.date.now()).toISOString() %>
---
<% await tp.file.move("/Meetings/" + tp.file.title) %>

## Talking Points

- <% tp.file.cursor() %>

## Their Action Items

- 

## My Action Items

- [ ] Write summary of meeting 

## Summary

abstract:: blank