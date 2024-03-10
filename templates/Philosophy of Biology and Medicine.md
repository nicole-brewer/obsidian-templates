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
		value: "Courses/Philosophy of Biology and Medicine"
    },
    title: {
	    prompt: true,
	    display: "What is the title of the assignment?",
	    value: ""
    },
    date: {
        prompt: true,
        display: "When is the assignment due?",
        value: ""
    },
    filename: {
	    prompt: false,
	    value: "{{title}} - {{date}}"
	},
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
format: docx
title: <% config.title.value %>
date: <% tp.date.now("yyyy-MM-DD") %>
author: Nicole Brewer
parent: "[[Courses/Philosophy of Biology and Medicine/Philosophy of Biology and Medicine]]"
---

::: {.content-hidden}

```run-r
# R Interface to the Better BiBTex Zotero Connector
# creates a .bib file containing all the detected citekeys in the markdown file
# TODO: add `bibliography: <% config.filename.value %>.bib` to frontmatter
library(rbbt)
bbt_update_bib("<% tp.user.escape_whitespace(tp.file.path()) %>")
```

```run-shell
# Render using quarto and open file all using absolute paths
# This currently doesn't support spaces in the filename 
/usr/local/bin/quarto render <%tp.user.escape_whitespace(tp.file.path())%>
open ~/Applications/Obsidian/Academic/Courses/Philosophy\ of\ Biology\ and\ Medicine/<%tp.user.escape_whitespace(config.filename.value)%>.docx
```
:::




