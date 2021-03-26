<template>
  <div>
    <Animation
      ref="first"
      v-show="showFirst"
      :id="'firt-id'"
      :json="firstJson"
      :spritesheet="firstImage"
    ></Animation>
    <Animation
      ref="last"
      v-show="showLast"
      :id="'last-id'"
      :json="lastJson"
      :spritesheet="lastImage"
    ></Animation>
  </div>
</template>

<script>
export default {
  name: 'TwoAnimation',
  props: {
    showFirst: {
      type: Boolean,
      required: true
    },
    showLast: {
      type: Boolean,
      required: true
    },
    firstImage: {
      type: [Object, String],
      required: true
    },
    lastImage: {
      type: [Object, String],
      required: true
    },
    firstJson: {
      type: [Object, String],
      required: true
    },
    lastJson: {
      type: [Object, String],
      required: true
    }
  },

  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    firstReady() {
      this.$refs.first.play()
    },
    lastReady() {
      this.$refs.last.play()
    }
  }
}
</script>

<style lang="scss" scoped></style>
