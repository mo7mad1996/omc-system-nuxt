<template>
  <!-- form Head -->
  <section class="head text-center formHead">
    <div>
      <div>
        <h2>مؤسسة عمال مصر</h2>
        <p>لإدارة وتشغيل المنشئات الصناعيه وإدارة المشروعات</p>
      </div>
    </div>
    <div>
      <h2 class="title">{{ formTitle }}</h2>
    </div>
    <div class="conntent">
      <div class="logo">
        <img src="/header/logo.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FormHead',
  props: ['formTitle'],
}
</script>

<style lang="scss" scoped>
.head {
  padding: 10px;
  display: flex;
  justify-content: space-between;

  .title {
    padding: 3px 10px;
    background: rgba(103, 190, 212, 0.26);
  }

  .conntent {
    padding: 5px;
    border: 5px solid rgb(255, 0, 0);
    border-radius: 50%;
    background: white;

    @media print {
      border-color: black;
    }

    .logo {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 5px solid black;

      @media print {
        border-color: black;
      }

      img {
        width: 140px;
        height: 140px;
        display: block;
        margin: auto;
        object-fit: contain;
      }
    }
  }
}
</style>
