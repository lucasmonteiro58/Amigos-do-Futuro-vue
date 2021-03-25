<template>
  <span>
    <div
      v-if="to === '' && nativeType === ''"
      :class="[name, classname, { 'has-margin': !noMargin }]"
      @click="() => !isDisabled && onClick()"
      class="btn"
    >
      <span
        :style="{ fontSize: fontSize, color: color }"
        class="content-options"
        >{{ content }}</span
      >
    </div>
    <button
      v-else-if="nativeType !== ''"
      :type="nativeType"
      :class="[classname, { 'has-margin': !noMargin }]"
      class="btn"
    >
      <span class="content-options">{{ content }}</span>
    </button>
    <nuxt-link
      v-else
      :class="[classname, { 'has-margin': !noMargin }]"
      :to="to"
      class="btn"
    >
      <span class="content-options">{{ content }}</span>
    </nuxt-link>
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
    content: {
      type: String,
      required: false,
      default: ''
    },
    fontSize: {
      type: String,
      required: false,
      default: '60px'
    },
    color: {
      type: String,
      required: false,
      default: 'white'
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
  @include flex-center;
  @include bungee;
  &.has-margin {
    margin: 5px;
  }
  &:not([class$='-off']) {
    &:hover {
      filter: saturate(90%) contrast(130%);
      transform: scale(1.05);
    }

    &:active {
      filter: saturate(30%) contrast(300%);
    }
  }
}

button {
  padding: 0;
  border: none;
  cursor: var(--cursor-click);
}
</style>
