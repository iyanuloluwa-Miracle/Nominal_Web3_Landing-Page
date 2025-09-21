<template>
  <nav class="fixed top-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50 rounded-3xl">
    <div class="flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <NuxtLink to="/" class="flex items-center gap-1 no-underline group">
          <img src="../assets/images/nominal.svg" alt="Nominal Logo" class="w-7 h-7 rounded shadow group-hover:scale-110 transition-transform duration-200" />
          <span class="text-xl font-bold text-gray-900 tracking-tight">Nominal</span>
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden lg:flex gap-8 list-none m-0 p-0">
        <li><NuxtLink to="/docs" class="text-gray-700 no-underline font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105">Docs</NuxtLink></li>
        <li><NuxtLink to="/terms" class="text-gray-700 no-underline font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105">Terms</NuxtLink></li>
        <li><NuxtLink to="/privacy" class="text-gray-700 no-underline font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105">Privacy</NuxtLink></li>
        <li>
          <a 
            href="https://github.com/yourusername/nominal" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-gray-700 no-underline font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span class="hidden xl:inline">GitHub</span>
          </a>
        </li>
      </ul>

      <!-- Desktop Wallet Button -->
      <div class="hidden md:flex items-center">
        <button
          @click="connectWallet"
          :disabled="isConnecting"
          class="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2 border-2 border-transparent hover:border-white/20"
        >
          <svg v-if="!walletAddress && !isConnecting" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9 2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
          
          <div v-if="isConnecting" class="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
          
          <span v-if="walletAddress" class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            {{ formatAddress(walletAddress) }}
          </span>
          <span v-else-if="isConnecting">Connecting...</span>
          <span v-else>Connect Wallet</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        :class="{ 'bg-gray-200': isMobileMenuOpen }"
      >
        <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden border-t border-gray-200/50 bg-white/98 backdrop-blur-md rounded-b-3xl overflow-hidden"
      style="animation: slideDown 0.3s ease-out"
    >
      <div class="px-6 py-4 space-y-4">
        <!-- Mobile Navigation Links -->
        <div class="space-y-3">
          <NuxtLink 
            to="/docs" 
            @click="closeMobileMenu"
            class="block text-gray-700 no-underline font-medium py-3 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:scale-105 border border-transparent hover:border-blue-200/50"
          >
            📚 Docs
          </NuxtLink>
          
          <NuxtLink 
            to="/terms" 
            @click="closeMobileMenu"
            class="block text-gray-700 no-underline font-medium py-3 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:scale-105 border border-transparent hover:border-blue-200/50"
          >
            📄 Terms
          </NuxtLink>
          
          <NuxtLink 
            to="/privacy" 
            @click="closeMobileMenu"
            class="block text-gray-700 no-underline font-medium py-3 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:scale-105 border border-transparent hover:border-blue-200/50"
          >
            🔒 Privacy
          </NuxtLink>
          
          <a 
            href="https://github.com/yourusername/nominal" 
            target="_blank" 
            rel="noopener noreferrer"
            @click="closeMobileMenu" 
            class="block text-gray-700 no-underline font-medium py-3 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:scale-105 border border-transparent hover:border-blue-200/50 flex items-center gap-3"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        <!-- Mobile Wallet Button -->
        <div class="pt-4 border-t border-gray-200/50">
          <button
            @click="connectWallet"
            :disabled="isConnecting"
            class="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 border-2 border-transparent hover:border-white/20"
          >
            <svg v-if="!walletAddress && !isConnecting" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            
            <div v-if="isConnecting" class="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            
            <span v-if="walletAddress" class="flex items-center gap-2">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              {{ formatAddress(walletAddress) }}
            </span>
            <span v-else-if="isConnecting">Connecting...</span>
            <span v-else>🦊 Connect MetaMask</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  
  <!-- Spacer to prevent content from being hidden behind fixed navbar -->
  <div class="h-28"></div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const walletAddress = ref<string>('')
const isConnecting = ref<boolean>(false)
const isMobileMenuOpen = ref<boolean>(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const connectWallet = async () => {
  if (walletAddress.value) {
    // If already connected, show wallet info or disconnect
    return
  }

  if (!window.ethereum) {
    alert('MetaMask is not installed. Please install MetaMask to continue.')
    return
  }

  try {
    isConnecting.value = true
    
    // Request account access
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    
    if (accounts.length > 0) {
      walletAddress.value = accounts[0]
      closeMobileMenu() // Close mobile menu after connecting
      
      // Optional: Request to switch to a specific network (e.g., Ethereum mainnet)
      // await window.ethereum.request({
      //   method: 'wallet_switchEthereumChain',
      //   params: [{ chainId: '0x1' }] // Ethereum mainnet
      // })
    }
  } catch (error) {
    console.error('Error connecting to MetaMask:', error)
    if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === 4001) {
      alert('Please connect to MetaMask.')
    } else {
      alert('An error occurred while connecting to MetaMask.')
    }
  } finally {
    isConnecting.value = false
  }
}

const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

// Check if wallet is already connected on component mount
onMounted(async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts'
      })
      if (accounts.length > 0) {
        walletAddress.value = accounts[0]
      }
      
      // Listen for account changes
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          walletAddress.value = accounts[0]
        } else {
          walletAddress.value = ''
        }
      })
      
      // Listen for chain changes
      window.ethereum.on('chainChanged', () => {
        // Reload the page when chain changes for simplicity
        window.location.reload()
      })
    } catch (error) {
      console.error('Error checking wallet connection:', error)
    }
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    const nav = (event.target as Element | null)?.closest('nav')
    if (!nav && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  })
})

// Add TypeScript declaration for ethereum
declare global {
  interface Window {
    ethereum?: any
  }
}
</script>