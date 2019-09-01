<template>
  <div class="wrapper">
    <div class="wrapper__left-wrapper">
      <img
        style="opacity: 0;"
        id="wrapper__left-wrapper__lead-image"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        src="@/assets/images/main/john-datserakis-profile-image.png"
        alt="John Datserakis"
        class="img-fluid wrapper__left-wrapper__lead-image"
      />

      <h1
        style="opacity: 0;"
        id="wrapper__left-wrapper__lead-text"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        class="wrapper__left-wrapper__lead-text"
      >
        John <span class="blue-text">Datserakis</span>
      </h1>

      <div
        style="opacity: 0;"
        id="wrapper__left-wrapper__social-wrapper"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        class="wrapper__left-wrapper__social-wrapper"
      >
        <div
          v-for="socialItem in socialItems"
          :key="socialItem.name"
          class="wrapper__left-wrapper__social-wrapper__item"
        >
          <a :href="socialItem.link" target="_blank">
            <i :class="'fa ' + socialItem.icon"></i>
          </a>
        </div>
      </div>

      <div
        style="opacity: 0;"
        id="wrapper__left-wrapper__sub-text"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 0,
          once: true
        }"
        class="wrapper__left-wrapper__sub-text"
      >
        <p>
          Hi there. My name is John Datserakis. I'm a Lead Full-Stack Developer
          and Designer from Boston's North Shore. I currently make cool things
          at <a href="https://promosis.com">Promosis</a>. The two blogs I write
          for are
          <a href="https://blog.innermonkdesign.com">The Inner Monk Blog</a> and
          <a href="https://thehiphographies.com">The Hiphographies</a>. You can
          find my iOS Apps and Games on the
          <a href="http://appstore.com/johndatserakis">App Store</a>. I like to
          write open-source code to share with the community. Check out my
          <a href="https://github.com/johndatserakis">GitHub</a> to see those
          projects.
        </p>

        <p>
          I'm always working on something new! My latest project is
          <a
            href="https://github.com/promosis/vue-programmatic-invisible-google-recaptcha"
            target="_blank"
            >vue-programmatic-invisible-google-recaptcha</a
          >
          - it's an open-source Vue component that helps Vue developers with the
          programmatic invocation of Google's invisible reCAPTCHA.
        </p>

        <p>
          Thanks for checking out my work. Email me at johndatserakis at gmail
          dot com or use the form below if you'd like to chat. If you like this
          site you can
          <a href="https://github.com/johndatserakis/johndatserakis-dot-com"
            >fork it</a
          >
          - it's open-source and written using Vue and Webpack.
        </p>

        <div class="row justify-content-start">
          <div class="col-lg-8">
            <form @submit.prevent="submitContactForm" autocomplete="off">
              <div class="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="contact-form-email"
                  v-model.trim="contactFormData.email"
                  required
                />
              </div>

              <div
                class="form-group"
                style="display:none !important"
                tabindex="-1"
                autocomplete="off"
                aria-hidden
              >
                <label>Your Phone</label>
                <input
                  type="text"
                  class="form-control"
                  name="contact-form-phone"
                  v-model.trim="contactFormData.phone"
                />
              </div>

              <div class="form-group">
                <label>Your Message</label>
                <textarea
                  class="form-control"
                  name="contact-form-message"
                  v-model.trim="contactFormData.message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                id="contact-form-submit-button"
                class="btn btn-primary btn-block mt-4"
              >
                <span v-if="pending">
                  <i class="fa fa-gear fa-spin"></i> Submitting
                </span>
                <span v-else><i class="fa fa-rocket fa-fw"></i> Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div
      style="opacity: 0;"
      id="wrapper__right-wrapper"
      v-observe-visibility="{
        callback: visibilityChanged,
        throttle: 0,
        once: true
      }"
      class="wrapper__right-wrapper"
    >
      <h1 class="wrapper__right-wrapper__lead-text">Links</h1>
      <div
        v-for="project in projects"
        :key="project.title"
        class="wrapper__right-wrapper__item"
      >
        <div class="wrapper__right-wrapper__item__title">
          {{ project.title }}
        </div>
        <div class="wrapper__right-wrapper__item__description">
          {{ project.description }}
        </div>
        <div>
          <a
            v-for="link in project.links"
            :href="link.link"
            class="wrapper__right-wrapper__item__link"
            target="_blank"
          >
            <i class="fa fa-external-link fa-fw"></i> {{ link.linkText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects";
import axios from "@/common/axios";

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
          name: "CodePen",
          icon: "fa-codepen",
          link: "https://codepen.io/johndatserakis/"
        }
      ],
      contactFormData: {
        email: null,
        message: null,
        phone: null
      },
      pending: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    async visibilityChanged(isVisible, entry) {
      // Fade up
      if (
        isVisible &&
        (entry.target.id === "wrapper__left-wrapper__lead-text" ||
          entry.target.id === "wrapper__left-wrapper__lead-image")
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
        (entry.target.id === "wrapper__left-wrapper__social-wrapper" ||
          entry.target.id === "wrapper__left-wrapper__sub-text")
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
      if (isVisible && entry.target.id === "wrapper__right-wrapper") {
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

    async submitContactForm() {
      this.pending = true;

      try {
        if (this.contactFormData.phone) {
          this.contactFormData = {
            email: null,
            message: null,
            phone: null
          };

          return;
        }

        const response = await axios.post("/contact", {
          email: this.contactFormData.email,
          message: this.contactFormData.message,
          type: "johndatserakis"
        });

        this.$toasted.success("Message sent successfully. Thank you.");

        this.contactFormData = {
          email: null,
          message: null,
          phone: null
        };
      } catch (error) {
        console.log(error);
        this.$toasted.error(
          "There was an error sending your message. Please try again or email me directly. Thank you."
        );
      } finally {
        this.pending = false;
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/components/_variables.scss";

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    height: 100%;
    flex-direction: row;
  }

  &__left-wrapper {
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

  &__right-wrapper {
    padding: 30px;
    width: 100%;
    background: $grey;
    background: linear-gradient(115deg, $grey, darken($grey, 10%));
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
      margin-bottom: 45px;

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
  }
}

.blue-text {
  color: $dark-blue;
}
</style>
