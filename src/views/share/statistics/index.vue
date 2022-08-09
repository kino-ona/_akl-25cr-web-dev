<template>
  <section class="exercise-stats">
    <div class="container">
      <header class="exercise-stats__header">
        <div class="header__div">
          <p class="header__text">2022년 1월 10일 오후 9:30</p>
          <h2 class="header__title">일간 머슬 포인트</h2>
          <div class="exercise-stats__point text-primary">
            <span class="point__value">2,033</span>
            <span class="point__unit">점</span>
          </div>
          <img class="logo" src="@/assets/logo.png" alt="로고" />
        </div>
        <hr class="hr" />
      </header>

      <section class="exercise-stats__section">
        <div class="exercise-stats__chart">
          <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            chart-id="bar-chart"
            dataset-id-key="label"
            :width="300"
            :height="300"
          />
        </div>
      </section>

      <section class="exercise-share__section">
        <h2 class="section__title">최근 일별 머슬 포인트</h2>
        <ul class="exercise-share__record-box list-style-none">
          <li>
            <div class="record__item">
              <div class="record__detail">
                <img src="@/assets/icons/icon-avg.svg" class="w-20" />
                <div class="line-height-1">
                  <h3 class="detail__title">평균</h3>
                </div>
              </div>
              <div class="record__point text-blue">
                <span class="point__value">1,000</span>
                <span class="point__unit">점</span>
              </div>
            </div>
          </li>
          <li>
            <div class="record__item">
              <div class="record__detail">
                <img src="@/assets/icons/icon-best.svg" class="w-20" />
                <div class="line-height-1">
                  <h3 class="detail__title">최고</h3>
                </div>
              </div>
              <div class="record__point text-blue">
                <span class="point__value">2,033</span>
                <span class="point__unit">점</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
  <div>{{ state.result.date }}</div>
  <div>{{ getEnumData("term", state.result.term) }} | {{ getEnumData("exeType", state.result.exeType) }} </div>
  <div>{{ state.clickValue }}</div>
  <span v-for="statistics in state.result.dataList" :key="statistics" @click="setClickValue(statistics.data)">
    {{ statistics.data }} {{ statistics.date }} &nbsp;&nbsp;
  </span>
  <div>최근 일별 머슬 포인트</div>
  <div>{{ state.result.avgData }}</div>
  <div>{{ state.result.maxData }}</div>
  <button @click="sendCaptureImage">Image 전송</button>
</template>

<script>
/**
 * [참조 문서]
 * ChartJS: https://www.chartjs.org/docs/latest/
 * Chart Annotation: https://www.chartjs.org/chartjs-plugin-annotation/latest/
 * Chart Datalabels: https://chartjs-plugin-datalabels.netlify.app/
 **/
import { Bar } from 'vue-chartjs/legacy'
import chartJsPluginAnnotation from "chartjs-plugin-annotation";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, chartJsPluginAnnotation, ChartDataLabels)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      result: {
        date: "",
        term: "",
        exeType: "",
        dataList: [],
        avgData: 0,
        maxData: 0
      },
      clickValue: 100,
      chartData: {
        labels: [
          ['1월', '6일'],
          ['1월', '7일'],
          ['1월', '8일'],
          ['1월', '9일'],
          ['1월', '10일'],
          ['1월', '11일'],
          ['1월', '12일'],
          ['1월', '13일'],
          ['1월', '14일'],
          ['1월', '15일'],
        ],
        datasets: [
          {
            barPercentage: 0.35,
            borderRadius: 6,
            borderSkipped: false,
            backgroundColor: [
              '#AEEA164C',
              '#AEEA164C',
              '#AEEA164C',
              '#AEEA164C',
              '#AEEA164C',
              '#AEEA164C',
              '#AEEA164C',
              '#AEEA164C',
              '#AEEA164C',
              '#AEEA16',
            ],
            data: [
              1402,
              1702,
              1202,
              2202,
              2100,
              1600,
              1734,
              2041,
              1600,
              2033,
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: false,
          legend: {
            display: false,
          },
          // dot 평균 라인
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yMin: 1000,
                yMax: 1000,
                borderColor: '#aeea16',
                borderWidth: 1,
                borderDash: [2,2]
              }
            }
          },
          // Bar 상단 점수
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#AEEA16',
            formatter: function(value, context) {
              const index = context.dataIndex;
              if (context.dataset.backgroundColor[index] === '#AEEA16') {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              } else {
                return '';
              }
            },
            font: {
              size: '14',
              weight: 'bold',
            }
          },
        },
        scales: {
          x: {
            // 하단 날짜
            ticks: {
              color: [
                '#AEEA164C',
                '#AEEA164C',
                '#AEEA164C',
                '#AEEA164C',
                '#AEEA164C',
                '#AEEA164C',
                '#AEEA164C',
                '#AEEA164C',
                '#AEEA164C',
                '#AEEA16',
              ],
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0
            },
          },
          y: {
            display: false,
          }
        },
      }
    }
  },

  mounted() {
    let result = {
      date: window.mainData.date,
      term: window.mainData.term,
      exeType: window.mainData.exeType,
      dataList: window.mainData.dataList,
      avgData: window.mainData.avgData,
      maxData: window.mainData.maxData
    }
    this.result = result;
  },

  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    result: function () {
      // TODO $windowCapture이거 실행되는지 체크
      this.$windowCapture();
      console.log("데이터 변경 체크 : ", state.result);
  },

  methods: {
    sendCaptureImage(){
      // TODO $sendCaptureImage이거 실행되는지 체크
      this.$sendCaptureImage()
    },
    setClickValue(value){
      state.clickValue = value
    },
    getEnumData(enumType, value) {
      return proxy.$getEnumData(enumType, value)
    }
  }
}
</script>

<style lang="scss">
.exercise-stats {
  padding-bottom: 40px;
  .exercise-stats__header {
    position: relative;
    padding: 10px 7px 0 15px;
    .header__div {
      margin-bottom: 15px;
    }
    .header__text {
      font-size: 12px;
      margin-bottom: 4px;
      color: $gray02;
    }
    .header__title {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .logo {
      position: absolute;
      top: 10px;
      right: 12px;
      width: 76px;
    }
    .exercise-stats__point {
      display: flex;
      align-items: baseline;
      line-height: 1;
      margin-bottom: 20px;
      .point__value {
        font-size: 46px;
        font-weight: 700;
        letter-spacing: -1px;
      }
      .point__unit {
        font-size: 18px;
        letter-spacing: -.3px;
        margin-left: 4px;
      }
    }
  }

  .exercise-stats__section {
    margin-top: 30px;
  }

  .exercise-share__section {
    margin-top: 30px;
    .section__title {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 800;
      line-height: 25px;
      letter-spacing: -.3px;
      margin-bottom: 20px;
      span {
        margin-left: 4px;
        color: $gray02;
      }
    }
  }

  .exercise-share__record-box {
    li + li {
      margin-top: 4px;
    }
    .record__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      border-radius: 25px;
      background: $bg-secondary;
      padding: 0 20px;
    }
    .record__detail {
      display: flex;
      align-items: center;
      img {
        margin-right: 12px;
      }
      .detail__title {
        font-size: 14px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: -.3px;
      }
    }
    .record__point {
      display: flex;
      align-items: baseline;
      line-height: 1;
      .point__value {
        font-size: 20px;
        letter-spacing: -.3px;
      }
      .point__unit {
        font-size: 14px;
        letter-spacing: -.3px;
        margin-left: 4px;
      }
    }
  }

  .exercise-stats__chart {
    padding: 0 10px;
  }
}
</style>
