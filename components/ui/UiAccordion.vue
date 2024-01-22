<template>
  <div
    class="p-8 cursor-pointer"
    :class="[
      item.open
        ? 'rounded-2xl bg-grey-50 border border-grey-200 open'
        : 'border-b border-grey-200 last:border-none',
    ]"
    v-for="(item, index) in items"
    :key="index"
    @click="toggleAccordion(index)"
  >
    <div class="flex items-center justify-between">
      <h4
        class="text-xl font-semibold transition-all duration-200 ease-linear title text-grey-900"
      >
        {{ item.title }}
      </h4>
      <div class="ml-3">
        <MinusCircleIcon v-if="item.open" />
        <PlusCircleIcon v-else />
      </div>
    </div>
    <p
      class="overflow-y-hidden text-lg transition duration-200 ease-out opacity-0 content max-h-0"
    >
      {{ item.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItems } from '@/types'
import MinusCircleIcon from '@/assets/icons/minus-circle.svg?component'
import PlusCircleIcon from '@/assets/icons/plus-circle.svg?component'

const props = defineProps<{
  items: AccordionItems[]
}>()

const { items } = toRefs(props)

function toggleAccordion(index: number) {
  items.value = items.value.map((faq, i) => {
    if (index === i) {
      faq.open = !faq.open
    } else {
      faq.open = false
    }

    return faq
  })
}
</script>
