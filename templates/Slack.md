<%-*
// The configuration object.
let config = {
	path: {
		prompt: false,
		value: "Communications"
    },
    who: {
	    prompt: true,
	    display: "Who is the Slack with?",
	    value: ""
    },
	date: {
		 prompt: true,
		 display: "What date does the meeting take place?",
		 value:  tp.date.now("yyyy-MM-DD")
	},
    filename: {
        prompt: false,
        value: "Slack with {{ who }} - {{ date }}"
    },
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
type: meeting
people: 
  - "[[<% config.who.value %>]]"
date: <% tp.date.now("yyyy-MM-DD") %>
---

- [ ] Write summary of meeting 
- [ ] Copy conversation

summary:: blank