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
	    value: ""
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
---

## All Mentions

```dataview
TABLE date AS "Date",  abstract AS "Summary"
WHERE contains(file.outlinks, [[<% config.filename.value %>]])
SORT type
```
