<template>
  <fieldset>
    <legend>خاص بالعامل</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">مقدم لسيادتكم</label>
        <input
          id="person_name"
          type="text"
          placeholder="اسم المستقيل"
          v-model="person_name"
        />
      </div>

      <div class="input_field">
        <label for="id_card">أحمل رقم بطاقه</label>
        <input
          id="id_card"
          type="text"
          placeholder="رقم قومي"
          v-model="id_card"
        />
      </div>

      <div class="input_field">
        <label for="city">المقيم في</label>
        <input id="city" type="text" placeholder="محل الاقامه" v-model="city" />
      </div>
      ولذلك أرغب في الاستقالة وأقدم استقالتي لسيادتكم راجيا قبولها
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
var data = { person_name: '', id_card: '', city: '' },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  let mutationName = 'Resignation' + d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'Personal',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('hr', Mutations),
}
</script>
