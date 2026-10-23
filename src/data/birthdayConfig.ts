/**
 * ===================================================================
 * A LITTLE UNIVERSE, JUST FOR YOU — BIRTHDAY CONFIGURATION
 * ===================================================================
 * 
 * Welcome to your personalized birthday experience configuration!
 * Every field below is editable. Replace any placeholder bracketed
 * text (e.g., "[His Name]") with your real memories, nicknames, and dates.
 * 
 * 🖼️ HOW TO CUSTOMIZE THE ILLUSTRATED CARICATURE:
 * -------------------------------------------------------------
 * 1. Mode options:
 *    - "couple"      : Uses the romantic couple storybook illustration.
 *    - "solo"        : Uses the solo birthday-boy caricature with the cute crown.
 *    - "custom"      : Uses your own image file placed in public/images/
 *    - "placeholder" : Displays a stylized storybook silhouette frame.
 * 2. To use your own photo or AI illustration:
 *    - Save your image to `public/images/our-caricature.png` (or .jpg)
 *    - Set `mode: "custom"`
 *    - Set `customImagePath: "/images/our-caricature.png"`
 * 
 * 🎵 HOW TO ADD OPTIONAL MUSIC:
 * -------------------------------------------------------------
 * 1. Place an audio file (e.g., `our-song.mp3`) in the `public/audio/` folder.
 * 2. Set `music.audioSrc: "/audio/our-song.mp3"` and `music.enabled: true`.
 * 3. The music player will appear as a delicate floating vinyl button.
 * 
 * 📸 HOW TO ADD REAL PHOTOS TO THE SCRAPBOOK:
 * -------------------------------------------------------------
 * In `timeline` or `scrapbookGallery`, set `photoUrl` to your image path
 * (e.g. `/images/photo1.jpg`). If left null or undefined, the site automatically
 * renders a gorgeous matching illustrated story card instead!
 */

export interface CaricatureConfig {
  mode: 'couple' | 'solo' | 'custom' | 'placeholder';
  customImagePath: string;
  characterDescriptions: {
    him: string;
    her: string;
    pose: string;
  };
}

export interface TimelineItem {
  id: string;
  chapterNumber: number;
  title: string;
  date?: string;
  description: string;
  illustrationType: 'umbrella' | 'cocoa' | 'camera' | 'stars' | 'cake' | 'envelope';
  photoUrl?: string; // Optional real photo or caricature illustration
  captionNote?: string;
}

export interface TimelineClosingMessage {
  heading: string;
  paragraphs: string[];
  signature: string;
  image: string;
  altText: string;
}

export interface ScrapbookItem {
  id: string;
  title: string;
  date?: string;
  caption: string;
  photoUrl?: string; // If omitted, shows illustrated card
  tag: string;
  rotation: number; // Slight tilt in degrees (-4 to 4)
  stickerType?: 'tape' | 'stamp' | 'flower' | 'pin';
}

export interface OpenWhenLetter {
  id: string;
  category: string;
  envelopeColor: string;
  stampIcon: string;
  title: string;
  previewSnippet: string;
  content: string[];
  signature: string;
}

export interface ForeverDream {
  id: string;
  number: number;
  title: string;
  emoji: string;
  iconType: 'ring' | 'globe' | 'moon-bike' | 'car-kiss' | 'rain-dance' | 'icecream-rain' | 'kisses' | 'home' | 'teddy' | 'album' | 'cuddle' | 'morning' | string;
  message: string;
  shortDescription?: string;
  illustrationImage?: string;
  tag: string;
  note?: string;
  altText?: string;
}

export interface OurForeverHighlight {
  title: string;
  message: string;
  image: string;
  altText: string;
}

export interface ForeverConfig {
  title: string;
  subtitle: string;
  dreams: ForeverDream[];
  ourForever: OurForeverHighlight;
  secretEnvelope: {
    envelopeTitle: string;
    letterHeading: string;
    letterContent: string;
    signature: string;
  };
}

export interface IntimateCard {
  id: string;
  number: number;
  title: string;
  message: string;
  tag: string;
}

export interface IntimateMomentsConfig {
  title: string;
  subtitle: string;
  lockCaption: string;
  cards: IntimateCard[];
  finalNote: {
    title: string;
    paragraphs: string[];
    signature: string;
  };
}

export interface BirthdayConfig {
  // Couple & Personal Details
  hisName: string;
  hisNickname: string;
  myName: string;
  myNickname: string;
  birthdayDate: string;
  anniversaryDate: string;

