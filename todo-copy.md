# Tasks

## Generic

1. fetch all missing assets from figma to be used later in components
2. prepare a reusable component: TitleWithUnderline
    1. currently it's raw version is available in BehaviorsSection
    2. underline under title should be more to the left as in figma
    3. once component is completed, switch it in BehaviorsSection, later we'll use it elsewhere

## Per section

### HeaderNavigation

- missing social media component
- fix nav items positioning, use flexbox spacer around so they take all space to the right, social media component should be treated as 1 element containing 3 buttons

### HeroCtaSection
- missing right side picture of two people
- wrong icons for buttons

### CampaignSection
- ensure 
- text should be properly divided as in figma

### BehaviorsSection
- fix positioning of picture in relation to text
### FathersSection
- fix introduction text related to cards, so that cards are on right side
- fix visual formatting of introduction text so it's as in figma
- use lobster for intro text title
- use lobster for card title

### VideosSection
- fix icon for watch button
- use TitleWithUnderline for intro title
- rewrite to show exactly one video
- implement in frame youtube video (use example video link)
### MediaSection
- divide into 2 components, make media section a tiny wrapper, make subcomponents visible in index.astro. should be called radio and campain sections
- for both subsections, fix colors as in figma (correct usage of lighter-darker pink)
Radio section
- use TitleWithUnderline for radio intro title
- fix radio description formatting so it's as big as in figma
- use correct button for radio player
- make audio wave visualzation longer (should be stretching, as long as the radio player)
campaign section
- add lobster for title
- fix posters: images, positions, just like in figma
- fix pdf downlaod button icon

### SourcesSection
- add lobster for title and search icon

### SiteFooter
- use different correct ondarade svg icon
- use motto svg
- position using flexbox so it's stretched, like in figma