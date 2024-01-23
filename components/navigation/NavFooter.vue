<template>
  <footer class="pt-24">
    <div class="container">
      <div
        class="grid grid-cols-2 gap-8 pb-12 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8"
      >
        <div class="col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-3">
          <AppLogo />
          <p class="xl:max-w-[400px] mt-8 text-lg text-grey-600">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div>
          <h6 class="text-base font-semibold">Products</h6>
          <ul class="mt-4 space-y-4">
            <li
              v-for="(product, index) in products"
              :key="index"
              class="text-grey-600"
            >
              <nuxt-link
                class="text-lg font-semibold hover:text-primary"
                to="#"
              >
                {{ product }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="text-base font-semibold">Company</h6>
          <ul class="mt-4 space-y-4">
            <li
              v-for="(item, index) in company"
              :key="index"
              class="text-grey-600"
            >
              <nuxt-link
                class="text-lg font-semibold hover:text-primary"
                to="#"
              >
                {{ item }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="text-base font-semibold">Resources</h6>
          <ul class="mt-4 space-y-4">
            <li
              v-for="(item, index) in resources"
              :key="index"
              class="text-grey-600"
            >
              <nuxt-link
                class="text-lg font-semibold hover:text-primary"
                to="#"
              >
                {{ item }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="text-base font-semibold">Legal</h6>
          <ul class="mt-4 space-y-4">
            <li
              v-for="(item, index) in legal"
              :key="index"
              class="text-grey-600"
            >
              <nuxt-link
                class="text-lg font-semibold hover:text-primary"
                to="#"
              >
                {{ item }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="text-base font-semibold text-primary">Get the app</h6>
          <ul class="mt-4 space-y-4">
            <li v-for="(item, index) in badge" :key="index">
              <component :is="item.icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-12 bg-grey-50">
      <div class="container flex flex-wrap items-center justify-between gap-5">
        <p>&copy; {{ currentYear }} ClearLink. All rights reserved.</p>
        <ul class="flex flex-wrap items-center gap-6">
          <li v-for="(icon, index) in social" :key="index">
            <nuxt-link to="#" :title="icon.title">
              <component :is="icon.icon" class="hover:text-primary" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppStoreBadge from '@/assets/icons/app-store-badge.svg?component'
import GooglePlayBadge from '@/assets/icons/google-play-badge.svg?component'
import LinkedinIcon from '@/assets/icons/linkedIn.svg?component'
import TwitterIcon from '@/assets/icons/twitter.svg?component'
import FacebookIcon from '@/assets/icons/facebook.svg?component'
import GithubIcon from '@/assets/icons/github.svg?component'
import InstagramIcon from '@/assets/icons/instagram.svg?component'
import YoutubeIcon from '@/assets/icons/youtube.svg?component'

const products = ['Overview', 'Features', 'Solution', 'Tutorials', 'Pricing']
const company = ['About Us', 'Careers', 'Press', 'News', 'Contact']
const resources = ['Blog', 'Events', 'Help Center', 'Tutorials', 'Support']
const legal = ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Contact']
const badge = [
  {
    title: 'App store',
    icon: markRaw(AppStoreBadge),
  },
  {
    title: 'Google play',
    icon: markRaw(GooglePlayBadge),
  },
]
const social = [
  {
    title: 'LinkedIn',
    icon: markRaw(LinkedinIcon),
  },
  {
    title: 'Twitter',
    icon: markRaw(TwitterIcon),
  },
  {
    title: 'Facebook',
    icon: markRaw(FacebookIcon),
  },
  {
    title: 'Instagram',
    icon: markRaw(InstagramIcon),
  },
  {
    title: 'Github',
    icon: markRaw(GithubIcon),
  },
  {
    title: 'Youtube',
    icon: markRaw(YoutubeIcon),
  },
]

const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>
