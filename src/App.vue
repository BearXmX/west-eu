<template>
  <div class="ppt-container">
    <!-- 左侧侧边栏 -->
    <div class="ppt-left" :class="{ hideLeft: isSmallScreen }">
      <div class="ppt-left-header">
        <h4>欧洲西部地理课件</h4>
        <p class="text">左侧选择页面，右侧播放内容</p>
      </div>
      <div class="ppt-left-thumb">
        <div
          v-for="item in pptPages"
          :key="item.key"
          class="ppt-thumb-item"
          :class="{ 'ppt-thumb-item-active': currentKey === item.key }"
          @click="currentKey = item.key"
        >
          <div class="ppt-thumb-item-left">
            <span class="index">{{ item.index }}</span>
          </div>
          <div class="ppt-thumb-item-right">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
      <div class="ppt-left-footer">
        <div class="page-info">第 {{ getIndex + 1 }} 页 / 共 {{ pptPages.length }} 页</div>
      </div>
    </div>

    <!-- 右侧主内容区 -->
    <div class="ppt-right">
      <div class="ppt-progress">
        <div :style="{ width: `${((getIndex + 1) / pptPages.length) * 100}%` }"></div>
      </div>
      <div class="ppt-content animate__animated animate__fadeIn" :key="currentKey">
        <component :is="components[currentKey as keyof typeof components]" :current="current" />
      </div>

      <!-- 小屏底部控制栏 -->
      <div class="mobile-control" v-if="isSmallScreen">
        <span class="icon-thumb" @click="showThumbPopup = !showThumbPopup">📑</span>
        <span class="arrow left" @click="prevPage">←</span>
        <span class="page-num">{{ getIndex + 1 }}</span>
        <span class="arrow right" @click="nextPage">→</span>
      </div>

      <!-- 横向缩略弹窗 -->
      <div class="thumb-popup" v-if="isSmallScreen && showThumbPopup">
        <div class="thumb-scroll">
          <div
            v-for="item in pptPages"
            :key="item.key"
            class="mini-thumb"
            :class="{ active: currentKey === item.key }"
            @click="
              () => {
                currentKey = item.key
                showThumbPopup = false
              }
            "
          >
            <div class="num">{{ item.index }}</div>
            <div class="name">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Cover from './components/cover.vue'
import Position from './components/position.vue'
import compose from './components/compose.vue'
import Terrain from './components/terrain.vue'
import Agriculture from './components/agriculture.vue'

import Sustainable from './components/sustainable.vue'
import Summary from './components/summary.vue'
import Climate from './components/climate.vue'
import Industry from './components/industry.vue'
import Transport from './components/transport.vue'
import Tourism from './components/tourism.vue'
import Eu from './components/eu.vue'

// 组件映射
const components = {
  cover: Cover,
  compose: compose,
  position: Position,
  terrain: Terrain,
  climate: Climate,
  agriculture: Agriculture,
  industry: Industry,
  transport: Transport,
  tourism: Tourism,
  eu: Eu,
  sustainable: Sustainable,
  summary: Summary,
}

const pptPages = [
  { key: 'cover', index: 1, title: '课程封面', desc: '走进欧洲西部' },
  { key: 'position', index: 2, title: '位置与范围', desc: '大西洋东岸的发达地区' },
  { key: 'compose', index: 3, title: '欧洲西部的组成', desc: '国家众多，区域联系紧密' },
  { key: 'terrain', index: 4, title: '地形与河流', desc: '平原广布，海岸曲折' },
  { key: 'climate', index: 5, title: '温带海洋性气候', desc: '全年温和湿润' },
  { key: 'agriculture', index: 6, title: '畜牧业与现代农业', desc: '草场广布，乳畜发达' },
  { key: 'industry', index: 7, title: '工业与服务业', desc: '发达经济与高端制造' },
  { key: 'transport', index: 8, title: '交通与城市群', desc: '密集交通连接城市网络' },
  { key: 'tourism', index: 9, title: '旅游资源丰富', desc: '自然风光与文化遗产' },
  { key: 'eu', index: 10, title: '欧盟与区域合作', desc: '一体化发展的典型地区' },
  { key: 'sustainable', index: 11, title: '可持续发展', desc: '绿色转型与低碳生活' },
  { key: 'summary', index: 12, title: '课堂小结', desc: '区域特征综合归纳' },
]

const currentKey = ref('cover')
const showThumbPopup = ref(false)
const screenWidth = ref(window.innerWidth)

const current = computed(() => {
  const index = pptPages.findIndex(item => item.key === currentKey.value)
  return pptPages[index]
})

// 判断是否小屏
const isSmallScreen = computed(() => screenWidth.value < 992)
const getIndex = computed(() => pptPages.findIndex(item => item.key === currentKey.value))

// 上一页
const prevPage = () => {
  let idx = getIndex.value
  if (idx > 0) {
    currentKey.value = pptPages[idx - 1]!.key
  }
}

// 下一页
const nextPage = () => {
  let idx = getIndex.value
  if (idx < pptPages.length - 1) {
    currentKey.value = pptPages[idx + 1]!.key
  }
}

// 监听窗口大小
const handleResize = () => {
  screenWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style lang="scss" scoped>
.ppt-container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 10%, rgba(52, 167, 245, 0.08), transparent 30%), linear-gradient(135deg, #dfe8ef 0%, #edf3f7 48%, #d8e4ec 100%);
}

