# Changelog

## 2024-01-22

### Changed

- The "date" metadata field is now in ISO8601 format `tp.date.now("YYYY-MM-DD")` (no longer includes a timestamp) so it [can be interpreted by the DataView plugin](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/) which is "only available if the file has a date inside its file name (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field."
- The "date-created" used to have a timestamp, but has been modified to also be in ISO8601 format, which is achieved with `<% moment(tp.date.now()).toISOString() %>`

### Added

- I added a DataView in the Daily Note to automatically show any meetings from that day
- I added a DataView in the NewPerson to show all the meetings for which that person is listed as an attendee
- I added many DataViews to the Weekly note which was updated significantly to improve and expand upon my weekly agile review and retrospective process. There are DataViews for tasks, meetings, and daily notes. There is also a self referential section where ideas from the last week's retrospective as shown in the next week's sprint planning section.