  // Caricature Settings
  caricature: CaricatureConfig;

  // Screen 1: Intro Envelope
  intro: {
    badge: string;
    heading: string;
    subheading: string;
    envelopePreview: string;
    buttonText: string;
    skipText: string;
    envelopeNote: string;
  };

  // Screen 2: Birthday Hero
  hero: {
    tagline: string;
    heading: string;
    subheading: string;
    scrollInvite: string;
  };

  // Section 3: Illustrated Timeline
  timelineTag: string;
  timelineHeading: string;
  timelineSubheading: string;
  timeline: TimelineItem[];
  timelineClosing: TimelineClosingMessage;

  // Section 4: Our Little Forever (A thousand little things)
  ourLittleForever: ForeverConfig;

  // Section 5: The feelings I have when it's just us (Intimate Moments)
  intimateMoments: IntimateMomentsConfig;

  // Section 6: Scrapbook Gallery
  scrapbookHeading: string;
  scrapbookSubheading: string;
  scrapbookItems: ScrapbookItem[];

  // Section 7: Open When Letters
  lettersHeading: string;
  lettersSubheading: string;
  letters: OpenWhenLetter[];

  // Section 8: The Birthday Cake Surprise
  cake: {
    heading: string;
    subheading: string;
    buttonMakeWish: string;
    buttonWishAgain: string;
    wishMessage: string;
    wishAuthor: string;
  };

  // Section 9: Final Letter
  finalLetter: {
    heading: string;
    date: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    postscript: string;
  };

  // Secret Surprise Modal
  secretSurprise: {
    badge: string;
    title: string;
    message: string;
    signature: string;
  };

  // Music Player
  music: {
    enabled: boolean;
    title: string;
    artist: string;
    audioSrc: string; // e.g. "/audio/our-song.mp3"
  };
}

