<template>
  <button
    :type="htmlType"
    class="btn"
    :class="{ [variant]: true }"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    htmlType: {
      type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'primary'
    }
  }
})
</script>

<style scoped>
.btn {
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.primary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn:active {
  transform: translateY(1px);
}
</style>
