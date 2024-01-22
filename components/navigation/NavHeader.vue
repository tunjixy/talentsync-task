<template>
  <header class="fixed z-40 flex justify-center w-full mt-10">
    <nav
      class="w-[90%] sm:w-[80%] container border rounded-full bg-grey-100 border-grey-300"
    >
      <div class="flex items-center justify-between px-8 py-4">
        <AppLogo />
        <ul class="items-center hidden gap-10 lg:flex">
          <li v-for="(link, index) in links" :key="index">
            <nuxt-link
              :to="link.url"
              class="flex items-center text-lg font-semibold transition-colors duration-300 ease-in hover:text-primary"
            >
              {{ link.title }}
              <DownIcon class="ml-1" />
            </nuxt-link>
          </li>
        </ul>
        <ul class="items-center hidden gap-2 2xl:flex">
          <li>
            <nuxt-link to="#" class="btn-secondary"> Talk to sales </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="btn-primary"> Sign up for free </nuxt-link>
          </li>
        </ul>
        <button
          @click="$emit('onToggle')"
          class="flex items-center justify-center bg-white border rounded-full lg:hidden size-10 text-grey-800 border-300"
        >
          <MenuIcon class="w-6 h-6" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { Link } from '@/types'

import DownIcon from '@/assets/icons/chevron-down.svg?component'
import MenuIcon from '@/assets/icons/menu.svg?component'

defineProps<{
  links: Link[]
}>()

defineEmits(['onToggle'])
</script>
