<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4">
        ⚡️ Landing Page
      </CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CBox mb="3">
          <CButton
            left-icon="info"
            variant-color="blue"
            @click="showToast"
          >
            Show Toast
          </CButton>
        </CBox>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
export default {
  name: 'Index',
  methods: {
    showToast() {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>
