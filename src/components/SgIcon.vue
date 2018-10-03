<template>
  <span :class="prefix">{{type}}</span>
</template>

<script>
export default {
  name: 'SgIcon',
  props: {
    type: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      default: 'material-icons',
    },
  },
};
</script>
