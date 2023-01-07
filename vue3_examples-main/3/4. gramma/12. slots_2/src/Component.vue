<template>
  <div class="container">
    <header>
      <slot name="header"><h1>default2</h1></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="contents"></slot>
    </footer>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script setup></script>
