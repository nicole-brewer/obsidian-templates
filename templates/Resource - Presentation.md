<%-*
// The configuration object.
let config = {
	path: {
		prompt: true,
		display: "Where do you want to store the file?",
		value: "Resources/Presentations"
    },
    title: {
	    prompt: true,
	    display: "What is the title of the presentation?",
	    value: ""
    },
    author: {
		 prompt: true,
		 display: "Who is the author of the presentation?",
		 value:  ""
	},
    filename: {
        prompt: false,
        value: "{{title}} - {{ author }}"
    },
	date: {
		prompt: true,
		display: "Provide the date of the presentation, if possible.",
		value: ""
	},	
	link: {
		prompt: true,
		display: "Provide a link to the presentation, if possible.",
		value: ""
	},
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
type: presentation
title: <% config.title.value %>
date: <% config.date.value %>
date-created: <% tp.date.now("yyyy-MM-DD") %>
author: "[[<% config.author.value %>]]"
---

abstract:: 



