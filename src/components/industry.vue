<template>
  <div class="industry-container">
    <div class="industry-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="industry-content">
      <!-- 左侧内容区 -->
      <div class="industry-content-left">
        <div class="industry-card industry-card-01">
          <div class="industry-card-header"><i class="iconfont icon-gongyesheji"></i>工业总体特征</div>

          <p class="mb-8">
            欧洲西部是世界上<strong>工业发展较早、经济水平较高</strong>的地区之一。
            这里工业基础雄厚，技术水平高，形成了以高端制造、汽车、航空、化工、电子、生物医药等为代表的现代工业体系。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">发展基础</div>
              <div class="feature-value">工业化早</div>
              <div class="feature-desc">工业革命首先在英国兴起，推动欧洲西部工业发展。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">产业水平</div>
              <div class="feature-value">技术含量高</div>
              <div class="feature-desc">高端制造、精密仪器、汽车、航空等产业突出。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              欧洲西部工业特点可概括为：
              <strong>发展早、基础好、技术高、分布密、服务业比重大</strong>。
            </div>
          </div>
        </div>

        <div class="industry-card industry-card-02">
          <div class="industry-card-header"><i class="iconfont icon-bumen"></i>主要工业部门</div>

          <div class="industry-type-grid">
            <div class="industry-type-card">
              <div class="industry-type-icon">🚗</div>
              <div class="industry-type-title">汽车工业</div>
              <div class="industry-type-desc">德国、法国、意大利等国汽车工业发达，品牌影响力强，制造技术水平高。</div>
            </div>

            <div class="industry-type-card">
              <div class="industry-type-icon">✈️</div>
              <div class="industry-type-title">航空航天</div>
              <div class="industry-type-desc">法国、德国、英国等国航空制造业先进，跨国合作特征明显。</div>
            </div>

            <div class="industry-type-card">
              <div class="industry-type-icon">⚙️</div>
              <div class="industry-type-title">机械制造</div>
              <div class="industry-type-desc">德国、瑞士等国精密机械和高端装备制造水平较高。</div>
            </div>

            <div class="industry-type-card">
              <div class="industry-type-icon">🧪</div>
              <div class="industry-type-title">化工与医药</div>
              <div class="industry-type-desc">德国、瑞士、法国等国化工、生物医药和精细化工产业发达。</div>
            </div>
          </div>
        </div>

        <div class="industry-card industry-card-03">
          <div class="industry-card-header"><i class="iconfont icon-fuwuye"></i>服务业高度发达</div>

          <p class="mb-8">欧洲西部许多国家服务业在国民经济中占比很高，金融、贸易、交通、旅游、教育、医疗、文化创意等部门发达。</p>

          <div class="service-item">
            <div class="item-title">金融服务</div>
            <div class="item-desc">伦敦、巴黎、法兰克福、苏黎世等城市是欧洲重要金融中心。</div>
          </div>

          <div class="service-item">
            <div class="item-title">交通贸易</div>
            <div class="item-desc">港口、铁路、公路、航空网络密集，推动区域经济联系。</div>
          </div>

          <div class="service-item">
            <div class="item-title">旅游与文化</div>
            <div class="item-desc">自然风光和文化遗产丰富，旅游业是许多国家的重要服务业部门。</div>
          </div>
        </div>

        <div class="industry-card industry-card-04">
          <div class="industry-card-header"><i class="iconfont icon-chengshi"></i>重要工业区与城市</div>

          <div class="city-grid">
            <div class="city-chip">伦敦</div>
            <div class="city-chip">巴黎</div>
            <div class="city-chip">法兰克福</div>
            <div class="city-chip">慕尼黑</div>
            <div class="city-chip">米兰</div>
            <div class="city-chip">鹿特丹</div>
            <div class="city-chip">苏黎世</div>
            <div class="city-chip">鲁尔区</div>
          </div>
        </div>

        <div class="industry-card industry-card-05">
          <div class="industry-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记基础：</strong>欧洲西部工业发展早，工业基础雄厚。</li>
            <li><strong>二记特点：</strong>技术水平高，高端制造业发达。</li>
            <li><strong>三记部门：</strong>汽车、航空、机械、化工、医药等产业突出。</li>
            <li><strong>四记服务：</strong>服务业比重大，金融、贸易、旅游业发达。</li>
            <li><strong>五记联系：</strong>交通便利，城市密集，区域经济联系紧密。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="industry-content-right">
        <div id="westernEuropeIndustryMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看工业与服务业分布</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showIndustrialAreas" @change="refreshMapLayers" />
            主要工业区
          </label>

          <label>
            <input type="checkbox" v-model="showManufacturingCities" @change="refreshMapLayers" />
            高端制造城市
          </label>

          <label>
            <input type="checkbox" v-model="showServiceCities" @change="refreshMapLayers" />
            服务业中心
          </label>

          <label>
            <input type="checkbox" v-model="showPorts" @change="refreshMapLayers" />
            港口与贸易节点
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area industry-area"></span>
              <span>主要工业区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot manufacture-dot"></span>
              <span>高端制造城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot service-dot"></span>
              <span>服务业中心</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot port-dot"></span>
              <span>港口与贸易节点</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

type IndustryArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type IndustryPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 50.8
const centerLng = 6.5
const zoomLevel = 4

const useGoogle = ref(false)
const showIndustrialAreas = ref(true)
const showManufacturingCities = ref(true)
const showServiceCities = ref(true)
const showPorts = ref(true)

const industrialAreaLayer = L.layerGroup()
const manufacturingCityLayer = L.layerGroup()
const serviceCityLayer = L.layerGroup()
const portLayer = L.layerGroup()

const industrialAreaLabels: DomLabel[] = []
const manufacturingCityLabels: DomLabel[] = []
const serviceCityLabels: DomLabel[] = []
const portLabels: DomLabel[] = []

const industrialAreas: IndustryArea[] = [
  {
    name: '鲁尔工业区',
    lat: 51.45,
    lng: 7.2,
    radius: 170000,
    desc: '德国传统工业区，曾以煤炭、钢铁等重工业著称，后来向服务业和高新技术产业转型。',
  },
  {
    name: '英国中部工业区',
    lat: 52.7,
    lng: -1.8,
    radius: 190000,
    desc: '工业革命重要发源地之一，传统制造业基础较强。',
  },
  {
    name: '巴黎盆地工业区',
    lat: 48.8,
    lng: 2.4,
    radius: 180000,
    desc: '法国重要工业和服务业中心，工业、交通、金融和文化功能突出。',
  },
  {
    name: '北意大利工业区',
    lat: 45.3,
    lng: 9.5,
    radius: 210000,
    desc: '意大利经济最活跃的地区之一，机械、汽车、时尚、设计和轻工业发达。',
  },
]

const manufacturingCities: IndustryPoint[] = [
  {
    name: '慕尼黑',
    lat: 48.1351,
    lng: 11.582,
    desc: '德国南部重要高端制造和科技城市，汽车、电子、机械等产业发达。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '斯图加特',
    lat: 48.7758,
    lng: 9.1829,
    desc: '德国汽车工业和机械制造中心之一。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '图卢兹',
    lat: 43.6047,
    lng: 1.4442,
    desc: '法国重要航空航天工业城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '米兰',
    lat: 45.4642,
    lng: 9.19,
    desc: '意大利北部重要工业、金融、时尚和设计中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '苏黎世',
    lat: 47.3769,
    lng: 8.5417,
    desc: '瑞士重要金融、科技和精密制造中心。',
    offsetX: 10,
    offsetY: -2,
  },
]

const serviceCities: IndustryPoint[] = [
  {
    name: '伦敦',
    lat: 51.5072,
    lng: -0.1276,
    desc: '欧洲重要金融、贸易、文化和服务业中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴黎',
    lat: 48.8566,
    lng: 2.3522,
    desc: '法国首都，金融、文化、旅游、时尚和高端服务业发达。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '法兰克福',
    lat: 50.1109,
    lng: 8.6821,
    desc: '德国重要金融和交通中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '布鲁塞尔',
    lat: 50.8503,
    lng: 4.3517,
    desc: '欧洲重要政治、商务和服务业中心。',
    offsetX: 10,
    offsetY: -2,
  },
]

