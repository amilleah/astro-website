# ClanGen Website (Astro)

Astro rewrite of the ClanGen website.

## Getting Started

### Requirements

- Node.js

### Running Development Server

```
npm install
npm run dev
```

## Project Structure

- `public` - Copied directly to the base folder when the site is built. Used for the favicon and for the background images.
- `src` - The code of the website.
  - `src/assets` - A folder containing assets that are imported in the code.
  - `src/components` - Reusable components. You can think of it as a place to define reusable HTML.
  - `src/layout` - Reusable layout templates for different pages.
  - `src/lib` - Libraries for things like getting a user's OS or finding the current season.
  - `src/pages` - The pages of the website. Every file corresponds to a page on the site.
  - `src/styles` - CSS styles for the website. It's most useful for CSS that will be reused across different files.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
