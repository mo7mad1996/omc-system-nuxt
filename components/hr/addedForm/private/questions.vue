<template>
  <fieldset>
    <legend>أسئله عن العامل</legend>

    <div class="input_group">
      <div class="input_field">
        <label>مظهر العامل لائق</label>
        <div class="radio-group">
          <input type="radio" id="lookok" :value="true" v-model="look" />
          <label for="lookok" class="mark"></label>
          <label for="lookok">نعم</label>
          <input type="radio" id="lookno" :value="false" v-model="look" />
          <label for="lookno" class="mark"></label>
          <label for="lookno">لا</label>
        </div>
      </div>

      <div class="input_field">
        <label>أُسلوب العامل لائق</label>
        <div class="radio-group">
          <input type="radio" id="talkok" :value="true" v-model="talk" />
          <label for="talkok" class="mark"></label>
          <label for="talkok">نعم</label>
          <input type="radio" id="talkno" :value="false" v-model="talk" />
          <label for="talkno" class="mark"></label>
          <label for="talkno">لا</label>
        </div>
      </div>

      <div class="input_field">
        <label>البنيه الجسديه والاعاقات للعامل لائق</label>
        <div class="radio-group">
          <input type="radio" id="bodyok" :value="true" v-model="body" />
          <label for="bodyok" class="mark"></label>
          <label for="bodyok">نعم</label>
          <input type="radio" id="bodyno" :value="false" v-model="body" />
          <label for="bodyno" class="mark"></label>
          <label for="bodyno">لا</label>
        </div>
      </div>

      <div class="input_field">
        <label>هل لاحظت على المقدم مظاهر انه يتعاطى مخدرات</label>
        <div class="radio-group">
          <input type="radio" id="drugsok" :value="true" v-model="drugs" />
          <label for="drugsok" class="mark"></label>
          <label for="drugsok">نعم</label>
          <input type="radio" id="drugsno" :value="false" v-model="drugs" />
          <label for="drugsno" class="mark"></label>
          <label for="drugsno">لا</label>
        </div>
      </div>

      <div class="input_field">
        <label>هل العامل يستوعب العمل والفهم</label>
        <div class="radio-group">
          <input type="radio" id="mindok" :value="true" v-model="mind" />
          <label for="mindok" class="mark"></label>
          <label for="mindok">نعم</label>
          <input type="radio" id="mindno" :value="false" v-model="mind" />
          <label for="mindno" class="mark"></label>
          <label for="mindno">لا</label>
        </div>
      </div>
      <div class="input_field">
        <label for="factory">
          بناء على هذا التقيم،<br />
          ما المصنع الذي يتناسب مع المتقدم للعمل؟
        </label>
        <input type="text" id="a" v-model="factory" />
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
    look: true,
    talk: true,
    body: true,
    drugs: false,
    mind: true,
    factory: '',
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

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'Questions',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
