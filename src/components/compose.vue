<template>
  <div class="compose-container">
    <div class="compose-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="compose-content">
      <!-- 左侧内容区 -->
      <div class="compose-content-left">
        <div class="compose-card compose-card-01">
          <div class="compose-card-header"><i class="iconfont icon-app-zucheng"></i>欧洲西部组成概况</div>

          <p class="mb-8">欧洲西部位于亚欧大陆西部，西临大西洋，北临北冰洋，南临地中海，海岸线曲折，半岛、岛屿、海湾和内海众多。</p>

          <p class="mb-8">
            本课采用<strong>初中地理教学口径</strong>：以欧洲西部主要国家为主体，重点认识英国、法国、德国、意大利、西班牙、荷兰、比利时、瑞士、挪威、瑞典等国家，
            展示欧洲西部<strong>国家众多、经济发达、区域联系紧密</strong>的特点。
          </p>

          <div class="note-box">
            <div class="note-title">口径说明</div>
            <div>欧洲西部是初中地理中的区域概念，范围通常包括欧洲西半部和北欧、南欧部分国家；</div>
            <div>本课以教材常见国家和地图教学需要为主，突出区域整体特征。</div>
          </div>
        </div>

        <div class="compose-card compose-card-02">
          <div class="compose-card-header"><i class="iconfont icon-bankuai"></i>区域板块划分</div>

          <div class="region-group">
            <div class="region-title">西欧核心区</div>
            <div class="region-desc">法国、德国、荷兰、比利时、卢森堡、瑞士、奥地利等，经济发达，城市和交通网络密集。</div>
          </div>

          <div class="region-group">
            <div class="region-title">不列颠群岛</div>
            <div class="region-desc">英国、爱尔兰，位于欧洲西北部，隔海峡与欧洲大陆相望。</div>
          </div>

          <div class="region-group">
            <div class="region-title">北欧地区</div>
            <div class="region-desc">挪威、瑞典、芬兰、丹麦、冰岛等，纬度较高，自然环境和社会发展水平具有鲜明特色。</div>
          </div>

          <div class="region-group">
            <div class="region-title">南欧半岛与地中海沿岸</div>
            <div class="region-desc">意大利、西班牙、葡萄牙、希腊等，临近地中海，旅游资源和文化遗产丰富。</div>
          </div>

          <div class="region-group">
            <div class="region-title">区域合作联系</div>
            <div class="region-desc">欧洲西部国家众多，欧盟等区域合作组织加强了国家间经济、交通和社会联系。</div>
          </div>
        </div>

        <div class="compose-card compose-card-03">
          <div class="compose-card-header"><i class="iconfont icon-jingweidu"></i>国家定位</div>

          <p class="mb-8 production-tip">点击下方名称，地图会定位到对应国家的中心位置。</p>

          <div class="country-buttons">
            <button v-for="item in countryList" :key="item.name" @click="flyToCountry(item)" :class="{ active: activeCountry === item.name }">
              {{ item.name }}
            </button>
          </div>
        </div>

        <div class="compose-card compose-card-04">
          <div class="compose-card-header"><i class="iconfont icon-bangzhuyushuoming"></i>特殊地理说明</div>

          <ul class="special-list">
            <li><strong>英国</strong>：位于欧洲西北部，是岛国，隔英吉利海峡与法国相望。</li>
            <li><strong>挪威、瑞典、芬兰</strong>：属于北欧国家，纬度较高，部分地区位于北极圈附近。</li>
            <li><strong>意大利、西班牙、葡萄牙、希腊</strong>：位于南欧，地中海沿岸特色明显。</li>
            <li><strong>瑞士、奥地利</strong>：位于欧洲内陆，阿尔卑斯山地特征突出。</li>
            <li><strong>荷兰、比利时</strong>：位于欧洲西部低地，港口、交通和对外贸易发达。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="compose-content-right">
        <div id="westernEuropeMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看细节</div>

        <!-- 右侧控制器 + 图例 -->
        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showBoundaryLayer" @change="toggleBoundaryLayer" />
            欧洲西部轮廓线
          </label>

          <label>
            <input type="checkbox" v-model="showMainCountriesLayer" @change="toggleMainCountriesLayer" />
            欧洲西部主要国家
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-line boundary-line"></span>
              <span>欧洲西部轮廓线</span>
            </div>

            <div class="legend-row">
              <span class="legend-area country-area"></span>
              <span>主要国家范围</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot"></span>
              <span>国家定位点</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
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
let boundaryLayer: L.GeoJSON | null = null
let mainCountriesLayer: L.GeoJSON | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0
let boundaryAbortController: AbortController | null = null
let mainCountriesAbortController: AbortController | null = null

