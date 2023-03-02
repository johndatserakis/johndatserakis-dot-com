<template>
  <div class="wrapper">
    <div class="left-wrapper">
      <img
        style="opacity: 0;"
        id="left-wrapper__lead-image"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        src="@/assets/images/main/john-datserakis-profile-image.png"
        alt="John Datserakis"
        class="img-fluid left-wrapper__lead-image"
      />

      <h1
        style="opacity: 0;"
        id="left-wrapper__lead-text"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        class="left-wrapper__lead-text"
      >
        John <span class="blue-text">Datserakis</span>
      </h1>

      <div
        style="opacity: 0;"
        id="left-wrapper__blog-text"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        class="left-wrapper__blog-text"
      >
        Check out my
        <a
          href="https://blog.johndatserakis.com"
          target="_blank"
          rel="noopener noreferrer"
          >blog</a
        >
        to read some of my development notes.
      </div>

      <div
        style="opacity: 0;"
        id="left-wrapper__social-wrapper"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        class="left-wrapper__social-wrapper"
      >
        <div
          v-for="(socialItem, index) in socialItems"
          :key="index"
          class="left-wrapper__social-wrapper__item"
        >
          <a
            :href="socialItem.link"
            target="_blank"
            rel="noopener noreferrer"
            :title="socialItem.name"
          >
            <i :class="'fa ' + socialItem.icon"></i>
          </a>
        </div>
      </div>

      <div
        style="opacity: 0;"
        id="left-wrapper__sub-text"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        class="left-wrapper__sub-text"
      >
        <div class="mb-4">
          <p>
            Hi there. My name is John Datserakis. I'm a Senior Frontend Software
            Engineer from Boston's North Shore. I currently make cool things at
            <a href="https://www.indigoag.com/">Indigo Ag</a>. I like to write
            open-source code to share with the community. Check out my
            <a href="https://github.com/johndatserakis">GitHub</a> to see those
            projects. Visit my
            <a
              href="https://blog.johndatserakis.com"
              target="_blank"
              rel="noopener noreferrer"
              >blog</a
            >
            if you'd like to read my development notes.
          </p>

          <p>
            I'm always working on something new! My latest project is
            <a
              href="https://find-the-state.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              >Find the State</a
            >
            - a simple game where you must find all the States in the contiguous
            USA on a map.
          </p>

          <p>
            Thanks for checking out my work. Email me at johndatserakis at gmail
            dot com if you'd like to chat. If you like this site you can
            <a href="https://github.com/johndatserakis/johndatserakis-dot-com"
              >fork it</a
            >
            - it's open-source and written using Vue and Webpack.
          </p>

          <p>
            Have a question or need support? Leave send me a message at
            johndatserakis at gmail dot com and I'll get back to you.
          </p>
        </div>

        <div class="row justify-content-start">
          <div class="col-lg-12">
            <vue-mailchimp-email-signup-form
              :elementId="'first-email-signup-form'"
              :url="mailchimpUrl"
              :title="'Subscribe to the Newsletter'"
              :subtitle="
                'I take privacy seriously and will never spam or sell your information.'
              "
            />
          </div>
        </div>
      </div>
    </div>

    <div
      style="opacity: 0;"
      id="right-wrapper"
      v-observe-visibility="{
        callback: visibilityChanged,
        throttle: 0,
        once: true
      }"
      class="right-wrapper"
      @scroll="onScroll"
    >
      <h1 class="right-wrapper__lead-text">Links</h1>
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="right-wrapper__item"
      >
        <div class="right-wrapper__item__title">
          {{ project.title }}
        </div>
        <div class="right-wrapper__item__description">
          {{ project.description }}
        </div>
        <div>
          <a
            v-for="(link, index) in project.links"
            :key="index"
            :href="link.link"
            class="right-wrapper__item__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-external-link fa-fw"></i> {{ link.linkText }}
          </a>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="mouse-container" v-if="!scrolledToBottom">
        <div class="mouse">
          <div class="scroll-icon"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import projects from "@/data/projects";
import { VueMailchimpEmailSignupForm } from "vue-mailchimp-email-signup-form";

