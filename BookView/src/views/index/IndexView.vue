<template>
  <div class="common-layout">
    <!--顶部-->
    <HeaderComponent></HeaderComponent>
    <el-container>
      <el-container>
        <!--侧边栏-->
        <AsideComponent></AsideComponent>
        <!--正文-->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!--底部-->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/common/FooterComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'
import AsideComponent from '@/components/common/AsideComponent.vue'
</script>
