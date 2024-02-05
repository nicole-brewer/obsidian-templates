<%-*
// The configuration object.
let config = {
	path: {
		prompt: false,
		value: "Projects"
    },
    filename: {
	    prompt: true,
	    display: "Project Name",
	    value: ""
    }
}

await tp.user.makeNoteWithPrompting(tp, config)

_%>
---
type: project
institutions: 
date: <% tp.date.now("yyyy-MM-DD") %>
links: 
---

