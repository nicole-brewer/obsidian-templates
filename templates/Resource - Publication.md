<%-*
// The configuration object.
let config = {
	path: {
		prompt: false,
		value: "Publications"
    },
    title: {
	    prompt: true,
	    display: "What is the title of the publication?",
	    value: ""
    },
    citekey: {
        prompt: true,
        display: "What is the citekey (no at symbol)?",
        value: ""
    },
    author: {
        prompt: true,
        display: "What is the author's full name?",
        value: ""
    },
    filename: {
	    prompt: false,
	    value: "{{citekey}}",
    }
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
type: publication
link: zotero://select/items/@<% config.citekey.value %>
title: <% config.title.value %>
aliases:
- <% config.title.value %> 
author: 
- "[[<% config.author.value %>]]"
---

**Note:** Use cmd + A to import annotations using the Zotero Integration plugin. I was hoping to use a template file to auto-create publication files using Zotero data, but the autofill doesn't let me select a template. So I am instead [extracting the annotations in Zotero](https://github.com/mgmeyers/obsidian-zotero-integration/blob/main/docs/FAQ.md#but-it-might-be-easier-to-extract-annotations-first) first and then importing those. It is also possible to [template annotation extraction *from Zotero*](https://www.zotero.org/support/note_templates), but I'm not sure it is as flexible as Zotero Integration. There is also ZotLit, which I had for a while. On the Zotero forums, it seems that people are suggesting this, but I'm not sure it is as well supported.

abstract:: 




