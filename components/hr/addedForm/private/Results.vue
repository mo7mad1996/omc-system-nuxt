<template>
  <fieldset>
    <legend>حالات الرفض</legend>

    <div class="input_group">
      <div class="textarea-group">
        <label for="fromHR"> في حالة الرفض من جانبنا سبب ذلك</label>
        <textarea id="fromHR"></textarea>
      </div>

      <div class="textarea-group">
        <label for="fromPERSON">في حالة الرفض من حانب العامل سبب ذلك</label>
        <textarea id="fromPERSON"></textarea>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Results',
}
</script>
