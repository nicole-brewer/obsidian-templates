# Changelog

## 2024-01-31

### Added 

I took a few of the files from [obsidian-templater-scripts](https://github.com/mihaiconstantin/obsidian-templater-scripts/tree/main), added a licence at the top, and put them in a `scripts` folder. Templater settings point to this directory for user functions. There are now several of my own functions as well, mostly for manipulating paths that are specified in code blocks. All templates in this repository should now be reproducible with minimal setup.

### Changed

Several templates, for example Meeting.md, were changed to use [obsidian-templater-scripts](https://github.com/mihaiconstantin/obsidian-templater-scripts/tree/main).

## 2024-01-30

### Added 

#### Quarto Render

I was using the [shell-commands](https://github.com/Taitava/obsidian-shellcommands) plugin to render files using Quarto, but that didn't allow me enough customization to the commands (via variables, which could not produce things like a filename without an extension). 
##### Execute Code Plugin

I ended up finding the [obsidian-execute-code](https://github.com/twibiral/obsidian-execute-code) plugin, which allows be to execute code block in documents, this way, I can use templater (including user scripts) to put the commands in exactly the form that I want. It has the added benefit of being more easily reproducibile by others, because my shell commands (or any other langauge) is recorded directly in the template instead of burried in plugin settings.

The next challenge was getting the code block to be ignored by Quarto upon render. At first, I tried an HTML comment block, but that messed up the way the code block rendered. Then I tried using the Quarto code block option `#| include: false`, but that didn't work because for the option to execute, the start of the code block had to in a valid format like ` ```{zsh} `, and for the execute-code plugin to work, the code block had to start with ` ```run-shell ` . 

Finally, I landed on using the Quarto [conditional content block](https://quarto.org/docs/authoring/conditional.html#content-hidden) with `content-hidden` option. This allowed me to leave in the code block with the  ` ```run-shell ` format that I could execute, but doesn't make it into the final rendered form of the document.

### Automatically Detected Bibliography

I use [ZotLit](https://github.com/PKM-er/obsidian-zotlit) for easily searching and including Zotero citekeys in my markdown files. Another challenge I wanted to solve was not having to use Zotero manually to create a `.bib` file with all the included citations every time I wanted to render a new document. This would be incredibly cumbersome for longer documents and I anticipate using this a lot, so the reward was high for figuring this out. According to [this post on the Zotero help pages](https://forums.zotero.org/discussion/comment/409057/)...

> If you just want to generate a BibTeX file based on the citekeys used in a document, BBT has a function that can do that. Check out the rbbt R package for an example [https://github.com/paleolimbot/rbbt](https://github.com/paleolimbot/rbbt)

I was unable to figure out how to do this with Better BibTex (BBT) alone, (though the solution is presumably on [this page](https://retorque.re/zotero-better-bibtex/exporting/pandoc/)) but I did install the rbbt packages as suggested, which worked great after [resolving a small error by reverting back to an older version of BBT](https://github.com/paleolimbot/rbbt/issues/47). 

Now I needed to make this command accessible from Obsidian, which was much easier now that I had decided to use the `execute-code` package explained above, because R is one of the languages available for execution!

### Templater: Prompting the User for Input

As seen in from 2024-01-25, I wanted a way to dynamically interact with template creation, for example to change the title of the file before letting Templater deal with the rest of the template. The code I had below was okay, but presuming this was a common task, I found some [obsidian-templater-scipts](https://github.com/mihaiconstantin/obsidian-templater-scripts) to achieve that. The only thing is that Templater only takes one directory containing user scripts, so I have to keep my scripts in the same repo. I'm not yet sure if the scripts in the repo are standalone, so right now I'm putting my own custom scripts in that directory instead of the other way around, which means they aren't included or version controlled in this repository and keeping my templates from being reproducible. 

### Result of These Changes (Templates/WordDoc)

> Note: `tp.user.fullpath` and `tp.user.makeNoteWithPrompting` are not yet included in this repository, so this template is not yet reproducible.

```
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
	    display: "Please indicate the file name.",
	    value: "file"
    }
}

await tp.user.makeNoteWithPrompting(tp, config)
_%>
---
format: docx
title: <% tp.file.title %>
date: <% tp.date.now("yyyy-MM-DD") %>
author: Nicole Brewer
bibliography: <% tp.file.title %>
---

::: {.content-hidden}
!```run-r
# R Interface to the Better BiBTex Zotero Connector
# creates a .bib file containing all the detected citekeys in the markdown file
library(rbbt)
bbt_update_bib("<% tp.user.fullpath(tp.file.path()) %>")
!```

!```run-shell
# Render using quarto and open file all using absolute paths
# File outputs to ~/Downloads/ as specified in Inbox/_quarto.yaml and pages/_quarto.yaml
# This currently doesn't support spaces in the filename 
/usr/local/bin/quarto render <%tp.user.fullpath(tp.file.path())%>
open ~/Downloads/<%tp.user.fullpath(tp.file.title)%>.docx
rm <% tp.user.fullpath(tp.file.title) %>.bib
!```
:::

```


## 2024-01-25

### Added

- Some scripts now have the following first line. The line is minified (semicolons instead of new lines) or otherwise an undesirable space will appear at the top of the document.  The `---` At the end of the line are the first characters in the file that declare the start of the header. This line asks the user to input a new title instead of the "Untitled" default. 

```
<%* let title = tp.file.title; if (title.startsWith("Untitled")) { title = await tp.system.prompt("Title"); await tp.file.rename(`${title}`); } %>---
```

## 2024-01-22

### Changed

- The "date" metadata field is now in ISO8601 format `tp.date.now("YYYY-MM-DD")` (no longer includes a timestamp) so it [can be interpreted by the DataView plugin](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/) which is "only available if the file has a date inside its file name (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field."
- The "date-created" used to have a timestamp, but has been modified to also be in ISO8601 format, which is achieved with `<% moment(tp.date.now()).toISOString() %>`

### Added

- I added a DataView in the Daily Note to automatically show any meetings from that day
- I added a DataView in the NewPerson to show all the meetings for which that person is listed as an attendee
- I added many DataViews to the Weekly note which was updated significantly to improve and expand upon my weekly agile review and retrospective process. There are DataViews for tasks, meetings, and daily notes. There is also a self referential section where ideas from the last week's retrospective as shown in the next week's sprint planning section.