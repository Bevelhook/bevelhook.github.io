# Editing the Tenny Creek Woodworks site (no AI needed)

The live site is https://bevelhook.github.io and it is published from this repository. Any change you commit shows up on the site within a minute or two.

## Change text or prices
1. Open https://github.com/Bevelhook/bevelhook.github.io/blob/main/index.html
2. Click the pencil icon (Edit this file).
3. Press Ctrl+F (or Find on a phone browser) and search for the words you want to change, e.g. `8,500`.
4. Change only the words between the tags, not the `<` `>` parts.
5. Click "Commit changes", then "Commit changes" again.

## Add photos
1. Open https://github.com/Bevelhook/bevelhook.github.io and click "Add file" > "Upload files".
2. Name photos simply, e.g. `hero.jpg`, `keys.jpg` (no spaces). Upload into the `images` folder by typing `images/` before the name, or upload to the top level.
3. In `index.html`, find a gray placeholder such as "Photo coming soon" (the comment just above it says which photo goes there) and replace that whole `<div class="ph" ...>...</div>` block with:
   `<img src="images/hero.jpg" alt="Black cherry table" style="width:100%;display:block">`
4. Commit. Keep photos under about 2 MB each (phone "large" size is fine).

## Undo a mistake
Open the file, click "History", pick the last good version, and copy its text back in. Nothing is ever lost.

## Privacy
Don't add the street address or road signs in photos. The site only says "near Estacada, Oregon".
