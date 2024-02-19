<%-*
// TODO: add bibliography prompt that uses "process" to turn yes or no string into
// boolean. Has to be done with a multiline function because the "prompt" needs
// to be set to false with `config.summary.prompt = false` from within the function
// See more at obsidian-templater-scripts/docs/prompt.md
// https://github.com/mihaiconstantin/obsidian-templater-scripts/blob/09d112105cae1600b9d192b6199b2adcbb63b0dc/docs/prompt.md
let config = {
	path: {
		prompt: true,
		display: "Where to store the file",
		value: "Courses/Biology and Society Lab"
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
type: note
date: <% tp.date.now("yyyy-MM-DD") %>
author: Nicole Brewer
parent: "[[Biology and Society Lab]]"
---





