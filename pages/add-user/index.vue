<template>
  <AddUser />
</template>

<script>
// components
import AddUser from '~/components/add-user/index'

export default {
  head: () => ({
    title: 'إضافة مستخدمين',
  }),
  components: { AddUser },
}
</script>
