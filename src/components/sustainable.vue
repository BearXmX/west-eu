<template>
  <div class="sustainable-container">
    <div class="sustainable-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="sustainable-content">
      <!-- 左侧内容区 -->
      <div class="sustainable-content-left">
        <div class="sustainable-card sustainable-card-01">
          <div class="sustainable-card-header"><i class="iconfont icon-huiyuanfazhanqushi"></i>可持续发展总体特征</div>

          <p class="mb-8">
            欧洲西部经济发达、城市密集、能源消费量大，因此十分重视环境保护、资源节约和低碳转型。
            许多国家积极发展<strong>可再生能源、绿色交通、循环经济和低碳生活</strong>。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">发展方向</div>
              <div class="feature-value">绿色转型</div>
              <div class="feature-desc">减少污染排放，提高资源利用效率，发展清洁能源。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">区域目标</div>
              <div class="feature-value">低碳生活</div>
              <div class="feature-desc">倡导节能出行、垃圾分类、生态保护和绿色消费。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              欧洲西部可持续发展体现了
              <strong>经济发展、环境保护和社会生活改善</strong>之间的协调。
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-02">
          <div class="sustainable-card-header"><i class="iconfont icon-nengyuan"></i>绿色转型路径</div>

          <div class="green-type-grid">
            <div class="green-type-card">
              <div class="green-type-icon">🌬️</div>
              <div class="green-type-title">风能开发</div>
              <div class="green-type-desc">北海沿岸风力资源丰富，英国、德国、丹麦、荷兰等国积极发展海上风电。</div>
            </div>

            <div class="green-type-card">
              <div class="green-type-icon">☀️</div>
              <div class="green-type-title">太阳能利用</div>
              <div class="green-type-desc">南欧日照条件较好，西班牙、意大利等地太阳能开发潜力较大。</div>
            </div>

            <div class="green-type-card">
              <div class="green-type-icon">🚄</div>
              <div class="green-type-title">绿色交通</div>
              <div class="green-type-desc">高速铁路、城市轨道交通、自行车出行和公共交通体系较完善。</div>
            </div>

            <div class="green-type-card">
              <div class="green-type-icon">♻️</div>
              <div class="green-type-title">循环经济</div>
              <div class="green-type-desc">推动垃圾分类、资源回收、节能建筑和工业废弃物再利用。</div>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-03">
          <div class="sustainable-card-header"><i class="iconfont icon-qiyuan"></i>环境治理与生态保护</div>

          <p class="mb-8">欧洲西部许多国家重视空气、水体、土壤和生态系统保护，并通过跨国合作治理河流、海洋和大气污染。</p>

          <div class="governance-item">
            <div class="item-title">莱茵河治理</div>
            <div class="item-desc">流经多个国家，需要跨国合作进行水质保护、航运管理和生态修复。</div>
          </div>

          <div class="governance-item">
            <div class="item-title">北海生态保护</div>
            <div class="item-desc">沿岸国家共同关注海洋污染、渔业资源保护和海上能源开发的环境影响。</div>
          </div>

          <div class="governance-item">
            <div class="item-title">城市低碳治理</div>
            <div class="item-desc">通过公共交通、节能建筑、绿地建设和垃圾分类改善城市环境。</div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-04">
          <div class="sustainable-card-header"><i class="iconfont icon-chengshi"></i>低碳城市与生活方式</div>

          <div class="city-grid">
            <div class="city-chip">哥本哈根</div>
            <div class="city-chip">阿姆斯特丹</div>
            <div class="city-chip">斯德哥尔摩</div>
            <div class="city-chip">弗赖堡</div>
            <div class="city-chip">奥斯陆</div>
            <div class="city-chip">维也纳</div>
            <div class="city-chip">苏黎世</div>
            <div class="city-chip">巴黎</div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-05">
          <div class="sustainable-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记目标：</strong>协调经济发展与环境保护。</li>
            <li><strong>二记能源：</strong>发展风能、太阳能等可再生能源。</li>
            <li><strong>三记交通：</strong>推广公共交通、高铁和低碳出行。</li>
            <li><strong>四记治理：</strong>重视河流、海洋、大气和城市环境治理。</li>
            <li><strong>五记生活：</strong>垃圾分类、节能建筑、绿色消费体现低碳生活。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="sustainable-content-right">
        <div id="westernEuropeSustainableMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看可持续发展示意</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showWindEnergy" @change="refreshMapLayers" />
            风能开发区
          </label>

          <label>
            <input type="checkbox" v-model="showSolarEnergy" @change="refreshMapLayers" />
            太阳能开发区
          </label>

          <label>
            <input type="checkbox" v-model="showGreenCities" @change="refreshMapLayers" />
            低碳城市
          </label>

          <label>
            <input type="checkbox" v-model="showGovernanceLines" @change="refreshMapLayers" />
            环境治理合作
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area wind-area"></span>
              <span>风能开发区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area solar-area"></span>
              <span>太阳能开发区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot city-dot"></span>
              <span>低碳城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-line governance-line"></span>
              <span>环境治理合作</span>
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

type SustainableArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type SustainablePoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type SustainableLine = {
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

const centerLat = 51.5
const centerLng = 7.5
const zoomLevel = 4

const useGoogle = ref(false)
const showWindEnergy = ref(true)
const showSolarEnergy = ref(true)
const showGreenCities = ref(true)
const showGovernanceLines = ref(true)

const windEnergyLayer = L.layerGroup()
const solarEnergyLayer = L.layerGroup()
const greenCityLayer = L.layerGroup()
const governanceLineLayer = L.layerGroup()

const windEnergyLabels: DomLabel[] = []
const solarEnergyLabels: DomLabel[] = []
const greenCityLabels: DomLabel[] = []
const governanceLineLabels: DomLabel[] = []

const windEnergyAreas: SustainableArea[] = [
  {
    name: '北海海上风电区',
    lat: 55.0,
    lng: 4.0,
    radius: 420000,
    desc: '北海沿岸风力资源丰富，英国、德国、丹麦、荷兰等国发展海上风电。',
  },
  {
    name: '丹麦风能开发区',
    lat: 56.0,
    lng: 10.0,
    radius: 180000,
    desc: '丹麦风能利用较有代表性，是欧洲风电发展较早的国家之一。',
  },
  {
    name: '英国近海风电区',
    lat: 53.5,
    lng: 1.5,
    radius: 240000,
    desc: '英国近海风力资源较好，海上风电开发规模较大。',
  },
]

const solarEnergyAreas: SustainableArea[] = [
  {
    name: '西班牙太阳能区',
    lat: 39.0,
    lng: -3.0,
    radius: 320000,
    desc: '西班牙日照条件较好，太阳能开发潜力较大。',
  },
  {
    name: '意大利南部太阳能区',
    lat: 40.5,
    lng: 15.0,
    radius: 240000,
    desc: '意大利南部日照较充足，适合发展太阳能。',
  },
  {
    name: '希腊太阳能区',
    lat: 38.5,
    lng: 23.0,
    radius: 210000,
    desc: '希腊纬度较低、日照充足，太阳能利用条件较好。',
  },
]

const greenCities: SustainablePoint[] = [
  {
    name: '哥本哈根',
    lat: 55.6761,
    lng: 12.5683,
    desc: '重视自行车出行、清洁能源和城市低碳治理。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿姆斯特丹',
    lat: 52.3676,
    lng: 4.9041,
    desc: '自行车交通和公共交通体系发达，城市绿色出行特色明显。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '斯德哥尔摩',
    lat: 59.3293,
    lng: 18.0686,
    desc: '北欧重要绿色城市，重视水环境保护和低碳生活。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '弗赖堡',
    lat: 47.999,
    lng: 7.8421,
    desc: '德国代表性生态城市之一，太阳能利用和低碳社区建设突出。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '奥斯陆',
    lat: 59.9139,
    lng: 10.7522,
    desc: '推广电动交通、绿色空间和低碳城市治理。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴黎',
    lat: 48.8566,
    lng: 2.3522,
    desc: '推动公共交通、城市绿化和低碳生活方式转型。',
    offsetX: 10,
    offsetY: -2,
  },
]

const governanceLines: SustainableLine[] = [
  {
    name: '莱茵河跨国治理',
    path: [
      [47.3769, 8.5417],
      [50.1109, 8.6821],
      [51.45, 7.2],
      [51.95, 4.14],
    ],
    desc: '莱茵河流经多个国家，需要跨国合作治理水环境、航运和生态保护。',
    color: '#2563eb',
  },
  {
    name: '北海生态保护合作',
    path: [
      [53.5, 1.5],
      [55.0, 4.0],
      [56.2, 8.0],
      [57.5, 11.0],
    ],
    desc: '北海沿岸国家共同关注海洋污染、渔业资源和海上风电开发影响。',
    color: '#0ea5e9',
    dashArray: '8 6',
  },
  {
    name: '西欧低碳城市联系',
    path: [
      [55.6761, 12.5683],
      [52.3676, 4.9041],
      [48.8566, 2.3522],
      [47.999, 7.8421],
    ],
    desc: '低碳城市在绿色交通、节能建筑和城市治理方面具有示范作用。',
    color: '#22c55e',
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

  if (showWindEnergy.value) {
    windEnergyLabels.forEach(updateOneLabelPosition)
  }

  if (showSolarEnergy.value) {
    solarEnergyLabels.forEach(updateOneLabelPosition)
  }

  if (showGreenCities.value) {
    greenCityLabels.forEach(updateOneLabelPosition)
  }

  if (showGovernanceLines.value) {
    governanceLineLabels.forEach(updateOneLabelPosition)
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
  areas: SustainableArea[],
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
  points: SustainablePoint[],
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

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: SustainableLine[]) {
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
        className: 'governance-label-dom',
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

  if (showWindEnergy.value) {
    addAreaLayer(windEnergyLayer, windEnergyLabels, windEnergyAreas, {
      color: '#0284c7',
      fillColor: '#38bdf8',
      fillOpacity: 0.15,
      labelClassName: 'wind-label-dom',
    })
  } else {
    windEnergyLayer.clearLayers()
    clearDomLabels(windEnergyLabels)
  }

  if (showSolarEnergy.value) {
    addAreaLayer(solarEnergyLayer, solarEnergyLabels, solarEnergyAreas, {
      color: '#ca8a04',
      fillColor: '#facc15',
      fillOpacity: 0.18,
      labelClassName: 'solar-label-dom',
    })
  } else {
    solarEnergyLayer.clearLayers()
    clearDomLabels(solarEnergyLabels)
  }

  if (showGreenCities.value) {
    addPointLayer(greenCityLayer, greenCityLabels, greenCities, {
      color: '#15803d',
      fillColor: '#bbf7d0',
      radius: 5.6,
      labelClassName: 'green-city-label-dom',
    })
  } else {
    greenCityLayer.clearLayers()
    clearDomLabels(greenCityLabels)
  }

  if (showGovernanceLines.value) {
    addLineLayer(governanceLineLayer, governanceLineLabels, governanceLines)
  } else {
    governanceLineLayer.clearLayers()
    clearDomLabels(governanceLineLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  windEnergyLayer.clearLayers()
  solarEnergyLayer.clearLayers()
  greenCityLayer.clearLayers()
  governanceLineLayer.clearLayers()

  if (map.hasLayer(windEnergyLayer)) windEnergyLayer.removeFrom(map)
  if (map.hasLayer(solarEnergyLayer)) solarEnergyLayer.removeFrom(map)
  if (map.hasLayer(greenCityLayer)) greenCityLayer.removeFrom(map)
  if (map.hasLayer(governanceLineLayer)) governanceLineLayer.removeFrom(map)

  clearDomLabels(windEnergyLabels)
  clearDomLabels(solarEnergyLabels)
  clearDomLabels(greenCityLabels)
  clearDomLabels(governanceLineLabels)
}

onMounted(async () => {
  map = L.map('westernEuropeSustainableMap', {
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
.sustainable-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.sustainable-header {
  margin-bottom: 32px;
}

.sustainable-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.sustainable-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.sustainable-content-right {
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

.sustainable-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.sustainable-card-01 {
  background: #eff8ff;
  border-color: #cfefff;
}

.sustainable-card-02 {
  background: #f0f7fb;
  border-color: #d3e6f0;
}

.sustainable-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.sustainable-card-04 {
  background: #f3f8fb;
  border-color: #cee3ed;
}

.sustainable-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.sustainable-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.sustainable-card-05 .sustainable-card-header,
.sustainable-card-05 .iconfont {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.mb-8 {
  margin-bottom: 8px;
}

.sustainable-card p {
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

.green-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.green-type-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.green-type-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.green-type-title {
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 4px;
}

.green-type-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}

.governance-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.governance-item:last-child {
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

.bar-energy {
  width: 86%;
  background: #22c55e;
}

.bar-transport {
  width: 82%;
  background: var(--primary-color);
}

.bar-governance {
  width: 78%;
  background: #0ea5e9;
}

.bar-cycle {
  width: 70%;
  background: #84cc16;
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

.wind-area {
  background: rgba(56, 189, 248, 0.22);
  border: 1px solid #0284c7;
}

.solar-area {
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

.city-dot {
  background: #bbf7d0;
  border: 2px solid #15803d;
  box-sizing: border-box;
}

.legend-line {
  width: 24px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.governance-line {
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

:deep(.wind-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0369a1;
  background: rgba(240, 249, 255, 0.94);
  border: 1px solid rgba(3, 105, 161, 0.5);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.solar-label-dom) {
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

:deep(.green-city-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #15803d;
  background: rgba(240, 253, 244, 0.92);
  border: 1px solid rgba(22, 163, 74, 0.6);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.governance-label-dom) {
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
