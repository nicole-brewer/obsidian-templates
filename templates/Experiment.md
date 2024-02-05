<%-*
// The configuration object.
let config = {
	path: {
		prompt: false,
		value: "Experiments"
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
type: experiment
date: <% tp.date.now("yyyy-MM-DD") %>
active: true
---

## Purpose or Problem

What is the issue or purpose of this experiment?

## Reasons

Why is this important or why is the problem occurring?

## Intended Outcome

What does success look like? Be specific


| Trial | Plan | Reasons | Outcome |
| ---- | ---- | ---- | ---- |
|  |  |  |  |
