<template>
  <div>
    <section
      class="flex items-center justify-center pt-40 min-h-svh hero-pattern"
    >
      <div class="container">
        <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <div class="flex flex-col justify-center">
            <h1
              class="text-grey-800 font-semibold text-5xl md:text-[4rem] md:leading-[4.5rem] text-pretty"
            >
              Uniting the world, one video call at a time
            </h1>
            <p class="max-w-2xl mt-6 text-2xl">
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
            <div class="flex flex-wrap gap-5 mt-12">
              <nuxt-link to="#" class="btn-primary">
                Start your free trial
              </nuxt-link>
              <nuxt-link
                to="#"
                class="flex items-center text-lg font-semibold text-primary"
              >
                <AiBot class="mr-3" />
                Discover AI assistant
              </nuxt-link>
            </div>
            <div class="flex flex-wrap mt-12">
              <div>
                <img src="/images/avatar-group.png" alt="Avatar group" />
              </div>
              <div class="ml-2">
                <div class="flex items-center">
                  <StarsIcon class="mr-1" />
                  <p class="text-base text-grey-700">5.0</p>
                </div>
                <p class="text-base text-grey-600">from 3,000+ reviews</p>
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <img src="@/assets/images/video-art.png" alt="Video player art" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="container">
        <p class="text-xl text-center text-grey-600">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <ul
          class="flex flex-wrap items-center justify-center gap-8 mx-auto mt-12 xl:justify-between"
        >
          <li v-for="(client, index) in clients" :key="index">
            <img :src="`/images/${client.image}`" :alt="client.alt" />
          </li>
        </ul>
      </div>
    </section>

    <section class="py-24">
      <div class="container">
        <p class="text-lg font-semibold text-primary">
          The ClearLink Advantage
        </p>
        <h2 class="mt-3 text-5xl font-semibold text-grey-800">
          Why choose ClearLink?
        </h2>
        <p class="max-w-5xl mt-5 text-2xl">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
        <div class="grid grid-cols-1 gap-10 mt-20 xl:gap-2 xl:grid-cols-2">
          <ul class="grid grid-cols-1 gap-10 md:grid-cols-2">
            <li v-for="(feature, index) in features" :key="index">
              <div
                class="flex items-center justify-center border rounded-full size-12 border-grey-200 bg-grey-50"
              >
                <component :is="feature.icon" />
              </div>
              <h4 class="mt-5 text-2xl font-semibold text-grey-900">
                {{ feature.title }}
              </h4>
              <p class="mt-1 text-lg text-grey-600">
                {{ feature.description }}
              </p>
            </li>
          </ul>
          <div class="flex xl:justify-end">
            <div class="max-w-[34rem] relative">
              <ArrowDrawn class="absolute -top-[42%] left-16 hidden xl:block" />
              <img
                src="@/assets/images/image-grid.png"
                alt="Collage of photos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-grey-50">
      <div class="container">
        <div class="grid grid-cols-1 gap-10 lg:gap-5 lg:grid-cols-2">
          <div>
            <img src="/images/shopify.png" alt="Shopify" />
            <StarsIcon class="mt-12" />
            <p class="mt-12 text-4xl text-left text-grey-900">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </p>
            <div
              class="flex flex-wrap items-center justify-between gap-3 mt-12 text-left"
            >
              <div class="flex items-center">
                <img src="/images/avatar.png" alt="Avatar" />
                <div class="ml-4">
                  <h4 class="text-xl font-semibold text-grey-900">
                    Sarah Thompson
                  </h4>
                  <p class="text-lg text-grey-600">Project Manager, Shopify</p>
                </div>
              </div>
              <div class="flex items-center gap-8">
                <button class="btn-arrow">
                  <ArrowLeftIcon />
                </button>
                <button class="btn-arrow">
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/content.png" alt="Content" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="container">
        <p class="text-lg font-semibold text-primary">Support</p>
        <div class="grid grid-cols-1 gap-5 mt-3 lg:grid-cols-2">
          <div>
            <h2 class="text-5xl font-semibold text-grey-800">FAQs</h2>
            <p class="max-w-xl mt-5 text-2xl">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please
              <a class="underline underline-offset-[5px]" href="#">
                chat to our friendly team.
              </a>
            </p>
          </div>
          <div>
            <UiAccordion :items="faqs" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div class="pl-[10%] lg:pl-[20%]">
          <h2
            class="max-w-2xl text-3xl font-semibold md:text-5xl text-grey-900 text-pretty"
          >
            Ready to clear the path to<br />
            perfect communication?
          </h2>
          <ul class="mt-8 ml-4 space-y-5">
            <li
              v-for="(tip, index) in tips"
              :key="index"
              class="flex items-center text-2xl text-grey-600"
            >
              <CheckIcon class="mr-3" />
              {{ tip }}
            </li>
          </ul>
          <div class="flex flex-wrap gap-2 mt-10">
            <nuxt-link to="#" class="btn-secondary"> Talk to sales </nuxt-link>
            <nuxt-link to="#" class="btn-primary">
              Start your free trial
            </nuxt-link>
          </div>
        </div>
        <div>
          <img src="/images/mockup.png" alt="Mockup" class="w-full" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AiBot from '@/assets/icons/ai-bot.svg?component'
import StarsIcon from '@/assets/icons/stars.svg?component'
import VCIcon from '@/assets/icons/vc-recorder.svg?component'
import RecordingIcon from '@/assets/icons/recording.svg?component'
import CalendarIcon from '@/assets/icons/calendar.svg?component'
import LockIcon from '@/assets/icons/lock.svg?component'
import ArrowDrawn from '@/assets/icons/arrow-drawn.svg?component'
import CheckIcon from '@/assets/icons/check.svg?component'
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?component'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?component'

const carousel = ref(null)

const features = [
  {
    icon: markRaw(VCIcon),
    title: 'Crystal-clear HD video',
    description:
      'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.',
  },
  {
    icon: markRaw(RecordingIcon),
    title: 'Noise-canceling audio',
    description:
      'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.',
  },
  {
    icon: markRaw(CalendarIcon),
    title: 'Scheduling made easy',
    description:
      "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    icon: markRaw(LockIcon),
    title: 'Bank-grade security',
    description:
      'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.',
  },
]
const clients = [
  {
    image: 'shopify.png',
    alt: 'Shopify',
  },
  {
    image: 'coinbase.png',
    alt: 'Coinbase',
  },
  {
    image: 'dropbox.png',
    alt: 'Dropbox',
  },
  {
    image: 'intercom.png',
    alt: 'Intercom',
  },
  {
    image: 'marvel.png',
    alt: 'Marvel',
  },
  {
    image: 'automattic.png',
    alt: 'Automattic',
  },
]
const faqs = ref([
  {
    title: 'How many participants can join a ClearLink video conference?',
    description:
      'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
    open: true,
  },
  {
    title: 'Can I use ClearLink on multiple devices?',
    description:
      'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
    open: false,
  },
  {
    title: 'Is ClearLink compatible with other video conferencing platforms?',
    description:
      'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
    open: false,
  },
  {
    title: 'How does ClearLink ensure the security of my video conferences?',
    description:
      'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
    open: false,
  },
  {
    title: 'Do I need to download any software to use ClearLink?',
    description:
      'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
    open: false,
  },
  {
    title: 'What kind of customer support does ClearLink provide?',
    description:
      'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
    open: false,
  },
])
const tips = [
  '30 days free trial',
  'Cancel at any time',
  'Access to all features',
  'Personalized onboarding',
]
</script>
