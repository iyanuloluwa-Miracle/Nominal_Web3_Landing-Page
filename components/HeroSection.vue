<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-8 sm:py-12 font-mono">
    <!-- Simple Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
      <!-- Minimal Grid Pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23374151\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
    </div>

    <!-- Content -->
  <div class="relative z-10 text-center max-w-6xl mx-auto w-full">
      <!-- Simple Badge -->
      <div class="mb-8">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300">
          <div class="w-2 h-2 bg-green-400 rounded-full"></div>
          <span class="text-sm font-medium">Cross-chain Identity</span>
        </span>
      </div>

      <!-- Main Heading -->
      <div class="mb-8">
  <h1 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 font-mono break-words">
          Your universal
          <br>
          <span class="text-blue-400">
            Web3 username
          </span>
        </h1>
      </div>

      <!-- Subheading -->
      <div class="mb-12">
  <p class="text-base sm:text-lg md:text-2xl text-gray-400 mb-6 max-w-4xl mx-auto leading-relaxed px-2">
          Replace complex wallet addresses with simple, memorable names. 
          <span class="text-white font-medium">One identity across all blockchains</span> – 
          Ethereum, Solana, Aptos, and Sui.
        </p>
        
        <!-- Value Props -->
  <div class="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
          <div class="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 border border-gray-700">
            <span class="text-green-400">✓</span>
            <span>$20 one-time payment</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 border border-gray-700">
            <span class="text-green-400">✓</span>
            <span>Forever ownership</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 border border-gray-700">
            <span class="text-green-400">✓</span>
            <span>No expiry dates</span>
          </div>
        </div>
      </div>

      <!-- Network Icons -->
  <div class="mb-12">
        <p class="text-gray-500 text-sm uppercase tracking-wider font-medium mb-6">Supported Networks</p>
  <div class="flex justify-center items-center gap-3 sm:gap-6 flex-wrap">
          <!-- Ethereum/EVM -->
          <div class="group cursor-pointer">
            <div class="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-blue-500 transition-colors">
              <svg class="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
              </svg>
            </div>
            <span class="block text-xs text-gray-500 mt-2 font-mono">ETH</span>
          </div>

          <!-- Solana -->
          <div class="group cursor-pointer">
            <div class="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-purple-500 transition-colors">
              <svg class="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm8.177 16.621L12 21.621l-8.177-5v-9.242L12 2.379l8.177 5v9.242z"/>
              </svg>
            </div>
            <span class="block text-xs text-gray-500 mt-2 font-mono">SOL</span>
          </div>

          <!-- Sui -->
          <div class="group cursor-pointer">
            <div class="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-cyan-500 transition-colors">
              <svg class="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span class="block text-xs text-gray-500 mt-2 font-mono">SUI</span>
          </div>

          <!-- Aptos -->
          <div class="group cursor-pointer">
            <div class="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-green-500 transition-colors">
              <svg class="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <span class="block text-xs text-gray-500 mt-2 font-mono">APT</span>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
  <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 w-full px-2">
        <NuxtLink 
          to="/register" 
          class="w-full sm:w-auto px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 min-w-[140px] sm:min-w-[180px] justify-center"
        >
          <span>Get Your Name</span>
          <span>→</span>
        </NuxtLink>
        
        <NuxtLink 
          to="/docs" 
          class="w-full sm:w-auto px-4 sm:px-6 py-3 bg-gray-800 border border-gray-700 hover:border-gray-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2 min-w-[140px] sm:min-w-[180px] justify-center"
        >
          <span>Read Docs</span>
        </NuxtLink>
      </div>

      <!-- Enhanced Demo Section -->
      <div class="w-full px-2 mt-8">
        <div class="max-w-2xl mx-auto bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4">See it in action</h3>
            <p class="text-gray-400 text-sm mb-6">Watch how a complex wallet address transforms into a simple, memorable name:</p>
            
            <div class="space-y-6">
              <!-- Input Section -->
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-400">Enter a name to check availability:</label>
                <div class="flex gap-2">
                  <input 
                    type="text" 
                    v-model="demoName"
                    placeholder="yourname" 
                    class="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    @input="updateDemoAddress"
                  >
                  <span class="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-mono text-sm">.nominal</span>
                </div>
              </div>
              
              <!-- Transformation Animation -->
              <div class="relative h-32 bg-gray-900/50 rounded-xl p-4 overflow-hidden">
                <!-- Before -->
                <div class="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ease-in-out" 
                     :class="{ 'opacity-0 translate-y-4': showTransformed, 'opacity-100': !showTransformed }">
                  <div class="text-center">
                    <p class="text-gray-400 text-sm mb-2">Your current address:</p>
                    <div class="font-mono text-blue-300 bg-gray-800 px-4 py-2 rounded-lg inline-block">
                      {{ demoAddress }}
                    </div>
                  </div>
                </div>
                
                <!-- After -->
                <div class="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ease-in-out" 
                     :class="{ 'opacity-100': showTransformed, 'opacity-0 -translate-y-4': !showTransformed }">
                  <div class="text-center">
                    <p class="text-gray-400 text-sm mb-2">Your Nominal ID:</p>
                    <div class="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-400 px-6 py-3 rounded-lg inline-flex items-center">
                      <span>{{ demoName || 'yourname' }}</span>
                      <span class="text-blue-200 ml-1">.nominal</span>
                      <svg class="w-5 h-5 ml-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <!-- Animated Background -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-900/10 opacity-0 transition-opacity duration-1000" 
                     :class="{ 'opacity-100': showTransformed }">
                </div>
              </div>
              
              <!-- Features Grid -->
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div class="bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                  <div class="text-blue-400 mb-1">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p class="text-xs font-medium text-white">One-time payment</p>
                  <p class="text-xs text-gray-400">No renewals</p>
                </div>
                <div class="bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                  <div class="text-blue-400 mb-1">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p class="text-xs font-medium text-white">Lifetime ownership</p>
                  <p class="text-xs text-gray-400">No expiration</p>
                </div>
                <div class="bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                  <div class="text-blue-400 mb-1">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <p class="text-xs font-medium text-white">Lightning fast</p>
                  <p class="text-xs text-gray-400">Instant resolution</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-900/50 p-4 border-t border-gray-800">
            <button 
              @click="toggleTransformation"
              class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>{{ showTransformed ? 'Reset Demo' : 'See Transformation' }}</span>
              <svg v-if="!showTransformed" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Indicator -->
    <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      demoName: '',
      showTransformed: false,
      demoAddress: '0x1a2b3c4d5e6f7890...',
      isAvailable: true
    }
  },
  methods: {
    toggleTransformation() {
      if (this.demoName) {
        this.showTransformed = !this.showTransformed;
        
        // Auto-reset after 5 seconds if showing transformed state
        if (this.showTransformed) {
          setTimeout(() => {
            this.showTransformed = false;
          }, 5000);
        }
      } else {
        // Show error or prompt to enter a name
        this.demoName = 'yourname';
        this.showTransformed = true;
        setTimeout(() => {
          this.showTransformed = false;
          this.demoName = '';
        }, 3000);
      }
    },
    updateDemoAddress() {
      // This could be enhanced with actual address generation logic
      this.demoAddress = '0x1a2b3c4d5e6f7890' + Math.random().toString(16).substr(2, 6) + '...';
    }
  },
  watch: {
    demoName(newVal) {
      if (newVal) {
        // Simple validation - could be enhanced
        this.isAvailable = newVal.length >= 3;
      } else {
        this.isAvailable = true;
      }
    }
  }
}
</script>

<style scoped>
/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Glow effect on hover */
.hover-glow:hover {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
}

/* Subtle pulse animation */
@keyframes subtlePulse {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 1; }
}

.animate-subtle-pulse {
  animation: subtlePulse 3s ease-in-out infinite;
}
</style>