const ports: IndustryPoint[] = [
  {
    name: '鹿特丹港',
    lat: 51.95,
    lng: 4.14,
    desc: '欧洲重要港口和贸易节点，连接内陆工业区与海上航运。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '安特卫普港',
    lat: 51.22,
    lng: 4.4,
    desc: '比利时重要港口和化工、物流中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '汉堡港',
    lat: 53.55,
    lng: 9.99,
    desc: '德国重要港口和贸易城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马赛港',
    lat: 43.2965,
    lng: 5.3698,
    desc: '法国地中海沿岸重要港口。',
    offsetX: 10,
    offsetY: -2,
  },
]

function switchBaseLayer() {
  if (!map) return

  if (baseLayer) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  const url = useGoogle.value
    ? 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/google-tiles/{z}/{x}/{y}.png'
    : 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/osm-tiles/{z}/{x}/{y}.png'

  baseLayer = L.tileLayer(url, {
    attribution: '',
    minZoom: 2,
    maxZoom: 7,
  }).addTo(map)

  scheduleUpdateLabels()
}

function initLabelPane() {
  if (!map) return

  const container = map.getContainer()
  const oldPane = container.querySelector('.custom-map-label-pane')

  if (oldPane) oldPane.remove()

  labelPane = document.createElement('div')
  labelPane.className = 'custom-map-label-pane'
  container.appendChild(labelPane)
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function createDomLabel(options: { lat: number; lng: number; content: string; className: string; offsetX?: number; offsetY?: number }) {
  if (!labelPane) return null

  const el = document.createElement('div')
  el.className = options.className
  el.innerHTML = escapeHtml(options.content)

  labelPane.appendChild(el)

  const label: DomLabel = {
    latlng: L.latLng(options.lat, options.lng),
    el,
    offsetX: options.offsetX ?? 0,
    offsetY: options.offsetY ?? 0,
  }

  updateOneLabelPosition(label)
  return label
}

function updateOneLabelPosition(label: DomLabel) {
  if (!map) return

  const point = map.latLngToContainerPoint(label.latlng)
  label.el.style.left = `${point.x + label.offsetX}px`
  label.el.style.top = `${point.y + label.offsetY}px`
}

function updateAllLabelPositions() {
  updateLabelRaf = 0

  if (showIndustrialAreas.value) {
    industrialAreaLabels.forEach(updateOneLabelPosition)
  }

  if (showManufacturingCities.value) {
    manufacturingCityLabels.forEach(updateOneLabelPosition)
  }

  if (showServiceCities.value) {
    serviceCityLabels.forEach(updateOneLabelPosition)
  }

  if (showPorts.value) {
    portLabels.forEach(updateOneLabelPosition)
  }
}

function scheduleUpdateLabels() {
  if (updateLabelRaf) return
  updateLabelRaf = requestAnimationFrame(updateAllLabelPositions)
}

function bindMapLabelEvents() {
  if (!map) return

  map.on('move', scheduleUpdateLabels)
  map.on('moveend', scheduleUpdateLabels)
  map.on('zoom', scheduleUpdateLabels)
  map.on('zoomend', scheduleUpdateLabels)
  map.on('viewreset', scheduleUpdateLabels)
  map.on('resize', scheduleUpdateLabels)
}

function unbindMapLabelEvents() {
  if (!map) return

  map.off('move', scheduleUpdateLabels)
  map.off('moveend', scheduleUpdateLabels)
  map.off('zoom', scheduleUpdateLabels)
  map.off('zoomend', scheduleUpdateLabels)
  map.off('viewreset', scheduleUpdateLabels)
  map.off('resize', scheduleUpdateLabels)
}

function clearDomLabels(labels: DomLabel[]) {
  labels.forEach(label => {
    label.el.remove()
  })

  labels.length = 0
}

function bindInfoPopup(layer: L.Layer, title: string, desc: string) {
  if ('bindPopup' in layer && typeof layer.bindPopup === 'function') {
    layer.bindPopup(`
      <div style="min-width: 160px; line-height: 1.5;">
        <div style="font-weight: bold; margin-bottom: 4px;">${escapeHtml(title)}</div>
        <div style="font-size: 12px; color: #444;">${escapeHtml(desc)}</div>
      </div>
    `)
  }
}

function addAreaLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  areas: IndustryArea[],
  options: {
    color: string
    fillColor: string
    fillOpacity: number
    labelClassName: string
  },
) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  areas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: options.color,
      weight: 2,
      fillColor: options.fillColor,
      fillOpacity: options.fillOpacity,
      opacity: 0.85,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: options.labelClassName,
      offsetX: item.offsetX ?? 0,
      offsetY: item.offsetY ?? 0,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function addPointLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  points: IndustryPoint[],
  options: {
    color: string
    fillColor: string
    radius: number
    labelClassName: string
  },
) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  points.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: options.radius,
      color: options.color,
      weight: 2,
      fillColor: options.fillColor,
      fillOpacity: 1,
    }).addTo(targetLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: options.labelClassName,
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showIndustrialAreas.value) {
    addAreaLayer(industrialAreaLayer, industrialAreaLabels, industrialAreas, {
      color: '#0f78b8',
      fillColor: '#34a7f5',
      fillOpacity: 0.16,
      labelClassName: 'industry-area-label-dom',
    })
  } else {
    industrialAreaLayer.clearLayers()
    clearDomLabels(industrialAreaLabels)
  }

  if (showManufacturingCities.value) {
    addPointLayer(manufacturingCityLayer, manufacturingCityLabels, manufacturingCities, {
      color: '#1e3a8a',
      fillColor: '#bfdbfe',
      radius: 5.4,
      labelClassName: 'manufacture-label-dom',
    })
  } else {
    manufacturingCityLayer.clearLayers()
    clearDomLabels(manufacturingCityLabels)
  }

  if (showServiceCities.value) {
    addPointLayer(serviceCityLayer, serviceCityLabels, serviceCities, {
      color: '#7c3aed',
      fillColor: '#ddd6fe',
      radius: 5.6,
      labelClassName: 'service-label-dom',
    })
  } else {
    serviceCityLayer.clearLayers()
    clearDomLabels(serviceCityLabels)
  }

  if (showPorts.value) {
    addPointLayer(portLayer, portLabels, ports, {
      color: '#0369a1',
      fillColor: '#bae6fd',
      radius: 5.5,
      labelClassName: 'port-label-dom',
    })
  } else {
    portLayer.clearLayers()
    clearDomLabels(portLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  industrialAreaLayer.clearLayers()
  manufacturingCityLayer.clearLayers()
  serviceCityLayer.clearLayers()
  portLayer.clearLayers()

  if (map.hasLayer(industrialAreaLayer)) industrialAreaLayer.removeFrom(map)
  if (map.hasLayer(manufacturingCityLayer)) manufacturingCityLayer.removeFrom(map)
  if (map.hasLayer(serviceCityLayer)) serviceCityLayer.removeFrom(map)
  if (map.hasLayer(portLayer)) portLayer.removeFrom(map)

  clearDomLabels(industrialAreaLabels)
  clearDomLabels(manufacturingCityLabels)
  clearDomLabels(serviceCityLabels)
  clearDomLabels(portLabels)
}

onMounted(async () => {
  map = L.map('westernEuropeIndustryMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 7,
    dragging: true,
    scrollWheelZoom: true,
    zoomAnimation: false,
    markerZoomAnimation: false,
    fadeAnimation: false,
  }).setView([centerLat, centerLng], zoomLevel)

  switchBaseLayer()
  initLabelPane()
  bindMapLabelEvents()
  refreshMapLayers()

  await nextTick()

  requestAnimationFrame(() => {
    map?.invalidateSize(false)
    scheduleUpdateLabels()
  })
})

