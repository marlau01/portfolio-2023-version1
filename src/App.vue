<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <RouterView></RouterView>
  

<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full container p-4 sm:p-6">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <ul class="text-gray-600 dark:text-gray-400">
                      <li class="mb-4">
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-black sm:text-center dark:text-black">© 2023 MarieWiumLauridsen. All Rights Reserved.
          </span>
          <a href="https://www.linkedin.com/in/marie-wium-lauridsen">
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </div>
          </a>
      </div>
    </div>
</footer>
 
</template>



<style scoped>
.container-area {
 /*  background-color: blue; */
  height: 100vh ;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.item1 {
  background-image: url('./assets/logo forside.png');
  position: relative;
  color: white;
/*   background-color: red; */
  align-items: flex-end;
  display: flex;
  height: 100vh;
  
  background-repeat: no-repeat;
  display:flex;

   background-size: cover;
}


.sidenav {
  position: relative;
  z-index:10002;
  margin: 0px 0 0 40px;
  padding: 0 0 100px 0;
   font-size: large;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

.sidenav h4 {
  padding: 0 0 px 0px; 
  font-size: 40px;
  color: black;
}

.sidenav h1 {
  padding: 0 0 60px 0px;
  font-size:x-large;
  color: black;
}

.boks1 {
  background-color: white;
  height: 200px;
}

.boks1 h2 {
  font-size: xx-large;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  padding-top: 40px;
  color: black;
}

.boks1 p {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  padding-top: 10px;
  color: black;
}

.cardbox {
  flex-direction: row;
}

.name {
  color: rgb(70, 70, 70);
}

</style>
