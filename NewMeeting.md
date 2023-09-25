---
type: meeting
attendees: 
date: <% tp.file.creation_date() %>
date-created: <% tp.file.creation_date() %>
date-modified: <% tp.file.last_modified_date() %>
---
<% await tp.file.move("/Meetings/" + tp.file.title) %>

## Talking Points

- <% tp.file.cursor() %>

## Their Action Items

- [ ] 

## My Action Items

- [ ] Write summary of meeting 

## Summary

abstract:: blank