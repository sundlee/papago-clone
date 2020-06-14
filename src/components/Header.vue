<template>
  <div class="header">
    <div class="header-logo"></div>
    <div class="header-title">papago (clone)</div>
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="scss">
$image-path: "../assets/images/";
$font-family-sans-serif: 'Noto Sans KR', 'Noto Sans TC', 'Noto Sans JP', sans-serif;

.header {
    font-family: $font-family-sans-serif;
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .header-logo {
        background-image: url($image-path + "parrot.svg");
        background-position: 0 6px;
        background-repeat: no-repeat;
        background-size: contain;
        width: 50px;
        height: 50px;
        display: inline-block;
        margin-bottom: 10px;
    }
    .header-title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-left: 20px;
      margin-top: 7px;
}
}
</style>
