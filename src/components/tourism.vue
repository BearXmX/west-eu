<template>
  <div class="tourism-container">
    <div class="tourism-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="tourism-content">
      <!-- 左侧内容区 -->
      <div class="tourism-content-left">
        <div class="tourism-card tourism-card-01">
          <div class="tourism-card-header"><i class="iconfont icon-lvyouye"></i>旅游资源总体特征</div>

          <p class="mb-8">
            欧洲西部旅游资源十分丰富，既有<strong>阿尔卑斯山、峡湾、地中海海岸</strong>等自然风光，
            也有<strong>古城、博物馆、教堂、宫殿、艺术遗产</strong>等人文景观。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">自然旅游</div>
              <div class="feature-value">类型多样</div>
              <div class="feature-desc">山地、海岸、峡湾、湖泊、岛屿等景观丰富。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">人文旅游</div>
              <div class="feature-value">历史深厚</div>
              <div class="feature-desc">文化遗产、艺术、建筑、宗教和城市风貌突出。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>欧洲西部旅游业发达，与<strong>资源丰富、交通便利、经济发达、服务完善、文化积淀深厚</strong>有关。</div>
          </div>
        </div>

        <div class="tourism-card tourism-card-02">
          <div class="tourism-card-header"><i class="iconfont icon-ziranfengguang"></i>自然旅游资源</div>

          <div class="tourism-image-grid">
            <div class="tourism-image-card" v-for="item in naturalTourismList" :key="item.title">
              <div class="tourism-img-wrap" @click="openImagePreview(item)">
                <img :src="item.img" :alt="item.title" loading="lazy" />
                <div class="tourism-img-title">{{ item.title }}</div>
                <div class="tourism-img-zoom">点击查看大图</div>
              </div>

              <div class="tourism-img-desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>

        <div class="tourism-card tourism-card-03">
          <div class="tourism-card-header"><i class="iconfont icon-renwen"></i>人文旅游资源</div>

          <p class="mb-8">欧洲西部历史悠久，城市文化遗产丰富，许多国家拥有世界著名的艺术、建筑、音乐、宗教和博物馆资源。</p>

          <div class="heritage-image-list">
            <div class="heritage-image-card" v-for="item in humanTourismList" :key="item.title">
              <div class="heritage-img-wrap" @click="openImagePreview(item)">
                <img :src="item.img" :alt="item.title" loading="lazy" />
                <div class="heritage-img-title">{{ item.title }}</div>
                <div class="heritage-img-zoom">点击查看大图</div>
              </div>

              <div class="heritage-img-content">
                <div class="heritage-img-name">{{ item.title }}</div>
                <div class="heritage-img-desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="tourism-card tourism-card-04">
          <div class="tourism-card-header"><i class="iconfont icon-biangengminzu"></i>著名旅游城市与景点</div>

          <div class="city-grid">
            <div class="city-chip">巴黎</div>
            <div class="city-chip">伦敦</div>
            <div class="city-chip">罗马</div>
            <div class="city-chip">威尼斯</div>
            <div class="city-chip">巴塞罗那</div>
            <div class="city-chip">阿姆斯特丹</div>
            <div class="city-chip">日内瓦</div>
            <div class="city-chip">雅典</div>
          </div>
        </div>

        <div class="tourism-card tourism-card-05">
          <div class="tourism-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记资源：</strong>自然风光与文化遗产都很丰富。</li>
            <li><strong>二记自然：</strong>阿尔卑斯山、挪威峡湾、地中海海岸等景观突出。</li>
            <li><strong>三记人文：</strong>古城、宫殿、教堂、博物馆、艺术遗产众多。</li>
            <li><strong>四记条件：</strong>交通便利，服务业发达，接待能力强。</li>
            <li><strong>五记影响：</strong>旅游业促进交通、餐饮、住宿、文化服务等产业发展。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="tourism-content-right">
        <div id="westernEuropeTourismMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看旅游资源分布</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showNatureAreas" @change="refreshMapLayers" />
            自然旅游区
          </label>

          <label>
            <input type="checkbox" v-model="showHeritageCities" @change="refreshMapLayers" />
            文化遗产城市
          </label>

          <label>
            <input type="checkbox" v-model="showCoastalResorts" @change="refreshMapLayers" />
            滨海度假区
          </label>

          <label>
            <input type="checkbox" v-model="showTourRoutes" @change="refreshMapLayers" />
            经典旅游线路
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area nature-area"></span>
              <span>自然旅游区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot heritage-dot"></span>
              <span>文化遗产城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-area coastal-area"></span>
              <span>滨海度假区</span>
            </div>

            <div class="legend-row">
              <span class="legend-line route-line"></span>
              <span>经典旅游线路</span>
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

type TourismArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type TourismPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type TourismLine = {
  name: string
  path: [number, number][]
  desc: string
  color: string
  dashArray?: string
}

type TourismImageItem = {
  title: string
  img: string
  desc: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 49.8
const centerLng = 7.0
const zoomLevel = 4

const useGoogle = ref(false)
const showNatureAreas = ref(true)
const showHeritageCities = ref(true)
const showCoastalResorts = ref(true)
const showTourRoutes = ref(true)

const previewImage = ref<TourismImageItem | null>(null)

const tourismImageBaseUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/image/'

const naturalTourismList: TourismImageItem[] = [
  {
    title: '阿尔卑斯山',
    img: tourismImageBaseUrl + '欧洲西部阿尔卑斯山.png',
    desc: '山地景观壮丽，适合滑雪、登山、观光，是欧洲著名自然旅游区。',
  },
  {
    title: '地中海海岸',
    img: tourismImageBaseUrl + '欧洲西部地中海海岸.png',
    desc: '阳光、沙滩、海湾和滨海城市众多，度假旅游发达。',
  },
  {
    title: '挪威峡湾',
    img: tourismImageBaseUrl + '欧洲西部挪威峡湾.png',
    desc: '冰川侵蚀形成峡湾景观，海岸曲折，景色独特。',
  },
  {
    title: '岛屿与海湾',
    img: tourismImageBaseUrl + '欧洲西部岛屿与海湾.png',
    desc: '希腊群岛、意大利沿海、法国南部等地海岸旅游资源丰富。',
  },
]

const humanTourismList: TourismImageItem[] = [
  {
    title: '法国巴黎',
    img: tourismImageBaseUrl + '欧洲西部法国巴黎.png',
    desc: '埃菲尔铁塔、卢浮宫、凯旋门、塞纳河沿岸等旅游资源集中，是欧洲著名文化旅游城市。',
  },
  {
    title: '意大利威尼斯',
    img: tourismImageBaseUrl + '欧洲西部意大利威尼斯.png',
    desc: '水城风貌独特，运河、桥梁、广场和历史建筑丰富，是欧洲重要人文旅游城市。',
  },
  {
    title: '英国伦敦',
    img: tourismImageBaseUrl + '欧洲西部英国伦敦.png',
    desc: '大英博物馆、白金汉宫、伦敦塔桥等体现历史与现代城市风貌，文化旅游资源丰富。',
  },
]

const natureAreaLayer = L.layerGroup()
const heritageCityLayer = L.layerGroup()
const coastalResortLayer = L.layerGroup()
const tourRouteLayer = L.layerGroup()

const natureAreaLabels: DomLabel[] = []
const heritageCityLabels: DomLabel[] = []
const coastalResortLabels: DomLabel[] = []
const tourRouteLabels: DomLabel[] = []

const natureAreas: TourismArea[] = [
  {
    name: '阿尔卑斯山旅游区',
    lat: 46.7,
    lng: 8.6,
    radius: 260000,
    desc: '山地风光壮丽，滑雪、登山、湖泊观光等旅游活动丰富。',
  },
  {
    name: '挪威峡湾旅游区',
    lat: 61.3,
    lng: 6.8,
    radius: 240000,
    desc: '冰川侵蚀形成峡湾景观，是北欧著名自然旅游资源。',
  },
  {
    name: '瑞士湖区与山地',
    lat: 46.9,
    lng: 8.2,
    radius: 160000,
    desc: '湖泊、雪山和山地小镇景观突出，旅游服务业发达。',
  },
  {
    name: '苏格兰高地',
    lat: 57.2,
    lng: -4.5,
    radius: 180000,
    desc: '山地、湖泊和高地风光具有独特自然景观特色。',
  },
]

const heritageCities: TourismPoint[] = [
  {
    name: '巴黎',
    lat: 48.8566,
    lng: 2.3522,
    desc: '埃菲尔铁塔、卢浮宫、凯旋门、塞纳河沿岸等旅游资源集中。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '伦敦',
    lat: 51.5072,
    lng: -0.1276,
    desc: '大英博物馆、白金汉宫、伦敦塔桥等人文景观丰富。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '罗马',
    lat: 41.9028,
    lng: 12.4964,
    desc: '古罗马遗址、斗兽场、宗教文化遗产突出。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '威尼斯',
    lat: 45.4408,
    lng: 12.3155,
    desc: '水城风貌独特，是世界著名旅游城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '佛罗伦萨',
    lat: 43.7696,
    lng: 11.2558,
    desc: '文艺复兴艺术遗产丰富，博物馆和历史建筑众多。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴塞罗那',
    lat: 41.3851,
    lng: 2.1734,
    desc: '建筑艺术、滨海风光和城市文化旅游资源丰富。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿姆斯特丹',
    lat: 52.3676,
    lng: 4.9041,
    desc: '运河、博物馆、历史街区和城市风貌具有吸引力。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅典',
    lat: 37.9838,
    lng: 23.7275,
    desc: '古希腊文明遗迹丰富，是欧洲重要文化旅游城市。',
    offsetX: 10,
    offsetY: -2,
  },
]

const coastalResorts: TourismArea[] = [
  {
    name: '法国蔚蓝海岸',
    lat: 43.7,
    lng: 7.2,
    radius: 120000,
    desc: '地中海滨海度假胜地，气候宜人，旅游服务业发达。',
  },
  {
    name: '西班牙地中海海岸',
    lat: 39.5,
    lng: 0.0,
    radius: 270000,
    desc: '阳光、沙滩、海湾和滨海城市众多，度假旅游发达。',
  },
  {
    name: '意大利西部海岸',
    lat: 41.8,
    lng: 12.0,
    radius: 210000,
    desc: '海岸风光、历史城市和文化遗产联系紧密。',
  },
  {
    name: '希腊群岛',
    lat: 37.3,
    lng: 25.0,
    radius: 220000,
    desc: '岛屿众多，海岸风光和古代文明遗产丰富。',
  },
]

const tourRoutes: TourismLine[] = [
  {
    name: '伦敦—巴黎—阿姆斯特丹线路',
    path: [
      [51.5072, -0.1276],
      [48.8566, 2.3522],
      [52.3676, 4.9041],
    ],
    desc: '连接西欧重要城市，适合城市文化、博物馆和历史遗产旅游。',
    color: '#2563eb',
  },
  {
    name: '巴黎—瑞士—米兰线路',
    path: [
      [48.8566, 2.3522],
      [46.9, 8.2],
      [45.4642, 9.19],
    ],
    desc: '串联法国城市文化、阿尔卑斯山风光和意大利北部城市旅游。',
    color: '#0ea5e9',
    dashArray: '8 6',
  },
  {
    name: '罗马—佛罗伦萨—威尼斯线路',
    path: [
      [41.9028, 12.4964],
      [43.7696, 11.2558],
      [45.4408, 12.3155],
    ],
    desc: '意大利经典文化遗产线路，历史古迹和艺术资源集中。',
    color: '#f97316',
  },
  {
    name: '巴塞罗那—蔚蓝海岸—意大利线路',
    path: [
      [41.3851, 2.1734],
      [43.7, 7.2],
      [45.4408, 12.3155],
    ],
    desc: '串联地中海沿岸城市、滨海度假和人文旅游资源。',
    color: '#ec4899',
    dashArray: '8 6',
  },
]

function openImagePreview(item: TourismImageItem) {
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

  if (showNatureAreas.value) {
    natureAreaLabels.forEach(updateOneLabelPosition)
  }

  if (showHeritageCities.value) {
    heritageCityLabels.forEach(updateOneLabelPosition)
  }

  if (showCoastalResorts.value) {
    coastalResortLabels.forEach(updateOneLabelPosition)
  }

  if (showTourRoutes.value) {
    tourRouteLabels.forEach(updateOneLabelPosition)
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
  areas: TourismArea[],
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
  points: TourismPoint[],
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

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: TourismLine[]) {
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
        className: 'route-label-dom',
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

  if (showNatureAreas.value) {
    addAreaLayer(natureAreaLayer, natureAreaLabels, natureAreas, {
      color: '#16a34a',
      fillColor: '#22c55e',
      fillOpacity: 0.15,
      labelClassName: 'nature-label-dom',
    })
  } else {
    natureAreaLayer.clearLayers()
    clearDomLabels(natureAreaLabels)
  }

  if (showHeritageCities.value) {
    addPointLayer(heritageCityLayer, heritageCityLabels, heritageCities, {
      color: '#7c3aed',
      fillColor: '#ddd6fe',
      radius: 5.6,
      labelClassName: 'heritage-label-dom',
    })
  } else {
    heritageCityLayer.clearLayers()
    clearDomLabels(heritageCityLabels)
  }

  if (showCoastalResorts.value) {
    addAreaLayer(coastalResortLayer, coastalResortLabels, coastalResorts, {
      color: '#0284c7',
      fillColor: '#38bdf8',
      fillOpacity: 0.14,
      labelClassName: 'coastal-label-dom',
    })
  } else {
    coastalResortLayer.clearLayers()
    clearDomLabels(coastalResortLabels)
  }

  if (showTourRoutes.value) {
    addLineLayer(tourRouteLayer, tourRouteLabels, tourRoutes)
  } else {
    tourRouteLayer.clearLayers()
    clearDomLabels(tourRouteLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  natureAreaLayer.clearLayers()
  heritageCityLayer.clearLayers()
  coastalResortLayer.clearLayers()
  tourRouteLayer.clearLayers()

  if (map.hasLayer(natureAreaLayer)) natureAreaLayer.removeFrom(map)
  if (map.hasLayer(heritageCityLayer)) heritageCityLayer.removeFrom(map)
  if (map.hasLayer(coastalResortLayer)) coastalResortLayer.removeFrom(map)
  if (map.hasLayer(tourRouteLayer)) tourRouteLayer.removeFrom(map)

  clearDomLabels(natureAreaLabels)
  clearDomLabels(heritageCityLabels)
  clearDomLabels(coastalResortLabels)
  clearDomLabels(tourRouteLabels)
}

onMounted(async () => {
  map = L.map('westernEuropeTourismMap', {
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
.tourism-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.tourism-header {
  margin-bottom: 32px;
}

.tourism-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.tourism-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.tourism-content-right {
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

.tourism-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.tourism-card-01 {
  background: #eff8ff;
  border-color: #cfefff;
}

.tourism-card-02 {
  background: #f0f7fb;
  border-color: #d3e6f0;
}

.tourism-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.tourism-card-04 {
  background: #f3f8fb;
  border-color: #cee3ed;
}

.tourism-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.tourism-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.tourism-card-05 .tourism-card-header,
.tourism-card-05 .iconfont {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.mb-8 {
  margin-bottom: 8px;
}

.tourism-card p {
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

.tourism-image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.tourism-image-card {
  background: #fff;
  border-radius: 9px;
  border: 1px solid #cee3ed;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.1);
}

.tourism-img-wrap {
  position: relative;
  height: 112px;
  overflow: hidden;
  background: #eff8ff;
  cursor: zoom-in;
}

.tourism-img-wrap img,
.heritage-img-wrap img {
  width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}

.tourism-img-wrap:hover img,
.heritage-img-wrap:hover img {
  transform: scale(1.06);
}

.tourism-img-title,
.heritage-img-title {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 7px 9px;
  background: linear-gradient(to top, rgba(15, 120, 184, 0.94), rgba(15, 120, 184, 0.2));
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.tourism-img-zoom,
.heritage-img-zoom {
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

.tourism-img-wrap:hover .tourism-img-zoom,
.heritage-img-wrap:hover .heritage-img-zoom {
  opacity: 1;
}

.tourism-img-desc {
  padding: 8px 10px;
  min-height: 58px;
  font-size: 12px;
  color: #374151;
  line-height: 1.48;
}

.heritage-image-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.heritage-image-card {
  display: grid;
  grid-template-columns: 42% 1fr;
  min-height: 118px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #cee3ed;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.1);
}

.heritage-img-wrap {
  position: relative;
  height: 100%;
  min-height: 118px;
  overflow: hidden;
  background: #eff8ff;
  cursor: zoom-in;
}

.heritage-img-content {
  padding: 10px 12px;
}

.heritage-img-name {
  font-size: 15px;
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 6px;
}

.heritage-img-desc {
  font-size: 13px;
  line-height: 1.55;
  color: #475569;
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

.bar-heritage {
  width: 90%;
  background: #7c3aed;
}

.bar-nature {
  width: 78%;
  background: #22c55e;
}

.bar-city {
  width: 82%;
  background: var(--primary-color);
}

.bar-holiday {
  width: 70%;
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

.nature-area {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid #16a34a;
}

.coastal-area {
  background: rgba(56, 189, 248, 0.22);
  border: 1px solid #0284c7;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.heritage-dot {
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

.route-line {
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

:deep(.nature-label-dom) {
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

:deep(.heritage-label-dom) {
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

:deep(.coastal-label-dom) {
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

:deep(.route-label-dom) {
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
