<template>
  <div class="eu-container">
    <div class="eu-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="eu-content">
      <!-- 左侧内容区 -->
      <div class="eu-content-left">
        <div class="eu-card eu-card-01">
          <div class="eu-card-header"><i class="iconfont icon-quyuxinxi"></i>区域合作总体特征</div>

          <p class="mb-8">
            欧洲西部国家众多，经济发达，国家之间联系密切。为了加强经济、政治、交通、科技和环境等方面合作，
            许多国家加入了<strong>欧洲联盟</strong>，推动区域一体化发展。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">合作基础</div>
              <div class="feature-value">国家众多</div>
              <div class="feature-desc">欧洲西部国家面积较小，联系密切，合作需求强。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">发展方向</div>
              <div class="feature-value">一体化</div>
              <div class="feature-desc">加强市场、交通、货币、人员流动和政策协调。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              欧盟是欧洲区域合作的典型代表，体现了欧洲西部
              <strong>经济联系紧密、区域合作程度高、一体化发展明显</strong>的特点。
            </div>
          </div>
        </div>

        <div class="eu-card eu-card-02">
          <div class="eu-card-header"><i class="iconfont icon-oumeng"></i>欧盟的主要作用</div>

          <div class="cooperation-grid">
            <div class="cooperation-card">
              <div class="cooperation-icon">🛒</div>
              <div class="cooperation-title">统一市场</div>
              <div class="cooperation-desc">推动商品、服务、资本和人员在成员国之间更加自由流动。</div>
            </div>

            <div class="cooperation-card">
              <div class="cooperation-icon">💶</div>
              <div class="cooperation-title">货币合作</div>
              <div class="cooperation-desc">部分国家使用欧元，便利贸易、旅游和跨国经济往来。</div>
            </div>

            <div class="cooperation-card">
              <div class="cooperation-icon">🚄</div>
              <div class="cooperation-title">交通联系</div>
              <div class="cooperation-desc">跨国铁路、公路、航空和港口网络加强城市和国家联系。</div>
            </div>

            <div class="cooperation-card">
              <div class="cooperation-icon">🌱</div>
              <div class="cooperation-title">绿色转型</div>
              <div class="cooperation-desc">在环境保护、低碳发展、能源转型等方面进行政策协调。</div>
            </div>
          </div>
        </div>

        <div class="eu-card eu-card-03">
          <div class="eu-card-header"><i class="iconfont icon-chengshi"></i>重要合作机构与城市</div>

          <p class="mb-8">
            欧洲西部一些城市承担着重要的区域合作功能，如布鲁塞尔、法兰克福、斯特拉斯堡、卢森堡等， 它们在政治、金融、法律和跨国事务中具有重要地位。
          </p>

          <div class="city-function-item">
            <div class="item-title">布鲁塞尔</div>
            <div class="item-desc">欧盟重要机构所在地之一，是欧洲区域合作的重要政治中心。</div>
          </div>

          <div class="city-function-item">
            <div class="item-title">法兰克福</div>
            <div class="item-desc">欧洲重要金融中心，体现欧洲经济和金融合作功能。</div>
          </div>

          <div class="city-function-item">
            <div class="item-title">斯特拉斯堡、卢森堡</div>
            <div class="item-desc">承担欧洲议会、司法等区域合作功能，体现多中心合作特点。</div>
          </div>
        </div>

        <div class="eu-card eu-card-04">
          <div class="eu-card-header"><i class="iconfont icon-CPhezuo"></i>区域合作的影响</div>

          <div class="impact-item">
            <div class="item-title">促进经济发展</div>
            <div class="item-desc">统一市场和跨国贸易促进商品、资本、技术和服务流动。</div>
          </div>

          <div class="impact-item">
            <div class="item-title">便利居民生活</div>
            <div class="item-desc">跨境就业、学习、旅游和购物更加便利，人员往来更加频繁。</div>
          </div>

          <div class="impact-item">
            <div class="item-title">增强国际影响力</div>
            <div class="item-desc">成员国通过合作提升整体竞争力和国际话语权。</div>
          </div>

          <div class="impact-item">
            <div class="item-title">推动共同治理</div>
            <div class="item-desc">在环境、能源、交通、安全等方面开展跨国治理和协调。</div>
          </div>
        </div>

        <div class="eu-card eu-card-05">
          <div class="eu-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记背景：</strong>欧洲西部国家众多，经济发达，联系密切。</li>
            <li><strong>二记组织：</strong>欧盟是区域合作和一体化发展的典型组织。</li>
            <li><strong>三记作用：</strong>促进贸易、交通、金融、科技和人员往来。</li>
            <li><strong>四记城市：</strong>布鲁塞尔、法兰克福、斯特拉斯堡等具有合作功能。</li>
            <li><strong>五记影响：</strong>加强区域联系，提高整体竞争力，推动可持续发展。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="eu-content-right">
        <div id="westernEuropeEuMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看欧盟与区域合作格局</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showEuCore" @change="refreshMapLayers" />
            欧盟核心合作区
          </label>

          <label>
            <input type="checkbox" v-model="showEurozone" @change="refreshMapLayers" />
            欧元区示意
          </label>

          <label>
            <input type="checkbox" v-model="showCooperationCities" @change="refreshMapLayers" />
            合作功能城市
          </label>

          <label>
            <input type="checkbox" v-model="showCooperationLines" @change="refreshMapLayers" />
            区域合作联系
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area eu-core-area"></span>
              <span>欧盟核心合作区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area eurozone-area"></span>
              <span>欧元区示意</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot cooperation-city-dot"></span>
              <span>合作功能城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-line cooperation-line"></span>
              <span>区域合作联系</span>
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

type EuArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type EuPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type EuLine = {
  name: string
  path: [number, number][]
  desc: string
  color: string
  dashArray?: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 50.8
const centerLng = 6.0
const zoomLevel = 4

const useGoogle = ref(false)
const showEuCore = ref(true)
const showEurozone = ref(true)
const showCooperationCities = ref(true)
const showCooperationLines = ref(true)

const euCoreLayer = L.layerGroup()
const eurozoneLayer = L.layerGroup()
const cooperationCityLayer = L.layerGroup()
const cooperationLineLayer = L.layerGroup()

const euCoreLabels: DomLabel[] = []
const eurozoneLabels: DomLabel[] = []
const cooperationCityLabels: DomLabel[] = []
const cooperationLineLabels: DomLabel[] = []

const euCoreAreas: EuArea[] = [
  {
    name: '西北欧合作核心区',
    lat: 51.0,
    lng: 4.8,
    radius: 360000,
    desc: '荷兰、比利时、德国西部、法国北部等地经济联系密切，是欧洲合作核心区之一。',
  },
  {
    name: '莱茵河经济合作带',
    lat: 50.4,
    lng: 7.2,
    radius: 270000,
    desc: '依托莱茵河航运、工业区和城市群，形成重要跨国经济联系带。',
  },
  {
    name: '法德合作轴',
    lat: 48.6,
    lng: 5.8,
    radius: 250000,
    desc: '法国和德国是欧洲区域合作中的重要国家，经济和交通联系密切。',
  },
]

const eurozoneAreas: EuArea[] = [
  {
    name: '欧元区西部核心',
    lat: 49.5,
    lng: 7.8,
    radius: 470000,
    desc: '德国、法国、荷兰、比利时、卢森堡等国家使用欧元，便利跨国贸易和人员往来。',
  },
  {
    name: '南欧欧元区',
    lat: 43.2,
    lng: 10.0,
    radius: 420000,
    desc: '意大利、西班牙、葡萄牙、希腊等国是欧元区的重要组成部分。',
  },
]

const cooperationCities: EuPoint[] = [
  {
    name: '布鲁塞尔',
    lat: 50.8503,
    lng: 4.3517,
    desc: '欧盟重要机构所在地之一，是欧洲区域合作的重要政治中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '法兰克福',
    lat: 50.1109,
    lng: 8.6821,
    desc: '欧洲重要金融中心，体现欧洲经济和金融合作。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '斯特拉斯堡',
    lat: 48.5734,
    lng: 7.7521,
    desc: '欧洲区域合作重要城市之一，具有政治和议会功能。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '卢森堡',
    lat: 49.6116,
    lng: 6.1319,
    desc: '欧洲重要合作机构所在地之一，也具有金融服务功能。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴黎',
    lat: 48.8566,
    lng: 2.3522,
    desc: '法国首都，欧洲重要经济、文化和交通中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '柏林',
    lat: 52.52,
    lng: 13.405,
    desc: '德国首都，欧洲重要政治和经济中心之一。',
    offsetX: 10,
    offsetY: -2,
  },
]

const cooperationLines: EuLine[] = [
  {
    name: '巴黎—布鲁塞尔—阿姆斯特丹联系',
    path: [
      [48.8566, 2.3522],
      [50.8503, 4.3517],
      [52.3676, 4.9041],
    ],
    desc: '连接西欧重要政治、经济和交通城市，体现跨国城市合作。',
    color: '#2563eb',
  },
  {
    name: '布鲁塞尔—卢森堡—法兰克福联系',
    path: [
      [50.8503, 4.3517],
      [49.6116, 6.1319],
      [50.1109, 8.6821],
    ],
    desc: '连接欧盟合作城市和金融中心，体现区域合作网络。',
    color: '#0ea5e9',
  },
  {
    name: '巴黎—斯特拉斯堡—柏林联系',
    path: [
      [48.8566, 2.3522],
      [48.5734, 7.7521],
      [52.52, 13.405],
    ],
    desc: '体现法国、德国之间的重要交通和区域合作联系。',
    color: '#6366f1',
    dashArray: '8 6',
  },
  {
    name: '北意大利—中欧联系',
    path: [
      [45.4642, 9.19],
      [47.3769, 8.5417],
      [50.1109, 8.6821],
    ],
    desc: '连接南欧和中欧经济核心区，体现跨阿尔卑斯交通与经济联系。',
    color: '#f97316',
    dashArray: '8 6',
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

  if (showEuCore.value) {
    euCoreLabels.forEach(updateOneLabelPosition)
  }

  if (showEurozone.value) {
    eurozoneLabels.forEach(updateOneLabelPosition)
  }

  if (showCooperationCities.value) {
    cooperationCityLabels.forEach(updateOneLabelPosition)
  }

  if (showCooperationLines.value) {
    cooperationLineLabels.forEach(updateOneLabelPosition)
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
  areas: EuArea[],
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
  points: EuPoint[],
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

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: EuLine[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  lines.forEach(item => {
    const line = L.polyline(item.path, {
      color: item.color,
      weight: 3,
      opacity: 0.82,
      dashArray: item.dashArray || '',
    }).addTo(targetLayer)

    bindInfoPopup(line, item.name, item.desc)

    const midIndex = Math.floor(item.path.length / 2)
    const midPoint = item.path[midIndex]

    if (midPoint) {
      const label = createDomLabel({
        lat: midPoint[0],
        lng: midPoint[1],
        content: item.name,
        className: 'cooperation-line-label-dom',
        offsetX: 0,
        offsetY: -10,
      })

      if (label) targetLabels.push(label)
    }
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showEuCore.value) {
    addAreaLayer(euCoreLayer, euCoreLabels, euCoreAreas, {
      color: '#0f78b8',
      fillColor: '#34a7f5',
      fillOpacity: 0.15,
      labelClassName: 'eu-core-label-dom',
    })
  } else {
    euCoreLayer.clearLayers()
    clearDomLabels(euCoreLabels)
  }

  if (showEurozone.value) {
    addAreaLayer(eurozoneLayer, eurozoneLabels, eurozoneAreas, {
      color: '#ca8a04',
      fillColor: '#facc15',
      fillOpacity: 0.13,
      labelClassName: 'eurozone-label-dom',
    })
  } else {
    eurozoneLayer.clearLayers()
    clearDomLabels(eurozoneLabels)
  }

  if (showCooperationCities.value) {
    addPointLayer(cooperationCityLayer, cooperationCityLabels, cooperationCities, {
      color: '#7c3aed',
      fillColor: '#ddd6fe',
      radius: 5.6,
      labelClassName: 'cooperation-city-label-dom',
    })
  } else {
    cooperationCityLayer.clearLayers()
    clearDomLabels(cooperationCityLabels)
  }

  if (showCooperationLines.value) {
    addLineLayer(cooperationLineLayer, cooperationLineLabels, cooperationLines)
  } else {
    cooperationLineLayer.clearLayers()
    clearDomLabels(cooperationLineLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  euCoreLayer.clearLayers()
  eurozoneLayer.clearLayers()
  cooperationCityLayer.clearLayers()
  cooperationLineLayer.clearLayers()

  if (map.hasLayer(euCoreLayer)) euCoreLayer.removeFrom(map)
  if (map.hasLayer(eurozoneLayer)) eurozoneLayer.removeFrom(map)
  if (map.hasLayer(cooperationCityLayer)) cooperationCityLayer.removeFrom(map)
  if (map.hasLayer(cooperationLineLayer)) cooperationLineLayer.removeFrom(map)

  clearDomLabels(euCoreLabels)
  clearDomLabels(eurozoneLabels)
  clearDomLabels(cooperationCityLabels)
  clearDomLabels(cooperationLineLabels)
}

onMounted(async () => {
  map = L.map('westernEuropeEuMap', {
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
.eu-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.eu-header {
  margin-bottom: 32px;
}

.eu-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.eu-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.eu-content-right {
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

.eu-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.eu-card-01 {
  background: #eff8ff;
  border-color: #cfefff;
}

.eu-card-02 {
  background: #f0f7fb;
  border-color: #d3e6f0;
}

.eu-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.eu-card-04 {
  background: #f3f8fb;
  border-color: #cee3ed;
}

.eu-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.eu-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.eu-card-05 .eu-card-header,
.eu-card-05 .iconfont {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.mb-8 {
  margin-bottom: 8px;
}

.eu-card p {
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

.cooperation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.cooperation-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.cooperation-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.cooperation-title {
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 4px;
}

.cooperation-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}

.city-function-item,
.impact-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.city-function-item:last-child,
.impact-item:last-child {
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

.eu-core-area {
  background: rgba(52, 167, 245, 0.22);
  border: 1px solid #0f78b8;
}

.eurozone-area {
  background: rgba(250, 204, 21, 0.28);
  border: 1px solid #ca8a04;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.cooperation-city-dot {
  background: #ddd6fe;
  border: 2px solid #7c3aed;
  box-sizing: border-box;
}

.legend-line {
  width: 24px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.cooperation-line {
  border-top: 3px solid #2563eb;
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

:deep(.eu-core-label-dom) {
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

:deep(.eurozone-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #a16207;
  background: rgba(254, 252, 232, 0.95);
  border: 1px solid rgba(202, 138, 4, 0.58);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.cooperation-city-label-dom) {
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

:deep(.cooperation-line-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #1d4ed8;
  background: rgba(239, 246, 255, 0.94);
  border: 1px solid rgba(37, 99, 235, 0.55);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
