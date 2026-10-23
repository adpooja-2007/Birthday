# A Little Universe, Just for You ♡
### A Personalized Illustrated Birthday Experience & Digital Love Letter by Pooja

A handmade, responsive, storybook-style digital birthday experience built with React, Vite, TypeScript, and rich CSS/SVG animations. Designed like a cozy romantic scrapbook that does not rely on having dozens of photos, featuring a signature storybook couple caricature as the heart of the experience.

---

## ✨ Features Included

1. **The Opening Screen (`EnvelopeIntro.tsx`)**
   - Romantic textured cream paper with star sparkles and floating hearts.
   - Master couple caricature presented in a scrapbook badge.
   - Interactive 3D pink love envelope with heart wax seal that animates open to reveal an introductory note signed by Pooja.
   - Smooth transition button or subtle "skip intro" option.

2. **Birthday Hero (`BirthdayHero.tsx`)**
   - High-impact celebratory hero with the couple caricature.
   - Birthday date badge and handwritten scroll invitation.

3. **Our Illustrated Love Story (`StoryTimeline.tsx`)**
   - Chronological story chapters with custom illustrated badges (umbrella, cocoa mugs, camera, stars, cake, envelope).
   - Works beautifully with or without personal photos.

4. **Things I Love About You (`LoveNotes.tsx`)**
   - Interactive accordion love-note cards that unfold with paper reveal animations.
   - Sticker accents for smile, laugh, little things, listening, comfort, and strength.

5. **Our Little Scrapbook (`MemoryGallery.tsx` & `Lightbox.tsx`)**
   - Tilted Polaroid frames with washi tape, postal stamps, and pins.
   - Full accessible Lightbox modal on tap with captions and keyboard ESC close.
   - Three content states: supplied photo, illustrated story card, or customizable placeholder.

6. **Open-When Letters (`OpenWhenLetters.tsx`)**
   - Grid of themed envelopes (When you miss me, When you've had a bad day, When you can't sleep, When you need courage, When you want to smile, When you need a reminder of love).
   - Tap envelope to open an intimate paper-textured reading modal with Pooja's signature. Only one open at a time.

7. **Our Little Someday List (`BucketList.tsx`)**
   - Interactive couple bucket list with customized adventure icons.
   - Persistent checkbox state stored in `localStorage`.
   - Real-time progress bar counter ("x of y dreams unlocked") and reset button with confirmation prompt.

8. **The Birthday Cake Surprise (`BirthdayCake.tsx`)**
   - Illustrated pastel layered cake with strawberries and glowing candles.
   - "make a wish & blow the candles" button: blows out the flames with gentle smoke animation, triggers multi-colored pastel and gold confetti bursts, and reveals a personal birthday blessing. Replayable!

9. **Our Little Universe (`UniverseConstellation.tsx`)**
   - Deep midnight plum starry sky with ambient twinkling stars and nebulae.
   - Interactive constellation lines connecting stars.
   - Click/tap any glowing star to reveal a popover love note or memory.

10. **The Final Letter (`FinalLetter.tsx`)**
    - Emotional folded letter on warm paper with handwritten typography, heartfelt message, and Pooja's signature.
    - Closing composition with the couple caricature.
    - Replay surprise button and back-to-top navigation.

11. **Secret Surprise (`SecretSurpriseModal.tsx`)**
    - A golden star in the top navigation reveals a hidden bonus love note with confetti.

12. **Delicate Music Player (`MusicPlayer.tsx`)**
    - Floating vinyl button in the bottom right corner.
    - Supports your custom audio file or plays a soft, built-in music-box lullaby via Web Audio API.

---

## 🚀 Running Locally

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized static production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🎨 How to Personalize Everything (`src/data/birthdayConfig.ts`)

All content, names, dates, letters, memories, and settings are centralized in:
`src/data/birthdayConfig.ts`

### 1. Basic Details
Edit the following fields at the top of `birthdayConfig`:
```typescript
hisName: "Alex",               // His real name
hisNickname: "Birthday Boy",   // Cute nickname
myName: "Pooja",               // Your name
birthdayDate: "October 24",    // His birthday date
anniversaryDate: "June 15",    // Your anniversary
```

### 2. Customizing the Caricature
The configuration allows you to choose between:
- `'couple'` (default): Uses the romantic storybook couple illustration (`/images/our-caricature.svg`).
- `'solo'`: Uses the solo boyfriend illustration wearing a party crown (`/images/solo-caricature.svg`).
- `'placeholder'`: Uses a stylized silhouette frame (`/images/placeholder-caricature.svg`).
- `'custom'`: Uses your own photograph or AI-generated image.
  - Simply drop your image into `public/images/our-caricature.png`
  - In `birthdayConfig.ts`, set:
    ```typescript
    caricature: {
      mode: 'custom',
      customImagePath: '/images/our-caricature.png',
      // ...
    }
    ```

### 3. Adding Your Own Photos
In `timeline` or `scrapbookItems`, set the `photoUrl` property:
```typescript
photoUrl: '/images/our-coffee-date.jpg'
```
*Note:* If `photoUrl` is left undefined or empty, the site automatically displays a matching illustrated story card.

### 4. Adding Custom Background Music
1. Place an audio file (e.g. `our-song.mp3`) into the `public/audio/` directory.
2. In `birthdayConfig.ts`:
   ```typescript
   music: {
     enabled: true,
     title: "Our Song",
     artist: "Artist Name",
     audioSrc: "/audio/our-song.mp3"
   }
   ```

---

## 🌐 Deploying to the Web

Since this is a standard Vite React static application, it can be hosted for free on:

### Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Vite**.
4. Click **Deploy**.

### Netlify
1. Go to [netlify.com](https://netlify.com) and click "Add new site" -> "Import an existing project".
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch.
