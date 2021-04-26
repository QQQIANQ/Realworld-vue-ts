<template>
  <footer>
    <div class="container">
      <a href="/" class="logo-font">Univ-Community</a>
      <span class="attribution">
        An interactive learning project from
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AppFooter extends Vue {}
</script>