const activeCountry = ref('')
const useGoogle = ref(false)
const showBoundaryLayer = ref(false)
const showMainCountriesLayer = ref(false)

const baseGeoUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/'

const centerLat = 50.5
const centerLng = 8.5
const zoomLevel = 4

type CountryItem = {
  name: string
  lat: number
  lng: number
  zoom: number
  group: string
}

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

const countryMarkers: L.CircleMarker[] = []
const countryLabels: DomLabel[] = []

const countryList: CountryItem[] = [
  { name: '英国', lat: 54.5, lng: -2.5, zoom: 6, group: '不列颠群岛' },
  { name: '爱尔兰', lat: 53.4, lng: -8.0, zoom: 7, group: '不列颠群岛' },

  { name: '法国', lat: 46.5, lng: 2.2, zoom: 6, group: '西欧核心区' },
  { name: '德国', lat: 51.0, lng: 10.2, zoom: 6, group: '西欧核心区' },
  { name: '荷兰', lat: 52.2, lng: 5.3, zoom: 7, group: '西欧核心区' },
  { name: '比利时', lat: 50.6, lng: 4.5, zoom: 7, group: '西欧核心区' },
  { name: '卢森堡', lat: 49.8, lng: 6.1, zoom: 8, group: '西欧核心区' },
  { name: '瑞士', lat: 46.8, lng: 8.2, zoom: 7, group: '阿尔卑斯地区' },
  { name: '奥地利', lat: 47.6, lng: 14.2, zoom: 7, group: '阿尔卑斯地区' },

  { name: '挪威', lat: 61.0, lng: 8.0, zoom: 5, group: '北欧地区' },
  { name: '瑞典', lat: 62.0, lng: 15.0, zoom: 5, group: '北欧地区' },
  { name: '芬兰', lat: 64.0, lng: 26.0, zoom: 5, group: '北欧地区' },
  { name: '丹麦', lat: 56.0, lng: 10.0, zoom: 7, group: '北欧地区' },
  { name: '冰岛', lat: 64.9, lng: -18.6, zoom: 6, group: '北欧地区' },

  { name: '西班牙', lat: 40.3, lng: -3.7, zoom: 6, group: '南欧地区' },
  { name: '葡萄牙', lat: 39.5, lng: -8.0, zoom: 7, group: '南欧地区' },
  { name: '意大利', lat: 42.8, lng: 12.5, zoom: 6, group: '南欧地区' },
  { name: '希腊', lat: 39.0, lng: 22.0, zoom: 6, group: '南欧地区' },
]

function flyToCountry(item: CountryItem) {
  activeCountry.value = item.name

  if (!map) return

  map.setView([item.lat, item.lng], item.zoom, {
    animate: false,
  })

  updateCountryLabelActiveState()
  scheduleUpdateLabels()
}

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

