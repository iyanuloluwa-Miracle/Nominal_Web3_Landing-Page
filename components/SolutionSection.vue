<template>
  <section class="py-20 bg-white dark:bg-gray-950 overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Dramatic Section Header -->
      <div class="text-center max-w-4xl mx-auto mb-20">
        <!-- Success badge with positive branding -->
        <span ref="badge" class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 text-sm font-bold dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-300 mb-6 shadow-lg border border-emerald-200 dark:border-emerald-800">
          <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          THE BREAKTHROUGH SOLUTION
        </span>

        <!-- Main title with dramatic sizing -->
        <h2 ref="title" class="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 mb-8 leading-tight tracking-tight">
          One Name.<br>
          <span class="text-gray-900 dark:text-white">All Blockchains.</span>
        </h2>

        <!-- Compelling subtitle -->
        <p ref="subtitle" class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Nominal eliminates Web3 complexity with <span class="font-bold text-emerald-600 dark:text-emerald-400">universal usernames</span> that work seamlessly across every blockchain.
        </p>

        <!-- Success metrics bar -->
        <div ref="successStats" class="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800 shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-black text-emerald-600 dark:text-emerald-400">99.9%</div>
              <div class="text-sm font-semibold text-gray-600 dark:text-gray-400">Error Reduction</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-black text-blue-600 dark:text-blue-400">10x</div>
              <div class="text-sm font-semibold text-gray-600 dark:text-gray-400">Faster Transactions</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-black text-purple-600 dark:text-purple-400">Universal</div>
              <div class="text-sm font-semibold text-gray-600 dark:text-gray-400">Cross-Chain Support</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Solution Cards -->
      <div ref="cardsContainer" class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="card in solutionCards"
          :key="card.title"
          ref="cards"
          class="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 overflow-hidden"
        >
          <!-- Tier badge -->
          <div class="absolute top-6 right-6">
            <div :class="card.tierColor + ' text-white text-xs font-black px-3 py-1 rounded-full shadow-lg'">
              {{ card.tier }}
            </div>
          </div>

          <!-- Icon with enhanced styling -->
          <div :class="card.iconBg + ' w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-opacity-20 border-gray-300 dark:border-gray-600'">
            <svg :class="card.iconColor + ' w-8 h-8'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-for="(p, i) in card.iconPaths" :key="i" v-bind="p" />
            </svg>
          </div>

          <!-- Impact badge -->
          <div class="mb-4">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-xs font-bold dark:from-gray-800 dark:to-gray-700 dark:text-gray-200">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              {{ card.impact }}
            </span>
          </div>

          <!-- Title and description -->
          <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {{ card.title }}
          </h3>
          
          <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {{ card.description }}
          </p>

          <!-- Enhanced benefits list -->
          <div class="mb-6 space-y-3">
            <div v-for="(benefit, i) in card.benefits" :key="i" class="flex items-start">
              <div class="mr-3 mt-1">
                <div v-if="benefit.highlight" class="w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div v-else class="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span :class="benefit.highlight ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-700 dark:text-gray-300'">
                {{ benefit.text }}
              </span>
            </div>
          </div>

          <!-- Extra content -->
          <div v-if="card.extra" class="mt-6" v-html="card.extra"></div>

          <!-- Hover gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
        </div>
      </div>

      <!-- Dramatic CTA Section -->
      <div ref="cta" class="relative mt-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl">
        <!-- Background pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
          <div class="absolute top-0 left-0 w-full h-full">
            <div class="grid grid-cols-12 gap-4 h-full">
              <div v-for="n in 12" :key="n" class="bg-white/5 rounded-lg animate-pulse" :style="{ animationDelay: (n * 0.1) + 's' }"></div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="relative z-10">
          <!-- Urgency badge -->
          <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6 border border-white/30">
            <div class="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            LIMITED BETA ACCESS
          </div>

          <h3 class="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to revolutionize your
            <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Web3 identity?</span>
          </h3>
          
          <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the exclusive beta and be among the first to experience the future of blockchain identity. 
            <span class="font-bold text-white">No more address anxiety. No more lost funds.</span>
          </p>

          <!-- Stats showcase -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div class="text-2xl font-black text-white">10,000+</div>
              <div class="text-sm text-blue-200">Beta Waitlist</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div class="text-2xl font-black text-white">50+</div>
              <div class="text-sm text-blue-200">Supported Chains</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div class="text-2xl font-black text-white">99.9%</div>
              <div class="text-sm text-blue-200">Error Prevention</div>
            </div>
          </div>

          <!-- Action buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/register" 
              class="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-lg font-black rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Early Access
              <svg class="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
            <NuxtLink 
              to="/demo" 
              class="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white text-lg font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Watch Demo
              <svg class="ml-2 w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-4-8V3"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Trust indicators -->
          <div class="mt-8 text-center">
            <p class="text-blue-200 text-sm mb-3">Trusted by Web3 leaders</p>
            <div class="flex justify-center items-center gap-8 opacity-60">
              <div class="text-white font-bold">MetaMask</div>
              <div class="text-white font-bold">Trust Wallet</div>
              <div class="text-white font-bold">WalletConnect</div>
              <div class="text-white font-bold">Coinbase</div>
            </div>
          </div>
        </div>
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
const successStats = ref(null)
const cardsContainer = ref(null)
const cards = ref([])
const cta = ref(null)

