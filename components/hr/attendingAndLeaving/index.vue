<template>
  <form class="addForm flex-form" @submit.prevent="add">
    <FormHead formTitle="الحضور والانصراف" />

    <header>
      <div class="container">
        <div class="row">
          <div class="col">
            اليوم:
            <span class="px-1">
              {{ week[date.getDay()] }}
            </span>
          </div>
          <div class="col">
            التاريخ:
            <span class="px-1">
              {{ date.toLocaleDateString() }}
            </span>
          </div>
        </div>
      </div>
    </header>

    <hr class="noPrint" />
    <ul class="list">
      <li class="row noPrint">
        <div class="col-5">
          <input placeholder="إسم الموظف" v-model="person.name" />
        </div>
        <div class="col-3"><input type="time" v-model="person.start" /></div>
        <div class="col-3"><input type="time" v-model="person.end" /></div>
        <div class="col-1 noPrint"><input type="submit" value="إضافه" /></div>
      </li>
      <hr />
      <li class="row">
        <div class="col-5">إسم الموظف</div>
        <div class="col-3">الحضور</div>
        <div class="col-3">الانصراف</div>
        <div class="col-1"></div>
      </li>
      <hr />
      <li class="row" v-for="(item, n) in list" :key="n">
        <div class="col-5">{{ item.name }}</div>
        <div class="col-3">{{ item.start }}</div>
        <div class="col-3">{{ item.end }}</div>
        <div class="col-1 noPrint">
          <input @click="edit(n)" type="button" value="تعديل" />
        </div>
      </li>
    </ul>
    <hr />
  </form>
</template>

<script>
// vuex
import { mapGetters, mapActions } from 'vuex'

// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'

export default {
  name: 'AttendingAndLeaving',
  components: { FormHead },
  data() {
    return {
      list: new Array(),
      person: {
        name: '',
        start: '',
        end: '',
      },
      date: new Date(),
    }
  },
  methods: {
    ...mapActions('hr', ['updateAttendingList']),
    add() {
      this.list.push(this.person)

      this.reset()
    },
    reset() {
      this.person = {
        name: '',
        start: '',
        end: '',
      }
    },
    edit(n) {
      this.person = this.list.splice(n, 1)[0]
    },
  },
  computed: mapGetters(['week']),
  watch: {
    list() {
      this.updateAttendingList(this.list)
    },
  },
  beforeMount() {
    this.$axios
      .$get('Attendings?date=' + this.date.toDateString())
      .then((res) => {
        this.list = res[0].list
      })
      .catch(() => {
        this.$axios.$post('Attendings', {
          id: null,
          date: new Date().toDateString(),
          list: this.list,
        })
      })
  },
}
</script>

<style lang="scss" scoped>
.flex-form {
  min-height: 100%;
  flex-direction: column;

  input {
    border: 2px solid slateblue;
    border-radius: 5px;
    padding: 5px 10px;
    display: block;
    width: 100%;
  }
}
</style>
