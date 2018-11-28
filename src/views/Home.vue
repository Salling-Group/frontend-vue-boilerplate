<template>
  <div>
    <h1>Frontend vue boilerplate</h1>
    <p>This is the vue js frontend boilerplate that
    we use for new projects.</p>
    <p>From this boilerplate you get the following</p>
    <ul>
      <li>Simple file structure</li>
      <li>Bootstrap</li>
      <li>Material icons</li>
      <li>Prendering</li>
      <li>Example unit tests</li>
      <li>Linting rules</li>
    </ul>
  </div>
</template>

<script>
import SgIcon from '@/components/SgIcon.vue';

export default {
  name: 'home',
  components: {
    SgIcon,
  },
};
</script>
