# Tasks

A list of tasks required to finish the website. Each task is a subtask to be executed with an agent, guided one at a time.

## Generic

- [x] Fetch all missing assets from Figma for use in components.
- [ ] Create a reusable `TitleWithUnderline` component.
  - [ ] A raw version already exists in `BehaviorsSection`.
  - [ ] The underline should be shifted more to the left, as in Figma.
  - [ ] Once done, replace the raw version in `BehaviorsSection`; other sections will use it later.

## Per Section

### HeaderNavigation

- [x] Add missing social media component (3 buttons treated as one element).
- [x] Fix nav items positioning: use flexbox so items fill space to the right.

### HeroCtaSection

- [ ] Add missing right-side picture of two people.
- [ ] Fix button icons.
- [ ] fix the whole section so it  has 100%width, as currently it overflows to the right fro smalelr width page window

### CampaignSection

- [ ] Fix text layout to match Figma.

### BehaviorsSection

- [ ] Fix positioning of picture relative to text.

### FathersSection

- [ ] Fix intro text layout so cards appear on the right side.
- [ ] Fix visual formatting of intro text to match Figma.
- [ ] Use Lobster font for intro text title.
- [ ] Use Lobster font for card titles.

### VideosSection

- [ ] Fix icon for the watch button.
- [ ] Use `TitleWithUnderline` for the intro title.
- [ ] Rewrite to show exactly one video.
- [ ] Embed YouTube video in an iframe (use a placeholder link).

### MediaSection

- [x] Split into two subcomponents (`RadioSection` and `PostersSection`); `MediaSection` becomes a thin wrapper. Both subcomponents are visible in `index.astro`.
- [x] Fix colors in both subsections to match Figma (correct use of lighter/darker pink).

**RadioSection**

- [ ] Use `TitleWithUnderline` for the intro title.
- [ ] Fix radio description font size to match Figma.
- [ ] Use correct button for the radio player.
- [ ] Make the audio wave visualization stretch to fill the radio player width.

**PostersSection**

- [ ] Use Lobster font for the title.
- [ ] Fix posters: images, positions — match Figma.
- [ ] Fix PDF download button icon.

### SourcesSection

- [ ] Use Lobster font for the title and search icon.

### SiteFooter

- [x] Use the correct ondarade SVG icon.
- [x] Use the motto SVG.
- [x] Position using flexbox, stretched to match Figma.