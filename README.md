# chrisbalogun

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Build & optimize assets (recommended)

Large images can increase bundle size and slow page loads. This project includes a helper script to optimize images before building.

1. Install dev dependencies (one-time):

```bash
npm install
```

2. Optimize images under `src/assets` (will overwrite optimized files):

```bash
npm run optimize-images
```

3. Build for production:

```bash
npm run build
```

Notes:
- The `optimize-images` script uses `imagemin-cli` and plugins. If you prefer to keep original images, change the script to output to a different folder and update references.
- You can also enable the included GitHub Action `.github/workflows/build.yml` which runs the build on push and uploads the `dist/` artifact.
