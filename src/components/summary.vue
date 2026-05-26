<template>
  <div class="summary-container">
    <div class="summary-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="summary-content">
      <!-- 左侧内容区 -->
      <div class="summary-content-left">
        <div class="summary-card summary-card-01">
          <div class="summary-card-header"><i class="iconfont icon-hexin"></i>本课核心线索</div>

          <p class="mb-8">
            学习欧洲西部，要把它看成一个由
            <strong>位置范围、自然环境、气候农业、工业服务业、交通城市、旅游资源、区域合作与可持续发展</strong>
            共同构成的发达地区。
          </p>

          <div class="note-box">
            <div class="note-title">一句话概括</div>
            <div>
              欧洲西部是位于<strong>亚欧大陆西部、大西洋东岸</strong>的发达地区， 具有<strong
                >海岸曲折、气候温和湿润、畜牧业发达、工业服务业先进、旅游资源丰富、区域合作紧密</strong
              >
              的综合特征。
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-02">
          <div class="summary-card-header"><i class="iconfont icon-zuzhijiegou"></i>知识结构总览</div>

          <div class="summary-chain">
            <div
              class="chain-item"
              v-for="item in summaryList"
              :key="item.key"
              :class="{ active: activeKey === item.key }"
              @click="activeKey = item.key"
            >
              <div class="chain-index">{{ item.index }}</div>
              <div class="chain-main">
                <div class="chain-title">{{ item.title }}</div>
                <div class="chain-desc">{{ item.short }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-03">
          <div class="summary-card-header"><i class="iconfont icon-quyuxinxi"></i>区域认知方法</div>

          <div class="method-item">
            <div class="method-title">第一步：看位置与范围</div>
            <div class="method-desc">分析纬度位置、海陆位置、濒临海洋和主要国家，理解区域对外联系条件。</div>
          </div>

          <div class="method-item">
            <div class="method-title">第二步：看自然环境</div>
            <div class="method-desc">结合地形、河流、海岸线和气候，判断农业、交通、城市和旅游发展的自然基础。</div>
          </div>

          <div class="method-item">
            <div class="method-title">第三步：看产业发展</div>
            <div class="method-desc">关注畜牧业、现代农业、工业、服务业、交通和城市群，认识发达地区经济特征。</div>
          </div>

          <div class="method-item">
            <div class="method-title">第四步：看合作与发展</div>
            <div class="method-desc">分析欧盟、区域一体化、绿色转型和可持续发展，理解欧洲西部的发展方向。</div>
          </div>
        </div>

        <div class="summary-card summary-card-04">
          <div class="summary-card-header"><i class="iconfont icon-kaoshi"></i>综合答题模板</div>

          <div class="answer-box">
            <div class="answer-title">如何综合分析欧洲西部的区域特征？</div>

            <ul class="exam-list">
              <li><strong>位置：</strong>欧洲西部位于亚欧大陆西部，大西洋东岸，北临北冰洋，南临地中海。</li>
              <li><strong>自然：</strong>地形以平原为主，海岸线曲折，多半岛、岛屿、海湾和内海，河网较密。</li>
              <li><strong>气候：</strong>温带海洋性气候广布，全年温和湿润，适合多汁牧草生长。</li>
              <li><strong>农业：</strong>畜牧业特别是乳畜业发达，现代农业机械化、专业化、商品化水平高。</li>
              <li><strong>产业：</strong>工业发展早，技术水平高，服务业比重大，金融、旅游、交通、贸易发达。</li>
              <li><strong>合作：</strong>国家众多但联系紧密，欧盟推动区域合作和一体化发展。</li>
              <li><strong>发展：</strong>重视绿色转型、低碳生活、环境治理和可持续发展。</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 右侧总结图示区 -->
      <div class="summary-content-right">
        <div class="summary-board">
          <div class="board-title">欧洲西部区域特征综合归纳</div>

          <div class="core-diagram">
            <div class="center-core">
              <div class="core-title">欧洲西部</div>
              <div class="core-subtitle">区域认知</div>
            </div>

            <div class="diagram-node node-compose" :class="{ active: activeKey === 'compose' }" @click="activeKey = 'compose'">
              <div class="node-icon">🧩</div>
              <div class="node-title">组成</div>
              <div class="node-text">国家众多</div>
            </div>

            <div class="diagram-node node-position" :class="{ active: activeKey === 'position' }" @click="activeKey = 'position'">
              <div class="node-icon">🌍</div>
              <div class="node-title">位置</div>
              <div class="node-text">大西洋东岸</div>
            </div>

            <div class="diagram-node node-terrain" :class="{ active: activeKey === 'terrain' }" @click="activeKey = 'terrain'">
              <div class="node-icon">🏞️</div>
              <div class="node-title">地形</div>
              <div class="node-text">平原广布</div>
            </div>

            <div class="diagram-node node-climate" :class="{ active: activeKey === 'climate' }" @click="activeKey = 'climate'">
              <div class="node-icon">🌦️</div>
              <div class="node-title">气候</div>
              <div class="node-text">温和湿润</div>
            </div>

            <div class="diagram-node node-agri" :class="{ active: activeKey === 'agriculture' }" @click="activeKey = 'agriculture'">
              <div class="node-icon">🐄</div>
              <div class="node-title">农业</div>
              <div class="node-text">乳畜发达</div>
            </div>

            <div class="diagram-node node-industry" :class="{ active: activeKey === 'industry' }" @click="activeKey = 'industry'">
              <div class="node-icon">🏭</div>
              <div class="node-title">产业</div>
              <div class="node-text">工业服务业</div>
            </div>

            <div class="diagram-node node-transport" :class="{ active: activeKey === 'transport' }" @click="activeKey = 'transport'">
              <div class="node-icon">🚄</div>
              <div class="node-title">交通</div>
              <div class="node-text">城市网络</div>
            </div>

            <div class="diagram-node node-tourism" :class="{ active: activeKey === 'tourism' }" @click="activeKey = 'tourism'">
              <div class="node-icon">🏰</div>
              <div class="node-title">旅游</div>
              <div class="node-text">资源丰富</div>
            </div>

            <div class="diagram-node node-eu" :class="{ active: activeKey === 'eu' }" @click="activeKey = 'eu'">
              <div class="node-icon">🇪🇺</div>
              <div class="node-title">合作</div>
              <div class="node-text">欧盟一体化</div>
            </div>

            <div class="diagram-node node-sustain" :class="{ active: activeKey === 'sustainable' }" @click="activeKey = 'sustainable'">
              <div class="node-icon">🌿</div>
              <div class="node-title">发展</div>
              <div class="node-text">绿色低碳</div>
            </div>
          </div>

          <div class="active-detail">
            <div class="active-detail-title">
              {{ activeSummary?.title }}
            </div>
            <div class="active-detail-desc">
              {{ activeSummary?.detail }}
            </div>
            <div class="active-detail-key"><strong>关键词：</strong>{{ activeSummary?.keywords }}</div>
          </div>

          <div class="final-conclusion">
            <div class="final-title">最终归纳</div>

            <div class="final-grid">
              <div class="final-item">
                <div class="final-label">位置特征</div>
                <div class="final-value">临海</div>
              </div>

              <div class="final-item">
                <div class="final-label">自然基础</div>
                <div class="final-value">温湿</div>
              </div>

              <div class="final-item">
                <div class="final-label">农业特色</div>
                <div class="final-value">乳畜</div>
              </div>

              <div class="final-item">
                <div class="final-label">产业水平</div>
                <div class="final-value">发达</div>
              </div>

              <div class="final-item">
                <div class="final-label">区域联系</div>
                <div class="final-value">紧密</div>
              </div>

              <div class="final-item">
                <div class="final-label">发展方向</div>
                <div class="final-value">低碳</div>
              </div>
            </div>
          </div>

          <div class="map-tip">点击右侧节点，可切换对应章节总结</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

type SummaryItem = {
  key: string
  index: string
  title: string
  short: string
  detail: string
  keywords: string
}

const activeKey = ref('position')

const summaryList: SummaryItem[] = [
  {
    key: 'compose',
    index: '01',
    title: '欧洲西部的组成',
    short: '国家众多，联系紧密',
    detail: '欧洲西部包括英国、法国、德国、意大利、西班牙、荷兰、比利时、瑞士、挪威、瑞典等国家，是发达国家集中的地区。',
    keywords: '英国、法国、德国、意大利、西班牙、北欧、西欧、南欧',
  },
  {
    key: 'position',
    index: '02',
    title: '位置与范围',
    short: '大西洋东岸的发达地区',
    detail: '欧洲西部位于亚欧大陆西部，西临大西洋，北临北冰洋，南临地中海，海陆位置优越，对外交通便利。',
    keywords: '亚欧大陆西部、大西洋东岸、北冰洋、地中海、海岸曲折',
  },
  {
    key: 'terrain',
    index: '03',
    title: '地形与河流',
    short: '平原广布，海岸曲折',
    detail: '欧洲西部地形以平原为主，中部平原广布，南部有阿尔卑斯山脉，河网较密，莱茵河、多瑙河等河流航运价值较高。',
    keywords: '西欧平原、波德平原、阿尔卑斯山、莱茵河、多瑙河',
  },
  {
    key: 'climate',
    index: '04',
    title: '温带海洋性气候',
    short: '全年温和湿润',
    detail: '受盛行西风、北大西洋暖流和海岸曲折等因素影响，欧洲西部温带海洋性气候广布，全年温和湿润，气温年较差小。',
    keywords: '温带海洋性气候、盛行西风、北大西洋暖流、温和湿润',
  },
  {
    key: 'agriculture',
    index: '05',
    title: '畜牧业与现代农业',
    short: '草场广布，乳畜发达',
    detail: '温和湿润的气候适合多汁牧草生长，欧洲西部畜牧业特别是乳畜业发达，农业机械化、专业化和商品化水平较高。',
    keywords: '多汁牧草、乳畜业、牛奶、奶酪、现代农业',
  },
  {
    key: 'industry',
    index: '06',
    title: '工业与服务业',
    short: '发达经济与高端制造',
    detail: '欧洲西部工业发展早，基础雄厚，汽车、机械、航空、化工、医药等高端制造业发达，金融、贸易、旅游等服务业比重大。',
    keywords: '工业化早、高端制造、汽车工业、金融服务、服务业',
  },
  {
    key: 'transport',
    index: '07',
    title: '交通与城市群',
    short: '密集交通连接城市网络',
    detail: '欧洲西部铁路、公路、航空、海运和内河航运发达，城市密集，形成伦敦、巴黎、布鲁塞尔、法兰克福等联系紧密的城市网络。',
    keywords: '高速铁路、港口、莱茵河航运、城市群、城市网络',
  },
  {
    key: 'tourism',
    index: '08',
    title: '旅游资源丰富',
    short: '自然风光与文化遗产',
    detail: '欧洲西部既有阿尔卑斯山、挪威峡湾、地中海海岸等自然风光，也有巴黎、伦敦、罗马、威尼斯等人文旅游城市。',
    keywords: '阿尔卑斯山、挪威峡湾、地中海、巴黎、伦敦、罗马',
  },
  {
    key: 'eu',
    index: '09',
    title: '欧盟与区域合作',
    short: '一体化发展的典型地区',
    detail: '欧洲西部国家众多但联系紧密，欧盟推动统一市场、货币合作、交通联系、环境治理等区域一体化发展。',
    keywords: '欧盟、统一市场、欧元、区域合作、一体化',
  },
  {
    key: 'sustainable',
    index: '10',
    title: '可持续发展',
    short: '绿色转型与低碳生活',
    detail: '欧洲西部重视环境保护和绿色转型，积极发展风能、太阳能、绿色交通、循环经济和低碳城市。',
    keywords: '绿色转型、低碳生活、可再生能源、风能、循环经济',
  },
]

const activeSummary = computed(() => {
  return summaryList.find(item => item.key === activeKey.value) || summaryList[0]
})
</script>

<style scoped lang="scss">
.summary-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.summary-header {
  margin-bottom: 32px;
}

.summary-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.summary-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.summary-content-right {
  width: 61%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  position: relative;
}

.summary-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.summary-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.summary-card-01 {
  background: #eff8ff;
  border-color: #cfefff;
}

.summary-card-02 {
  background: #f0f7fb;
  border-color: #d3e6f0;
}

.summary-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.summary-card-04 {
  background: #fefce8;
  border-color: #fde68a;
}

.summary-card-04 .summary-card-header,
.summary-card-04 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.summary-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
}

