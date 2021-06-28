<template>
  <fieldset>
    <legend>معلومات هامه</legend>
    <h3 class="px-2">في حالة التحاقك بالعمل</h3>
    <div class="input_group">
      <div class="input_field">
        <label>هتسكن في سكن الشركه</label>

        <div class="radio-group">
          <input type="radio" id="a" :value="true" v-model="companyHome" />
          <label for="a" class="mark" />
          <label for="a">نعم</label>
          <input type="radio" id="b" :value="false" v-model="companyHome" />
          <label for="b" class="mark" />
          <label for="b">لا</label>
        </div>
      </div>

      <div class="input_field">
        <label>هتيجي مواصلات على حسابك</label>

        <div class="radio-group">
          <input type="radio" id="c" :value="true" v-model="useBus" />
          <label for="c" class="mark" />
          <label for="c">نعم</label>
          <input type="radio" id="d" :value="false" v-model="useBus" />
          <label for="d" class="mark" />
          <label for="d">لا</label>
        </div>
      </div>

      <div class="input_field">
        <label>هتركب في خطوط الشركه ان وجدت</label>

        <div class="radio-group">
          <input type="radio" id="e" :value="true" v-model="rideBus" />
          <label for="e" class="mark" />
          <label for="e">نعم</label>
          <input type="radio" id="f" :value="false" v-model="rideBus" />
          <label for="f" class="mark" />
          <label for="f">لا</label>
        </div>
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
    companyHome: false,
    useBus: false,
    rideBus: false,
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  const mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    console.log(d.padStart(60, '-'))
    this[mutationName](this[d])
  }
}

export default {
  name: 'Important',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
