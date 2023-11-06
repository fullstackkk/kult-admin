<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
  <img alt="Vue logo" src="@/assets/images/logo.png" width="120" />
  <router-view />
  <div class="w-[100px] h-[100px] bg-black"></div>
</template>

<style lang="scss"></style>
