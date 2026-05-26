<template>
  <div class="climate-container">
    <div class="climate-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="climate-content">
      <!-- 左侧文字内容区 -->
      <div class="climate-content-left">
        <div class="climate-card climate-card-01">
          <div class="climate-card-header"><i class="iconfont icon-quanqiuqihou"></i>气候总体特征</div>

          <p class="mb-8">
            欧洲西部大部分地区属于<strong>温带海洋性气候</strong>，主要表现为
            <strong>全年温和湿润，气温年较差小，降水季节分配较均匀</strong>。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">气温特点</div>
              <div class="feature-value">冬暖夏凉</div>
              <div class="feature-desc">受海洋调节明显，冬季不太冷，夏季不太热。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">降水特点</div>
              <div class="feature-value">全年湿润</div>
              <div class="feature-desc">降水季节变化小，阴雨天气较多。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>温带海洋性气候的形成，与<strong>纬度位置、西风、北大西洋暖流、海岸曲折</strong>密切相关。</div>
          </div>
        </div>

        <div class="climate-card climate-card-02">
          <div class="climate-card-header"><i class="iconfont icon-wuliyinsu"></i>形成原因分析</div>

          <div class="reason-item">
            <div class="item-title">纬度位置适中</div>
            <div class="item-desc">欧洲西部大部分位于北温带，具备形成温带气候的基本条件。</div>
          </div>

          <div class="reason-item">
            <div class="item-title">盛行西风影响显著</div>
            <div class="item-desc">常年受来自大西洋的盛行西风影响，带来大量湿润水汽。</div>
          </div>

          <div class="reason-item">
            <div class="item-title">北大西洋暖流增温增湿</div>
            <div class="item-desc">暖流使沿岸地区气温较同纬度地区偏高，并增强空气湿度。</div>
          </div>

          <div class="reason-item">
            <div class="item-title">海岸线曲折</div>
            <div class="item-desc">多半岛、岛屿、海湾和内海，使海洋气流更容易深入欧洲大陆内部。</div>
          </div>
        </div>

        <div class="climate-card climate-card-03">
          <div class="climate-card-header"><i class="iconfont icon-fenbu"></i>气候分布与差异</div>

          <p class="mb-8">温带海洋性气候主要分布在欧洲西部的大西洋沿岸及其附近地区，越向内陆，大陆性逐渐增强。</p>

          <ul class="list-disc pl-5 mb-4">
            <li class="mb-2"><strong>西部沿海：</strong>海洋影响强，气候最典型，全年湿润。</li>
            <li class="mb-2"><strong>中部地区：</strong>仍受西风影响，但气温年较差逐渐增大。</li>
            <li class="mb-2"><strong>南部地中海沿岸：</strong>受地中海气候影响，夏季炎热干燥、冬季温和多雨。</li>
            <li class="mb-2"><strong>北部高纬地区：</strong>纬度较高，气温偏低，部分地区有寒冷气候特征。</li>
          </ul>
        </div>

        <div class="climate-card climate-card-04">
          <div class="climate-card-header"><i class="iconfont icon-nongye"></i>对农业和生活的影响</div>

          <div class="impact-item mb-6">
            <div class="item-title">适合多汁牧草生长</div>
            <div class="item-desc">全年温和湿润，草场广布，为乳畜业发展提供了良好自然条件。</div>
          </div>

          <div class="impact-item mb-6">
            <div class="item-title">乳畜业发达</div>
            <div class="item-desc">英国、法国、德国、荷兰等国乳畜业较发达，牛奶、奶酪、黄油等乳制品丰富。</div>
          </div>

          <div class="impact-item">
            <div class="item-title">居民饮食结构受影响</div>
            <div class="item-desc">牛羊肉、乳制品在欧洲西部居民饮食中占有重要地位。</div>
          </div>
        </div>

        <div class="climate-card climate-card-05">
          <div class="climate-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一看位置：</strong>位于亚欧大陆西部，大西洋东岸。</li>
            <li><strong>二看风向：</strong>常年受盛行西风影响。</li>
            <li><strong>三看洋流：</strong>北大西洋暖流起增温增湿作用。</li>
            <li><strong>四看特征：</strong>全年温和湿润，气温年较差小。</li>
            <li><strong>五看农业：</strong>适合牧草生长，乳畜业发达。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="climate-content-right">
        <div id="westernEuropeClimateMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看气候分布</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <div class="layer-item" v-for="layer in layerList" :key="layer.id">
            <label>
              <input type="checkbox" :checked="layer.visible" @change="handleLayerChange(layer.id, $event)" />
              {{ layer.name }}
            </label>
          </div>

          <div class="layer-note">
            <div class="layer-note-title">读图提示</div>
            <div>蓝色虚线表示盛行西风，红色实线表示北大西洋暖流。</div>
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

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0
let arrowLineLayer: L.LayerGroup | null = null

