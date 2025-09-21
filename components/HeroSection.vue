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

      <!-- Demo Section -->
      <div class="w-full px-2">
        <div class="max-w-lg mx-auto bg-gray-800 border border-gray-700 rounded-lg p-4">
          <p class="text-gray-400 text-xs sm:text-sm mb-3 font-mono">Example transformation:</p>
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs sm:text-sm">
              <span class="text-gray-500">Before:</span>
              <span class="font-mono text-gray-300 bg-gray-900 px-2 py-1 rounded text-xs">0xAbCd1234...89Ef</span>
            </div>
            <div class="border-t border-gray-700"></div>
            <div class="flex items-center justify-between text-xs sm:text-sm">
              <span class="text-gray-500">After:</span>
              <span class="font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded text-xs">alice</span>
            </div>
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

<style scoped>
/* Removed all flashy animations and gradients */
</style>