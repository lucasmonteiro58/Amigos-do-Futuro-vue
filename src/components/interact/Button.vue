<template>
  <span>
    <div
      v-if="to === '' && nativeType === ''"
      :class="classname"
      @click="() => !isDisabled && onClick()"
      class="btn"
    ></div>
    <button
      v-else-if="nativeType !== ''"
      :type="nativeType"
      :class="classname"
      class="btn"
    ></button>
    <nuxt-link v-else :class="classname" :to="to" class="btn"></nuxt-link>
  </span>
</template>
<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: false,
      default() {
        console.warn('give me a function!')
      }
    },
    name: {
      type: String,
      required: false,
      default: 'btn-help'
    },
    to: {
      type: String,
      required: false,
      default: ''
    },
    nativeType: {
      type: String,
      required: false,
      default: ''
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classname() {
      return this.isDisabled ? `${this.name}-off` : this.name
    }
  }
}
</script>
<style lang="scss" scoped>
span {
  @include flex-center;
}

.btn {
  &:not([class$='-off']) {
    filter: drop-shadow(3px 3px 3px rgba(36, 36, 36, 0.5));

    &:hover {
      @include button_glow;
    }

    &:active {
      filter: none;
    }
  }
}

button {
  padding: 0;
  border: none;
}
</style>