export const birthdayConfig: BirthdayConfig = {
  // -------------------------------------------------------------
  // Couple & Personal Details (Edit these to personalize!)
  // -------------------------------------------------------------
  hisName: "Barath Kumar",
  hisNickname: "Barath",
  myName: "Pooja",
  myNickname: "[Your Girl]",
  birthdayDate: "27 October 2026",
  anniversaryDate: "[Our Special Day]",

  // -------------------------------------------------------------
  // Illustrated Caricature Asset
  // -------------------------------------------------------------
  caricature: {
    mode: 'custom', // 'couple' | 'solo' | 'custom' | 'placeholder'
    customImagePath: '/images/our-caricature.png',
    characterDescriptions: {
      him: "Stylish dark glasses, styled hair with volume, neat light beard, pastel collared shirt, warm affectionate smile.",
      her: "Pooja: Gorgeous long dark wavy hair, silver statement earrings, black paisley patterned dress, sweet rosy cheeks.",
      pose: "Hugging affectionately close in our favorite storybook illustration."
    }
  },

  // -------------------------------------------------------------
  // Screen 1: The Intro Screen
  // -------------------------------------------------------------
  intro: {
    badge: "psst... ♡",
    heading: "this little universe is yours.",
    subheading: "I made you a little something. So take a breath, get comfy, and come find yourself in my favorite place.",
    envelopePreview: "tap the wax seal to unwrap your surprise",
    buttonText: "open your little surprise ♡",
    skipText: "skip straight to celebration →",
    envelopeNote: "To the person who makes every ordinary day feel like a storybook: Happy 20th Birthday, Barath. Step inside, this is all for you..."
  },

  // -------------------------------------------------------------
  // Screen 2: Birthday Hero
  // -------------------------------------------------------------
  hero: {
    tagline: "a little universe, just for you",
    heading: "HAPPY BIRTHDAY,\nBARATH ♡",
    subheading: "Today, the world celebrates your 20th birthday. And I get to celebrate the wonderful fact that you are you.",
    scrollInvite: "there's more, keep going ↓"
  },

  // -------------------------------------------------------------
  // Section 3: Our Illustrated Love Story (Timeline)
  // -------------------------------------------------------------
  timelineTag: "Our Chapter",
  timelineHeading: "Our Little Story, Chapter by Chapter",
  timelineSubheading: "From classmates to my favourite person — a year and a half of conversations, little adventures, and a love that means everything to me.",
  timeline: [
    {
      id: "ch-1",
      chapterNumber: 1,
      title: "Classmates, then something more",
      date: "Where it all began",
      description: "Who would have thought that the person who started as my classmate would become someone so important to my heart? We knew each other through college, and life brought us together through our NGO experience. What began as simply knowing each other slowly turned into conversations, comfort, and a connection I never expected to treasure this much.\n\nAt first, we were just two people getting to know each other. Little did I know that this was the beginning of my favourite love story.",
      illustrationType: "umbrella",
      photoUrl: "/images/caricature-office.png",
      captionNote: "college & NGO days — where it all quietly began"
    },
    {
      id: "ch-2",
      chapterNumber: 2,
      title: "From NGO days to endless talks",
      date: "Getting closer",
      description: "Somewhere between our NGO days and all those conversations, you became someone I wanted to keep talking to. One conversation became another, and suddenly there was always something else to tell you, something else to laugh about, and something else I wanted to know about you.\n\nWe started learning more about each other, little by little. It wasn't just about talking anymore. It was about understanding each other, becoming comfortable, sharing our thoughts, and slowly building something that felt special.",
      illustrationType: "cocoa",
      photoUrl: "/images/caricature-laugh.png",
      captionNote: "from NGO days to endless talks"
    },
    {
      id: "ch-3",
      chapterNumber: 3,
      title: "The day you proposed",
      date: "28 April 2025",
      description: "28 April 2025 will always be one of the dates that makes my heart smile. It was the day you proposed to me and made your feelings clear. A moment that turned our growing connection into something even more meaningful.\n\nI might not have known everything our journey would bring, but I knew that this moment would become a special part of our story. It was the beginning of a new chapter, one that I would always look back on with a smile.",
      illustrationType: "camera",
      photoUrl: "/images/caricature-proposal.png",
      captionNote: "28 April 2025 — the day you proposed"
    },
    {
      id: "ch-4",
      chapterNumber: 4,
      title: "The day I chose you",
      date: "30 May 2025",
      description: "30 May 2025 — the day I accepted your proposal and chose to begin this relationship with you. Since then, you haven't just been the boy I talk to or the classmate I know. You have become someone I love deeply, someone whose presence can make an ordinary day feel special.\n\nOver the months, we have learned more about each other, grown closer, laughed together, and made memories that belong only to us. A year and a half of love is not just a number to me. It is all the little moments, effort, understanding, and affection that have brought us here.",
      illustrationType: "stars",
      photoUrl: "/images/caricature-accepted.png",
      captionNote: "30 May 2025 — the day I said yes to us"
    },
    {
      id: "ch-5",
      chapterNumber: 5,
      title: "Bike rides, hugs, kisses, and everything in between",
      date: "Our favourite memories",
      description: "Some of my favourite memories with you are not things that need a big celebration. They are our bike rides, our outings, the hugs I wish could last a little longer, our kisses, our teasing, our laughter, and those romantic little moments when the rest of the world seems to fade away.\n\nI love how we can have fun together, talk endlessly, be silly, and then share a quiet moment that means more than words can explain. Every ride, every outing, every hug, every kiss, and every little memory has become part of the life we are building together.\n\nAnd after everything we have shared, I still want more ordinary days, more adventures, more laughter, and more moments with you.",
      illustrationType: "cake",
      photoUrl: "/images/caricature-bikeride.png",
      captionNote: "bike rides, hugs, kisses & endless adventures"
    }
  ],
  timelineClosing: {
    heading: "And this is only the beginning...",
    paragraphs: [
      "Barath, when I look at our story, I don't just remember the dates. I remember how we started as classmates, how we met through our NGO experience, how we talked endlessly, and how you became someone so close to my heart.",
      "From 28 April 2025, when you proposed, to 30 May 2025, when I accepted, and every moment that has followed, our story has become a collection of memories I never want to take for granted.",
      "I love our bike rides, our outings, your hugs, our kisses, the laughter, the silly moments, and the way we keep getting to know each other. I know there is still so much for us to experience, learn, and discover together.",
      "I don't expect every chapter to be perfect. I just hope we keep choosing each other, making an effort, communicating, and growing together.",
      "Happy 20th birthday, my love. This is our story, and I hope we get to write so many more chapters together."
    ],
    signature: "Forever with you, Pooja ♡",
    image: "/images/our-caricature.png",
    altText: "Pooja and Barath couple caricature"
  },

  // -------------------------------------------------------------
  // Section 4: Our Little Forever (A thousand little things)
  // -------------------------------------------------------------
  ourLittleForever: {
    title: "A thousand little things I want to do with you, Barath ♡",
    subtitle: "Not just the big dreams, but all the little moments, the silly adventures, the kisses, and the forever I secretly imagine with you.",
    dreams: [
      {
        id: "forever-1",
        number: 1,
        title: "Marry you someday",
        emoji: "",
        iconType: "ring",
        message: "I want to marry you someday, Barath. To stand beside you and choose you, not just on one special day, but in all the ordinary days that follow. I want a home filled with our laughter, our silly arguments, our little traditions, and the kind of love that keeps choosing each other.",
        illustrationImage: "/images/dream1-wedding.jpg",
        tag: "our forever"
      },
      {
        id: "forever-2",
        number: 2,
        title: "Travel the whole world with you",
        emoji: "",
        iconType: "globe",
        message: "I want to see the whole world with you. New cities, unfamiliar streets, beautiful beaches, mountains, sunsets, little cafés, and places we've only ever dreamed about. I want a thousand pictures, a million memories, and someone I love beside me in every new place.",
        illustrationImage: "/images/dream2-travel.jpg",
        tag: "adventures"
      },
      {
        id: "forever-3",
        number: 3,
        title: "Go on a night bike ride",
        emoji: "",
        iconType: "moon-bike",
        message: "I want those late-night bike rides with you, when the roads are quiet, the city lights are glowing, and I get to sit close to you with nowhere urgent to be. Just us, the cool breeze, silly conversations, and a ride I never want to end.",
        illustrationImage: "/images/dream3-bike-ride.jpg",
        tag: "midnight talks"
      },
      {
        id: "forever-4",
        number: 4,
        title: "Go on long drives and steal warm kisses",
        emoji: "",
        iconType: "car-kiss",
        message: "I want long drives with you, our favourite songs playing, random stops for snacks, conversations about everything and nothing, and warm kisses at the end of the ride. Sometimes I don't even need a destination. If I'm with you, the journey is enough.",
        illustrationImage: "/images/dream4-long-drive.jpg",
        tag: "road trips"
      },
      {
        id: "forever-5",
        number: 5,
        title: "Dance with you in the rain",
        emoji: "",
        iconType: "rain-dance",
        message: "I want to dance with you in the rain, laugh when we get completely soaked, forget about looking silly, and hold you close while the whole world feels like it's ours for a little while.",
        illustrationImage: "/images/dream5-rain-dance.jpg",
        tag: "spontaneous"
      },
      {
        id: "forever-6",
        number: 6,
        title: "Have our silly ice-cream-and-rain adventure",
        emoji: "",
        iconType: "icecream-rain",
        message: "I want to go out with you for ice cream, laugh like two kids, and make the most ordinary day feel like an adventure. And I want those spontaneous rainy-day rides together, too — just with helmets on, because I want all the adventures with you and a lifetime of them still waiting for us.",
        illustrationImage: "/images/dream6-icecream.png",
        tag: "sweetest memories"
      },
      {
        id: "forever-7",
        number: 7,
        title: "Initiate kisses myself",
        emoji: "",
        iconType: "kisses",
        message: "One day, I want to stop pretending to be all nonchalant and just kiss you whenever I feel like it. To pull you closer, hold your face, initiate the kiss myself, and let you see the side of me that is completely, hopelessly in love with you.",
        illustrationImage: "/images/dream-initiate-kiss.png",
        tag: "my secret heart"
      },
      {
        id: "forever-8",
        number: 8,
        title: "Build a life with you",
        emoji: "",
        iconType: "home",
        message: "I dream about building a life with you. Not a perfect one, but one that feels like ours. A home where we can be ourselves, support each other's dreams, celebrate little wins, get through difficult days together, and always find our way back to each other.",
        illustrationImage: "/images/dream-future-home.png",
        tag: "our home"
      },
      {
        id: "forever-9",
        number: 9,
        title: "Have children together someday",
        emoji: "",
        iconType: "teddy",
        message: "Sometimes I imagine our future family, the little traditions we'd create, the laughter in our home, and the kind of parents we'd hope to become. It's a beautiful little dream I carry for someday, when we're ready and life takes us there.",
        illustrationImage: "/images/dream-future-family.png",
        tag: "future family"
      },
      {
        id: "forever-10",
        number: 10,
        title: "Collect a lifetime of ordinary moments",
        emoji: "",
        iconType: "album",
        message: "I want the random grocery trips, sleepy conversations, late-night food runs, celebrating your birthdays, holding hands without thinking about it, annoying you just to get your attention, laughing at the same stupid things, and growing older while still finding new reasons to love you.",
        illustrationImage: "/images/dream-ordinary-moments.png",
        tag: "forever & always"
      },
      {
        id: "forever-11",
        number: 11,
        title: "One More Cuddle Before We Sleep",
        emoji: "",
        iconType: "cuddle",
        shortDescription: "Under a warm blanket, listening to your heartbeat, and five more minutes of cuddles.",
        message: "Barath, I dream of those quiet nights when it's just us, lying close together after talking about absolutely everything. My head resting on your chest, your arms wrapped around me, and my fingers playing with yours while we keep saying, 'Just five more minutes.'\n\nI want to steal little kisses, listen to your heartbeat, and cuddle you until all the worries of the day feel far away. I want to be the girl who falls asleep in your arms, feeling safe, loved, and completely at home with you.\n\nNo plans, no distractions, no need to be anywhere else. Just us, a warm blanket, sleepy smiles, and one more hug before we finally close our eyes.\n\nSomeday, I want these little moments to be part of our everyday life.",
        illustrationImage: "/images/dream11-cuddle.png",
        tag: "bedtime cuddles",
        note: "My favourite place will always be in your arms.",
        altText: "A cute watercolor-style caricature of Barath cuddling his blushing girlfriend beneath a soft cream blanket, her head resting on his chest, with a crescent moon and tiny pastel hearts in the background."
      },
      {
        id: "forever-12",
        number: 12,
        title: "Waking Up Next to My Favourite Person",
        emoji: "",
        iconType: "morning",
        shortDescription: "Sleepy smiles, messy hair, morning cuddles, and a kiss before the day begins.",
        message: "Someday, I want to wake up beside you in our own little home, with soft sunlight coming through the curtains and nowhere we need to rush off to.\n\nI want to turn toward you, smile at your sleepy face, and steal a little kiss before you even think about getting out of bed. When you try to get up, I want to pull you back for one more cuddle and tell you that five more minutes with you are more important than anything else right now.\n\nI want us to laugh at our messy hair, tease each other over silly things, and eventually get up to make breakfast together. Maybe I'll hug you from behind while you're making coffee, or you'll sneak up beside me and give me another kiss.\n\nIt might sound like an ordinary morning, but that's exactly what makes it special. I don't just dream of romantic dates with you. I dream of sharing a home, building a life, and finding happiness in the smallest routines.\n\nI want to fall asleep beside you, wake up beside you, and keep choosing you through all the ordinary days in between.",
        illustrationImage: "/images/dream12-morning.png",
        tag: "morning cuddles",
        note: "My dream isn't just a perfect life. It's a real life with you in it.",
        altText: "A hand-drawn pastel caricature of Barath and his girlfriend cuddling on a neatly made bed in their cozy future home, exchanging a sleepy cheek kiss in warm morning sunlight."
      }
    ],
    ourForever: {
      title: "Our Forever",
      message: "Out of all the little dreams I have, this is the one I hold closest to my heart. Whatever life looks like someday, I hope we keep choosing each other, growing together, and finding our way back into each other's arms.",
      image: "/images/our-forever-hug.png",
      altText: "Caricature illustration of Barath hugging Pooja tenderly in his maroon shirt and glasses"
    },
    secretEnvelope: {
      envelopeTitle: "The dream I keep closest to my heart",
      letterHeading: "to my Barath, on your 20th birthday ♡",
      letterContent: "Barath, these aren't demands or promises that everything has to happen exactly this way. They're little dreams I have when I imagine the future. I want to keep discovering life with you, growing with you, and making memories that are ours. I don't just dream about the grand adventures. I dream about the ordinary days, too. And maybe that's how I know how much you mean to me — because when I imagine all these different versions of my future, I keep hoping you're there beside me. ♡",
      signature: "Forever yours, Pooja"
    }
  },

  // -------------------------------------------------------------
  // Section 4.8: The feelings I have when it's just us
  // -------------------------------------------------------------
  intimateMoments: {
    title: "The feelings I have when it's just us",
    subtitle: "There are things I don't always know how to say out loud. Maybe you'll understand them better here.",
    lockCaption: "Just between us",
    cards: [
      {
        id: "intimate-1",
        number: 1,
        title: "When you pull me close",
        message: "There is something about being close to you that makes everything else feel a little quieter. When you pull me into your arms, I just want to stay there a little longer. Your hugs feel warm and safe, and sometimes I wish I could pause that moment and live in it for a while.",
        tag: "safe & warm"
      },
      {
        id: "intimate-2",
        number: 2,
        title: "Your hugs are my favourite place",
        message: "I don't know if you realise how much your hugs mean to me. Sometimes I might act normal or pretend I'm not being all soft, but inside, I'm probably wishing you wouldn't let go so soon. There's a kind of comfort in your arms that I can't explain properly.",
        tag: "comfort"
      },
      {
        id: "intimate-3",
        number: 3,
        title: "Those little kisses",
        message: "I love our kisses, the softness of those moments, and the way a simple kiss can make me feel so close to you. Sometimes I want to kiss you first instead of waiting for you to make the move. I want to stop overthinking, pull you closer, and let my actions say all the things my shy little heart doesn't always say.",
        tag: "soft kisses"
      },
      {
        id: "intimate-4",
        number: 4,
        title: "When I forget to act nonchalant",
        message: "I know I can act unbothered sometimes, but when it's just us, there's a softer side of me that wants all your attention. I want to be clingy without feeling silly about it, hold your hand, lean against you, steal a hug, initiate a kiss, and let you see just how much I love being yours.",
        tag: "unfiltered me"
      },
      {
        id: "intimate-5",
        number: 5,
        title: "The way you make me feel loved",
        message: "It's not only about being physically close. It's also about the way you treat me, the respect you show me, and the care you give to the people I love. Knowing that you respect me, my family, and my friends makes my feelings for you even deeper. I love the person you are, and I appreciate the effort you make for us.",
        tag: "respect & care"
      },
      {
        id: "intimate-6",
        number: 6,
        title: "When I wish time would slow down",
        message: "Sometimes I don't need us to do anything special. I just want to sit close to you, talk about random things, laugh at something silly, share a quiet moment, and forget about the time for a little while. Those simple moments with you can mean more to me than I know how to explain.",
        tag: "quiet moments"
      },
      {
        id: "intimate-7",
        number: 7,
        title: "The things I can't always say",
        message: "Barath, I might not always express my feelings in the sweetest way. I might tease you, act casual, or hide behind my nonchalant behaviour. But please know that my feelings are real and deep. I love being close to you, I love the way you care for me, and I love all the little things that make you you.",
        tag: "my whole heart"
      }
    ],
    finalNote: {
      title: "If you could hear my heart when I'm close to you...",
      paragraphs: [
        "I think you'd understand why I sometimes go quiet, why I want one more hug before we leave, why I don't always want to let go, and why even the smallest kiss can stay in my thoughts long after the moment has passed.",
        "It's because it's you, Barath.",
        "You are the person I want to be soft with. The person I want to show my affection to without overthinking. The person whose hugs I want to return to, whose kisses I want to initiate sometimes, and whose presence makes ordinary moments feel special.",
        "I may act nonchalant, but when it comes to you, my heart has never been as casual as I pretend.",
        "I love you to the core. ♡"
      ],
      signature: "Forever yours, Pooja ♡"
    }
  },

  // -------------------------------------------------------------
  // Section 5: Our Little Scrapbook
  // -------------------------------------------------------------
  scrapbookHeading: "our little scrapbook",
  scrapbookSubheading: "A collection of polaroids, illustrated moments, and sweet little reminders.",
  scrapbookItems: [
    {
      id: "scrap-1",
      title: "our little love story",
      date: "my favorite human",
      caption: "Sitting close with you, holding our little universe in our hands. Every ordinary day feels like a storybook with you.",
      photoUrl: "/images/our-caricature.png",
      tag: "you & me",
      rotation: -2,
      stickerType: "tape"
    },
    {
      id: "scrap-2",
      title: "office power couple",
      date: "workday memories",
      caption: "Matching sharp black blazers, ID badges, and conquering the workday side by side. You make every day brighter.",
      photoUrl: "/images/caricature-office.png",
      tag: "work vibes",
      rotation: 3,
      stickerType: "stamp"
    },
    {
      id: "scrap-3",
      title: "the sweetest cozy selfie",
      date: "casual dates",
      caption: "Checkered plaid shirt, silver chain, and you leaning in close. That smile of yours will always be my favorite sight.",
      photoUrl: "/images/caricature-date.png",
      tag: "date moments",
      rotation: -1,
      stickerType: "pin"
    },
    {
      id: "scrap-4",
      title: "wrapped in your warmth",
      date: "safe haven",
      caption: "Your arm wrapped around my shoulder, keeping me warm and safe. Anywhere with you feels like home.",
      photoUrl: "/images/caricature-hug.png",
      tag: "forever",
      rotation: 2,
      stickerType: "flower"
    },
    {
      id: "scrap-5",
      title: "our laughing moments",
      date: "spontaneous joy",
      caption: "That unfiltered laugh when we make each other smile until our cheeks hurt. My favorite sound in the world.",
      photoUrl: "/images/caricature-laugh.png",
      tag: "laughing together",
      rotation: -2.5,
      stickerType: "tape"
    },
    {
      id: "scrap-6",
      title: "the mirror selfie",
      date: "sweetest days",
      caption: "Pastel shirts, sky-blue kurtis, and stealing sweet selfies together. Every little moment with you is precious.",
      photoUrl: "/images/caricature-mirror.png",
      tag: "cutest couple",
      rotation: 1.5,
      stickerType: "stamp"
    }
  ],

  // -------------------------------------------------------------
  // Section 6: Open-When Letters
  // -------------------------------------------------------------
  lettersHeading: "open-when letters",
  lettersSubheading: "Save these for whenever you need a little piece of my heart in your pocket.",
  letters: [
    {
      id: "letter-miss-me",
      category: "When You Miss Me",
      envelopeColor: "#F5C6D0",
      stampIcon: "heart",
      title: "Open when you miss me...",
      previewSnippet: "Close your eyes for three seconds and remember this...",
      content: [
        "Hey you ♡",
        "If you're opening this, I'm probably not right next to you at this exact second—but please know you are already in my thoughts.",
        "Whenever the distance feels a little too quiet, take a deep breath. Picture my hand in yours and that silly grin you give me whenever we see each other.",
        "I'm sending you the biggest, warmest hug right now. I'll see you very soon."
      ],
      signature: "Forever yours,"
    },
    {
      id: "letter-bad-day",
      category: "When You've Had a Bad Day",
      envelopeColor: "#DCD6F7",
      stampIcon: "sparkle",
      title: "Open when you've had a rough day...",
      previewSnippet: "Set down everything heavy for just a moment...",
      content: [
        "Take a breath and loosen your shoulders.",
        "Some days are just exhausting, unfair, or frustrating. But a bad day doesn't mean a bad life, and it definitely doesn't take away how brilliant, capable, and good you are.",
        "You handled today. Even if all you did was survive it, that is enough. Tonight, you don't have to solve anything. Get comfy, drink some water, and let yourself rest.",
        "I believe in you so much, even on days when you feel worn out."
      ],
      signature: "Cheering for you always,"
    },
    {
      id: "letter-cant-sleep",
      category: "When You Cannot Sleep",
      envelopeColor: "#E8C987",
      stampIcon: "moon",
      title: "Open when your thoughts won't quiet down...",
      previewSnippet: "For the midnight hours when the ceiling won't sleep...",
      content: [
        "It's late, isn't it?",
        "If your mind is racing with tomorrow's to-dos or things you can't control right now, I want you to give yourself permission to let them wait until morning.",
        "Nothing needs to be solved at 2 AM. You are safe, you are loved, and tomorrow is a fresh page.",
        "Close your eyes, let my voice be the calm in the room, and drift off knowing someone loves you deeply."
      ],
      signature: "Sweet dreams, birthday boy,"
    },
    {
      id: "letter-courage",
      category: "When You Need Courage",
      envelopeColor: "#C77D91",
      stampIcon: "star",
      title: "Open when you're doubting yourself...",
      previewSnippet: "A quick reminder of the person I know you to be...",
      content: [
        "Look at me: you've got this.",
        "I've seen how hard you work, how thoughtful your mind is, and how much heart you put into what matters to you.",
        "Nerves just mean you care. Don't let doubt tell you that you don't belong in the room. Walk in with your chin up and show them what you're made of.",
        "I'm in your corner no matter what."
      ],
      signature: "Your biggest fan,"
    },
    {
      id: "letter-smile",
      category: "When You Want to Smile",
      envelopeColor: "#FCE5A4",
      stampIcon: "smile",
      title: "Open when you just need a smile...",
      previewSnippet: "A tiny dose of silliness and love...",
      content: [
        "Did you know that you are statistically 100% my favorite human in the entire observable universe?",
        "Also, reminder: that cute face of yours looks approximately 1000% cuter when you smile.",
        "Go look in the mirror right now, smile at yourself, and remember that you make this world a hundred times brighter just by existing in it."
      ],
      signature: "Sending 10,000 smiles,"
    },
    {
      id: "letter-loved",
      category: "When You Need a Reminder of Love",
      envelopeColor: "#B5A7DF",
      stampIcon: "heart",
      title: "Open when you need to feel loved...",
      previewSnippet: "In case you ever forget for even a second...",
      content: [
        "You are loved for the big moments and the ordinary ones.",
        "You are loved when you're energetic and when you're sleepy and quiet. You are loved when you accomplish things and when you just sit on the couch doing nothing.",
        "Loving you is the easiest, most natural choice I make every single day. Never doubt your place in my heart."
      ],
      signature: "Always and endlessly,"
    }
  ],

  // -------------------------------------------------------------
  // Section 8: The Birthday Cake Surprise
  // -------------------------------------------------------------
  cake: {
    heading: "the birthday cake surprise",
    subheading: "Three little candles are burning for you. Take a deep breath, close your eyes, and make a secret wish...",
    buttonMakeWish: "make a wish & blow the candles",
    buttonWishAgain: "light the candles again",
    wishMessage: "May this year bring you all the quiet peace, big adventures, deep joy, and success you deserve. You make everyone's life richer, and I hope this year gives you back all the love you pour into the world.",
    wishAuthor: "— sealed with love by your favorite human"
  },

  // -------------------------------------------------------------
  // Section 10: The Final Letter
  // -------------------------------------------------------------
  finalLetter: {
    heading: "before you go, one last thing...",
    date: "27 October 2026",
    salutation: "To my favorite person, Barath,",
    paragraphs: [
      "I wanted to build you this little universe because you deserve something as thoughtful and dedicated as the care you bring into my life every day.",
      "Birthdays can sometimes feel loud or rushed, but I wanted you to have this quiet, cozy place to come back to whenever you want a reminder of how cherished you are.",
      "Thank you for being my teammate, my comfort, my favorite laugh, and my greatest adventure. I am so proud of everything you are and everything you are growing into.",
      "May this milestone 20th year of your life be filled with gentle mornings, exciting milestones, good health, and moments that make your heart feel full."
    ],
    closing: "happy 20th birthday, my favorite human.",
    signature: "with all my love,",
    postscript: "P.S. Scroll back up whenever you need a smile. This little universe is always yours. ♡"
  },

  // -------------------------------------------------------------
  // Secret Surprise Interaction
  // -------------------------------------------------------------
  secretSurprise: {
    badge: "you found the secret star",
    title: "A Hidden Love Note",
    message: "You're curious, and I adore that about you! Since you found this secret corner, here is an extra truth: you are my very favorite thought in the morning and my favorite reflection before I sleep. Happy 20th birthday, Barath!",
    signature: "Always your biggest admirer, Pooja ♡"
  },

  // -------------------------------------------------------------
  // Background Music Player ("Lover" by Taylor Swift)
  // -------------------------------------------------------------
  music: {
    enabled: true,
    title: "Lover",
    artist: "Taylor Swift",
    audioSrc: "/audio/lover.mp3"
  }
};

