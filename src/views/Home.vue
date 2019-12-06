<template>
  <div class="home">
    <header><span>></span>多加网<span></span></header>
    <nav></nav>
<van-swipe :autoplay="2000" indicator-color="white">
  <van-swipe-item><img src="https://dummyimage.com/373x200" alt=""></van-swipe-item>
  <van-swipe-item><img src="https://dummyimage.com/373x200" alt=""></van-swipe-item>
  <van-swipe-item><img src="https://dummyimage.com/373x200" alt=""></van-swipe-item>
  <van-swipe-item><img src="https://dummyimage.com/373x200" alt=""></van-swipe-item>
</van-swipe>
<div class="list">
  <dl>
    <dt><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xuexiao"></use>
</svg></dt>
    <dd>成绩数据</dd>
  </dl>
  <dl>
    <dt><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xuexiao"></use>
</svg></dt>
    <dd>成绩数据</dd>
  </dl>
  <dl>
    <dt><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xuexiao"></use>
</svg></dt>
    <dd>成绩数据</dd>
  </dl>
  <dl>
    <dt><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xuexiao"></use>
</svg></dt>
    <dd>成绩数据</dd>
  </dl>

</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
  name: 'home',
  components: {
    
  }
}
</script>