function createDomLabel(options: {
  lat: number
  lng: number
  content: string
  className: string
  offsetX?: number
  offsetY?: number
  datasetName?: string
}) {
  if (!labelPane) return null

  const el = document.createElement('div')
  el.className = options.className
  el.innerHTML = escapeHtml(options.content)

  if (options.datasetName) {
    el.dataset.name = options.datasetName
  }

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
  countryLabels.forEach(updateOneLabelPosition)
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

function addCountryMarkersAndLabels() {
  if (!map) return

  clearCountryMarkersAndLabels()

  countryList.forEach(country => {
    const marker = L.circleMarker([country.lat, country.lng], {
      radius: 4,
      color: '#0f172a',
      weight: 1,
      fillColor: '#34a7f5',
      fillOpacity: 1,
      interactive: false,
    }).addTo(map!)

    countryMarkers.push(marker)

    const label = createDomLabel({
      lat: country.lat,
      lng: country.lng,
      content: country.name,
      className: 'country-label-dom',
      offsetX: 12,
      offsetY: -2,
      datasetName: country.name,
    })

    if (label) {
      countryLabels.push(label)
    }
  })

  updateCountryLabelActiveState()
  scheduleUpdateLabels()
}

function updateCountryLabelActiveState() {
  countryLabels.forEach(label => {
    const name = label.el.dataset.name

    if (name && name === activeCountry.value) {
      label.el.classList.add('active')
    } else {
      label.el.classList.remove('active')
    }
  })
}

function clearCountryMarkersAndLabels() {
  countryMarkers.forEach(marker => {
    if (map) marker.removeFrom(map)
  })
  countryMarkers.length = 0

  clearDomLabels(countryLabels)
}

function bindGeoJsonPopup(layer: L.Layer, title: string, desc: string) {
  if ('bindPopup' in layer && typeof layer.bindPopup === 'function') {
    layer.bindPopup(`
      <div style="min-width: 160px; line-height: 1.5;">
        <div style="font-weight: bold; margin-bottom: 4px;">${escapeHtml(title)}</div>
        <div style="font-size: 12px; color: #444;">${escapeHtml(desc)}</div>
      </div>
    `)
  }
}

async function loadBoundaryLayer() {
  if (!map) return

  clearBoundaryLayer()

  const abortController = new AbortController()
  boundaryAbortController = abortController

  try {
    const response = await fetch(baseGeoUrl + '欧洲西部轮廓线.geojson', {
      signal: abortController.signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (abortController.signal.aborted || !map || !showBoundaryLayer.value) return

    boundaryLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: {
        color: '#0b78b8',
        weight: 2.4,
        opacity: 0.95,
        fillColor: '#dff3ff',
        fillOpacity: 0.18,
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.labelText || '欧洲西部轮廓线'
        const desc = props.desc || props.description || '欧洲西部区域轮廓范围。'
        bindGeoJsonPopup(layer, name, desc)
      },
    }).addTo(map)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('欧洲西部轮廓线请求已取消')
    } else {
      console.error('加载欧洲西部轮廓线失败：', error)
      showBoundaryLayer.value = false
    }
  } finally {
    if (boundaryAbortController === abortController) {
      boundaryAbortController = null
    }
  }
}

async function loadMainCountriesLayer() {
  if (!map) return

  clearMainCountriesLayer()

  const abortController = new AbortController()
  mainCountriesAbortController = abortController

  try {
    const response = await fetch(baseGeoUrl + '欧洲西部主要国家.geojson', {
      signal: abortController.signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (abortController.signal.aborted || !map || !showMainCountriesLayer.value) return

    mainCountriesLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || '#2563eb',
          weight: props.weight || 1.4,
          opacity: props.opacity ?? 0.9,
          fillColor: props.fillColor || '#34a7f5',
          fillOpacity: props.fillOpacity ?? 0.22,
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.NAME || props.Name || props.labelText || '欧洲西部主要国家'
        const desc = props.desc || props.description || '欧洲西部主要国家范围。'
        bindGeoJsonPopup(layer, name, desc)
      },
    }).addTo(map)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('欧洲西部主要国家请求已取消')
    } else {
      console.error('加载欧洲西部主要国家失败：', error)
      showMainCountriesLayer.value = false
    }
  } finally {
    if (mainCountriesAbortController === abortController) {
      mainCountriesAbortController = null
    }
  }
}

function clearBoundaryLayer() {
  if (boundaryAbortController) {
    boundaryAbortController.abort()
    boundaryAbortController = null
  }

  if (boundaryLayer && map) {
    boundaryLayer.removeFrom(map)
    boundaryLayer = null
  }
}

