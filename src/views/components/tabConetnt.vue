<template>
  <div>
    <component :is="activeTabName"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import home from '@/views/Home'
import approveApply from '@/components/approveApply'
import approveOne from '@/components/approveOne'
import approveTwo from '@/components/approveTwo'
import customer from '@/components/customer'
import customerApply from '@/components/customerApply'
import enterpriseManager from '@/components/enterpriseManager'
import finalOne from '@/components/finalOne'
import finalTwo from '@/components/finalTwo'
import Financial from '@/components/Financial'
import financialSearch from '@/components/financialSearch'
import loadApply from '@/components/loadApply'
import loadBorrow from '@/components/loadBorrow'
import loadChange from '@/components/loadChange'
import projectManager from '@/components/projectManager'
export default {
  components: {
    home,
    approveApply,
    approveOne,
    approveTwo,
    customer,
    customerApply,
    enterpriseManager,
    finalOne,
    finalTwo,
    Financial,
    financialSearch,
    loadApply,
    loadApply,
    loadBorrow,
    loadChange,
    projectManager
  },
  computed: {
    ...mapState({
      activeTabName: state => state.menu.activeTabName
    })
  }
}
</script>

<style scoped>
</style>