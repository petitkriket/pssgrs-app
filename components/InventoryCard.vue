<template>
  <c-box maxW="sm" border-width="1px" rounded="lg" overflow="hidden">
    <c-image 
      h="300px"
      bg="gray.200"
      objectFit="cover"
      :src="artwork.images[0].url"
      :alt="artwork.images[0].url"
    />
    <c-box p="6">
      <c-box d="flex" align-items="baseline">
        <c-box
          color="gray.500"
          font-weight="semibold"
          letter-spacing="wide"
          font-size="xs"
          text-transform="uppercase"
          ml="2"
        >
          {{ formattedDetails.exchangeCount }}
        </c-box>
      </c-box>
      <c-box
        mt="1"
        font-weight="semibold"
        as="h4"
        line-height="tight"
        is-truncated
      >
        {{ formattedDetails.name }}
      </c-box>
      <c-box d="flex" mt="2" align-items="center">
        <c-box as="span" ml="2" color="gray.600" font-size="sm">
          {{ formattedDetails.createdAt }}
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
  export default {
    name: 'InventoryCard',
    props: {
      artwork: {
        type: Object,
        default: null,
      },
    },
    computed: {
      formattedDetails() {
        const name =  this.$t('inventoryCard.artworkName', {
          n: this.artwork.id
        });

        const createdAt =  this.$t('inventoryCard.releasedInYear', {
          n: this.$dayjs(this.artwork.createdAt).format('YYYY')
        });

        const exchangeCount =  this.$t('inventoryCard.exchangedNTimes', {
          n: this.artwork.loans.length
        });

        return {
          name,
          exchangeCount,
          createdAt,
        };
        }
      }
    };
</script>
