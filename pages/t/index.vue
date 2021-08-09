<template>
  <div><input type="file" ref="file" @change="change" /></div>
</template>

<script>
export default {
  data: () => ({ file: '' }),
  methods: {
    change() {
      this.file = this.$refs.file.files[0]
      let fr = new FileReader()
      fr.onload = () => {
        console.log(fr)
      }

      fr.readAsDataURL(this.file)
    },
  },
}
</script>
