---
type: sprint
start: <% tp.date.weekday("YYYY-MM-DD", 0)%>
end: <% tp.date.weekday("YYYY-MM-DD", 6) %>
date-created: <% moment(tp.date.now()).toISOString() %>
date: <% tp.date.now("YYYY-MM-DD") %>
---
<% await tp.file.move("/Weekly Notes/" + tp.file.title) %>
<< [[<% tp.date.weekday("[Week of] MMM DD, YYYY",  -7) %>]]  | [[<% tp.date.weekday("[Week of] MMM DD, YYYY",  7) %>]] >>

![[<% tp.date.weekday("[Week of] MMM DD, YYYY",  -7) %>#❗️ Things to Avoid ❗️]]

## Weekly Adventure

## Tasks
```dataview
TASK
FROM -"Templates"
WHERE (type = "day" or type="meeting") and file.day >= date(<% tp.date.weekday("YYYY-MM-DD", 0) %>) and file.day <= date(<% tp.date.weekday("YYYY-MM-DD", 6) %>)
```

## Active Experiments
```dataview
TABLE trial
WHERE type = "experiment" AND active = true
```

## Weekly Meetings
```dataview
LIST
FROM -"Templates"
WHERE type = "meeting" AND file.day >= date(<% tp.date.weekday("YYYY-MM-DD", 0) %>) AND file.day <= date(<% tp.date.weekday("YYYY-MM-DD", 6) %>)
```

## Daily Notes
```dataview
LIST
FROM -"Templates"
WHERE type = "day" and file.day >= date(<% tp.date.weekday("YYYY-MM-DD", 0) %>) and file.day <= date(<% tp.date.weekday("YYYY-MM-DD", 6) %>)
```

## Planning

![[<% tp.date.weekday("[Week of] MMM DD, YYYY",  -7) %>#Task Ideas]]

![[<% tp.date.weekday("[Week of] MMM DD, YYYY",  -7) %>#Things to Avoid]]

## Task Ideas

- [ ] 

## [[Sprint Review]] 

- [ ] Review [Sprint Perspective](omnifocus:///perspective/kVY6xIOnrVc)
- [ ] Answer questions below
- [ ] Revisit active experiments

- Did I accomplish all the tasks I set out to complete?
- Which goals were met or not met?
- How did progress this week contribute to monthly aims?
- What monthly aims did I not make headway on?
- What do I feel behind on?
- What should I prioritize next week to make progress toward my monthly aims?
- What feedback do I need to progress?
- What other challenges or roadblocks am I facing? Who could I use support from?
- Tell me about some big and small successes this week.

### ❗️ Things to Avoid ❗️

- 

## Retrospective

### Task Management 

- Did I get the most important tasks completed? What important tasks did I avoid?
- What important tasks did I spend to much time on?
- What did or should you have done to prevent perfectionism?
- Were there any times that perfectionism served you well?
- What did I spend too much time on?
- How did I prioritize my tasks, and did it work effectively?
- What rabbit holes had me distracted this week? How bad was the time sink? 
### Positivity and Gratitude 

- What were some successes from this week?
- What are you grateful for this week?
### Sense of Purpose

- Did I feel connected to the work I was doing this week? Did it feel purposeful?
### Boundaries and Self-Care

- Were there any unexpected challenges or obstacles? How did I overcome them?
- Were there any life event this week or last week that kept you from meeting your goals? Did you have room to deal with them? How could you make more room for them in the future?
- Burnout monitor: Are you overloaded? What has me overloaded? Of those things, which is the least in alignment with my values and goals? Which of these things has me feeling the most energized? The most enervated? 
- Did I take breaks and practice self-care during this sprint?
### Relationships 

- What could I have done this week to seek support from others?
- What steps did I or should I have taken to strengthen collaborations with others?
- What did I or should have done this week to seek feedback, early and often?
- How can I improve transparency with individuals I trust? Who am I avoiding for giving an update?