const centerLat = 51.5
const centerLng = 3.5
const zoomLevel = 4

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

type GeoLayerConfig = {
  id: string
  name: string
  url: string
  visible: boolean
  layer: L.GeoJSON | null
  labels: DomLabel[]
  abortController: AbortController | null
}

const baseGeoUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/'

const layerList = ref<GeoLayerConfig[]>([
  {
    id: 'europe-climate',
    name: '欧洲西部气候类型',
    url: baseGeoUrl + '欧洲西部气候类型.geojson',
    visible: false,
    layer: null,
    labels: [],
    abortController: null,
  },
  {
    id: 'europe-rain',
    name: '欧洲年降水量分布',
    url: baseGeoUrl + '欧洲年降水量分布.geojson',
    visible: false,
    layer: null,
    labels: [],
    abortController: null,
  },
  {
    id: 'europe-jan-temp',
    name: '欧洲一月平均气温',
    url: baseGeoUrl + '欧洲一月平均气温.geojson',
    visible: false,
    layer: null,
    labels: [],
    abortController: null,
  },
  {
    id: 'europe-jul-temp',
    name: '欧洲七月平均气温',
    url: baseGeoUrl + '欧洲七月平均气温.geojson',
    visible: false,
    layer: null,
    labels: [],
    abortController: null,
  },
])

const fixedLabels: DomLabel[] = []

const charPathList = [
  {
    path: [
      [58.8, -22.5],
      [57.6, -15.0],
      [56.2, -7.5],
    ],
    text: '盛行西风',
    className: 'wind-char-label-dom',
  },
  {
    path: [
      [52.8, -23.0],
      [51.5, -15.0],
      [50.2, -7.0],
    ],
    text: '盛行西风',
    className: 'wind-char-label-dom',
  },
  {
    path: [
      [47.8, -21.5],
      [46.8, -13.5],
      [45.8, -4.5],
    ],
    text: '盛行西风',
    className: 'wind-char-label-dom',
  },
  {
    path: [
      [43.2, -30.0],
      [48.5, -22.0],
      [54.5, -14.5],
      [60.5, -9.0],
    ],
    text: '北大西洋暖流',
    className: 'current-char-label-dom',
  },
]

