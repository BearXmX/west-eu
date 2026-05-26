<template>
  <div class="terrain-container">
    <div class="terrain-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="terrain-content">
      <!-- 左侧文字内容区 -->
      <div class="terrain-content-left">
        <div class="terrain-card terrain-card-01">
          <div class="terrain-card-header"><i class="iconfont icon-haibagaodu"></i>地形与海拔特征</div>

          <p class="mb-8">
            欧洲西部地形以<strong>平原和山地</strong>为主，整体表现为南北多山地、中部平原广布的特点。
            平原地势低平，利于城市、交通和农业发展；南部山地较高，地形起伏明显。
          </p>

          <ul class="list-disc pl-5 mb-8">
            <li class="mb-2"><strong>西欧平原</strong>：分布在欧洲西部和中部，是欧洲重要的平原区，地势低平。</li>
            <li class="mb-2"><strong>波德平原</strong>：位于欧洲中北部，地势平坦，农业和交通条件较好。</li>
            <li class="mb-2"><strong>阿尔卑斯山脉</strong>：位于欧洲南部，是欧洲重要山脉，地势高峻。</li>
          </ul>

          <p class="mb-8">欧洲西部海岸线曲折，多半岛、岛屿、海湾和内海，使其海洋性特征明显，也为港口、航运和对外贸易发展提供了有利条件。</p>
        </div>

        <div class="terrain-card terrain-card-02">
          <div class="terrain-card-header"><i class="iconfont icon-gaoyuanfanyingshengu"></i>主要山脉与平原</div>

          <div class="geo-item mb-6">
            <div class="item-title">西欧平原、波德平原</div>
            <div class="item-desc">欧洲西部平原面积较广，地势低平，人口、城市和交通线分布较密集，是欧洲重要的经济活动区域。</div>
          </div>

          <div class="geo-item mb-6">
            <div class="item-title">阿尔卑斯山脉</div>
            <div class="item-desc">位于欧洲南部，横亘法国、瑞士、意大利、奥地利等国，是欧洲著名山脉，也是重要旅游资源。</div>
          </div>

          <div class="geo-item">
            <div class="item-title">斯堪的纳维亚山脉</div>
            <div class="item-desc">位于北欧斯堪的纳维亚半岛，影响挪威、瑞典等国的地形格局，挪威峡湾景观与冰川侵蚀密切相关。</div>
          </div>
        </div>

        <div class="terrain-card terrain-card-03">
          <div class="terrain-card-header"><i class="iconfont icon-mti-heliu"></i>主要河流特点</div>

          <p class="mb-8">欧洲西部河网较密，许多河流流程不长但水量较稳定，受平原地形和温带海洋性气候影响，航运价值较高。</p>

          <ul class="list-disc pl-5 mb-4">
            <li class="mb-2"><strong>莱茵河</strong>：流经欧洲经济发达地区，是欧洲重要的国际河流和航运通道。</li>
            <li class="mb-2"><strong>多瑙河</strong>：流经多个欧洲国家，是联系欧洲内陆的重要河流。</li>
            <li class="mb-2"><strong>塞纳河、泰晤士河</strong>：流经巴黎、伦敦等城市，体现河流与城市发展的密切关系。</li>
          </ul>
        </div>

        <div class="terrain-card terrain-card-04">
          <div class="terrain-card-header"><i class="iconfont icon-kaoshi"></i>地形对区域发展的影响</div>

          <p class="mb-8">欧洲西部平原广布、海岸曲折、河流众多，这些自然条件共同影响了本区的农业、城市、交通和经济发展。</p>

          <div class="climate-item mb-6">
            <div class="item-title">平原广布</div>
            <div class="item-desc">利于发展农业、建设城市和铺设交通线路，人口与城市较为密集。</div>
          </div>

          <div class="climate-item mb-6">
            <div class="item-title">海岸曲折</div>
            <div class="item-desc">多优良港湾，有利于海上交通、对外贸易和港口城市发展。</div>
          </div>

          <div class="climate-item">
            <div class="item-title">河流航运便利</div>
            <div class="item-desc">河流流量稳定，水网较密，加强了城市之间和国家之间的联系。</div>
          </div>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="terrain-content-right">
        <div id="westernEuropeTerrainMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看主要河流</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <div class="layer-item" v-for="layer in layerList" :key="layer.id">
            <label>
              <input type="checkbox" :checked="layer.visible" @change="handleLayerChange(layer.id, $event)" />
              {{ layer.name }}
            </label>
          </div>

          <div class="elevation-legend">
            <div class="legend-title">海拔图例</div>

            <div class="legend-gradient"></div>

            <div class="legend-scale">
              <span>低</span>
              <span>高</span>
            </div>

            <div class="legend-item">
              <span class="legend-color sea-low"></span>
              <span>低于0米：沿海低地、洼地</span>
            </div>

            <div class="legend-item">
              <span class="legend-color lowland"></span>
              <span>0–200米：平原、沿海低地</span>
            </div>

            <div class="legend-item">
              <span class="legend-color plain"></span>
              <span>200–500米：丘陵、低山</span>
            </div>

            <div class="legend-item">
              <span class="legend-color plateau"></span>
              <span>500–1500米：山地、高原</span>
            </div>

            <div class="legend-item">
              <span class="legend-color mountain"></span>
              <span>1500–3000米：高山地区</span>
            </div>

            <div class="legend-item">
              <span class="legend-color high-mountain"></span>
              <span>3000米以上：阿尔卑斯高山区</span>
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

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 50.5
const centerLng = 7.5
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
    id: 'europe-river',
    name: '欧洲西部主要河流',
    url: baseGeoUrl + '欧洲西部主要河流.geojson',
    visible: true,
    layer: null,
    labels: [],
    abortController: null,
  },
])

