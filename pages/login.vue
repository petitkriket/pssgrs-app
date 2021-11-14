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
        ⚡️ {{ $t('login') }}

      </CHeading>
    </CBox>
  </div>
</template>

<script lang="js">
export default {
  name: 'Login',
}
</script>
