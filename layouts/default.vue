<template>
  <NavHeader :links="links" @on-toggle="toggleDrawer = true" />
  <NavDrawer
    :links="links"
    :show="toggleDrawer"
    @close="toggleDrawer = false"
  />
  <slot />
  <NavFooter />
</template>

<script setup lang="ts">
import type { Link } from '@/types'

const toggleDrawer = ref(false)
const links = ref<Link[]>([
  {
    title: 'Products',
    url: '#',
  },
  {
    title: 'Solutions',
    url: '#',
  },
  {
    title: 'Resources',
    url: '#',
  },
  {
    title: 'Pricing',
    url: '#',
  },
])
</script>
