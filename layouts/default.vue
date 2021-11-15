<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider v-slot="{ colorMode }">
        <CBox font-family="body" as="main" v-bind="mainStyles[colorMode]">
          <CReset />
          <NavBar />
          <Nuxt />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>

export default {
  name: 'DefaultLayout',
  data() {
    return {
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
}
</script>