.note-box {
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  border-left: 3px solid var(--primary-color);
  font-size: 13px;
  color: #374151;
}

.note-title {
  font-weight: bold;
  color: #0f78b8;
  margin-bottom: 4px;
}

.summary-chain {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chain-item {
  display: flex;
  gap: 10px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 8px 10px;
  border: 1px solid #cee3ed;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.chain-item:hover {
  transform: translateX(3px);
  box-shadow: 0 2px 8px rgba(15, 39, 72, 0.12);
}

.chain-item.active {
  border-color: var(--primary-color);
  background: #eff8ff;
}

.chain-index {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-color);
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chain-title {
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 2px;
}

.chain-desc {
  font-size: 12px;
  color: #475569;
}

.method-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.method-item:last-child {
  margin-bottom: 0;
}

.method-title {
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 4px;
}

.method-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.answer-box {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border-left: 4px solid #f59e0b;
}

.answer-title {
  font-weight: bold;
  color: #854d0e;
  margin-bottom: 8px;
}

.exam-list {
  margin: 0;
  padding-left: 18px;
  color: #3f2f12;
  line-height: 1.6;
}

.exam-list li {
  margin-bottom: 6px;
}

.exam-list li:last-child {
  margin-bottom: 0;
}

.exam-list strong {
  color: #b45309;
}

.summary-board {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 18px;
  background:
    radial-gradient(circle at 50% 45%, rgba(52, 167, 245, 0.12), transparent 28%), linear-gradient(135deg, #eef8ff 0%, #f8fafc 48%, #f0f7fb 100%);
  overflow-y: auto;
  overflow-x: hidden;
}

.summary-board::-webkit-scrollbar {
  width: 6px;
}

.summary-board::-webkit-scrollbar-thumb {
  background: rgba(52, 167, 245, 0.35);
  border-radius: 999px;
}

.summary-board::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.45);
}