// Automatically prefix assets with Vite BASE_URL (e.g. /Birthday/ for GitHub Pages)
const baseUrl = import.meta.env.BASE_URL || '/';
const resolveAssetUrl = (path?: string) => {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};

if (birthdayConfig.caricature.customImagePath) {
  birthdayConfig.caricature.customImagePath = resolveAssetUrl(birthdayConfig.caricature.customImagePath) || '';
}
birthdayConfig.timeline.forEach(item => {
  if (item.photoUrl) item.photoUrl = resolveAssetUrl(item.photoUrl);
});
if (birthdayConfig.timelineClosing?.image) {
  birthdayConfig.timelineClosing.image = resolveAssetUrl(birthdayConfig.timelineClosing.image) || '';
}
birthdayConfig.ourLittleForever.dreams.forEach(dream => {
  if (dream.illustrationImage) dream.illustrationImage = resolveAssetUrl(dream.illustrationImage);
});
if (birthdayConfig.ourLittleForever.closingMessage?.image) {
  birthdayConfig.ourLittleForever.closingMessage.image = resolveAssetUrl(birthdayConfig.ourLittleForever.closingMessage.image) || '';
}
birthdayConfig.scrapbookItems.forEach(item => {
  if (item.photoUrl) item.photoUrl = resolveAssetUrl(item.photoUrl);
});
if (birthdayConfig.music.audioSrc) {
  birthdayConfig.music.audioSrc = resolveAssetUrl(birthdayConfig.music.audioSrc) || '';
}

