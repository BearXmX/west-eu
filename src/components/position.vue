<template>
  <div class="position-container">
    <div class="position-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="position-content">
      <!-- 左侧内容区 -->
      <div class="position-content-left">
        <div class="position-card position-card-01">
          <div class="position-card-header"><i class="iconfont icon-diqiu"></i>位置总体特征</div>

          <p class="mb-8">
            欧洲西部位于<strong>亚欧大陆西部</strong>，西临大西洋，北临北冰洋，南临地中海， 是世界上经济发达、城市密集、对外联系便利的重要地区。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">半球位置</div>
              <div class="feature-value">北半球、东半球</div>
              <div class="feature-desc">主要位于中高纬度地区，温带特征明显。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">海陆位置</div>
              <div class="feature-value">大西洋东岸</div>
              <div class="feature-desc">海岸线曲折，多半岛、岛屿、内海和海湾。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              欧洲西部的位置特点可以概括为：
              <strong>海陆位置优越、海岸线曲折、对外交通便利、区域联系紧密</strong>。
            </div>
          </div>
        </div>

        <div class="position-card position-card-02">
          <div class="position-card-header"><i class="iconfont icon-jingweidu"></i>范围识记</div>

          <div class="rule-item">
            <div class="rule-title">纬度范围</div>
            <div class="rule-desc">大致位于北纬 35°—70°之间，多数地区处于北温带。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">海洋环绕</div>
            <div class="rule-desc">西临大西洋，北临北冰洋，南临地中海，受海洋影响明显。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">主要国家</div>
            <div class="rule-desc">包括英国、法国、德国、意大利、西班牙、荷兰、比利时、瑞士等国家。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">区域地位</div>
            <div class="rule-desc">欧洲西部是世界发达国家集中的地区，也是欧盟一体化发展的重要区域。</div>
          </div>
        </div>

        <div class="position-card position-card-03">
          <div class="position-card-header"><i class="iconfont icon-anchor-full"></i>濒临海洋与交通通道</div>

          <div class="city-type-grid">
            <div class="city-type-card ocean">
              <div class="city-type-icon">🌊</div>
              <div class="city-type-title">大西洋</div>
              <div class="city-type-desc">位于欧洲西部西侧，带来湿润气流，影响气候与航运。</div>
            </div>

            <div class="city-type-card ocean">
              <div class="city-type-icon">❄️</div>
              <div class="city-type-title">北冰洋</div>
              <div class="city-type-desc">位于欧洲北部，影响北欧地区的自然环境。</div>
            </div>

            <div class="city-type-card sea">
              <div class="city-type-icon">☀️</div>
              <div class="city-type-title">地中海</div>
              <div class="city-type-desc">位于欧洲南部，沿岸形成典型地中海气候与旅游区。</div>
            </div>

            <div class="city-type-card strait">
              <div class="city-type-icon">🚢</div>
              <div class="city-type-title">英吉利海峡</div>
              <div class="city-type-desc">位于英国与法国之间，是欧洲重要海上交通通道。</div>
            </div>
          </div>
        </div>

        <div class="position-card position-card-05">
          <div class="position-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一看半球：</strong>欧洲西部主要位于北半球、东半球。</li>
            <li><strong>二看海陆：</strong>位于亚欧大陆西部，大西洋东岸。</li>
            <li><strong>三看纬度：</strong>大部分位于北温带，气候温和。</li>
            <li><strong>四看海岸：</strong>海岸线曲折，多半岛、岛屿、海湾和内海。</li>
            <li><strong>五看联系：</strong>海运便利，对外贸易发达，区域合作密切。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="position-content-right">
        <div id="positionMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看欧洲西部位置与范围</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showRegionArea" @change="refreshMapLayers" />
            欧洲西部范围
          </label>

          <label>
            <input type="checkbox" v-model="showOceanAreas" @change="refreshMapLayers" />
            濒临海洋
          </label>

          <label>
            <input type="checkbox" v-model="showCountries" @change="refreshMapLayers" />
            主要国家
          </label>

          <label>
            <input type="checkbox" v-model="showTrafficNodes" @change="refreshMapLayers" />
            重要海峡 / 交通节点
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area region-area"></span>
              <span>欧洲西部范围</span>
            </div>

            <div class="legend-row">
              <span class="legend-area ocean-area"></span>
              <span>濒临海洋</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot country-dot"></span>
              <span>主要国家</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot traffic-dot"></span>
              <span>重要交通节点</span>
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
import { GEOJSON_MAP, TILE_MAP } from '@/resource'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

type PositionPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type PositionArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  color: string
}

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

let regionLayer: L.GeoJSON | null = null
let regionAbortController: AbortController | null = null

const centerLat = 50.5
const centerLng = 7.5
const zoomLevel = 4

const useGoogle = ref(false)
const showRegionArea = ref(true)
const showOceanAreas = ref(true)
const showCountries = ref(true)
const showTrafficNodes = ref(true)

const oceanLayer = L.layerGroup()
const countryLayer = L.layerGroup()
const trafficLayer = L.layerGroup()

const regionLabels: DomLabel[] = []
const oceanLabels: DomLabel[] = []
const countryLabels: DomLabel[] = []
const trafficLabels: DomLabel[] = []

const oceanAreas: PositionArea[] = [
  {
    name: '大西洋',
    lat: 47.5,
    lng: -18.5,
    radius: 620000,
    color: '#0ea5e9',
    desc: '位于欧洲西部西侧，是影响欧洲西部气候和交通的重要海洋。',
  },
  {
    name: '北海',
    lat: 56.0,
    lng: 3.2,
    radius: 300000,
    color: '#38bdf8',
    desc: '位于英国与欧洲大陆之间，沿岸港口和工业城市较多。',
  },
  {
    name: '地中海',
    lat: 40.0,
    lng: 8.5,
    radius: 420000,
    color: '#06b6d4',
    desc: '位于欧洲南部，沿岸气候、农业和旅游业特色鲜明。',
  },
]

const countries: PositionPoint[] = [
  {
    name: '英国',
    lat: 54.5,
    lng: -2.5,
    desc: '位于欧洲西部的岛国，隔英吉利海峡与欧洲大陆相望。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '法国',
    lat: 46.5,
    lng: 2.2,
    desc: '位于欧洲西部，西临大西洋，南临地中海。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '德国',
    lat: 51.0,
    lng: 10.2,
    desc: '位于欧洲中部偏西，是欧洲重要经济体。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '意大利',
    lat: 42.8,
    lng: 12.5,
    desc: '位于地中海北岸，亚平宁半岛纵贯南北。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '西班牙',
    lat: 40.3,
    lng: -3.7,
    desc: '位于伊比利亚半岛，西临大西洋，东南临地中海。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '荷兰',
    lat: 52.2,
    lng: 5.3,
    desc: '位于欧洲西部低地地区，港口、交通和外向型经济发达。',
    offsetX: 10,
    offsetY: -2,
  },
]

