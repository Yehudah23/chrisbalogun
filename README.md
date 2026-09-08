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

## Firebase setup

Create a Firebase project, enable Email/Password Authentication, Firestore, and
Cloud Storage. Copy `.env.development.local.example` to `.env.development.local`
and fill in the Firebase web app values. Set `VUE_APP_FIREBASE_ADMIN_EMAIL` to
the administrator email used by the site.

Create the administrator account through Firebase Authentication, then set its
Firestore document at `users/<uid>` to `{ "role": "admin" }`. Deploy the rules
in `firestore.rules` and `storage.rules` before allowing uploads. New accounts
created by the signup screen are always regular users.

After authenticating with the Firebase CLI, deploy the rules from this project:

```bash
npm run deploy:rules
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
