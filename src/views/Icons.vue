<template>
  <div>
    <h1>Icons</h1>
    <p>
      We have added an example component that makes it easy
      to use icons across the entire project.
    </p>
    <p>
      The icon pack we included is material icons.
      If you include
      <code>SgIcon</code>
      component in another component,
      then you wil be able to use it like this
    </p>
    <pre class="pre-scrollable">
      <code>&lt;sg-icon type="person"&gt;&lt;/sg-icon&gt;</code>
    </pre>

    <p>This will give you the material user icon person
      <sg-icon type="person"></sg-icon>
    </p>
    <p>
      The
      <code>Sg</code>
      prefix in the component name is short for Salling group.
    </p>
    <p>
      We use this prefix when adhering to the vue style-guide rule about
      <a :href="vueDocs" target="_blank">
        Base component names
      </a>
    </p>
  </div>
</template>

<script>
import SgIcon from '@/components/SgIcon.vue';

export default {
  name: 'icons',
  components: {
    SgIcon,
  },
  data() {
    return {
      vueDocs: 'https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended',
    };
  },
};
</script>
