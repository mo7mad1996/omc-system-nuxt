<template>
  <fieldset>
    <legend>العنوان</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="city">المدينه</label>

        <select id="city" v-model="city" ref="a">
          <option v-for="c in cities" :key="c" v-text="c" :value="c" />
        </select>
        <input type="text" class="d-none" v-model="city" />
      </div>

      <div class="input_field">
        <label for="area">المنطقه</label>

        <select id="area" v-model="area" ref="b">
          <option v-for="z in zones" :key="z" v-text="z" :value="z" />
        </select>
        <input type="text" class="d-none" v-model="area" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

/*****************************
 *   pure Js
 ****************************/

// to reset the Form when form Actions
var data = {
    city: '',
    area: '',
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  let mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  // watch[d] = function () {
  //   this[mutationName](this[d])
  // }
}
watch.city = function () {
  if (this.city == 'اخرى') {
    this.$refs.a.classList.toggle('d-none')
    this.$refs.a.nextElementSibling.classList.toggle('d-none')
    this.$refs.a.nextElementSibling.focus()
    this.city = ''
  }

  this.cityMutation(this.city)
}
watch.area = function () {
  if (this.area == 'اخرى') {
    this.$refs.b.classList.toggle('d-none')
    this.$refs.b.nextElementSibling.classList.toggle('d-none')
    this.$refs.b.nextElementSibling.focus()
    this.area = ''
  }

  this.areaMutation(this.area)
}

export default {
  name: 'Location',
  props: ['zones', 'cities', 'form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('customers', Mutations),
}
</script>
