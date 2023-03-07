import { FaGithub } from 'react-icons/fa';
import { FcDisplay, FcIdea, FcVoicePresentation } from 'react-icons/fc';

import { Project } from 'src/types/project';

export const projects: Project[] = [
  {
    description: 'Find all the States in the contiguous USA on a map. Simple enough..',
    icon: <FcDisplay />,
    links: [
      {
        link: 'https://find-the-state.netlify.app',
        linkText: 'View live',
      },
      {
        link: 'https://github.com/johndatserakis/find-the-state-ui',
        linkText: 'View Frontend on GitHub',
      },
      {
        link: 'https://github.com/johndatserakis/find-the-state-api',
        linkText: 'View Backend on GitHub',
      },
    ],
    title: 'Find the State (open-source)',
  },
  {
    description: 'VoV 125: React and Typescript for a Vue developer with John Datserakis',
    icon: <FcVoicePresentation />,
    links: [
      {
        link: 'https://devchat.tv/views-on-vue/vov-125-react-and-typescript-for-a-vue-developer-with-john-datserakis',
        linkText: 'Listen to the Podcast',
      },
    ],
    title: 'Guest on the Views on Vue podcast',
  },
  {
    description: 'Easily collect email signups using MailChimp in your React projects.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/react-mailchimp-email-signup-form',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/react-mailchimp-email-signup-form',
        linkText: 'View live demo',
      },
    ],
    title: 'react-mailchimp-email-signup-form (open-source)',
  },
  {
    description: 'Easily collect email signups using MailChimp in your Vue projects.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-mailchimp-email-signup-form',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-mailchimp-email-signup-form',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-mailchimp-email-signup-form (open-source)',
  },
  {
    description:
      "Easily accept RSVP's for your Wedding, Shower, Bar Mitzvah, or any other upcoming event. Simple for you to set up, easy for your guests to fill out.",
    icon: <FcIdea />,
    links: [
      {
        link: 'https://www.rsvpkeeper.com',
        linkText: 'View website',
      },
    ],
    title: 'RSVP Keeper',
  },
  {
    description:
      'A simple video header/section component for Vue. Good for video backgrounds and overlaying content on them.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-video-section',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-video-section',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-video-section (open-source)',
  },
  {
    description:
      'Website for the Boston band bloom. - a duo formed by Matt Dipietro and Torre Cioffi in mid 2017.',
    icon: <FcIdea />,
    links: [
      {
        link: 'https://www.bloombandma.com',
        linkText: 'View website',
      },
    ],
    title: 'bloom. website',
  },
  {
    description: 'A simple, pretty navbar for your Vue projects.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-navigation-bar',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-navigation-bar',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-navigation-bar (open-source)',
  },
  {
    description: 'Easily mock the layout of your Vue apps.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-mock-layout',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-mock-layout',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-mock-layout (open-source)',
  },
  {
    description: 'Get easy and reactive access to the width and height of your screen.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-screen-size',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-screen-size',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-screen-size (open-source)',
  },
  {
    description:
      'VoV 045: Comparing the React and Vue Ecosystems with a Real-World SPA with John Datserakis',
    icon: <FcVoicePresentation />,
    links: [
      {
        link: 'https://devchat.tv/views-on-vue/vov-045-comparing-the-react-and-vue-ecosystems-with-a-real-world-spa-with-john-datserakis',
        linkText: 'Listen to the Podcast',
      },
    ],
    title: 'Guest on the Views on Vue podcast',
  },
  {
    description:
      'Link control is an extension that lets you adjust the color of your previously viewed links.',
    icon: <FcIdea />,
    links: [
      {
        link: 'https://chrome.google.com/webstore/detail/link-control/dibehcgiapedhoehgpinmkdmahlheekc',
        linkText: 'View in Chrome Web Store',
      },
    ],
    title: 'Link Control',
  },
  {
    description: 'Best Meta makes it easy to browse the most popular products on Amazon.',
    icon: <FcIdea />,
    links: [
      {
        link: 'https://www.bestmeta.com',
        linkText: 'View Project',
      },
    ],
    title: 'Best Meta',
  },
  {
    description: 'Comparing the React and Vue Ecosystems with a Real-World SPA',
    icon: <FcVoicePresentation />,
    links: [
      {
        link: 'https://vuejsdevelopers.com/2018/09/04/comparing-vue-and-react',
        linkText: 'Read the post',
      },
    ],
    title: 'Guest blog post for vuejsdevelopers.com ',
  },
  {
    description:
      'A simple invisible Google reCAPTCHA component focused solely on programmatic invocation.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-programmatic-invisible-google-recaptcha',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-programmatic-invisible-google-recaptcha',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-programmatic-invisible-google-recaptcha (open-source)',
  },
  {
    description:
      'A simple SPA built using Koa (2.5.1) as the backend and React (16.4.1) as the frontend. Features MySQL integration, user authentication, CRUD note actions, and more.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/koa-react-notes-web',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://koa-react-notes-web.innermonkdesign.com',
        linkText: 'View live demo',
      },
    ],
    title: 'koa-react-notes-web (open-source)',
  },
  {
    description: 'The easiest way to track your competitions.',
    icon: <FcIdea />,
    links: [
      {
        link: 'https://thehousecupapp.com',
        linkText: 'View Project',
      },
    ],
    title: 'The House Cup',
  },
  {
    description:
      'Vue binding for countable.js. Provides real-time paragraph, sentence, word, and character counting.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-countable',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-countable',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-countable (open-source)',
  },
  {
    description:
      'A simple file-upload utility that shows a preview of the uploaded image. Written in pure JavaScript. No dependencies. Works well with Bootstrap 4 or without a framework.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/file-upload-with-preview',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/file-upload-with-preview',
        linkText: 'View live demo',
      },
    ],
    title: 'file-upload-with-preview (open-source)',
  },
  {
    description:
      'A Chrome extension written using Vue and Async/Await. Uses a popup display and changes badge counts.',
    icon: <FcIdea />,
    links: [
      {
        link: 'https://github.com/johndatserakis/chrome-ribbon-reminder',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://chrome.google.com/webstore/detail/ribbon-reminder/ahdegcekcodbkojmccabgmfcfddabnbd?authuser=2',
        linkText: 'View in Chrome Web Store',
      },
    ],
    title: 'chrome-ribbon-reminder (open-source)',
  },
  {
    description:
      'Simple context-menu component built for Vue. Works well with both left and right clicks. Nothing too fancy, just works and is simple to use.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-simple-context-menu',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-simple-context-menu',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-simple-context-menu (open-source)',
  },
  {
    description:
      'A modern JavaScript starter using Webpack 4. Made in a simple way - good for learning or starting a new project without having to rollout cli-auto-builders.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/modern-webpack-starter',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://modern-webpack-starter.innermonkdesign.com',
        linkText: 'View live demo',
      },
    ],
    title: 'modern-webpack-starter (open-source)',
  },
  {
    description:
      'Show a banner with text, a decline button, and an accept button on your page. Remembers selection using cookies. Emits an event with current selection and on creation. Good for GDPR requirements.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/vue-cookie-accept-decline',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://johndatserakis.github.io/vue-cookie-accept-decline',
        linkText: 'View live demo',
      },
    ],
    title: 'vue-cookie-accept-decline (open-source)',
  },
  {
    description:
      'A simple SPA built using Koa (2.5.1) as the backend and Vue (2.5.16) as the frontend. Features MySQL integration, user authentication, CRUD note actions, and Vuex store modules.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/koa-vue-notes-web',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://koa-vue-notes-web.innermonkdesign.com',
        linkText: 'View live demo',
      },
    ],
    title: 'koa-vue-notes-web (open-source)',
  },
  {
    description:
      'This website! Written using React, TypeScript, and Next.js. Go ahead and fork it!',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/johndatserakis-dot-com',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://www.johndatserakis.com',
        linkText: 'View live demo',
      },
    ],
    title: 'John Datserakis Website (open-source)',
  },
  {
    description:
      'A simple SPA built using Koa (2.5.1) as the backend and Vue (2.5.16) as the frontend. Features MySQL integration, user authentication, CRUD note actions, and Vuex store modules.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/koa-vue-notes-api',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://koa-vue-notes-web.innermonkdesign.com',
        linkText: 'View live demo',
      },
    ],
    title: 'koa-vue-notes-api (open-source)',
  },
  {
    description:
      'Every pizza is hand-made. Every sub is cooked to order. The same way for 40 years.',
    icon: <FcIdea />,
    links: [
      {
        link: 'https://nickeyspizza.com',
        linkText: 'View Project',
      },
    ],
    title: "Nickey's Pizza Website",
  },
  {
    description:
      'A single repo containing both the koa-vue-notes-api and koa-vue-notes-web projects.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/koa-vue-notes-project',
        linkText: 'View on GitHub',
      },
      {
        link: 'https://koa-vue-notes-web.innermonkdesign.com',
        linkText: 'View live demo',
      },
    ],
    title: 'koa-vue-notes-project (open-source)',
  },
  {
    description: 'A Music Museum.',
    icon: <FcIdea />,
    links: [
      {
        link: 'https://thehiphographies.com',
        linkText: 'View Project',
      },
    ],
    title: 'The Hiphographies',
  },
  {
    description: 'Emulate a record player in Sprite Kit using Swift and Xcode.',
    icon: <FaGithub />,
    links: [
      {
        link: 'https://github.com/johndatserakis/RecordPlayer',
        linkText: 'View on GitHub',
      },
    ],
    title: 'RecordPlayer (open-source)',
  },
];
