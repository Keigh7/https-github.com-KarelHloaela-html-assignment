Vue.component('input-field', {
  props: ['label', 'type', 'value', 'error'],
  template: `
    <div>
      <label>{{ label }}</label>
      <input :type="type" :value="value" @input="$emit('input', $event.target.value)" />
      <div class="error" v-if="error">{{ error }}</div>
    </div>
  `
});

Vue.component('contact-form', {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {},
      showModal: false,
      successMessage: false
    };
  },
  methods: {
    validate() {
      this.errors = {};
      this.successMessage = false;

      if (!this.name) this.errors.name = "Name is required.";
      if (!this.email || !this.validEmail(this.email)) this.errors.email = "Valid email is required.";
      if (!this.message) this.errors.message = "Message cannot be empty.";

      return Object.keys(this.errors).length === 0;
    },
    validEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    },
    submitForm() {
      if (this.validate()) {
        this.showModal = true;
        this.name = '';
        this.email = '';
        this.message = '';
      }
    },
    closeModal() {
      this.showModal = false;
      this.successMessage = true;
    }
  },
  template: `
    <div>
      <input-field
  label="Name"
  type="text"
  :value="name"
  @input="name = $event"
  :error="errors.name"
></input-field>

      <input-field
        label="Email"
        type="email"
        v-model="email"
        :error="errors.email"
      ></input-field>

      <div>
        <label>Message</label>
        <textarea v-model="message"></textarea>
        <div class="error" v-if="errors.message">{{ errors.message }}</div>
      </div>

      <button @click="submitForm">Send</button>

      <modal :show="showModal" @close="closeModal"></modal>

      <div v-if="successMessage" class="success-message">
        ✅ Your message has been submitted successfully!
      </div>
    </div>
  `
});

new Vue({
  el: '#app'
});
