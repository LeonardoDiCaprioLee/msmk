<template>
  <div class="Detailspage">
    <!-- 首页详情页 -->
    <div class="blue"></div>
    <!-- 等待开发 -->
  </div>
</template>

<script>
import { indexdettails } from "../../utils/api/index.js";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: ""
    };
  },
  mounted() {
    this.id = this.$route.query.id.teacher_id;
    console.log(this.$route);
    // indexdettails(this.id).then(res=>{
    //   console.log(res)
    // })
  },
  components: {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
