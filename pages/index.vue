<template>
  <main class="land container-fluid">
    <div class="row">
      <Links />
      <Edits />
    </div>
  </main>
</template>

<script>
// components
import Links from '~/components/land/Links/index'
import Edits from '~/components/land/Edits/index'

export default {
  components: {
    Links,
    Edits,
  },
  head() {
    return {
      title: 'الرئيسيه',
    }
  },
}
</script>
