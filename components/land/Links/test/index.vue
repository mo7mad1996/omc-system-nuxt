<template>
  <div class="col-3">
    <Polarization />

    <Attraction />

    <HR />

    <Operating />

    <Financial />
  </div>
</template>

<script>
// components
import Polarization from '~/components/land/Links/test/polarization'
import Attraction from '~/components/land/Links/test/attraction'
import HR from '~/components/land/Links/test/hr'
import Operating from '~/components/land/Links/test/operating'
import Financial from '~/components/land/Links/test/financial'

export default {
  name: 'First',
  components: { Polarization, Attraction, HR, Operating, Financial },
}
</script>
