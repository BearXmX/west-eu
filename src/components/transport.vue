<template>
  <div class="transport-container">
    <div class="transport-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="transport-content">
      <!-- 左侧内容区 -->
      <div class="transport-content-left">
        <div class="transport-card transport-card-01">
          <div class="transport-card-header"><i class="iconfont icon-hexin"></i>交通总体特征</div>

          <p class="mb-8">
            欧洲西部交通运输发达，形成了<strong>铁路、公路、航空、内河航运和海运</strong>相互配合的综合交通运输网络。
            城市之间联系紧密，跨国交通便利，是世界交通网络较密集的地区之一。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">交通网络</div>
              <div class="feature-value">密集完善</div>
              <div class="feature-desc">铁路、公路、航空、港口和内河航运联系紧密。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">区域联系</div>
              <div class="feature-value">跨国便利</div>
              <div class="feature-desc">国家众多但交通便捷，城市之间往来频繁。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>欧洲西部交通发达，与<strong>经济发达、城市密集、地形平坦、海岸曲折、区域合作紧密</strong>有关。</div>
          </div>
        </div>

        <div class="transport-card transport-card-02">
          <div class="transport-card-header"><i class="iconfont icon-gaosu"></i>主要交通方式</div>

          <div class="transport-type-grid">
            <div class="transport-type-card">
              <div class="transport-type-icon">🚄</div>
              <div class="transport-type-title">高速铁路</div>
              <div class="transport-type-desc">法国、德国、西班牙、意大利等国高速铁路发达，连接主要城市群。</div>
            </div>

            <div class="transport-type-card">
              <div class="transport-type-icon">🚢</div>
              <div class="transport-type-title">海运港口</div>
              <div class="transport-type-desc">鹿特丹、安特卫普、汉堡等港口联系大西洋航线和欧洲内陆市场。</div>
            </div>

            <div class="transport-type-card">
              <div class="transport-type-icon">✈️</div>
              <div class="transport-type-title">航空枢纽</div>
              <div class="transport-type-desc">伦敦、巴黎、法兰克福、阿姆斯特丹等城市航空联系广泛。</div>
            </div>

            <div class="transport-type-card">
              <div class="transport-type-icon">🚚</div>
              <div class="transport-type-title">公路与物流</div>
              <div class="transport-type-desc">公路网密集，物流运输效率高，支持工业生产和服务业发展。</div>
            </div>
          </div>
        </div>

        <div class="transport-card transport-card-03">
          <div class="transport-card-header"><i class="iconfont icon-chengshi"></i>城市群与城市网络</div>

          <p class="mb-8">欧洲西部城市密集，伦敦、巴黎、布鲁塞尔、阿姆斯特丹、法兰克福、米兰等城市功能突出， 形成联系紧密的城市网络和经济核心区。</p>

          <div class="city-network-item">
            <div class="item-title">西北欧城市密集带</div>
            <div class="item-desc">从英国东南部、荷兰、比利时到德国西部，人口、城市和交通线高度集中。</div>
          </div>

          <div class="city-network-item">
            <div class="item-title">莱茵河沿线城市带</div>
            <div class="item-desc">依托莱茵河航运和工业基础，形成德国西部、荷兰等地的重要城市联系带。</div>
          </div>

          <div class="city-network-item">
            <div class="item-title">巴黎—伦敦—布鲁塞尔联系区</div>
            <div class="item-desc">高铁、航空和公路联系便利，是欧洲重要政治、经济和文化交流区域。</div>
          </div>
        </div>

        <div class="transport-card transport-card-04">
          <div class="transport-card-header"><i class="iconfont icon-huiyuanfazhanqushi"></i>交通对区域发展的影响</div>

          <div class="impact-item">
            <div class="item-title">促进贸易发展</div>
            <div class="item-desc">港口和内河航运连接世界市场，有利于进出口贸易和产业协作。</div>
          </div>

          <div class="impact-item">
            <div class="item-title">加强城市联系</div>
            <div class="item-desc">铁路、公路和航空缩短城市间距离，促进人口、资金、技术流动。</div>
          </div>

          <div class="impact-item">
            <div class="item-title">推动区域一体化</div>
            <div class="item-desc">跨国交通网络加强欧洲西部国家间联系，服务于欧盟区域合作。</div>
          </div>
        </div>

        <div class="transport-card transport-card-05">
          <div class="transport-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记特点：</strong>交通网络密集，运输方式多样。</li>
            <li><strong>二记港口：</strong>海岸线曲折，多优良港湾，海运便利。</li>
            <li><strong>三记河流：</strong>莱茵河等河流航运价值高。</li>
            <li><strong>四记城市：</strong>城市密集，城市群和城市网络发达。</li>
            <li><strong>五记影响：</strong>交通促进贸易、工业、服务业和区域合作发展。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="transport-content-right">
        <div id="westernEuropeTransportMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看交通与城市群分布</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showCityClusters" @change="refreshMapLayers" />
            城市群
          </label>

          <label>
            <input type="checkbox" v-model="showTransportCorridors" @change="refreshMapLayers" />
            交通走廊
          </label>

          <label>
            <input type="checkbox" v-model="showPorts" @change="refreshMapLayers" />
            港口节点
          </label>

          <label>
            <input type="checkbox" v-model="showAirports" @change="refreshMapLayers" />
            航空枢纽
          </label>

          <label>
            <input type="checkbox" v-model="showCoreCities" @change="refreshMapLayers" />
            核心城市
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area cluster-area"></span>
              <span>城市群</span>
            </div>

            <div class="legend-row">
              <span class="legend-line corridor-line"></span>
              <span>交通走廊</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot port-dot"></span>
              <span>港口节点</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot airport-dot"></span>
              <span>航空枢纽</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot city-dot"></span>
              <span>核心城市</span>
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

