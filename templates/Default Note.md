<%-*
// The configuration object.
let config = {
	path: {
		prompt: true,
		display: "Where to store the file",
		value: "Inbox"
    },
    filename: {
	    prompt: true,
	    display: "What should the filename be?",
	    value: ""
    },
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
date: <% tp.date.now("yyyy-MM-DD") %>
---

status:: blank