const solutionCards = [
  {
    title: 'Universal Username System',
    description: 'Transform your Web3 experience with one memorable name that eliminates complex addresses forever.',
    iconBg: 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    tier: 'REVOLUTIONARY',
    tierColor: 'bg-blue-500',
    impact: 'GAME CHANGER',
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
    ],
    benefits: [
      { text: 'Works across ALL blockchains', highlight: true },
      { text: '99.9% error elimination', highlight: true },
      { text: 'Human-readable identity', highlight: false },
      { text: 'Zero learning curve', highlight: false }
    ],
    extra: '<div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"><div class="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">REAL IMPACT</div><div class="text-sm text-blue-700 dark:text-blue-300">From: 0x742d35Cc6634C0532925a3b8D404fD8cb9F... <br>To: <span class="font-bold">alice.nom</span></div></div>'
  },
  {
    title: 'Military-Grade Security',
    description: 'Your identity remains completely under your control with unbreakable decentralized security.',
    iconBg: 'bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    tier: 'FORTRESS',
    tierColor: 'bg-emerald-500',
    impact: 'UNBREAKABLE',
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
    ],
    benefits: [
      { text: '100% on-chain verification', highlight: true },
      { text: 'Zero custody risks', highlight: true },
      { text: 'Cryptographic proof of ownership', highlight: false },
      { text: 'Immutable identity records', highlight: false }
    ],
    extra: '<div class="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800"><div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">SECURITY GUARANTEE</div><div class="text-sm text-emerald-700 dark:text-emerald-300">No servers to hack. No passwords to steal. <br><span class="font-bold">Your keys = Your identity</span></div></div>'
  },
  {
    title: 'Universal Integration',
    description: 'Seamlessly connects with every wallet, dApp, and blockchain protocol in existence.',
    iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
    tier: 'UNIVERSAL',
    tierColor: 'bg-purple-500',
    impact: 'LIMITLESS',
    iconPaths: [
      { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' }
    ],
    benefits: [
      { text: 'Works with ANY wallet', highlight: true },
      { text: 'Instant dApp compatibility', highlight: true },
      { text: 'Future-proof architecture', highlight: false },
      { text: 'Developer-friendly APIs', highlight: false }
    ],
    extra: '<div class="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800"><div class="text-xs font-bold text-purple-600 dark:text-purple-400 mb-2">ECOSYSTEM SUPPORT</div><div class="text-sm text-purple-700 dark:text-purple-300">Ethereum • Polygon • BSC • Arbitrum • Optimism <br><span class="font-bold">+ 50+ more networks</span></div></div>'
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

  // Dramatic header entrance sequence
  tl.fromTo(
    badge.value,
    { opacity: 0, y: 30, scale: 0.8, rotateX: 15 },
    { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.8, ease: 'back.out(1.7)' }
  )
  .fromTo(
    title.value,
    { opacity: 0, y: 50, rotateY: -10 },
    { opacity: 1, y: 0, rotateY: 0, duration: 1.2, ease: 'power3.out' },
    '-=0.4'
  )
  .fromTo(
    subtitle.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.6'
  )
  .fromTo(
    successStats.value,
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.4)' },
    '-=0.4'
  )

  // Staggered dramatic card entrance with 3D effects
  tl.fromTo(
    cards.value,
    { 
      opacity: 0, 
      y: 80, 
      rotateX: 15,
      rotateY: 10,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.4)',
    },
    '-=0.4'
  )

  // CTA entrance with dramatic scale effect
  tl.fromTo(
    cta.value,
    { 
      opacity: 0, 
      y: 60, 
      scale: 0.9,
      rotateX: 10
    },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      duration: 1, 
      ease: 'back.out(1.4)' 
    },
    '-=0.3'
  )

  // Enhanced hover effects for cards with 3D transforms
  cards.value.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -12,
        scale: 1.03,
        rotateX: -5,
        rotateY: 2,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        duration: 0.4,
        ease: 'power2.out'
      })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        duration: 0.4,
        ease: 'power2.out'
      })
    })
  })

  // Micro-animations for success stats
  if (successStats.value) {
    const statElements = successStats.value.querySelectorAll('.text-3xl')
    statElements.forEach((stat, index) => {
      gsap.fromTo(stat, 
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          delay: 0.8 + (index * 0.1),
          ease: 'back.out(1.4)'
        }
      )
    })
  }
})
</script>
