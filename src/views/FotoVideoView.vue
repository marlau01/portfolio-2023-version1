
<template>
    <div class="logo">
        <RouterLink to="/">
        <img
          src="../assets/logo-transparent.png" />
        </RouterLink>
    </div>
    <div class="textbox">
        <h1>Mine Billeder og videoer</h1>
        <p class="videocv">Klik her for at se mit video cv:</p>
    </div>
    <div
  class="embed-responsive embed-responsive-21by9 relative w-full flex justify-center overflow-hidden"
  style="padding-top: 42.857143%">
  <iframe
    class="embed-responsive-item absolute bottom-0 left-0 mx-auto right-0 top-0 h-full w-3/4"
    src="https://www.youtube.com/embed/VhLtNM6Pz-U"
    allowfullscreen=""
    data-gtm-yt-inspected-2340190_699="true"
    id="240632615"></iframe>
</div>
    <div class="flex justify-center">
        <div class="relative w-3/4 my-3 flex"> <!-- container  w-3/4 mx-auto px-5 py-2 lg:px-32 lg:pt-24 -->
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/billede1.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/Landscape.jpg" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/Dear.jpg" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="../assets/swan.jpg" />
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

.videocv {
    padding: 0px 0px 30px 0px;
}
</style>