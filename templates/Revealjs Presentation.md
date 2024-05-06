<%-*
// The configuration object.
let config = {
	path: {
		prompt: true,
		display: "Where do you want to store the file?",
		value: "Presentations"
    },
    title: {
	    prompt: true,
	    display: "What is the title of the presentation?",
	    value: ""
    },
    date: {
		 prompt: true,
		 display: "What date does the presentation take place?",
		 value:  tp.date.now("yyyy-MM-DD")
	},
    filename: {
        prompt: false,
        value: "{{title}} - {{ date }}"
    },
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
format: revealjs
title: <% config.title.value %>
date: <% tp.date.now("yyyy-MM-DD") %>
author: Nicole Brewer
---

::: {.content-hidden}
```run-r
# R Interface to the Better BiBTex Zotero Connector
# creates a .bib file containing all the detected citekeys in the markdown file
# TODO: add bibliography: <% config.filename.value %>.bib to metadata
library(rbbt)
bbt_update_bib("<% tp.user.escape_whitespace(tp.file.path()) %>")
```

```run-shell
# Render using quarto and open file all using absolute paths
# File outputs to ~/Downloads/ as specified in Inbox/_quarto.yaml and pages/_quarto.yaml
# This currently doesn't support spaces in the filename 
/usr/local/bin/quarto render <%tp.user.escape_whitespace(tp.file.path())%>
open ~/Downloads/<%tp.user.escape_whitespace(config.filename.value)%>.html
```
:::




