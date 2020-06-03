<template>
  <label class="wrap">
    {{ label }}
    <input
      class="input"
      :value="value"
      :name="name"
      :type="htmlType"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="errorLabel">{{ errorLabel }}</span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    htmlType: {
      type: String,
      default: 'text'
    },
    errorLabel: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
.wrap {
  margin: 4px 0;
  display: block;
}

.input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
