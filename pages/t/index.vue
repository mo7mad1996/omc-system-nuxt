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
        // xlsx.read(fs.readFileSync('/xlsx.xlsx'))
      }

      fr.readAsDataURL(this.file)
    },
  },
  mounted() {
    console.log(fse)
  },
}
</script>
