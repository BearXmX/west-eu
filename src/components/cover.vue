<template>
  <div class="cover-container">
    <div class="cover-overlay"></div>

    <div class="cover-content">
      <div class="cover-kicker">
        <span class="kicker-dot"></span>
        初中地理 · 七年级下册 · 区域地理专题
      </div>

      <div class="cover-main">
        <div class="title-line"></div>

        <div>
          <h1 class="cover-title">欧洲西部</h1>
          <p class="cover-subtitle">Western Europe</p>
        </div>
      </div>

      <p class="cover-desc">
        从位置范围、地形河流、温带海洋性气候到现代农业、工业服务业、交通城市、旅游资源与区域合作， 综合认识欧洲西部发达地区的自然环境与人文特色。
      </p>

      <div class="cover-tag">
        <span>位置与范围</span>
        <span>地形河流</span>
        <span>温带海洋性气候</span>
        <span>畜牧业</span>
        <span>现代农业</span>
        <span>工业服务业</span>
        <span>交通城市群</span>
        <span>旅游资源</span>
        <span>欧盟合作</span>
        <span>可持续发展</span>
      </div>

      <div class="cover-info">
        <div class="info-card">
          <div class="info-value">大西洋</div>
          <div class="info-label">位于亚欧大陆西部，大西洋东岸</div>
        </div>

        <div class="info-card">
          <div class="info-value">平原</div>
          <div class="info-label">地形以平原为主，海岸线曲折</div>
        </div>

        <div class="info-card">
          <div class="info-value">湿润</div>
          <div class="info-label">温带海洋性气候广布，适宜牧草生长</div>
        </div>

        <div class="info-card">
          <div class="info-value">发达</div>
          <div class="info-label">工业、服务业和旅游业水平较高</div>
        </div>
      </div>

      <div class="cover-bottom">
        <span>区域认知 · 综合思维 · 人地协调观</span>
        <span>Geography Courseware</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cover-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: clamp(28px, 4.2vw, 56px);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('https://course-code.oss-cn-shanghai.aliyuncs.com/image/欧洲西部封面.png');

  /* 改：不再用 flex 居中，让内容更稳定 */
  display: block;
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 76% 38%, rgba(59, 130, 246, 0.18), transparent 30%),
    linear-gradient(90deg, rgba(7, 22, 44, 0.9) 0%, rgba(16, 48, 92, 0.78) 38%, rgba(16, 48, 92, 0.44) 68%, rgba(16, 48, 92, 0.2) 100%);
  z-index: 1;
}

.cover-content {
  position: relative;
  z-index: 2;
  max-width: min(1020px, 76%);
  height: 100%;

  /* 改：用 flex 纵向排版，底部信息参与布局 */
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* 改：整体略微上移，底部那行也跟着上来 */
  transform: translateY(-2.5%);
}

.cover-kicker {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  padding: 7px 14px;
  margin-bottom: clamp(16px, 2.2vw, 28px);
  border-radius: 999px;
  color: #dbeafe;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(219, 234, 254, 0.28);
  font-size: clamp(12px, 0.9vw, 15px);
  font-weight: 800;
  letter-spacing: 0.08em;
  backdrop-filter: blur(8px);
}

.kicker-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.9);
}

.cover-main {
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.5vw, 18px);
  margin-bottom: clamp(10px, 1.4vw, 16px);
}

.title-line {
  width: 7px;
  height: clamp(62px, 7.4vw, 108px);
  border-radius: 999px;
  background: linear-gradient(to bottom, #38bdf8, #2563eb);
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.45);
  flex-shrink: 0;
}

.cover-title {
  margin: 0;
  color: #fff;
  font-size: clamp(52px, 6.7vw, 104px);
  line-height: 0.95;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow:
    0 4px 18px rgba(0, 0, 0, 0.55),
    0 0 2px rgba(255, 255, 255, 0.45);
}

.cover-subtitle {
  margin: clamp(6px, 0.8vw, 10px) 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(15px, 1.3vw, 22px);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.cover-desc {
  max-width: 920px;
  margin: 0 0 clamp(14px, 1.8vw, 22px);
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(15px, 1.42vw, 23px);
  line-height: 1.5;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
}

.cover-tag {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(7px, 0.8vw, 10px);
  max-width: 900px;
  margin-bottom: clamp(16px, 2vw, 24px);

  > span {
    display: inline-flex;
    align-items: center;
    min-height: clamp(28px, 2.4vw, 34px);
    padding: 0 clamp(10px, 1vw, 13px);
    border-radius: 999px;
    color: #fff;
    background: rgba(255, 255, 255, 0.13);
    border: 1px solid rgba(255, 255, 255, 0.26);
    font-size: clamp(12px, 0.95vw, 14px);
    font-weight: 800;
    letter-spacing: 0.02em;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  }
}

.cover-info {
  display: grid;
  grid-template-columns: repeat(4, minmax(112px, 1fr));
  gap: clamp(8px, 1vw, 12px);
  max-width: 900px;
}

.info-card {
  padding: clamp(9px, 1vw, 12px) clamp(10px, 1.1vw, 14px);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
}

.info-value {
  color: #7dd3fc;
  font-size: clamp(18px, 1.8vw, 28px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

.info-label {
  color: rgba(255, 255, 255, 0.86);
  font-size: clamp(11px, 0.86vw, 12px);
  line-height: 1.42;
  font-weight: 600;
}

/* 改：底部信息不再 absolute，直接跟在信息卡片后面 */
.cover-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: min(900px, 100%);
  margin-top: clamp(14px, 1.8vw, 24px);
  padding-top: clamp(10px, 1vw, 14px);
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(11px, 0.9vw, 13px);
  font-weight: 700;
  letter-spacing: 0.05em;
}

/* 普通窄屏 */
@media (max-width: 980px) {
  .cover-content {
    max-width: 100%;
  }

  .cover-info {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  .cover-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}

/* 高度不足时：整体压缩，避免底部被挤 */
@media (max-height: 720px) {
  .cover-container {
    padding: 28px 42px;
  }

  .cover-content {
    justify-content: flex-start;
    padding-top: 12px;
    transform: none;
  }

  .cover-kicker {
    margin-bottom: 14px;
    padding: 6px 12px;
  }

  .cover-title {
    font-size: clamp(46px, 6vw, 82px);
  }

  .title-line {
    height: clamp(58px, 6.5vw, 86px);
  }

  .cover-desc {
    font-size: clamp(14px, 1.25vw, 18px);
    line-height: 1.45;
    margin-bottom: 12px;
  }

  .cover-tag {
    gap: 6px;
    margin-bottom: 14px;

    > span {
      min-height: 28px;
      font-size: 12px;
      padding: 0 10px;
    }
  }

  .info-card {
    padding: 8px 10px;
  }

  .info-value {
    font-size: 18px;
    margin-bottom: 3px;
  }

  .info-label {
    font-size: 11px;
    line-height: 1.32;
  }

  .cover-bottom {
    margin-top: 12px;
    padding-top: 10px;
  }
}

/* 极矮屏：隐藏部分标签，保证封面主体完整 */
@media (max-height: 600px) {
  .cover-tag > span:nth-child(n + 7) {
    display: none;
  }

  .cover-info {
    grid-template-columns: repeat(4, minmax(92px, 1fr));
  }

  .cover-bottom {
    margin-top: 10px;
  }
}
</style>
