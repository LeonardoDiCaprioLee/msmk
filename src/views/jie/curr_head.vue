<template>
  <div class="currHead">
    <van-search @focus="$router.push('/search')" v-model="value" placeholder="搜搜要查询的课程" class="a"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value : "",
    };
  },
  methods: {},
  computed: {},
  filters: {},
  components: {},
  directives: {},
  mounted() {},
};
</script>

<style scoped>
.a{
  border-radius: 10px;
}
</style>