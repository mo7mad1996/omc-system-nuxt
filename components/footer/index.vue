<template>
  <footer class="container-fluid noPrint">
    <div class="row text-center">
      <div class="col-3">
        <span v-if="user"> مرحباً: {{ user.name }} </span>
      </div>
      <div class="col-3"></div>
      <div class="col-md-3 d-none d-md-block border-white"></div>
      <div class="mt-n1 col-6 col-md-3">
        حقوق الملكيه محفوظه لصالح مجموعه عمال مصر
      </div>
    </div>
  </footer>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

export default {
  name: 'FooterComponent',
  computed: mapGetters('user', ['user']),
}
</script>

<style scoped>
footer {
  padding-top: 15px;
  position: relative;
}

footer::before {
  content: '';
  height: 6px;
  display: block;
  background: black;
  width: 95%;
  position: absolute;
  top: 0;
  left: 0;
  border-top-right-radius: 40px 5px;
}

.row > div {
  background: #bb1716;
  color: white;
}

.border-white {
  border-left: 2px solid white;
  border-right: 2px solid white;
}

.mt-n1 {
  margin-top: -6px;
}
</style>
