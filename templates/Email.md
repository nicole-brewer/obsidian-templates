<%-*
// The configuration object.
let config = {
	path: {
		prompt: false,
		value: "Communication"
    },
    who: {
	    prompt: true,
	    display: "Who is the email to?",
	    value: ""
    },
	date: {
		 prompt: true,
		 display: "What date does the meeting take place?",
		 value:  tp.date.now("yyyy-MM-DD")
	},
    filename: {
        prompt: false,
        value: "Email to {{ who }} - {{ date }}"
    },
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
type: email
people: 
  - "[[<% config.who.value %>]]"
date: <% tp.date.now("yyyy-MM-DD") %>
---

- [ ] Click and drag email DevonThink
- [ ] Add link to DevonThink