const fixedLabels: DomLabel[] = []

const charPathList = [
  {
    path: [
      [58.0, -4.2],
      [52.0, -0.2],
    ],
    text: '不列颠群岛',
  },
  {
    path: [
      [49.5, -6.0],
      [51.8, 3.9],
    ],
    text: '英吉利海峡',
  },
  {
    path: [
      [50.0, 2.6],
      [51.5, 8.0],
    ],
    text: '西欧平原',
  },
  {
    path: [
      [53.8, 12.0],
      [52.8, 19.0],
    ],
    text: '波德平原',
  },
  {
    path: [
      [44.9, 5.8],
      [47.5, 14.2],
    ],
    text: '阿尔卑斯山脉',
  },
  {
    path: [
      [62.0, 6.0],
      [66.3, 14.5],
    ],
    text: '斯堪的纳维亚山脉',
  },
  {
    path: [
      [43.0, -8.5],
      [39.0, 2.5],
    ],
    text: '伊比利亚半岛',
  },
  {
    path: [
      [45.2, 10.2],
      [41.4, 15.8],
    ],
    text: '亚平宁半岛',
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
  const pts: [number, number][] = []

  if (!path.length || count <= 0) return pts

  if (path.length === 1) {
    for (let i = 0; i < count; i++) {
      pts.push([path[0]![0]!, path[0]![1]!])
    }
    return pts
  }

  const start = path[0]
  const end = path[path.length - 1]!

  const latStep = (end[0]! - start![0]!) / (count - 1 || 1)
  const lngStep = (end[1]! - start![1]!) / (count - 1 || 1)

  for (let i = 0; i < count; i++) {
    pts.push([start![0]! + latStep * i, start![1]! + lngStep * i])
  }

  return pts
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
        className: 'single-char-label-dom',
        offsetX: 0,
        offsetY: 0,
      })

      if (label) {
        fixedLabels.push(label)
      }
    })
  })

  scheduleUpdateLabels()
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

