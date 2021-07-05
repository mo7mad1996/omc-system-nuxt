<template>
  <div class="buttons noPrint">
    <button type="submit">إضافه</button>
    <button type="reset">إلغاء</button>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 10px;
  padding: 10px;
  padding-bottom: 3rem;
  flex-flow: row-reverse;

  button {
    color: #130c22;
    background-color: #fff;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;

    &[type='submit'] {
      background-color: #130c22;
      color: #fff;
    }
  }
}
</style>