const arrowLineList = [
  {
    name: '盛行西风',
    path: [
      [59.0, -27.0],
      [57.8, -19.0],
      [56.5, -11.0],
      [55.2, -1.5],
      [54.5, 6.0],
    ] as [number, number][],
    color: '#2563eb',
    dashArray: '8 8',
  },
  {
    name: '盛行西风',
    path: [
      [55.5, -28.0],
      [54.0, -19.5],
      [52.5, -10.5],
      [51.2, -0.5],
      [50.8, 7.0],
    ] as [number, number][],
    color: '#2563eb',
    dashArray: '8 8',
  },
  {
    name: '盛行西风',
    path: [
      [51.5, -27.0],
      [50.0, -18.0],
      [48.6, -9.0],
      [47.5, 0.5],
      [47.0, 8.0],
    ] as [number, number][],
    color: '#2563eb',
    dashArray: '8 8',
  },
  {
    name: '盛行西风',
    path: [
      [47.5, -25.5],
      [46.5, -17.0],
      [45.6, -8.5],
      [44.8, 0.0],
      [44.3, 6.0],
    ] as [number, number][],
    color: '#2563eb',
    dashArray: '8 8',
  },
  {
    name: '北大西洋暖流',
    path: [
      [36.5, -36.0],
      [41.0, -30.0],
      [47.0, -23.5],
      [53.0, -15.0],
      [59.0, -7.0],
    ] as [number, number][],
    color: '#ef4444',
    dashArray: '',
  },
  {
    name: '北大西洋暖流',
    path: [
      [42.5, -35.0],
      [47.5, -27.0],
      [53.0, -19.0],
      [58.5, -12.0],
      [64.0, -2.5],
    ] as [number, number][],
    color: '#ef4444',
    dashArray: '',
  },
  {
    name: '北大西洋暖流',
    path: [
      [48.5, -32.0],
      [53.5, -23.5],
      [58.5, -15.0],
      [63.5, -7.0],
      [64.0, -6.5],
    ] as [number, number][],
    color: '#ef4444',
    dashArray: '',
  },
]

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function getPointsOnPath(path: number[][], count: number): [number, number][] {
  if (!path.length || count <= 0) return []

  if (path.length === 1) {
    return Array.from({ length: count }, () => [path[0]![0]!, path[0]![1]!])
  }

  const totalSegments = path.length - 1
  const result: [number, number][] = []

  for (let i = 0; i < count; i++) {
    const progress = count === 1 ? 0 : i / (count - 1)
    const segmentFloat = progress * totalSegments
    const segmentIndex = Math.min(Math.floor(segmentFloat), totalSegments - 1)
    const segmentProgress = segmentFloat - segmentIndex

    const start = path[segmentIndex]!
    const end = path[segmentIndex + 1]!

    const lat = start[0]! + (end[0]! - start[0]!) * segmentProgress
    const lng = start[1]! + (end[1]! - start[1]!) * segmentProgress

    result.push([lat, lng])
  }

  return result
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

  fixedLabels.forEach(updateOneLabelPosition)

  layerList.value.forEach(layer => {
    layer.labels.forEach(updateOneLabelPosition)
  })
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

function addSingleCharLabel() {
  clearDomLabels(fixedLabels)

  charPathList.forEach(item => {
    const chars = item.text.split('')
    const points = getPointsOnPath(item.path, chars.length)

    chars.forEach((char, idx) => {
      const point = points[idx]
      if (!point) return

      const label = createDomLabel({
        lat: point[0],
        lng: point[1],
        content: char,
        className: item.className,
        offsetX: 0,
        offsetY: 0,
      })

      if (label) fixedLabels.push(label)
    })
  })

  scheduleUpdateLabels()
}

function addArrowLines() {
  if (!map) return

  if (arrowLineLayer) {
    arrowLineLayer.removeFrom(map)
    arrowLineLayer = null
  }

  arrowLineLayer = L.layerGroup()

  arrowLineList.forEach(item => {
    const line = L.polyline(item.path, {
      color: item.color,
      weight: item.name === '北大西洋暖流' ? 4 : 3,
      opacity: item.name === '北大西洋暖流' ? 0.82 : 0.72,
      dashArray: item.dashArray,
    })

    line.bindPopup(`
      <div style="line-height: 1.5;">
        <strong>${escapeHtml(item.name)}</strong>
      </div>
    `)

    line.addTo(arrowLineLayer!)
  })

  arrowLineLayer.addTo(map)
}

function initBaseMap() {
  if (!map) return

  if (baseLayer) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  const url = 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/otm-tiles/{z}/{x}/{y}.png'

  baseLayer = L.tileLayer(url, {
    attribution: '',
    minZoom: 2,
    maxZoom: 7,
  }).addTo(map)
}

function clearLayerResources(layerConfig: GeoLayerConfig) {
  if (layerConfig.abortController) {
    layerConfig.abortController.abort()
    layerConfig.abortController = null
  }

  clearDomLabels(layerConfig.labels)

  if (layerConfig.layer && map) {
    layerConfig.layer.removeFrom(map)
    layerConfig.layer = null
  }
}

function handleLayerChange(id: string, event: Event) {
  const target = event.target as HTMLInputElement
  toggleGeoJsonLayer(id, target.checked)
}

function getLayerLabelClassName(id: string) {
  if (id === 'europe-rain') return 'rain-label-dom'
  if (id === 'europe-jan-temp') return 'jan-temp-label-dom'
  if (id === 'europe-jul-temp') return 'jul-temp-label-dom'
  return 'climate-label-dom'
}

function getDefaultFillColor(id: string) {
  if (id === 'europe-rain') return '#60a5fa'
  if (id === 'europe-jan-temp') return '#93c5fd'
  if (id === 'europe-jul-temp') return '#f59e0b'
  return '#93c5fd'
}

function getDefaultLineColor(id: string) {
  if (id === 'europe-rain') return '#1d4ed8'
  if (id === 'europe-jan-temp') return '#2563eb'
  if (id === 'europe-jul-temp') return '#ea580c'
  return '#ffffff'
}

async function toggleGeoJsonLayer(id: string, visible: boolean) {
  if (!map) return

  const layerConfig = layerList.value.find(l => l.id === id)
  if (!layerConfig) return

  clearLayerResources(layerConfig as GeoLayerConfig)

  layerConfig.visible = visible

  if (!visible) return

  const abortController = new AbortController()
  layerConfig.abortController = abortController

  try {
    const response = await fetch(layerConfig.url, {
      signal: abortController.signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (abortController.signal.aborted || !layerConfig.visible || !map) return

    layerConfig.layer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },

      style: feature => {
        const props = feature?.properties || {}
        const geometryType = feature?.geometry?.type

        if (geometryType === 'MultiLineString' || geometryType === 'LineString') {
          return {
            color: props.strokeColor || props.fillColor || getDefaultLineColor(id),
            weight: props.weight || 3,
            opacity: props.opacity ?? 1,
            dashArray: props.dashArray || '',
          }
        }

        return {
          color: props.strokeColor || 'rgba(255, 255, 255, 0)',
          weight: props.weight || 1,
          fillColor: props.fillColor || getDefaultFillColor(id),
          fillOpacity: props.fillOpacity ?? 0.72,
        }
      },
    }).addTo(map)

    addGeoJsonDomLabels(data, id, layerConfig as GeoLayerConfig)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log(`图层 ${layerConfig.name} 请求已取消`)
    } else {
      console.error(`加载图层 ${layerConfig.name} 失败:`, error)
      layerConfig.visible = false
      layerConfig.layer = null
      clearDomLabels(layerConfig.labels)
    }
  } finally {
    if (layerConfig.abortController === abortController) {
      layerConfig.abortController = null
    }
  }
}

