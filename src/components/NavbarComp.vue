<script setup>

</script>
<template>
  <div class=" bg-gray-300  flex items-center justify-center gap-10 h-20">
    <router-link
      to="/"
      class="hover:text-blue-600 hover:border-b hover:border-b-blue-600 hover:border-t hover:border-t-transparent items-center flex justify-center py-2 px-4"
      active-class="text-blue-600 border-b-blue-600 border-b border-t-transparent border-t">
      Home Page
    </router-link>
   
    <router-link
      to="/Home1"
      class="hover:text-blue-600 hover:border-b hover:border-b-blue-600 hover:border-t hover:border-t-transparent items-center flex justify-center py-2 px-4"
      active-class="text-blue-600 border-b-blue-600 border-b border-t-transparent border-t">
      Dashboard
    </router-link>
    <router-link
      to="/Page1"
      class="hover:text-blue-600 hover:border-b hover:border-b-blue-600 hover:border-t hover:border-t-transparent items-center flex justify-center py-2 px-4"
      active-class="text-blue-600 border-b-blue-600 border-b border-t-transparent border-t">
       Profile
    </router-link>
  </div>
</template>
