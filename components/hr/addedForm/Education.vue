<template>
  <fieldset>
    <legend>التعليم</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="education">المؤهل</label>
        <input id="education" v-model="education" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Education',
  data() {
    return { education: '' }
  },
  watch: {
    education() {
      this.educationMutation(this.education)
    },
  },
  methods: mapMutations('workers', ['educationMutation']),
}
</script>