.board-title {
  position: relative;
  z-index: 2;
  font-weight: bold;
  font-size: 18px;
  color: #0f2748;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.86);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
  box-shadow: 0 2px 8px rgba(15, 39, 72, 0.12);
}

.core-diagram {
  position: relative;
  height: 400px;
  min-height: 400px;
  margin-top: 16px;
  border-radius: 12px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.78)),
    repeating-linear-gradient(45deg, rgba(52, 167, 245, 0.05) 0, rgba(52, 167, 245, 0.05) 8px, transparent 8px, transparent 16px);
  border: 1px solid rgba(15, 39, 72, 0.08);
  overflow: hidden;
}

.center-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 136px;
  height: 136px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(135deg, #0f78b8, var(--primary-color));
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 10px 24px rgba(52, 167, 245, 0.28),
    inset 0 -10px 18px rgba(0, 0, 0, 0.12);

  /* 关键修复：中心圆层级高于周围节点 */
  z-index: 10;
}

.core-title {
  font-size: 24px;
  font-weight: bold;
}

.core-subtitle {
  font-size: 13px;
  opacity: 0.9;
  margin-top: 4px;
}

.diagram-node {
  position: absolute;
  width: 124px;
  min-height: 76px;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.94);
  border: 2px solid rgba(148, 163, 184, 0.45);
  box-shadow: 0 2px 8px rgba(15, 39, 72, 0.12);
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;

  /* 保持低于中心圆 */
  z-index: 4;
}

