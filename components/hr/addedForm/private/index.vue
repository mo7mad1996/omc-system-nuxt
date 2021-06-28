<template>
  <div class="Private">
    <header>
      <h2>خاص بــإدارة التعاقدات</h2>
    </header>

    <Questions :form_event="form_event" />
    <hr />
    <Results :form_event="form_event" />
  </div>
</template>

<script>
// components
import Questions from '~/components/hr/addedForm/private/questions'
import Results from '~/components/hr/addedForm/private/results'
// import Questions from ''

export default {
  props: ['form_event'],
  name: 'Private',
  components: { Questions, Results },
}
</script>

<style lang="scss" scoped>
.Private {
  border: 2px solid #ee2749;
  padding: 10px;
  border-radius: 10px;
  background: #ee274920;
  margin: 20px 0;

  header {
    padding: 20px;
    display: flex;
    align-items: center;

    h2 {
      padding: 0 20px;
      color: #ee2749;
    }

    &::after,
    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: #ee2749;
      display: block;
    }
  }
}
</style>
