<template>
  <div class="reports">
    {{ user.permission }}
    <CustomerReports
      :user="user"
      v-if="
        ['chairman', 'attraction_manager', 'attraction_employee'].filter(
          (el) => el == user.permission
        ).length
      "
    />

    <WorkersReports
      :user="user"
      v-if="
        ['chairman', 'polarization_manager', 'polarization_employee'].filter(
          (el) => el == user.permission
        ).length
      "
    />
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

// components
import CustomerReports from '~/components/reports/customerReports/index'
import WorkersReports from '~/components/reports/workersReports/index'

export default {
  computed: mapGetters('user', ['user']),
  components: { CustomerReports, WorkersReports },

  name: 'Reports',
}
</script>