const trafficNodes: PositionPoint[] = [
  {
    name: '英吉利海峡',
    lat: 50.4,
    lng: 1.5,
    desc: '位于英国与法国之间，是连接北海和大西洋的重要通道。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '直布罗陀海峡',
    lat: 36.0,
    lng: -5.5,
    desc: '连接地中海与大西洋，是欧洲南部重要海上通道。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '鹿特丹港',
    lat: 51.95,
    lng: 4.14,
    desc: '欧洲重要港口，体现欧洲西部海运和对外贸易优势。',
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

  const url = useGoogle.value ? TILE_MAP['google'] : TILE_MAP['osm']

  baseLayer = L.tileLayer(url!, {
    attribution: '',
    minZoom: 2,
    maxZoom: 5,
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

  if (showRegionArea.value) {
    regionLabels.forEach(updateOneLabelPosition)
  }

  if (showOceanAreas.value) {
    oceanLabels.forEach(updateOneLabelPosition)
  }

  if (showCountries.value) {
    countryLabels.forEach(updateOneLabelPosition)
  }

  if (showTrafficNodes.value) {
    trafficLabels.forEach(updateOneLabelPosition)
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

async function loadRegionGeoJsonLayer() {
  if (!map) return

  if (regionAbortController) {
    regionAbortController.abort()
    regionAbortController = null
  }

  if (regionLayer) {
    regionLayer.removeFrom(map)
    regionLayer = null
  }

  clearDomLabels(regionLabels)

  const abortController = new AbortController()
  regionAbortController = abortController

  try {
    const data = await new Promise<GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>>(resolve => {
      setTimeout(() => {
        resolve(GEOJSON_MAP['欧洲西部轮廓线']!)
      }, 1000)
    })

    if (abortController.signal.aborted || !map || !showRegionArea.value) {
      return
    }

    regionLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || '#2563eb',
          weight: props.weight || 2,
          opacity: props.opacity ?? 0.95,
          fillColor: props.fillColor || '#2563eb',
          fillOpacity: props.fillOpacity ?? 0.12,
        }
      },
      onEachFeature: (feature, layer) => {
        const name = feature?.properties?.name || feature?.properties?.labelText || '欧洲西部范围'
        const desc = feature?.properties?.desc || '欧洲西部轮廓范围，位于亚欧大陆西部、大西洋东岸。'

        /*         bindInfoPopup(layer, name, desc) */
      },
    }).addTo(map)

    const label = createDomLabel({
      lat: 50.5,
      lng: 6.5,
      content: '欧洲西部范围',
      className: 'region-label-dom',
      offsetX: 0,
      offsetY: 0,
    })

    if (label) {
      regionLabels.push(label)
    }

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('欧洲西部轮廓线请求已取消')
    } else {
      console.error('加载欧洲西部轮廓线失败：', error)
      showRegionArea.value = false
      clearDomLabels(regionLabels)
    }
  } finally {
    if (regionAbortController === abortController) {
      regionAbortController = null
    }
  }
}

function clearRegionGeoJsonLayer() {
  if (regionAbortController) {
    regionAbortController.abort()
    regionAbortController = null
  }

  if (regionLayer && map) {
    regionLayer.removeFrom(map)
    regionLayer = null
  }

  clearDomLabels(regionLabels)
}

function addAreaLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], areas: PositionArea[], labelClassName: string, fillOpacity = 0.16) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  areas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: item.color,
      weight: 2,
      fillColor: item.color,
      fillOpacity,
      opacity: 0.85,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: labelClassName,
      offsetX: 0,
      offsetY: 0,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function addPointLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  points: PositionPoint[],
  markerStyle: {
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
      radius: markerStyle.radius,
      color: markerStyle.color,
      weight: 2,
      fillColor: markerStyle.fillColor,
      fillOpacity: 1,
    }).addTo(targetLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: markerStyle.labelClassName,
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showOceanAreas.value) {
    addAreaLayer(oceanLayer, oceanLabels, oceanAreas, 'ocean-label-dom', 0.13)
  } else {
    oceanLayer.clearLayers()
    clearDomLabels(oceanLabels)
  }

  if (showRegionArea.value) {
    loadRegionGeoJsonLayer()
  } else {
    clearRegionGeoJsonLayer()
  }

  if (showCountries.value) {
    addPointLayer(countryLayer, countryLabels, countries, {
      color: '#1e3a8a',
      fillColor: '#bfdbfe',
      radius: 5.4,
      labelClassName: 'country-label-dom',
    })
  } else {
    countryLayer.clearLayers()
    clearDomLabels(countryLabels)
  }

  if (showTrafficNodes.value) {
    addPointLayer(trafficLayer, trafficLabels, trafficNodes, {
      color: '#b45309',
      fillColor: '#fef3c7',
      radius: 5.8,
      labelClassName: 'traffic-label-dom',
    })
  } else {
    trafficLayer.clearLayers()
    clearDomLabels(trafficLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearRegionGeoJsonLayer()

  oceanLayer.clearLayers()
  countryLayer.clearLayers()
  trafficLayer.clearLayers()

  if (map.hasLayer(oceanLayer)) oceanLayer.removeFrom(map)
  if (map.hasLayer(countryLayer)) countryLayer.removeFrom(map)
  if (map.hasLayer(trafficLayer)) trafficLayer.removeFrom(map)

  clearDomLabels(oceanLabels)
  clearDomLabels(countryLabels)
  clearDomLabels(trafficLabels)
}

onMounted(async () => {
  map = L.map('positionMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 5,
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
.position-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.position-header {
  margin-bottom: 32px;
}

.position-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.position-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.position-content-right {
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

.position-card {
  border-radius: 8px;
  border: 1px solid #dbeafe;
  padding: 14px;
  background: #eff6ff;
}

.position-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #1e3a8a;
}

.iconfont {
  margin-right: 8px;
  color: #1e3a8a;
}

.position-card-01 {
  background: #eff6ff;
  border-color: #dbeafe;
}

.position-card-02 {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.position-card-02 .position-card-header,
.position-card-02 .iconfont {
  color: #047857;
}

.position-card-03 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.position-card-03 .position-card-header,
.position-card-03 .iconfont {
  color: #0369a1;
}

.position-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.position-card-04 .position-card-header,
.position-card-04 .iconfont {
  color: #9a3412;
}

.position-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.position-card-05 .position-card-header,
.position-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.position-card p {
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
  border: 1px solid #dbeafe;
}

.feature-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 4px;
}

.feature-value {
  font-size: 17px;
  font-weight: bold;
  color: #0f2748;
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
  border-left: 3px solid #2563eb;
  font-size: 13px;
  color: #374151;
}

.note-title {
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 4px;
}

.rule-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #10b981;
  margin-bottom: 8px;
}

.rule-item:last-child {
  margin-bottom: 0;
}

.rule-title {
  font-weight: bold;
  color: #065f46;
  margin-bottom: 4px;
}

.rule-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.city-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.city-type-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #bae6fd;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.city-type-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.city-type-title {
  font-weight: bold;
  color: #0369a1;
  margin-bottom: 4px;
}

.city-type-desc {
  font-size: 12px;
  color: #374151;
  line-height: 1.45;
}

.ocean {
  border-color: #bae6fd;
}

.sea {
  border-color: #fed7aa;
}

.sea .city-type-title {
  color: #c2410c;
}

.strait {
  border-color: #ddd6fe;
}

.strait .city-type-title {
  color: #6d28d9;
}

.factor-row {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 8px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 8px 10px;
  margin-bottom: 8px;
}

.factor-row:last-of-type {
  margin-bottom: 0;
}

.factor-label {
  font-weight: bold;
  color: #9a3412;
}

.factor-bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
}

.factor-fill {
  height: 100%;
  border-radius: 999px;
}

.shipping-fill {
  width: 92%;
  background: #0ea5e9;
}

.climate-fill {
  width: 88%;
  background: #22c55e;
}

.trade-fill {
  width: 84%;
  background: #f59e0b;
}

.cooperation-fill {
  width: 80%;
  background: #6366f1;
}

.factor-text {
  grid-column: 1 / -1;
  color: #475569;
  font-size: 12px;
  line-height: 1.45;
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.panel-title {
  font-weight: bold;
  margin-bottom: 8px;
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
  border-top: 1px solid rgba(0, 0, 0, 0.12);
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

.region-area {
  background: rgba(37, 99, 235, 0.18);
  border: 1px solid #2563eb;
}

.ocean-area {
  background: rgba(14, 165, 233, 0.18);
  border: 1px solid #0ea5e9;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.country-dot {
  background: #bfdbfe;
  border: 2px solid #1e3a8a;
  box-sizing: border-box;
}

.traffic-dot {
  background: #fef3c7;
  border: 2px solid #b45309;
  box-sizing: border-box;
}

/* 自定义地图文字层，避免 Leaflet tooltip 缩放错位 */
:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.region-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #1e3a8a;
  background: rgba(239, 246, 255, 0.94);
  border: 1px solid rgba(37, 99, 235, 0.65);
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.ocean-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0369a1;
  background: rgba(240, 249, 255, 0.94);
  border: 1px solid rgba(14, 165, 233, 0.65);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.country-label-dom) {
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

:deep(.traffic-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #b45309;
  background: rgba(255, 251, 235, 0.94);
  border: 1px solid rgba(245, 158, 11, 0.65);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
