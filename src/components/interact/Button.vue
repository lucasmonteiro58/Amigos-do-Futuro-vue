<template>
  <span>
    <div
      v-if="to === '' && nativeType === ''"
      :class="[name, classname, { 'has-margin': !noMargin }]"
      @click="() => !isDisabled && onClick()"
      class="btn"
    ></div>
    <button
      v-else-if="nativeType !== ''"
      :type="nativeType"
      :class="[classname, { 'has-margin': !noMargin }]"
      class="btn"
    ></button>
    <nuxt-link
      v-else
      :class="[classname, { 'has-margin': !noMargin }]"
      :to="to"
      class="btn"
    ></nuxt-link>
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
      default: 'btn-start'
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
    },
    noMargin: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classname() {
      return 'disabled'
    }
  }
}
</script>
<style lang="scss" scoped>
span {
  @include flex-center;
}

.btn {
  &.has-margin {
    margin: 5px;
  }
  &:not([class$='-off']) {
    &:hover {
      filter: saturate(90%) contrast(130%);
      transform: scale(1.05);
    }

    &:active {
      filter: saturate(40%) contrast(190%);
    }
  }
}

button {
  padding: 0;
  border: none;
  cursor: var(--cursor-click);
}
</style>