onUnmounted(() => {
  if (updateLabelRaf) {
    cancelAnimationFrame(updateLabelRaf)
    updateLabelRaf = 0
  }

  unbindMapLabelEvents()
  cleanupMapLayers()

  if (baseLayer && map) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  if (labelPane) {
    labelPane.remove()
    labelPane = null
  }

  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped lang="scss">
.industry-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.industry-header {
  margin-bottom: 32px;
}

.industry-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.industry-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.industry-content-right {
  width: 61%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  position: relative;
}

:deep(.leaflet-map) {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.industry-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.industry-card-01 {
  background: #eff8ff;
  border-color: #cfefff;
}

.industry-card-02 {
  background: #f0f7fb;
  border-color: #d3e6f0;
}

.industry-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.industry-card-04 {
  background: #f3f8fb;
  border-color: #cee3ed;
}

.industry-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.industry-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.industry-card-05 .industry-card-header,
.industry-card-05 .iconfont {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-6 {
  margin-bottom: 6px;
}

.industry-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 12px 0;
}

.feature-box {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
}

.feature-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 4px;
}

.feature-value {
  font-size: 18px;
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 4px;
}

.feature-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
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

.industry-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.industry-type-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.industry-type-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.industry-type-title {
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 4px;
}

.industry-type-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}

.service-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.service-item:last-child {
  margin-bottom: 0;
}

.item-title {
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 4px;
}

.item-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.city-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.city-chip {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  background: #fff;
  border: 1px solid rgba(52, 167, 245, 0.32);
  color: #0f6fa8;
}

.mini-chart {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
}

.mini-chart-title {
  font-weight: bold;
  font-size: 13px;
  color: #0f6fa8;
  margin-bottom: 8px;
}

.mini-bar-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.mini-bar-row:last-child {
  margin-bottom: 0;
}

.mini-bar-label {
  width: 72px;
  flex-shrink: 0;
  font-size: 12px;
  color: #444;
}

.mini-bar-track {
  flex: 1;
  height: 10px;
  border-radius: 999px;
  background: #f1f5f9;
  overflow: hidden;
}

.mini-bar-fill {
  height: 100%;
  border-radius: 999px;
}

.bar-service {
  width: 90%;
  background: var(--primary-color);
}

.bar-manufacture {
  width: 78%;
  background: #6366f1;
}

.bar-trade {
  width: 72%;
  background: #0ea5e9;
}

.bar-traditional {
  width: 46%;
  background: #94a3b8;
}

.chart-tip {
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.45;
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

.map-tip {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #666;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.map-control-panel {
  position: absolute;
  top: 48px;
  right: 10px;
  width: 210px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #333;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.15);
}

.panel-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #0f3554;
}

.map-control-panel label {
  display: block;
  margin-bottom: 6px;
}

.map-control-panel label:last-of-type {
  margin-bottom: 0;
}

.map-legend {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
}

.legend-title {
  font-weight: bold;
  margin-bottom: 6px;
}

.legend-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  line-height: 1.35;
}

.legend-row:last-child {
  margin-bottom: 0;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.industry-area {
  background: rgba(52, 167, 245, 0.22);
  border: 1px solid #0f78b8;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.manufacture-dot {
  background: #bfdbfe;
  border: 2px solid #1e3a8a;
  box-sizing: border-box;
}

.service-dot {
  background: #ddd6fe;
  border: 2px solid #7c3aed;
  box-sizing: border-box;
}

.port-dot {
  background: #bae6fd;
  border: 2px solid #0369a1;
  box-sizing: border-box;
}

:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.industry-area-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0f6fa8;
  background: rgba(239, 248, 255, 0.94);
  border: 1px solid rgba(52, 167, 245, 0.62);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.manufacture-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #1e3a8a;
  background: rgba(239, 246, 255, 0.94);
  border: 1px solid rgba(30, 58, 138, 0.55);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.service-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #6d28d9;
  background: rgba(245, 243, 255, 0.94);
  border: 1px solid rgba(124, 58, 237, 0.5);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.port-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0369a1;
  background: rgba(240, 249, 255, 0.94);
  border: 1px solid rgba(3, 105, 161, 0.5);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
