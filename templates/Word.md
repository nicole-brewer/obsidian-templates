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
	    value: "{{ title }}"
    },
    title: {
        prompt: true,
        display: "How would you like the title to appear in the document?",
        value: "Title with Spaces"
    },
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
format: docx
title: <% config.title.value %>
date: <% tp.date.now("yyyy-MM-DD") %>
author: Nicole Brewer
bibliography: <% config.filename.value %>.bib
---

::: {.content-hidden}
```run-r
# R Interface to the Better BiBTex Zotero Connector
# creates a .bib file containing all the detected citekeys in the markdown file
library(rbbt)
bbt_update_bib("<% tp.user.escape_whitespace(tp.file.path()) %>")
```

```run-shell
# Render using quarto and open file all using absolute paths
# File outputs to ~/Downloads/ as specified in Inbox/_quarto.yaml and pages/_quarto.yaml
# This currently doesn't support spaces in the filename 
/usr/local/bin/quarto render <%tp.user.escape_whitespace(tp.file.path())%>
open ~/Downloads/<%tp.user.escape_whitespace(config.filename.value)%>.docx
```
:::




