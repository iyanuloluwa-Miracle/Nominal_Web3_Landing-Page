<template>
  <div>
    <Head>
      <title>Nominal - Your Web3 Identity</title>
      <meta name="description" content="Your universal Web3 username across all blockchains" />
      <link rel="icon" type="image/svg+xml" href="/nominal.svg" />
    </Head>
    
    <Navbar />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nominal - Your Web3 Identity',
  meta: [
    { name: 'description', content: 'Your universal Web3 username across all blockchains' },
    { name: 'theme-color', content: '#111827' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/nominal.svg' }
  ]
})
</script>