<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span ref="badge" class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300 mb-4 opacity-0">
          The Problem
        </span>
        <h2 ref="title" class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 opacity-0 translate-y-4">
          Web3 Identity is Broken
        </h2>
        <p ref="subtitle" class="text-lg text-gray-600 dark:text-gray-300 opacity-0 translate-y-4">
          The current state of digital identity in Web3 is fragmented, complex, and anything but user-friendly.
        </p>
      </div>

      <!-- Problem Cards -->
      <div ref="cardsContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(card, idx) in problemCards"
          :key="card.title"
          ref="cards"
          class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 opacity-0 translate-y-8 transform"
          :style="{ transitionDelay: (idx * 0.1) + 's' }"
        >
          <div :class="card.iconBg + ' w-12 h-12 rounded-lg flex items-center justify-center mb-4'">
            <svg :class="card.iconColor + ' w-6 h-6'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-for="(p, i) in card.iconPaths" :key="i" v-bind="p" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ card.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ card.description }}</p>
          <div v-if="card.extra" class="mt-4" v-html="card.extra"></div>
        </div>
      </div>

      <!-- CTA -->
      <div ref="cta" class="mt-16 text-center opacity-0">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">There's a better way</h3>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          With Nominal, you get a simple, memorable username that works across all blockchains.
        </p>
        <NuxtLink 
          to="/register" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          Get Your Name
          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const badge = ref(null)
const title = ref(null)
const subtitle = ref(null)
const cardsContainer = ref(null)
const cards = ref([])
const cta = ref(null)

const problemCards = [
  {
    title: 'Complex Addresses',
    description: 'Cryptocurrency addresses are long, complex strings that are impossible to remember and prone to errors when shared.',
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400',
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' }
    ],
    extra: '<div class="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"><code class="text-xs font-mono text-gray-800 dark:text-gray-200 break-all">0x1a2b3c4d5e6f7890a1b2c3d4e5f6a7b8c9d0e1f</code></div>'
  },
  {
    title: 'Fragmented Identity',
    description: 'Different blockchains require different addresses, forcing users to manage multiple identities across various networks.',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' }
    ],
    extra: `<div class='mt-4 flex flex-wrap gap-2'>
      <span class='px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full'>Ethereum</span>
      <span class='px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full'>Solana</span>
      <span class='px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full'>Aptos</span>
      <span class='px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full'>Sui</span>
    </div>`
  },
  {
    title: 'Security Risks',
    description: 'Copy-pasting addresses leads to errors and phishing risks. One wrong character and your assets could be lost forever.',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
    ],
    extra: `<div class='mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30'>
      <p class='text-sm text-red-600 dark:text-red-400 font-medium'>Example of a common mistake:</p>
      <div class='flex items-center justify-between mt-1'>
        <span class='text-xs font-mono text-gray-700 dark:text-gray-300'>0x1a2b3c4d5e6f7890a1b2c3d4e5f6a7b8c9d0e1f</span>
        <span class='text-xs text-red-500'>❌</span>
      </div>
      <div class='flex items-center justify-between mt-1'>
        <span class='text-xs font-mono text-gray-700 dark:text-gray-300'>0x1a2b3c4d5e6f7890a1b2c3d4e5f6a7b8c9d0e1e</span>
        <span class='text-xs text-green-500'>✅</span>
      </div>
    </div>`
  }
]

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cardsContainer.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  tl.fromTo(
    badge.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  )
  .fromTo(
    title.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.3'
  )
  .fromTo(
    subtitle.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.3'
  )

  tl.fromTo(
    cards.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.4)',
    },
    '-=0.3'
  )

  tl.fromTo(
    cta.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.3'
  )

  cards.value.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })
})
</script>
