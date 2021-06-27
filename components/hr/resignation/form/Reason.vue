<template>
  <fieldset>
    <legend>سبب الاستقاله</legend>
    <div class="textarea-group">
      <label for="resignation_reason">
        وحيث توجد ظروف تمنعني من العمل لدى المؤسسه مُتمثلة في
      </label>
      <textarea
        id="resignation_reason"
        v-model="resignation_reason"
        placeholder="سبب الاستقالة"
      ></textarea>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Reason',
  props: ['form_event'],
  data() {
    return { resignation_reason: '' }
  },
  watch: {
    form_event() {
      Object.assign(this, this, { resignation_reason: '' })
    },
  },
}
</script>
