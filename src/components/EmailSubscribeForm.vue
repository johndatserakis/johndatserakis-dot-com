<template>
  <form @submit.prevent="submitForm" autocomplete="off">
    <div class="mb-2">
      {{ description }}
    </div>

    <div class="form-group">
      <label for="emailSubscribeFormData-email">Your Email</label>
      <input
        type="email"
        class="form-control"
        name="emailSubscribeFormData-email"
        id="emailSubscribeFormData-email"
        v-model.trim="emailSubscribeFormData.email"
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
        name="emailSubscribeFormData-phone"
        id="emailSubscribeFormData-phone"
        v-model.trim="emailSubscribeFormData.phone"
      />
    </div>

    <button
      type="submit"
      id="emailSubscribeFormData-submit-button"
      class="btn btn-primary btn-block mt-4"
    >
      <span v-if="pending">
        Submitting...
      </span>
      <span v-else>Signup</span>
    </button>
  </form>
</template>

<script>
import axios from "@/common/axios";

export default {
  name: "email-subscribe-form",
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
      emailSubscribeFormData: {
        email: "",
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
      if (!this.emailSubscribeFormData.email) {
        this.$toasted.error("Please complete all fields");
        return;
      }

      // To prevent spam, make sure phone is empty
      if (this.emailSubscribeFormData.phone) {
        this.emailSubscribeFormData = {
          email: null,
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
        await axios.post("/email-subscribes", this.emailSubscribeFormData);

        this.emailSubscribeFormData = {
          email: null,
          type: this.type,
          phone: null,
          sandboxEmail: this.sandboxEmail
        };

        this.$toasted.success("Thank you - you've been signed up!");
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