function clearMainCountriesLayer() {
  if (mainCountriesAbortController) {
    mainCountriesAbortController.abort()
    mainCountriesAbortController = null
  }

  if (mainCountriesLayer && map) {
    mainCountriesLayer.removeFrom(map)
    mainCountriesLayer = null
  }
}

function toggleBoundaryLayer() {
  if (showBoundaryLayer.value) {
    loadBoundaryLayer()
  } else {
    clearBoundaryLayer()
  }
}

function toggleMainCountriesLayer() {
  if (showMainCountriesLayer.value) {
    loadMainCountriesLayer()
  } else {
    clearMainCountriesLayer()
  }
}

onMounted(() => {
  map = L.map('westernEuropeMap', {
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

  // 默认只显示国家定位点，不默认加载轮廓线和主要国家 GeoJSON
  addCountryMarkersAndLabels()

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

  clearBoundaryLayer()
  clearMainCountriesLayer()

  unbindMapLabelEvents()

  clearCountryMarkersAndLabels()

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
.compose-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.compose-header {
  margin-bottom: 32px;
}

.compose-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
}

.compose-content-left {
  width: 32%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.compose-content-right {
  width: 67%;
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
  z-index: 10;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.12);
}

.map-control-panel {
  position: absolute;
  top: 45px;
  right: 10px;
  width: 210px;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #334155;
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
  color: #334155;
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

.legend-line {
  width: 22px;
  height: 0;
  flex-shrink: 0;
}

.boundary-line {
  border-top: 2px solid #0b78b8;
}

.legend-area {
  width: 16px;
  height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
  display: inline-block;
}

.country-area {
  background: rgba(52, 167, 245, 0.25);
  border: 1px solid #2563eb;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34a7f5;
  flex-shrink: 0;
}

.compose-card {
  background-color: #eff8ff;
  border-radius: 8px;
  border: 1px solid #cfefff;
  padding: 14px;
}

.compose-card-01 {
  background-color: #eff8ff;
  border-color: #cfefff;
}

.compose-card-02 {
  background-color: #f0f7fb;
  border-color: #d3e6f0;
}

.compose-card-03 {
  background-color: #f7fbfd;
  border-color: #cee3ed;
}

.compose-card-04 {
  background-color: #f3f8fb;
  border-color: #cee3ed;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.compose-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.mb-8 {
  margin-bottom: 8px;
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

.region-group {
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  margin-bottom: 8px;
  border-left: 3px solid var(--primary-color);
}

.region-group:last-child {
  margin-bottom: 0;
}

.region-title {
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 4px;
}

.region-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.country-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.country-buttons button {
  padding: 6px 10px;
  border: 1px solid rgba(52, 167, 245, 0.42);
  border-radius: 6px;
  background: #fff;
  color: #0f6fa8;
  cursor: pointer;
  font-size: 13px;
  line-height: 1;
}

.country-buttons button:hover {
  background: #e6f6ff;
  color: #0b78b8;
}

.country-buttons button.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
}

.special-list {
  list-style: disc;
  padding-left: 18px;
  color: #475569;
  line-height: 1.55;
  font-size: 13px;
}

.special-list li {
  margin-bottom: 6px;
}

.special-list li:last-child {
  margin-bottom: 0;
}

:deep(.leaflet-shadow-pane) {
  display: none;
}

:deep(.leaflet-marker-pane) {
  display: none;
}

/* 自定义地图文字层，避免使用 Leaflet tooltip */
:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.country-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #111827;
  text-shadow:
    0 0 2px #fff,
    0 0 4px #fff;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.country-label-dom.active) {
  color: #dc2626;
  font-size: 15px;
  text-shadow:
    0 0 2px #fff,
    0 0 5px #fff;
}

.production-tip {
  margin-top: 12px;
  padding: 10px 12px;
  background: #fff;
  border-left: 4px solid var(--primary-color);
  border-radius: 8px;
  color: #5f6f7a;
  line-height: 1.55;
  font-size: 13px;
}
</style>