.diagram-node:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(15, 39, 72, 0.18);
}

.diagram-node.active {
  border-color: var(--primary-color);
  box-shadow: 0 8px 18px rgba(52, 167, 245, 0.24);
  z-index: 999;
}

.node-icon {
  font-size: 22px;
  margin-bottom: 3px;
}

.node-title {
  font-weight: bold;
  color: #0f2748;
  margin-bottom: 2px;
}

.node-text {
  font-size: 12px;
  color: #475569;
}

.node-compose {
  left: 5%;
  top: 8%;
}

.node-position {
  left: 36%;
  top: 4%;
}

.node-terrain {
  right: 15%;
  top: 8%;
}

.node-climate {
  right: 4%;
  top: 35%;
}

.node-agri {
  right: 8%;
  bottom: 12%;
}

.node-industry {
  right: 34%;
  bottom: 5%;
}

.node-transport {
  left: 34%;
  bottom: 5%;
}

.node-tourism {
  left: 8%;
  bottom: 12%;
}

.node-eu {
  left: 4%;
  top: 35%;
}

/* 关键修复：下移，避免盖住中心圆 */
.node-sustain {
  left: 61%;
  bottom: 35%;
}

.active-detail {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.92);
  border-left: 5px solid var(--primary-color);
  box-shadow: 0 2px 8px rgba(15, 39, 72, 0.12);
}

.active-detail-title {
  font-weight: bold;
  font-size: 16px;
  color: #0f6fa8;
  margin-bottom: 6px;
}

.active-detail-desc {
  color: #374151;
  line-height: 1.6;
  font-size: 13px;
  margin-bottom: 6px;
}

.active-detail-key {
  color: #0f2748;
  font-size: 13px;
  background: #f8fafc;
  padding: 6px 8px;
  border-radius: 6px;
}

.active-detail-key strong {
  color: #b45309;
}

.final-conclusion {
  margin-top: 14px;
  padding: 12px;
  background: rgba(15, 53, 84, 0.9);
  border-radius: 10px;
  color: #fff;
}

.final-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.final-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.final-item {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}

.final-label {
  font-size: 12px;
  opacity: 0.82;
  margin-bottom: 4px;
}

.final-value {
  font-size: 16px;
  font-weight: bold;
}

.map-tip {
  display: inline-flex;
  margin-top: 12px;
  background: rgba(255, 255, 255, 0.92);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  color: #666;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}
</style>
