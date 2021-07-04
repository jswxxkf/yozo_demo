<template>
  <div class="moment-right">
    <div class="top clear-fix">
      <span class="fl">云服务动态</span>
      <span class="fr more"><a href="javascript:">查看更多&nbsp;&gt;</a></span>
    </div>
    <moment-right-item v-for="(item, index) in moments" :key="index">
      <div slot="title"><a href="#">{{ item.title }}</a></div>
      <div slot="desc">{{ item.remark }}</div>
      <div slot="date">{{ item.publish_time.split(" ")[0] }}</div>
    </moment-right-item>
  </div>
</template>

<script>
// sub cpn
import MomentRightItem from "./MomentRightItem";
// network request
import {getMoments} from "../../../../network/moment";

export default {
  name: "MomentRight",
  components: {MomentRightItem},
  data() {
    return {
      moments: null
    }
  },
  created() {
    getMoments().then(res => {
      this.moments = res.data;
    });
  }
}
</script>

<style scoped>
.moment-right {
  padding: 0 0.3rem 0 0.5rem;
  width: 70%;
  text-align: left;
}

.moment-right .top {
  margin-bottom: 0.146rem;
  font-size: 0.1875rem;
}

.more a {
  font-size: 0.146rem;
  transition: color .5s ease;
}

.more a:hover {
  color: #0081ff;
}
</style>