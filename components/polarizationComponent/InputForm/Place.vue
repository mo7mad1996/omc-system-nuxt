<template>
  <fieldset>
    <legend>المكان</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="factory">المصنع</label>
        <input id="factory" v-model="factory" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Place',
  data() {
    return {
      factory: '',
    }
  },
  watch: {
    factory() {
      this.factoryMutation(this.factory)
    },
  },
  methods: mapMutations('workers', ['factoryMutation']),
}
</script>
