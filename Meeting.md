<%-*
// The configuration object.
let config = {
	path: {
		prompt: false,
		value: "Meetings"
    },
    who: {
	    prompt: true,
	    display: "Who is the meeting with?",
	    value: "Meeting with "
    },
	date: {
		 prompt: true,
		 display: "What date does the meeting take place?",
		 value:  tp.date.now("yyyy-MM-DD")
	},
    filename: {
        prompt: false,
        value: "{{ who }} - {{ date }}"
    },
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
type: meeting
attendees: 
date: <% tp.date.now("yyyy-MM-DD") %>
---


## Talking Points

- <% tp.file.cursor() %>

## Their Action Items

- 

## My Action Items

- [ ] Write summary of meeting 

## Summary

abstract:: blank