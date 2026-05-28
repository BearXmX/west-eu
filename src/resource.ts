import geojson01 from '@/assets/geojson/欧洲年降水量分布.geojson?raw'
import geojson02 from '@/assets/geojson/欧洲七月平均气温.geojson?raw'
import geojson03 from '@/assets/geojson/欧洲西部轮廓线.geojson?raw'
import geojson04 from '@/assets/geojson/欧洲西部气候类型.geojson?raw'
import geojson05 from '@/assets/geojson/欧洲西部主要国家.geojson?raw'
import geojson06 from '@/assets/geojson/欧洲西部主要河流.geojson?raw'
import geojson07 from '@/assets/geojson/欧洲一月平均气温.geojson?raw'

export const TILE_SRC_PREFIX = import.meta.env.VITE_APP_ONLINE == '1' ? 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles' : './tiles'

// 路径区分：开发读src/assets，生产读public
const getImageUrl = (fileName: string) => {
  if (import.meta.env.DEV) {
    return '/image/' + fileName
  } else {
    return `./image/${fileName}`
  }
}

export const GEOJSON_MAP: Record<string, GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>> = {
  欧洲年降水量分布: JSON.parse(geojson01),
  欧洲七月平均气温: JSON.parse(geojson02),
  欧洲西部轮廓线: JSON.parse(geojson03),
  欧洲西部气候类型: JSON.parse(geojson04),
  欧洲西部主要国家: JSON.parse(geojson05),
  欧洲西部主要河流: JSON.parse(geojson06),
  欧洲一月平均气温: JSON.parse(geojson07),
}

export const IMAGE_MAP: Record<string, string> = {
  欧洲西部阿尔卑斯山: getImageUrl('欧洲西部阿尔卑斯山.png'),
  欧洲西部岛屿与海湾: getImageUrl('欧洲西部岛屿与海湾.png'),
  欧洲西部地中海海岸: getImageUrl('欧洲西部地中海海岸.png'),
  欧洲西部地中海农业: getImageUrl('欧洲西部地中海农业.png'),
  欧洲西部法国巴黎: getImageUrl('欧洲西部法国巴黎.png'),
  欧洲西部封面: getImageUrl('欧洲西部封面.png'),
  欧洲西部意大利威尼斯: getImageUrl('欧洲西部意大利威尼斯.png'),
  欧洲西部挪威峡湾: getImageUrl('欧洲西部挪威峡湾.png'),
  欧洲西部乳畜业: getImageUrl('欧洲西部乳畜业.png'),
  欧洲西部商品谷物农业: getImageUrl('欧洲西部商品谷物农业.png'),
  欧洲西部现代牧场: getImageUrl('欧洲西部现代牧场.png'),
  欧洲西部英国伦敦: getImageUrl('欧洲西部英国伦敦.png'),
}

export const TILE_MAP: Record<string, string> = {
  google: `${TILE_SRC_PREFIX}/google-tiles/{z}/{x}/{y}.png`,
  osm: `${TILE_SRC_PREFIX}/osm-tiles/{z}/{x}/{y}.png`,
  otm: `${TILE_SRC_PREFIX}/otm-tiles/{z}/{x}/{y}.png`,
}
