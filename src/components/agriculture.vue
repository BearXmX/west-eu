<template>
  <div class="agriculture-container">
    <div class="agriculture-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="agriculture-content">
      <!-- 左侧内容区 -->
      <div class="agriculture-content-left">
        <div class="agriculture-card agriculture-card-01">
          <div class="agriculture-card-header"><i class="iconfont icon-nongye"></i>农业总体特征</div>

          <p class="mb-8">
            欧洲西部气候温和湿润，平原广布，草场资源丰富，农业机械化和专业化水平较高。 其中，<strong>畜牧业特别是乳畜业</strong>在农业中占有重要地位。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">自然条件</div>
              <div class="feature-value">温和湿润</div>
              <div class="feature-desc">温带海洋性气候广布，适合多汁牧草生长</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">农业特点</div>
              <div class="feature-value">现代化程度高</div>
              <div class="feature-desc">机械化、专业化、商品化水平较高</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>欧洲西部畜牧业发达的关键，是<strong>温和湿润的气候、广阔草场、城市人口密集和市场需求大</strong>共同作用。</div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-02">
          <div class="agriculture-card-header"><i class="iconfont icon-leixing"></i>主要农业类型</div>

          <div class="agri-type-grid">
            <div class="agri-type-image-card" v-for="item in agriTypeList" :key="item.title">
              <div class="agri-img-wrap" @click="openImagePreview(item)">
                <img :src="item.img" :alt="item.title" loading="lazy" />
                <div class="agri-img-title">{{ item.title }}</div>
                <div class="agri-img-zoom">点击查看大图</div>
              </div>

              <div class="agri-type-desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-03">
          <div class="agriculture-card-header"><i class="iconfont icon-zuowu"></i>代表产品与农业部门</div>

          <div class="crop-grid">
            <div class="crop-chip milk">牛奶</div>
            <div class="crop-chip cheese">奶酪</div>
            <div class="crop-chip butter">黄油</div>
            <div class="crop-chip beef">牛肉</div>
            <div class="crop-chip wheat">小麦</div>
            <div class="crop-chip barley">大麦</div>
            <div class="crop-chip grape">葡萄</div>
            <div class="crop-chip flower">花卉园艺</div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-04">
          <div class="agriculture-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记气候：</strong>温带海洋性气候广布，全年温和湿润。</li>
            <li><strong>二记草场：</strong>适合多汁牧草生长，为畜牧业提供基础。</li>
            <li><strong>三记产业：</strong>乳畜业发达，牛奶、奶酪、黄油等乳制品丰富。</li>
            <li><strong>四记市场：</strong>人口和城市密集，乳肉产品市场需求大。</li>
            <li><strong>五记现代化：</strong>机械化、专业化、商品化水平高。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="agriculture-content-right">
        <div id="westernEuropeAgricultureMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看农业空间分布</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showDairy" @change="refreshMapLayers" />
            乳畜业发达区
          </label>

          <label>
            <input type="checkbox" v-model="showGrassland" @change="refreshMapLayers" />
            草场与牧场
          </label>

          <label>
            <input type="checkbox" v-model="showGrain" @change="refreshMapLayers" />
            商品谷物农业区
          </label>

          <label>
            <input type="checkbox" v-model="showHorticulture" @change="refreshMapLayers" />
            园艺与花卉农业
          </label>

          <label>
            <input type="checkbox" v-model="showMediterranean" @change="refreshMapLayers" />
            地中海农业
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-area-row">
              <span class="legend-area dairy-area"></span>
              <span>乳畜业发达区</span>
            </div>

            <div class="legend-area-row">
              <span class="legend-area grassland-area"></span>
              <span>草场与牧场</span>
            </div>

            <div class="legend-area-row">
              <span class="legend-area grain-area"></span>
              <span>商品谷物农业区</span>
            </div>

            <div class="legend-area-row">
              <span class="legend-dot horticulture-dot"></span>
              <span>园艺与花卉农业</span>
            </div>

            <div class="legend-area-row">
              <span class="legend-area med-area"></span>
              <span>地中海农业</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片大图预览 -->
    <div v-if="previewImage" class="image-preview-mask" @click="closeImagePreview">
      <div class="image-preview-box" @click.stop>
        <button class="image-preview-close" @click="closeImagePreview">×</button>

        <div class="image-preview-title">
          {{ previewImage.title }}
        </div>

        <img :src="previewImage.img" :alt="previewImage.title" class="image-preview-img" />

        <div class="image-preview-desc">
          {{ previewImage.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { IMAGE_MAP, TILE_MAP } from '@/resource'

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

type AgriArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type AgriPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type AgriTypeItem = {
  title: string
  img: string
  desc: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 51.0
const centerLng = 5.5
const zoomLevel = 4

const useGoogle = ref(false)
const showDairy = ref(true)
const showGrassland = ref(true)
const showGrain = ref(true)
const showHorticulture = ref(true)
const showMediterranean = ref(true)

const previewImage = ref<AgriTypeItem | null>(null)

const agriTypeList: AgriTypeItem[] = [
  {
    title: '乳畜业',
    img: IMAGE_MAP['欧洲西部乳畜业']!,
    desc: '主要分布在英国、法国北部、德国、荷兰、比利时、丹麦等地区，依托温和湿润气候和城市市场发展。',
  },
  {
    title: '现代牧场',
    img: IMAGE_MAP['欧洲西部现代牧场']!,
    desc: '机械化、专业化水平较高，注重饲草种植、牲畜管理、冷链运输和乳制品加工。',
  },
  {
    title: '商品谷物农业',
    img: IMAGE_MAP['欧洲西部商品谷物农业']!,
    desc: '法国巴黎盆地、德国北部平原等地地势平坦，适合发展小麦、大麦等谷物生产。',
  },
  {
    title: '地中海农业',
    img: IMAGE_MAP['欧洲西部地中海农业']!,
    desc: '南欧地中海沿岸适合葡萄、橄榄、柑橘等园艺作物生长，农业与旅游、食品加工联系密切。',
  },
]

const dairyLayer = L.layerGroup()
const grasslandLayer = L.layerGroup()
const grainLayer = L.layerGroup()
const horticultureLayer = L.layerGroup()
const mediterraneanLayer = L.layerGroup()

const dairyLabels: DomLabel[] = []
const grasslandLabels: DomLabel[] = []
const grainLabels: DomLabel[] = []
const horticultureLabels: DomLabel[] = []
const mediterraneanLabels: DomLabel[] = []

const dairyAreas: AgriArea[] = [
  {
    name: '英国乳畜业区',
    lat: 52.8,
    lng: -1.8,
    radius: 240000,
    desc: '英国气候温和湿润，草场广布，乳畜业较发达。',
  },
  {
    name: '荷兰—比利时乳畜业区',
    lat: 51.7,
    lng: 5.0,
    radius: 190000,
    desc: '人口和城市密集，市场需求大，乳制品加工和现代农业水平高。',
  },
  {
    name: '丹麦乳畜业区',
    lat: 56.0,
    lng: 10.0,
    radius: 160000,
    desc: '畜牧业和乳制品生产发达，农业专业化程度较高。',
  },
  {
    name: '法国北部乳畜业区',
    lat: 49.3,
    lng: 1.6,
    radius: 210000,
    desc: '气候湿润，靠近消费市场，适宜发展乳畜业。',
  },
  {
    name: '德国北部乳畜业区',
    lat: 53.0,
    lng: 9.5,
    radius: 210000,
    desc: '平原广布，草场和饲料条件较好，乳畜业较发达。',
  },
]

const grasslandAreas: AgriArea[] = [
  {
    name: '爱尔兰草场牧区',
    lat: 53.3,
    lng: -8.0,
    radius: 230000,
    desc: '温和湿润，草场广布，适合放牧和畜牧业发展。',
  },
  {
    name: '英国西部草场牧区',
    lat: 53.5,
    lng: -3.5,
    radius: 210000,
    desc: '降水较多，牧草生长良好，是重要畜牧业区域。',
  },
  {
    name: '阿尔卑斯山地牧场',
    lat: 46.7,
    lng: 8.6,
    radius: 190000,
    desc: '山地牧场资源丰富，畜牧业与旅游业联系明显。',
  },
]

const grainAreas: AgriArea[] = [
  {
    name: '巴黎盆地商品谷物区',
    lat: 48.7,
    lng: 2.4,
    radius: 220000,
    desc: '地势平坦，土壤较肥沃，是法国重要小麦产区。',
  },
  {
    name: '德国北部平原谷物区',
    lat: 52.4,
    lng: 11.0,
    radius: 230000,
    desc: '平原面积较广，适合机械化谷物生产。',
  },
  {
    name: '波德平原谷物区',
    lat: 52.3,
    lng: 16.0,
    radius: 250000,
    desc: '地势低平，是欧洲中北部重要农业地带。',
  },
]

const horticulturePoints: AgriPoint[] = [
  {
    name: '荷兰花卉园艺',
    lat: 52.2,
    lng: 4.7,
    desc: '荷兰花卉、温室农业和园艺农业发达，现代农业技术水平高。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '法国葡萄园艺',
    lat: 44.8,
    lng: -0.6,
    desc: '法国西南部和南部葡萄种植、葡萄酒产业具有代表性。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '西班牙果蔬农业',
    lat: 38.0,
    lng: -2.5,
    desc: '西班牙南部和东部园艺作物、果蔬生产较有特色。',
    offsetX: 10,
    offsetY: -2,
  },
]

const mediterraneanAreas: AgriArea[] = [
  {
    name: '西班牙地中海农业区',
    lat: 39.0,
    lng: -1.0,
    radius: 300000,
    desc: '适合葡萄、橄榄、柑橘等作物，灌溉农业较常见。',
  },
  {
    name: '意大利地中海农业区',
    lat: 42.0,
    lng: 12.5,
    radius: 260000,
    desc: '葡萄、橄榄、柑橘等园艺作物广泛分布。',
  },
  {
    name: '希腊地中海农业区',
    lat: 39.2,
    lng: 22.5,
    radius: 180000,
    desc: '橄榄、葡萄等作物具有典型地中海农业特色。',
  },
  {
    name: '法国南部地中海农业区',
    lat: 43.7,
    lng: 4.5,
    radius: 170000,
    desc: '地中海沿岸葡萄、橄榄和园艺农业较发达。',
  },
]

function openImagePreview(item: AgriTypeItem) {
  previewImage.value = item
}

function closeImagePreview() {
  previewImage.value = null
}

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

  if (oldPane) {
    oldPane.remove()
  }

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

  if (showDairy.value) {
    dairyLabels.forEach(updateOneLabelPosition)
  }

  if (showGrassland.value) {
    grasslandLabels.forEach(updateOneLabelPosition)
  }

  if (showGrain.value) {
    grainLabels.forEach(updateOneLabelPosition)
  }

  if (showHorticulture.value) {
    horticultureLabels.forEach(updateOneLabelPosition)
  }

  if (showMediterranean.value) {
    mediterraneanLabels.forEach(updateOneLabelPosition)
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
  areas: AgriArea[],
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

    if (label) {
      targetLabels.push(label)
    }
  })

  targetLayer.addTo(map)
}

function addPointLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  points: AgriPoint[],
  options: {
    color: string
    fillColor: string
    labelClassName: string
  },
) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  points.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5,
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

    if (label) {
      targetLabels.push(label)
    }
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showDairy.value) {
    addAreaLayer(dairyLayer, dairyLabels, dairyAreas, {
      color: '#0f78b8',
      fillColor: '#34a7f5',
      fillOpacity: 0.18,
      labelClassName: 'dairy-label-dom',
    })
  } else {
    dairyLayer.clearLayers()
    clearDomLabels(dairyLabels)
  }

  if (showGrassland.value) {
    addAreaLayer(grasslandLayer, grasslandLabels, grasslandAreas, {
      color: '#16a34a',
      fillColor: '#22c55e',
      fillOpacity: 0.16,
      labelClassName: 'grassland-label-dom',
    })
  } else {
    grasslandLayer.clearLayers()
    clearDomLabels(grasslandLabels)
  }

  if (showGrain.value) {
    addAreaLayer(grainLayer, grainLabels, grainAreas, {
      color: '#ca8a04',
      fillColor: '#facc15',
      fillOpacity: 0.18,
      labelClassName: 'grain-label-dom',
    })
  } else {
    grainLayer.clearLayers()
    clearDomLabels(grainLabels)
  }

  if (showHorticulture.value) {
    addPointLayer(horticultureLayer, horticultureLabels, horticulturePoints, {
      color: '#be185d',
      fillColor: '#fbcfe8',
      labelClassName: 'horticulture-label-dom',
    })
  } else {
    horticultureLayer.clearLayers()
    clearDomLabels(horticultureLabels)
  }

  if (showMediterranean.value) {
    addAreaLayer(mediterraneanLayer, mediterraneanLabels, mediterraneanAreas, {
      color: '#f97316',
      fillColor: '#fb923c',
      fillOpacity: 0.16,
      labelClassName: 'mediterranean-label-dom',
    })
  } else {
    mediterraneanLayer.clearLayers()
    clearDomLabels(mediterraneanLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  dairyLayer.clearLayers()
  grasslandLayer.clearLayers()
  grainLayer.clearLayers()
  horticultureLayer.clearLayers()
  mediterraneanLayer.clearLayers()

  if (map.hasLayer(dairyLayer)) dairyLayer.removeFrom(map)
  if (map.hasLayer(grasslandLayer)) grasslandLayer.removeFrom(map)
  if (map.hasLayer(grainLayer)) grainLayer.removeFrom(map)
  if (map.hasLayer(horticultureLayer)) horticultureLayer.removeFrom(map)
  if (map.hasLayer(mediterraneanLayer)) mediterraneanLayer.removeFrom(map)

  clearDomLabels(dairyLabels)
  clearDomLabels(grasslandLabels)
  clearDomLabels(grainLabels)
  clearDomLabels(horticultureLabels)
  clearDomLabels(mediterraneanLabels)
}

onMounted(async () => {
  map = L.map('westernEuropeAgricultureMap', {
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
.agriculture-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.agriculture-header {
  margin-bottom: 32px;
}

.agriculture-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.agriculture-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.agriculture-content-right {
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

.agriculture-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.agriculture-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.agriculture-card-01 {
  background: #eff8ff;
  border-color: #cfefff;
}

.agriculture-card-02 {
  background: #f0f7fb;
  border-color: #d3e6f0;
}

.agriculture-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.agriculture-card-04 {
  background: #fefce8;
  border-color: #fde68a;
}

.agriculture-card-04 .agriculture-card-header,
.agriculture-card-04 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.agriculture-card p {
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

.agri-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.agri-type-image-card {
  background: #fff;
  border-radius: 8px;
  border: 1px solid #cee3ed;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.agri-img-wrap {
  position: relative;
  width: 100%;
  height: 104px;
  overflow: hidden;
  background: #eff8ff;
  cursor: zoom-in;
}

.agri-img-wrap img {
  width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}

.agri-img-wrap:hover img {
  transform: scale(1.05);
}

.agri-img-title {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 8px;
  background: linear-gradient(to top, rgba(15, 120, 184, 0.92), rgba(15, 120, 184, 0.18));
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.agri-img-zoom {
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 2px 6px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 11px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.agri-img-wrap:hover .agri-img-zoom {
  opacity: 1;
}

.agri-type-desc {
  padding: 8px 10px;
  font-size: 12px;
  color: #374151;
  line-height: 1.5;
}

.crop-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.crop-chip {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  background: #fff;
  border: 1px solid #e5e7eb;
  color: #374151;
}

.crop-chip.milk {
  background: #eff8ff;
  border-color: #7dd3fc;
  color: #0f6fa8;
}

.crop-chip.cheese {
  background: #fef3c7;
  border-color: #facc15;
  color: #854d0e;
}

.crop-chip.butter {
  background: #fef9c3;
  border-color: #fde047;
  color: #713f12;
}

.crop-chip.beef {
  background: #fee2e2;
  border-color: #f87171;
  color: #991b1b;
}

.crop-chip.wheat {
  background: #fef3c7;
  border-color: #f59e0b;
  color: #92400e;
}

.crop-chip.barley {
  background: #fff7ed;
  border-color: #fb923c;
  color: #9a3412;
}

.crop-chip.grape {
  background: #ede9fe;
  border-color: #8b5cf6;
  color: #5b21b6;
}

.crop-chip.flower {
  background: #fce7f3;
  border-color: #f472b6;
  color: #9d174d;
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

.bar-dairy {
  width: 90%;
  background: var(--primary-color);
}

.bar-grain {
  width: 70%;
  background: #facc15;
}

.bar-horticulture {
  width: 62%;
  background: #ec4899;
}

.bar-med {
  width: 58%;
  background: #f97316;
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

.legend-area-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  line-height: 1.35;
}

.legend-area-row:last-child {
  margin-bottom: 0;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.dairy-area {
  background: rgba(52, 167, 245, 0.22);
  border: 1px solid #0f78b8;
}

.grassland-area {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid #16a34a;
}

.grain-area {
  background: rgba(250, 204, 21, 0.28);
  border: 1px solid #ca8a04;
}

.med-area {
  background: rgba(249, 115, 22, 0.2);
  border: 1px solid #f97316;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.horticulture-dot {
  background: #fbcfe8;
  border: 2px solid #be185d;
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

:deep(.dairy-label-dom) {
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

:deep(.grassland-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #15803d;
  background: rgba(240, 253, 244, 0.92);
  border: 1px solid rgba(22, 163, 74, 0.6);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.grain-label-dom) {
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

:deep(.horticulture-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #be185d;
  background: rgba(253, 242, 248, 0.94);
  border: 1px solid rgba(190, 24, 93, 0.5);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.mediterranean-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #c2410c;
  background: rgba(255, 247, 237, 0.95);
  border: 1px solid rgba(249, 115, 22, 0.55);
  border-radius: 999px;
  padding: 2px 7px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

.image-preview-mask {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 23, 42, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
}

.image-preview-box {
  position: relative;
  width: min(980px, 88vw);
  max-height: 90vh;
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  overflow: auto;
}

.image-preview-close {
  position: absolute;
  top: 8px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.82);
  color: #fff;
  font-size: 22px;
  line-height: 28px;
  cursor: pointer;
  z-index: 2;
}

.image-preview-title {
  font-weight: bold;
  color: #0f3554;
  font-size: 17px;
  margin-bottom: 10px;
  padding-right: 40px;
}

.image-preview-img {
  width: 100%;
  max-height: 68vh;
  object-fit: contain;
  display: block;
  border-radius: 8px;
  background: #f8fafc;
}

.image-preview-desc {
  margin-top: 10px;
  padding: 9px 10px;
  border-left: 4px solid var(--primary-color);
  background: #eff8ff;
  border-radius: 6px;
  color: #374151;
  font-size: 13px;
  line-height: 1.55;
}
</style>
