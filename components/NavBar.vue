<template>
  <CBox
    v-bind="mainStyles[colorMode]"
    as="nav"
    h="60px"
    px="4"
    d="flex"
    align-items="center"
    justify-content="space-between"
  >
  <CFlex>
    <CLink as="nuxt-link" :to="localePath('/')" font-weight="bold" font-size="1.2rem" px="4">
      {{ $t('thePassengers') }}
    </CLink>
  </CFlex>

  <CFlex align-items="center">
    <ColorModeSwitch />

    <LocaleMenu />

    <CLink as="nuxt-link" :to="localePath('/inventory')" px="4">
      {{ $t('artworkList') }}
    </CLink>

    <CLink as="nuxt-link" :to="localePath('/about')" px="4">
      {{ $t('about') }}
    </CLink>

    <CLink as="nuxt-link" :to="localePath('/login')" px="4">
      {{ $t('login') }}
    </CLink>

    <CButton as="nuxt-link" :to="localePath('/participate')" variant-color="yellow">
      {{ $t('participate') }}
    </CButton>
  </CFlex>

  </CBox>
</template>

<script lang="js">
export default {
    name: "NavBar",
    inject: ["$chakraColorMode", "$toggleColorMode"],
    data() {
        return {
            mainStyles: {
                dark: {
                    bg: "gray.700",
                    color: "whiteAlpha.900"
                },
                light: {
                    bg: "white",
                    color: "gray.900"
                }
            }
        };
    },
    computed: {
        colorMode() {
            return this.$chakraColorMode();
        },
    }
}
</script>
