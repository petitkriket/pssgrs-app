<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" :mb="8">
        ⚡️ {{ $t('inventory') }}
      </CHeading>

    <CSimpleGrid 
      :spacing="16"
      :columns="[1, null, 4]" 
      :px="8"
      >
      <InventoryCard 
        v-for="artwork in artworks" 
        :key="artwork.id"
        :artwork="artwork"
        />
    </CSimpleGrid>
    </CBox>
  </div>
</template>

<script lang="js">
import { mapState } from 'vuex';

export default {
  name: 'Inventory',
  async fetch({ store }) {
    await store.dispatch('artwork/getArtworks');
  },
  computed: {
    ...mapState({
      artworks: (state) => {
        return state.artwork.artworks
      }
    })
  }
}
</script>
