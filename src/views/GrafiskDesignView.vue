
<template>
    <div class="logo">
        <RouterLink to="/">
        <img
          src="../assets/logo-transparent.png" />
        </RouterLink>
    </div>

    <div class="textbox">
        <h1>Mine Grafiske designs</h1>
        <p>Lavet i Adobe Illustrator 2023</p>
    </div>
    <div class="box">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/girlymockup.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/aplaceto.jpg" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/Breakfastmockup.jpg" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/cupmockup.jpg" />
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.box {
    max-width: 100%;
}

.textbox {
    text-align: center;
    font-size: 230%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-top: 0px;
    color: black;
    }
.textbox p {
    text-align: center;
    font-size: 50%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: black;
}

.logo {
    width: 170px;
    height: 170px;
    padding-left: 25px;
}
</style>