type TransportArea = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type TransportPoint = {
  name: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type TransportLine = {
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
const centerLng = 5.5
const zoomLevel = 4

const useGoogle = ref(false)
const showCityClusters = ref(true)
const showTransportCorridors = ref(true)
const showPorts = ref(true)
const showAirports = ref(true)
const showCoreCities = ref(true)

const cityClusterLayer = L.layerGroup()
const transportCorridorLayer = L.layerGroup()
const portLayer = L.layerGroup()
const airportLayer = L.layerGroup()
const coreCityLayer = L.layerGroup()

const cityClusterLabels: DomLabel[] = []
const transportCorridorLabels: DomLabel[] = []
const portLabels: DomLabel[] = []
const airportLabels: DomLabel[] = []
const coreCityLabels: DomLabel[] = []

const cityClusters: TransportArea[] = [
  {
    name: '西北欧城市密集带',
    lat: 51.8,
    lng: 4.5,
    radius: 360000,
    desc: '英国东南部、荷兰、比利时、德国西部城市密集，交通和经济联系紧密。',
  },
  {
    name: '莱茵河城市带',
    lat: 50.5,
    lng: 7.0,
    radius: 260000,
    desc: '依托莱茵河航运和工业基础，形成重要城市与交通走廊。',
  },
  {
    name: '巴黎都市圈',
    lat: 48.85,
    lng: 2.35,
    radius: 160000,
    desc: '法国政治、经济、文化和交通中心，服务业和交通联系突出。',
  },
  {
    name: '北意大利城市群',
    lat: 45.3,
    lng: 9.5,
    radius: 210000,
    desc: '米兰、都灵、威尼斯等城市联系密切，是意大利经济核心区。',
  },
]

const transportCorridors: TransportLine[] = [
  {
    name: '伦敦—巴黎—布鲁塞尔走廊',
    path: [
      [51.5072, -0.1276],
      [50.8503, 4.3517],
      [48.8566, 2.3522],
    ],
    desc: '连接伦敦、布鲁塞尔、巴黎等核心城市，高铁与航空联系密切。',
    color: '#2563eb',
  },
  {
    name: '莱茵河交通走廊',
    path: [
      [47.3769, 8.5417],
      [50.1109, 8.6821],
      [51.45, 7.2],
      [51.95, 4.14],
    ],
    desc: '连接瑞士、德国西部与荷兰港口，是欧洲重要内河和综合交通走廊。',
    color: '#0ea5e9',
  },
  {
    name: '巴黎—里昂—米兰走廊',
    path: [
      [48.8566, 2.3522],
      [45.764, 4.8357],
      [45.4642, 9.19],
    ],
    desc: '联系法国中东部与意大利北部，是欧洲南北向重要交通联系线。',
    color: '#6366f1',
    dashArray: '8 6',
  },
  {
    name: '北海—中欧物流走廊',
    path: [
      [51.95, 4.14],
      [51.45, 7.2],
      [50.1109, 8.6821],
      [48.1351, 11.582],
    ],
    desc: '从北海港口深入欧洲内陆，服务工业区和城市群物流运输。',
    color: '#0284c7',
    dashArray: '8 6',
  },
]

const ports: TransportPoint[] = [
  {
    name: '鹿特丹港',
    lat: 51.95,
    lng: 4.14,
    desc: '欧洲重要港口，连接海运航线与欧洲内陆交通网络。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '安特卫普港',
    lat: 51.22,
    lng: 4.4,
    desc: '比利时重要港口，物流、贸易和化工产业发达。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '汉堡港',
    lat: 53.55,
    lng: 9.99,
    desc: '德国重要港口，北海—波罗的海方向交通联系突出。',
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

const airports: TransportPoint[] = [
  {
    name: '伦敦',
    lat: 51.5072,
    lng: -0.1276,
    desc: '欧洲重要航空和金融服务中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴黎',
    lat: 48.8566,
    lng: 2.3522,
    desc: '法国航空、铁路和旅游服务中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '法兰克福',
    lat: 50.1109,
    lng: 8.6821,
    desc: '德国重要航空和金融中心，交通枢纽地位突出。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '阿姆斯特丹',
    lat: 52.3676,
    lng: 4.9041,
    desc: '荷兰重要航空、港口和物流中心。',
    offsetX: 10,
    offsetY: -2,
  },
]

const coreCities: TransportPoint[] = [
  {
    name: '伦敦',
    lat: 51.5072,
    lng: -0.1276,
    desc: '英国首都，欧洲重要国际城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴黎',
    lat: 48.8566,
    lng: 2.3522,
    desc: '法国首都，欧洲重要政治、经济和文化中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '布鲁塞尔',
    lat: 50.8503,
    lng: 4.3517,
    desc: '比利时首都，欧洲区域合作和商务服务功能突出。',
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
    name: '米兰',
    lat: 45.4642,
    lng: 9.19,
    desc: '意大利北部重要工业、金融、设计和交通中心。',
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

  if (showCityClusters.value) {
    cityClusterLabels.forEach(updateOneLabelPosition)
  }

  if (showTransportCorridors.value) {
    transportCorridorLabels.forEach(updateOneLabelPosition)
  }

  if (showPorts.value) {
    portLabels.forEach(updateOneLabelPosition)
  }

  if (showAirports.value) {
    airportLabels.forEach(updateOneLabelPosition)
  }

  if (showCoreCities.value) {
    coreCityLabels.forEach(updateOneLabelPosition)
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
  areas: TransportArea[],
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

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: TransportLine[]) {
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
        className: 'corridor-label-dom',
        offsetX: 0,
        offsetY: -10,
      })

      if (label) targetLabels.push(label)
    }
  })

  targetLayer.addTo(map)
}

function addPointLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  points: TransportPoint[],
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

  if (showCityClusters.value) {
    addAreaLayer(cityClusterLayer, cityClusterLabels, cityClusters, {
      color: '#0f78b8',
      fillColor: '#34a7f5',
      fillOpacity: 0.14,
      labelClassName: 'cluster-label-dom',
    })
  } else {
    cityClusterLayer.clearLayers()
    clearDomLabels(cityClusterLabels)
  }

  if (showTransportCorridors.value) {
    addLineLayer(transportCorridorLayer, transportCorridorLabels, transportCorridors)
  } else {
    transportCorridorLayer.clearLayers()
    clearDomLabels(transportCorridorLabels)
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

  if (showAirports.value) {
    addPointLayer(airportLayer, airportLabels, airports, {
      color: '#7c3aed',
      fillColor: '#ddd6fe',
      radius: 5.5,
      labelClassName: 'airport-label-dom',
    })
  } else {
    airportLayer.clearLayers()
    clearDomLabels(airportLabels)
  }

  if (showCoreCities.value) {
    addPointLayer(coreCityLayer, coreCityLabels, coreCities, {
      color: '#1e3a8a',
      fillColor: '#bfdbfe',
      radius: 5.6,
      labelClassName: 'city-label-dom',
    })
  } else {
    coreCityLayer.clearLayers()
    clearDomLabels(coreCityLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  cityClusterLayer.clearLayers()
  transportCorridorLayer.clearLayers()
  portLayer.clearLayers()
  airportLayer.clearLayers()
  coreCityLayer.clearLayers()

  if (map.hasLayer(cityClusterLayer)) cityClusterLayer.removeFrom(map)
  if (map.hasLayer(transportCorridorLayer)) transportCorridorLayer.removeFrom(map)
  if (map.hasLayer(portLayer)) portLayer.removeFrom(map)
  if (map.hasLayer(airportLayer)) airportLayer.removeFrom(map)
  if (map.hasLayer(coreCityLayer)) coreCityLayer.removeFrom(map)

  clearDomLabels(cityClusterLabels)
  clearDomLabels(transportCorridorLabels)
  clearDomLabels(portLabels)
  clearDomLabels(airportLabels)
  clearDomLabels(coreCityLabels)
}

onMounted(async () => {
  map = L.map('westernEuropeTransportMap', {
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
.transport-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.transport-header {
  margin-bottom: 32px;
}

.transport-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.transport-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.transport-content-right {
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

.transport-card {
  border-radius: 8px;
  border: 1px solid #d7e7f0;
  padding: 14px;
}

.transport-card-01 {
  background: #eff8ff;
  border-color: #cfefff;
}

.transport-card-02 {
  background: #f0f7fb;
  border-color: #d3e6f0;
}

.transport-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.transport-card-04 {
  background: #f3f8fb;
  border-color: #cee3ed;
}

.transport-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.transport-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #0f78b8;
}

.transport-card-05 .transport-card-header,
.transport-card-05 .iconfont {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.mb-8 {
  margin-bottom: 8px;
}

.transport-card p {
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

.transport-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.transport-type-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.transport-type-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.transport-type-title {
  font-weight: bold;
  color: #0f6fa8;
  margin-bottom: 4px;
}

.transport-type-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}

.city-network-item,
.impact-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.city-network-item:last-child,
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

.cluster-area {
  background: rgba(52, 167, 245, 0.22);
  border: 1px solid #0f78b8;
}

.legend-line {
  width: 24px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.corridor-line {
  border-top: 3px solid #2563eb;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.port-dot {
  background: #bae6fd;
  border: 2px solid #0369a1;
  box-sizing: border-box;
}

.airport-dot {
  background: #ddd6fe;
  border: 2px solid #7c3aed;
  box-sizing: border-box;
}

.city-dot {
  background: #bfdbfe;
  border: 2px solid #1e3a8a;
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

:deep(.cluster-label-dom) {
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

:deep(.corridor-label-dom) {
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

:deep(.airport-label-dom) {
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

:deep(.city-label-dom) {
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
</style>
