<template>
  <form @submit.prevent="submitForm" autocomplete="off">
    <div class="mb-2">
      {{ description }}
    </div>

    <div class="form-group">
      <label>Your Email</label>
      <input
        type="email"
        class="form-control"
        name="contactFormData-email"
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
        name="contactFormData-phone"
        v-model.trim="contactFormData.phone"
      />
    </div>

    <div class="form-group">
      <label for="contactFormData-message">Your Message</label>
      <textarea
        class="form-control"
        name="contactFormData-message"
        id="contactFormData-message"
        v-model.trim="contactFormData.message"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      id="contactFormData-submit-button"
      class="btn btn-primary btn-block mt-4"
    >
      <span v-if="pending">
        Submitting...
      </span>
      <span v-else>Submit</span>
    </button>
  </form>
</template>

<script>
import axios from "@/common/axios";

export default {
  name: "contact-form",
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    sandboxEmail: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      contactFormData: {
        email: "",
        message: null,
        type: this.type,
        phone: null,
        sandboxEmail: this.sandboxEmail
      },
      pending: false
    };
  },
  computed: {},
  async mounted() {},
  methods: {
    submitForm() {
      if (!this.contactFormData.email) {
        this.$toasted.error("Please complete all fields");
        return;
      }

      // To prevent spam, make sure phone is empty
      if (this.contactFormData.phone) {
        this.contactFormData = {
          email: null,
          message: null,
          type: this.type,
          phone: null,
          sandboxEmail: this.sandboxEmail
        };

        return;
      }

      this.submit();
    },
    async submit() {
      this.pending = true;
      try {
        await axios.post("/contacts", this.contactFormData);

        this.contactFormData = {
          email: null,
          message: null,
          type: this.type,
          phone: null,
          sandboxEmail: this.sandboxEmail
        };

        this.$toasted.success("Successfully Sent! I'll get back to you ASAP.");
      } catch (error) {
        this.$toasted.error(
          "Sorry, but there was an issue. Please check your email and try again."
        );
      } finally {
        this.pending = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/components/_variables.scss";
</style>
