<%-*
// The configuration object.
let config = {
	path: {
		prompt: false,
		value: "People"
    },
    filename: {
	    prompt: true,
	    display: "Full name with spaces:",
	    value: "New Person"
    },
    title: {
        prompt: false,
        value: "{{ filename }}"
    },
}

await tp.user.makeNoteWithPrompting(tp, config)

_%>
---
type: person
institutions: 
date: <% tp.date.now("yyyy-MM-DD") %>
date-created: <% moment(tp.date.now()).toISOString() %>
---

## Meetings

```dataview
TABLE date AS "Date", abstract AS "Summary"
WHERE type = "meeting" and contains(attendees, [[<% config.filename.value %>]])
```