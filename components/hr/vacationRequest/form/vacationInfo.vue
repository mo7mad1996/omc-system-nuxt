<template>
  <fieldset>
    <legend>أرجو من سيادتكم الموافقه على منحي أجازه</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="person_name">تبدأ من</label>
        <input id="person_name" type="date" />
      </div>

      <div class="input_field">
        <label for="person_name">وتنتهي في</label>
        <input id="person_name" type="date" />
      </div>
    </div>

    <div class="textarea-group">
      <label for="PersonReject">وذلك للاسباب الاتيه</label>
      <textarea id="PersonReject"></textarea>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'VacationInfo',
}
</script>
