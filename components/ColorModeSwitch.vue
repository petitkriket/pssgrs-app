<template>
  <CIconButton
      v-bind="buttonProps"
      mr="3"
      @click="toggleColorMode"
  />
</template>

<script lang="js">
export default {
  name: 'ColorModeSwitch',
  inject: ["$chakraColorMode", "$toggleColorMode"],
  computed: {
    buttonProps(){
      const isLightTheme = this.colorMode === 'light'
      return {
        icon: isLightTheme ? 'moon' : 'sun',
        ariaLabel: isLightTheme ? this.$t('switchToDarkMode') : this.$t('switchToLightMode'),
      }
    },
    colorMode() {
        return this.$chakraColorMode();
    },
    toggleColorMode() {
        return this.$toggleColorMode;
    },
  },
}
</script>
