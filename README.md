# FreeTube — website

Source for the FreeTube landing page, served via GitHub Pages at **[freetube.io](https://freetube.io/)**.

FreeTube is a free, open-source native YouTube client for iPhone and iPad — ad-free playback,
account sign-in, background audio, AirPlay, Picture-in-Picture, and downloads from YouTube,
Instagram, TikTok, X and ~2,000 other sites via yt-dlp.

- **App source code:** https://github.com/leshkodev/freetube
- **Support:** support@freetube.io

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | The landing page (all copy, FAQ, and JSON-LD structured data) |
| `style.css` | Styles |
| `script.js` | Minimal page interactions |
| `sitemap.xml` / `robots.txt` / `llms.txt` | SEO and crawler metadata |
| `CNAME` | Custom domain (`freetube.io`) for GitHub Pages |
| `og-image.svg` / `og-image.jpg` | Social preview image (edit the SVG, then re-render the JPG) |
| `icon.svg`, `apple-touch-icon.png` | Favicon and touch icon |
| `screenshots/` | App screenshots used on the page |

## Local preview

Serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Regenerating the social image

`og-image.jpg` is rendered from `og-image.svg`. After editing the SVG:

```bash
cairosvg og-image.svg -o /tmp/og.png --output-width 1200 --output-height 630
magick /tmp/og.png -quality 88 -background black -flatten og-image.jpg
```

## Deploy

Pushing to the default branch publishes automatically through GitHub Pages. The `CNAME`
file keeps the site on the `freetube.io` custom domain.

## License

See [LICENSE](LICENSE).