.ppt-left {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background: #f2f6f9;
  border-right: 1px solid rgba(42, 74, 96, 0.14);
  padding: 16px;
  transition: all 0.3s ease;
  box-shadow: 8px 0 24px rgba(22, 45, 62, 0.06);

  &.hideLeft {
    width: 0;
    padding: 0;
    border: none;
    overflow: hidden;
  }

  .ppt-left-header {
    padding-bottom: 16px;

    h4 {
      font-size: 16px;
      font-weight: bold;
      margin: 0 0 4px 0;
      color: #1f3444;
    }

    .text {
      font-size: 12px;
      color: #7b8b96;
      margin: 0;
    }
  }

  .ppt-left-thumb {
    flex: 1;
    padding: 16px 0;
    overflow-y: auto;
    border-top: 1px solid rgba(42, 74, 96, 0.12);
    border-bottom: 1px solid rgba(42, 74, 96, 0.12);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ppt-thumb-item {
    width: 100%;
    min-height: 78px;
    border: 1px solid rgba(42, 74, 96, 0.15);
    border-radius: 10px;
    background: #f3fcff;
    padding: 12px;
    cursor: pointer;
    box-shadow: 0 6px 14px rgba(22, 45, 62, 0.045);
    transition: all 0.2s ease;
    display: flex;
    align-items: flex-start;

    &-left {
      .index {
        display: inline-block;
        width: 28px;
        height: 28px;
        line-height: 28px;
        border-radius: 50%;
        background: rgba(52, 167, 245, 0.1);
        color: var(--primary-color);
        font-weight: 900;
        font-size: 12px;
        text-align: center;
      }
    }

    &-right {
      padding-left: 12px;

      .title {
        display: inline-block;
        font-size: 14px;
        color: #243744;
        font-weight: bold;
      }

      .desc {
        font-size: 12px;
        color: #6f7f89;
        line-height: 1.45;
      }
    }
  }

  .ppt-thumb-item-active {
    border-color: rgba(52, 167, 245, 0.68);
    background: #eaf3f9;
    box-shadow:
      inset 4px 0 0 var(--primary-color, #34a7f5),
      0 8px 18px rgba(22, 45, 62, 0.08);

    .index {
      background: var(--primary-color, #34a7f5);
      color: #fff;
      box-shadow: 0 4px 10px rgba(52, 167, 245, 0.22);
    }

    .title {
      color: #116a9d;
    }

    .desc {
      color: #526b7a;
    }
  }

  .ppt-left-footer {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #7b8b96;
  }
}

.ppt-right {
  position: relative;
  flex: 1;
  height: 100%;
  padding: 24px;
  overflow: auto;
  background:
    radial-gradient(circle at 100% 0%, rgba(52, 167, 245, 0.08), transparent 32%),
    linear-gradient(135deg, rgba(245, 248, 250, 0.86), rgba(224, 235, 243, 0.78)), #dfe8ef;
  display: flex;
  flex-direction: column;

  .ppt-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: rgba(42, 74, 96, 0.14);

    > div {
      height: 100%;
      background: linear-gradient(90deg, #6bbce9, var(--primary-color, #34a7f5), #187db7);
      transition: width 0.3s;
      box-shadow: 0 0 8px rgba(52, 167, 245, 0.28);
    }
  }

  .ppt-content {
    width: 96%;
    height: auto;
    aspect-ratio: 16 / 9;
    background-color: #f8fafc;
    border-radius: 12px;
    border: 1px solid rgba(42, 74, 96, 0.14);
    box-shadow:
      0 16px 36px rgba(22, 45, 62, 0.14),
      0 0 0 1px rgba(255, 255, 255, 0.58);
    overflow: hidden;
  }

  /* 移动端底部控制栏 */
  .mobile-control {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 20px;
    background: rgba(248, 250, 252, 0.96);
    border: 1px solid rgba(42, 74, 96, 0.14);
    border-radius: 30px;
    box-shadow: 0 8px 22px rgba(22, 45, 62, 0.16);
    z-index: 10;
    backdrop-filter: blur(10px);

    .icon-thumb,
    .arrow {
      font-size: 18px;
      cursor: pointer;
      padding: 4px 8px;
      user-select: none;
      color: #1d6f9f;
    }

    .page-num {
      font-size: 14px;
      color: #243744;
      font-weight: bold;
    }
  }

  /* 横向缩略弹窗 */
  .thumb-popup {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    background: rgba(248, 250, 252, 0.96);
    border: 1px solid rgba(42, 74, 96, 0.14);
    border-radius: 10px;
    padding: 12px;
    box-shadow: 0 12px 28px rgba(22, 45, 62, 0.18);
    z-index: 10;
    backdrop-filter: blur(10px);

    .thumb-scroll {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      padding-bottom: 6px;
    }

    .mini-thumb {
      min-width: 90px;
      height: 70px;
      padding: 8px;
      border: 1px solid rgba(42, 74, 96, 0.12);
      border-radius: 8px;
      cursor: pointer;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #ffffff;
      box-shadow: 0 6px 14px rgba(22, 45, 62, 0.05);

      .num {
        font-size: 12px;
        color: #7b8b96;
        margin-bottom: 4px;
      }

      .name {
        font-size: 12px;
        color: #243744;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &.active {
        border-color: rgba(52, 167, 245, 0.68);
        background: #eaf3f9;
        color: var(--primary-color, #34a7f5);
        box-shadow:
          inset 3px 0 0 var(--primary-color, #34a7f5),
          0 8px 18px rgba(22, 45, 62, 0.08);

        .num {
          color: var(--primary-color, #34a7f5);
          font-weight: bold;
        }

        .name {
          color: #116a9d;
          font-weight: bold;
        }
      }
    }
  }
}

/* 大屏恢复样式 */
@media (min-width: 992px) {
  .mobile-control,
  .thumb-popup {
    display: none !important;
  }

  .ppt-left {
    width: 260px !important;
    padding: 16px !important;
    overflow: visible !important;
  }
}
</style>