export default {
  name: "home",
  props: {},
  data() {
    return {
      projects: projects,
      socialItems: [
        {
          name: "GitHub",
          icon: "fa-github",
          link: "https://github.com/johndatserakis"
        },
        {
          name: "Twitter",
          icon: "fa-twitter",
          link: "https://twitter.com/johndatserakis"
        },
        {
          name: "LinkedIn",
          icon: "fa-linkedin",
          link: "https://www.linkedin.com/in/johndatserakis"
        },
        {
          name: "Product Hunt",
          icon: "fa-product-hunt",
          link: "https://www.producthunt.com/@johndatserakis"
        },
        {
          name: "CodePen",
          icon: "fa-codepen",
          link: "https://codepen.io/johndatserakis/"
        }
      ],
      mailchimpUrl: process.env.MAILCHIMP_SUBSCRIBE_URL || "",
      scrolledToBottom: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    async visibilityChanged(isVisible, entry) {
      // Fade up
      if (
        isVisible &&
        (entry.target.id === "left-wrapper__lead-text" ||
          entry.target.id === "left-wrapper__blog-text" ||
          entry.target.id === "left-wrapper__lead-image")
      ) {
        await this.$animejs({
          targets: "#" + entry.target.id,
          duration: 0,
          opacity: 0,
          translateY: 50,
          easing: "linear"
        }).finished;

        await this.$animejs({
          targets: "#" + entry.target.id,
          scale: 1.0,
          duration: 2000,
          opacity: 1,
          translateY: 0,
          easing: "easeOutElastic",
          delay: 0
        }).finished;
      }

      // Fade up
      if (
        isVisible &&
        (entry.target.id === "left-wrapper__social-wrapper" ||
          entry.target.id === "left-wrapper__sub-text")
      ) {
        await this.$animejs({
          targets: "#" + entry.target.id,
          duration: 0,
          opacity: 0,
          translateY: 50,
          easing: "linear"
        }).finished;

        await this.$animejs({
          targets: "#" + entry.target.id,
          scale: 1.0,
          duration: 2000,
          opacity: 1,
          translateY: 0,
          easing: "easeOutElastic",
          delay: 200
        }).finished;
      }

      // Fade up
      if (isVisible && entry.target.id === "right-wrapper") {
        await this.$animejs({
          targets: "#" + entry.target.id,
          duration: 0,
          opacity: 0,
          easing: "linear"
        }).finished;

        await this.$animejs({
          targets: "#" + entry.target.id,
          scale: 1.0,
          duration: 2000,
          opacity: 1,
          easing: "easeOutElastic",
          delay: 200
        }).finished;
      }
    },
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      this.scrolledToBottom = scrollTop + clientHeight >= scrollHeight;
    }
  },
  mounted() {},
  components: {
    VueMailchimpEmailSignupForm
  }
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/vue-mailchimp-email-signup-form/dist/vue-mailchimp-email-signup-form.css";
@import "~@/assets/css/components/_variables.scss";

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    height: 100%;
    flex-direction: row;
  }
}

.left-wrapper {
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: $white;
  background: linear-gradient(115deg, $white, darken($white, 2%));

  @media (min-width: 992px) {
    height: 100%;
    width: 50%;
    overflow: scroll;
  }

  &__lead-image {
    filter: drop-shadow(0 4px 4px rgba($black, 0.15));
    height: 175px;
    width: 175px;
    display: block;
    margin: 0 auto 20px;

    @media (min-width: 992px) {
      display: block;
      margin-left: 0;
    }
  }

  &__lead-text {
    margin-bottom: 20px;
    padding-left: 6px;
    font-size: 1.8rem;
    font-weight: bold;
    color: $black;

    @media (min-width: 992px) {
      padding-left: 0px;
      font-size: 4rem;
    }
  }

  &__blog-text {
    margin-bottom: 20px;
  }

  &__sub-text {
    font-size: 0.9rem;
    color: $muted;
  }

  &__social-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 40px;

    &__item {
      margin-right: 10px;
    }
  }
}

.right-wrapper {
  padding: 30px;
  width: 100%;
  background: $grey;
  color: $black;

  @media (min-width: 992px) {
    height: 100%;
    width: 50%;
    overflow: scroll;
  }

  &__lead-text {
    margin-bottom: 40px;
    font-size: 2.2rem;
    font-weight: bold;
    color: $dark-blue;

    @media (min-width: 992px) {
      font-size: 2.8rem;
    }
  }

  &__item {
    &__title {
      font-size: 1.4rem;
      margin-bottom: 5px;
      font-weight: bold;
      color: $black;
    }

    &__description {
      font-size: 0.9rem;
      color: $muted;
    }

    &__link {
      margin-right: 5px;
      font-size: 0.9rem;
      color: darken($dark-blue, 10%);

      &:hover {
        color: darken($dark-blue, 20%);
      }
    }
  }

  & > div:not(:last-of-type) {
    margin-bottom: 45px;
  }
}
</style>
