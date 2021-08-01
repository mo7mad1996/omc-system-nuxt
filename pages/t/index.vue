<template>
  <div class="d">
    <div v-for="(a, n) in d" :key="n">
      {{ n }}- {{ a.id }}- {{ a.phone }} {{ a.added_by }}

      <form @submit.prevent="aaa(name, a.id)">
        <input v-model="name" /><input type="submit" value=" تعديل" />
      </form>

      <button @click.prevent="dwl(a.id)">حذف</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d: [],
      name: '',
    }
  },
  mounted() {
    this.$axios
      .$get('http://192.168.1.33:3000/customers?added_by=')
      .then((res) => (this.d = res))
  },
  methods: {
    aaa(name, id) {
      console.log(this.$axios, name)
      this.$axios.$patch('http://192.168.1.33:3000/customers/' + id, {
        added_by: name,
      })
    },
    dwl(id) {
      this.$axios.$delete('http://192.168.1.33:3000/customers/' + id)
    },
  },
}
</script>

<style lang="scss" scoped>
.d {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 250px;
  }
}
</style>
