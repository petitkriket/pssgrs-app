<template>
  <CBox>
    <CMenu>
      <CMenuButton right-icon="chevron-down" variant="ghost" mr="16" font-weight="500">
        {{ $t('language') }}
      </CMenuButton>
      <CMenuList>
          <CMenuItem
            v-for="locale in availableLocales"
            :key="locale.code"
            as="nuxt-link"
            :to="switchLocalePath(locale.code)"
            >
            {{ locale.name }}
          </CMenuItem>
      </CMenuList>
    </CMenu>
  </CBox>
</template>

<script lang="js">
export default {
  name: 'LocaleMenu',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
}
</script>