function addGeoJsonDomLabels(geojson: any, id: string, layerConfig: GeoLayerConfig) {
  const features = getGeoJsonFeatures(geojson)

  features.forEach((feature: any) => {
    if (!feature?.geometry) return

    const type = feature.geometry.type

    if (type === 'Point') {
      addGeoJsonPointLabel(feature, id, layerConfig)
    }

    if (type === 'MultiPoint') {
      const coordinates = feature.geometry.coordinates
      if (!Array.isArray(coordinates)) return

      coordinates.forEach((coord: any) => {
        addGeoJsonPointLabel(
          {
            ...feature,
            geometry: {
              type: 'Point',
              coordinates: coord,
            },
          },
          id,
          layerConfig,
        )
      })
    }
  })

  scheduleUpdateLabels()
}

function getGeoJsonFeatures(geojson: any) {
  if (!geojson) return []

  if (geojson.type === 'FeatureCollection') {
    return Array.isArray(geojson.features) ? geojson.features : []
  }

  if (geojson.type === 'Feature') {
    return [geojson]
  }

  return []
}

function addGeoJsonPointLabel(feature: any, id: string, layerConfig: GeoLayerConfig) {
  const labelText = feature.properties?.labelText || feature.properties?.name
  if (!labelText) return

  const coordinates = feature.geometry?.coordinates
  if (!Array.isArray(coordinates) || coordinates.length < 2) return

  const lng = Number(coordinates[0])
  const lat = Number(coordinates[1])

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return

  const label = createDomLabel({
    lat,
    lng,
    content: labelText,
    className: getLayerLabelClassName(id),
    offsetX: 0,
    offsetY: -8,
  })

  if (label) {
    layerConfig.labels.push(label)
  }
}

