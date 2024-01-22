<template>
  <div>
    <div
      v-if="show"
      class="fixed top-0 right-0 z-50 w-full h-full bg-black/70 backdrop-blur-sm"
      @click="$emit('close')"
    />
    <transition name="slide-nav" mode="out-in">
      <div
        v-if="show"
        class="fixed top-0 left-0 z-50 flex flex-col justify-between w-64 h-full pt-3 pb-10 overflow-y-auto bg-white"
      >
        <div>
          <div class="flex justify-end px-3">
            <button
              @click="$emit('close')"
              class="flex items-center justify-center bg-white border rounded-full lg:hidden size-10 text-grey-800 border-300"
            >
              <TimesIcon class="w-6 h-6" />
            </button>
          </div>
          <ul class="px-6 mt-4 space-y-6">
            <li v-for="(link, index) in links" :key="index">
              <nuxt-link
                :to="link.url"
                class="flex items-center justify-between hover:text-primary"
              >
                {{ link.title }}
                <DownIcon class="ml-1" />
              </nuxt-link>
            </li>
          </ul>
        </div>
        <ul class="px-6 pt-10 space-y-3">
          <li>
            <nuxt-link to="#" class="block btn-secondary">
              Talk to sales
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="block btn-primary">
              Sign up for free
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { Link } from '@/types'
import DownIcon from '@/assets/icons/chevron-down.svg?component'
import TimesIcon from '@/assets/icons/times.svg?component'

const props = defineProps<{
  links: Link[]
  show: boolean
}>()

defineEmits(['close'])

const { show } = toRefs(props)

onUnmounted(() => {
  if (show.value) {
    document.body.style.removeProperty('overflow')
  }
})

watch(show, (value) => {
  if (value) {
    document.body.style.setProperty('overflow', 'hidden')
  } else {
    document.body.style.removeProperty('overflow')
  }
})
</script>
