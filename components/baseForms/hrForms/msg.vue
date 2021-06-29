<template>
  <div
    class="msg"
    :class="{ active: msg.Active, error: !msg.Status, success: msg.Status }"
    v-text="msg.Text"
    @click="close"
  />
</template>

<script>
// vuex
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Msg',
  computed: mapGetters('hr', ['msg']),
  methods: {
    // to close the Message Component
    ...mapMutations('hr', ['setMsgActive']),
    close() {
      this.setMsgActive(false)
    },
  },
}
</script>

<style lang="scss" scoped>
.msg {
  padding: 20px 40px;
  position: fixed;
  left: 2em;
  bottom: -4em;
  transition: 0.3s;
  z-index: 2;
  border-radius: 5px;
  box-shadow: 4px 8px 16px #333;
  user-select: none;
  cursor: pointer;

  &.active {
    bottom: 2em;
  }

  &.success {
    background: rgb(35, 207, 19);
  }

  &.error {
    background: rgb(207, 19, 35);
  }
}
</style>
