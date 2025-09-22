<template>
  <section class="relative py-24 bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 dark:from-red-950 dark:via-red-900 dark:to-orange-900 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      <!-- Dramatic Header -->
      <div class="text-center max-w-4xl mx-auto mb-20">
        <span ref="badge" class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-100 text-red-800 text-sm font-bold border-2 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700 mb-6 opacity-0 shadow-lg">
          ⚠️ Critical Issues
        </span>
        <h2 ref="title" class="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 opacity-0 translate-y-4 leading-tight">
          Web3 Identity is 
          <span class="text-red-600 dark:text-red-400 relative">
            Broken
            <svg class="absolute -bottom-2 left-0 w-full h-3 text-red-600/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,8 Q25,2 50,8 T100,8" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
          </span>
        </h2>
        <p ref="subtitle" class="text-xl md:text-2xl text-gray-700 dark:text-gray-200 opacity-0 translate-y-4 font-medium leading-relaxed">
          The current state of digital identity in Web3 is a <span class="text-red-600 font-bold">nightmare</span> for users everywhere.
        </p>
      </div>

      <!-- Pain Points Grid -->
      <div ref="cardsContainer" class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(card, idx) in problemCards"
          :key="card.title"
          ref="cards"
          class="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-red-100 dark:border-red-900/30 opacity-0 translate-y-8 transform overflow-hidden"
          :style="{ transitionDelay: (idx * 0.2) + 's' }"
        >
          <!-- Severity indicator -->
          <div class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" :class="card.severity">
            {{ card.severityText }}
          </div>
          
          <!-- Danger Pattern -->
          <div class="absolute -top-10 -right-10 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full text-red-500">
              <path d="M12 2L1 21h22L12 2zm0 3.83L19.31 19H4.69L12 5.83zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
            </svg>
          </div>

          <!-- Impact number -->
          <div class="absolute top-6 left-6 text-6xl font-black text-red-500/10 dark:text-red-400/10 group-hover:scale-110 transition-transform">
            {{ idx + 1 }}
          </div>

          <div class="relative z-10 mt-12">
            <div :class="card.iconBg + ' w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform'">
              <svg :class="card.iconColor + ' w-8 h-8'" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path v-for="(p, i) in card.iconPaths" :key="i" v-bind="p" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {{ card.title }}
            </h3>
            
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {{ card.description }}
            </p>

            <!-- Pain indicator -->
            <div class="flex items-center gap-2 mb-4">
              <span class="text-sm font-semibold text-gray-600 dark:text-gray-400">Pain Level:</span>
              <div class="flex gap-1">
                <div v-for="n in card.painLevel" :key="n" class="w-3 h-3 rounded-full bg-red-500"></div>
                <div v-for="n in (5 - card.painLevel)" :key="n + 10" class="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
            
            <div v-if="card.extra" class="mt-6" v-html="card.extra"></div>
          </div>
        </div>
      </div>

      <!-- Statistics Bar -->
      <div ref="stats" class="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 mb-16 text-white opacity-0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-4xl font-black mb-2">87%</div>
            <div class="text-red-100">of users make address mistakes</div>
          </div>
          <div>
            <div class="text-4xl font-black mb-2">$2.8B</div>
            <div class="text-red-100">lost to wrong addresses yearly</div>
          </div>
          <div>
            <div class="text-4xl font-black mb-2">73%</div>
            <div class="text-red-100">avoid Web3 due to complexity</div>
          </div>
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
const stats = ref(null)
const cta = ref(null)

const problemCards = [
  {
    title: 'Cryptic Addresses',
    description: 'Wallet addresses are impossibly long cryptographic strings that humans were never meant to remember or type. One tiny mistake and your money disappears forever.',
    iconBg: 'bg-gradient-to-br from-red-500 to-red-600',
    iconColor: 'text-white',
    severity: 'bg-red-500 text-white',
    severityText: 'CRITICAL',
    painLevel: 5,
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' }
    ],
    extra: `<div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
      <p class="text-sm font-mono text-red-800 dark:text-red-300 mb-2">Example nightmare:</p>
      <code class="text-xs font-mono text-red-700 dark:text-red-200 break-all bg-red-100 dark:bg-red-900/30 p-2 rounded block">
        0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
      </code>
      <p class="text-xs text-red-600 dark:text-red-400 mt-2">👆 Try memorizing that!</p>
    </div>`
  },
  {
    title: 'Identity Chaos',
    description: 'Every blockchain demands a different address. Users juggle dozens of incompatible identities, creating confusion and frustration at every turn.',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    iconColor: 'text-white',
    severity: 'bg-orange-500 text-white',
    severityText: 'HIGH',
    painLevel: 4,
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' }
    ],
    extra: `<div class="space-y-3">
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-600 dark:text-gray-300">Ethereum:</span>
        <code class="text-xs font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">0x1a2b...</code>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-600 dark:text-gray-300">Solana:</span>
        <code class="text-xs font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">9WzD...</code>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-600 dark:text-gray-300">Bitcoin:</span>
        <code class="text-xs font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">bc1q...</code>
      </div>
      <p class="text-xs text-orange-600 dark:text-orange-400 font-medium mt-2">😵 All different formats!</p>
    </div>`
  },
  {
    title: 'Security Nightmare',
    description: 'Copy-paste errors and phishing attacks are rampant. Users live in constant fear of losing their life savings to a single character mistake.',
    iconBg: 'bg-gradient-to-br from-purple-600 to-red-600',
    iconColor: 'text-white',
    severity: 'bg-red-600 text-white',
    severityText: 'EXTREME',
    painLevel: 5,
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
    ],
    extra: `<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
      <p class="text-sm text-red-800 dark:text-red-300 font-semibold mb-3">⚠️ Real Examples:</p>
      <div class="space-y-2">
        <div class="flex items-center gap-2 text-xs">
          <span class="w-2 h-2 bg-red-500 rounded-full"></span>
          <span class="text-red-700 dark:text-red-300">$28M lost to wrong address</span>
        </div>
        <div class="flex items-center gap-2 text-xs">
          <span class="w-2 h-2 bg-red-500 rounded-full"></span>
          <span class="text-red-700 dark:text-red-300">Phishing sites steal millions daily</span>
        </div>
        <div class="flex items-center gap-2 text-xs">
          <span class="w-2 h-2 bg-red-500 rounded-full"></span>
          <span class="text-red-700 dark:text-red-300">Users too scared to transact</span>
        </div>
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

  // Dramatic header entrance
  tl.fromTo(
    badge.value,
    { opacity: 0, y: 30, scale: 0.8 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
  )
  .fromTo(
    title.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
    '-=0.4'
  )
  .fromTo(
    subtitle.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.5'
  )

  // Staggered dramatic card entrance
  tl.fromTo(
    cards.value,
    { opacity: 0, y: 60, rotateX: 15 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.4)',
    },
    '-=0.3'
  )

  // Statistics bar entrance
  tl.fromTo(
    stats.value,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.2'
  )

  // Final CTA entrance
  tl.fromTo(
    cta.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.3'
  )

  // Enhanced hover effects for cards
  cards.value.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(239, 68, 68, 0.25)',
        duration: 0.4,
        ease: 'power2.out'
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        duration: 0.4,
        ease: 'power2.out'
      })
    })
  })
})
</script>