function getLayerLabelClassName() {
  return 'river-label-dom'
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
            color: props.strokeColor || props.fillColor || '#0ea5e9',
            weight: props.weight || 3,
            opacity: props.opacity ?? 0.95,
            dashArray: props.dashArray || '',
          }
        }

        return {
          color: props.strokeColor || '#0ea5e9',
          weight: props.weight || 2,
          fillColor: props.fillColor || '#38bdf8',
          fillOpacity: props.fillOpacity ?? 0.18,
        }
      },

      onEachFeature: (feature, layer) => {},
    }).addTo(map)

    addGeoJsonDomLabels(data, layerConfig as GeoLayerConfig)

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

function addGeoJsonDomLabels(geojson: any, layerConfig: GeoLayerConfig) {
  const features = getGeoJsonFeatures(geojson)

  features.forEach((feature: any) => {
    if (!feature?.geometry) return

    const type = feature.geometry.type

    if (type === 'Point') {
      addGeoJsonPointLabel(feature, layerConfig)
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

function addGeoJsonPointLabel(feature: any, layerConfig: GeoLayerConfig) {
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
    className: getLayerLabelClassName(),
    offsetX: 0,
    offsetY: -10,
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
  map = L.map('westernEuropeTerrainMap', {
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
  addSingleCharLabel()

  requestAnimationFrame(() => {
    map?.invalidateSize(false)
    toggleGeoJsonLayer('europe-river', true)
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
.terrain-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.terrain-header {
  margin-bottom: 32px;
}

.terrain-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
}

.terrain-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
}

.terrain-content-right {
  width: 60%;
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

.terrain-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.terrain-card-01 {
  background-color: #eff8ff;
  border-color: #cfefff;
}

.terrain-card-02 {
  background-color: #f0f7fb;
  border-color: #d3e6f0;
}

.terrain-card-03 {
  background-color: #f7fbfd;
  border-color: #cee3ed;
}

.terrain-card-04 {
  background-color: #f3f8fb;
  border-color: #cee3ed;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.terrain-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
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

.geo-item,
.climate-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 4px;
  border-left: 3px solid var(--primary-color);
}

.item-title {
  font-weight: bold;
  margin-bottom: 4px;
  color: #0f6fa8;
}

.item-desc {
  font-size: 14px;
  color: #475569;
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

.river-note {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
  color: #475569;
  line-height: 1.45;
}

.river-note-title {
  font-weight: bold;
  color: #0f78b8;
  margin-bottom: 4px;
}

.elevation-legend {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
}

.legend-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #0f3554;
}

.legend-gradient {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  margin-bottom: 4px;
  background: linear-gradient(to right, #63b7d8 0%, #7fc97f 18%, #c9e89a 35%, #f2d27a 52%, #c98645 72%, #8b4a2b 90%, #f3efe2 100%);
  border: 1px solid rgba(15, 39, 72, 0.15);
}

.legend-scale {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #667085;
  margin-bottom: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
  line-height: 1.4;
  color: #334155;
}

.legend-item:last-child {
  margin-bottom: 0;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
  border: 1px solid rgba(15, 39, 72, 0.15);
}

.legend-color.sea-low {
  background: #63b7d8;
}

.legend-color.lowland {
  background: #7fc97f;
}

.legend-color.plain {
  background: #c9e89a;
}

.legend-color.plateau {
  background: #f2d27a;
}

.legend-color.mountain {
  background: #c98645;
}

.legend-color.high-mountain {
  background: #8b4a2b;
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

/* 默认文字：不再使用白底红字，改为柔和蓝灰色描边字 */
:deep(.single-char-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: 900;
  color: rgba(15, 53, 84, 0.88);
  background-color: #fff;
  letter-spacing: 0.08em;
  padding: 2px;
  text-shadow:
    0 0 3px rgba(255, 255, 255, 0.95),
    0 0 6px rgba(255, 255, 255, 0.9),
    0 1px 2px rgba(255, 255, 255, 0.85);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

/* GeoJSON 河流点标注 */
:deep(.river-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(14, 116, 144, 0.88);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow:
    0 2px 8px rgba(15, 39, 72, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.55);
}
</style>