function cleanupAllLayers() {
  layerList.value.forEach(layerConfig => {
    clearLayerResources(layerConfig as GeoLayerConfig)
    layerConfig.visible = false
  })
}

onMounted(() => {
  map = L.map('westernEuropeClimateMap', {
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

  initBaseMap()
  initLabelPane()
  bindMapLabelEvents()
  addArrowLines()
  addSingleCharLabel()

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

  cleanupAllLayers()
  clearDomLabels(fixedLabels)

  if (arrowLineLayer && map) {
    arrowLineLayer.removeFrom(map)
    arrowLineLayer = null
  }

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
.climate-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.climate-header {
  margin-bottom: 32px;
}

.climate-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.climate-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.climate-content-right {
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

.map-tip {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.94);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #5f6f7a;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.12);
}

.climate-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.climate-card-01 {
  background-color: #eff8ff;
  border-color: #cfefff;
}

.climate-card-02 {
  background-color: #f0f7fb;
  border-color: #d3e6f0;
}

.climate-card-03 {
  background-color: #f7fbfd;
  border-color: #cee3ed;
}

.climate-card-04 {
  background-color: #f3f8fb;
  border-color: #cee3ed;
}

.climate-card-05 {
  background-color: #fefce8;
  border-color: #fde68a;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.climate-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.climate-card-05 .climate-card-header {
  color: #854d0e;
}

.climate-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-6 {
  margin-bottom: 6px;
}

.mb-4 {
  margin-bottom: 4px;
}

.mb-2 {
  margin-bottom: 2px;
}

.pl-5 {
  padding-left: 20px;
}

.list-disc {
  list-style: disc;
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
  font-size: 17px;
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

.reason-item,
.impact-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.reason-item:last-child,
.impact-item:last-child {
  margin-bottom: 0;
}

.item-title {
  font-weight: bold;
  margin-bottom: 4px;
  color: #0f6fa8;
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

.layer-control-panel {
  position: absolute;
  top: 48px;
  right: 10px;
  width: 230px;
  max-height: calc(100% - 70px);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.15);
}

.panel-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #0f3554;
}

.layer-item {
  margin-bottom: 6px;
  color: #334155;
}

.layer-item:last-of-type {
  margin-bottom: 0;
}

.layer-note {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
  color: #475569;
  line-height: 1.45;
}

.layer-note-title {
  font-weight: bold;
  color: #0f78b8;
  margin-bottom: 4px;
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

:deep(.wind-char-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  color: #2563eb;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
  padding: 3px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.current-char-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  color: #dc2626;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
  padding: 3px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.mediterranean-char-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  color: #b45309;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
  padding: 3px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.climate-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(15, 53, 84, 0.78);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.rain-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(30, 111, 159, 0.82);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.jan-temp-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(37, 99, 235, 0.84);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.jul-temp-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(234, 88, 12, 0.86);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
