<template>
  <section class="exercise-stats" v-if="this.isRenderingCheck">
    <div class="container">
      테스트를 위한 임시 데이터 삽입입니다. {{ this.result }}
      <header class="exercise-stats__header">
        <div class="header__div">
          <p class="header__text">{{ this.result.date }}</p>
          <h2 class="header__title">{{ this.getEnumData("term", this.result.term) }} {{ this.getEnumData("exeType", this.result.exeType) }}</h2>
          <div class="exercise-stats__point text-primary">
            <span class="point__value">{{ this.nowData.data }}</span>
            <span class="point__unit">{{ this.getEnumData("exeTypeUnit", this.result.exeType) }}</span>
          </div>
          <img class="logo" src="@/assets/logo.png" alt="로고" />
        </div>
        <hr class="hr" />
      </header>
      <section class="exercise-stats__section">
        <div class="exercise-stats__chart">
          <Bar
            :chart-options="this.chartOptions"
            :chart-data="this.chartData"
            chart-id="bar-chart"
            dataset-id-key="label"
            :width="300"
            :height="300"
          />
        </div>
      </section>

      <section class="exercise-share__section">
        <h2 class="section__title">최근 {{ this.getEnumData("termType", this.result.term) }} {{ this.getEnumData("exeType", this.result.exeType) }}</h2>
        <ul class="exercise-share__record-box list-style-none">
          <li>
            <div class="record__item">
              <div class="record__detail">
                <img src="@/assets/icons/icon-avg.svg" class="w-20" alt="클럽타올라 아이콘"/>
                <div class="line-height-1">
                  <h3 class="detail__title">평균</h3>
                </div>
              </div>
              <div class="record__point text-blue">
                <span class="point__value">{{ this.result.avgData }}</span>
                <span class="point__unit">{{ this.getEnumData("exeTypeUnit", this.result.exeType) }}</span>
              </div>
            </div>
          </li>
          <li>
            <div class="record__item">
              <div class="record__detail">
                <img src="@/assets/icons/icon-best.svg" class="w-20" alt="최대 머슬포인트 아이콘"/>
                <div class="line-height-1">
                  <h3 class="detail__title">최고</h3>
                </div>
              </div>
              <div class="record__point text-blue">
                <span class="point__value">{{ this.result.maxData }}</span>
                <span class="point__unit">{{ this.getEnumData("exeTypeUnit", this.result.exeType) }}</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <button v-if="!isMobile" @click="$sendCaptureImage()">Image 전송</button>
  </section>
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
      checkData: "",
      nowData: "",
      isRenderingCheck: false,
      totalAvgData: 0,
      totalData: 0,
      result: {
        date: "123",
        term: "123",
        exeType: "123",
        dataList: ["123"],
        avgData: 0,
        maxData: 0
      },
      isMobile: window.isMobile.any(),
      clickValue: 0,
      chartData: {
        labels: [
          // ['1월', '66일'],
          // ['1월', '77일'],
          // ['1월', '88일'],
          // ['1월', '99일'],
          // ['1월', '100일'],
          // ['1월', '111일'],
          // ['1월', '122일'],
          // ['1월', '133일'],
          // ['1월', '144일'],
          // ['1월', '155일'],
        ],
        datasets: [
          {
            barPercentage: 0.35,
            borderRadius: 6,
            borderSkipped: false,
            backgroundColor: [
              // '#AEEA164C',
              // '#AEEA164C',
              // '#AEEA164C',
              // '#AEEA164C',
              // '#AEEA164C',
              // '#AEEA164C',
              // '#AEEA164C',
              // '#AEEA164C',
              // '#AEEA164C',
              // '#AEEA16',
            ],
            data: [
              // 1402,
              // 1702,
              // 1202,
              // 2202,
              // 2100,
              // 1600,
              // 1734,
              // 2041,
              // 1600,
              // 2033,
            ]
          }
        ]
      },
      chartOptionsLabel: "",
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
                yMin: 400,
                yMax: 400,
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
                // '#AEEA164C',
                // '#AEEA164C',
                // '#AEEA164C',
                // '#AEEA164C',
                // '#AEEA164C',
                // '#AEEA164C',
                // '#AEEA164C',
                // '#AEEA164C',
                // '#AEEA164C',
                // '#AEEA16',
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
  methods: {
    getEnumData(enumType, value) {
      return this.$getEnumData(enumType, value)
    },
    setComma(numVal){
      return numVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    setResult(){
      if (this.isRenderingCheck){
        return
      }

      // Label 만들기
      let labels = []
      let colors = []
      let datas = []

      this.nowData = this.result.dataList[this.result.dataList.length-1]
      for(var exeIndex = 0; exeIndex < this.result.dataList.length; exeIndex++){
        let exeData = this.result.dataList[exeIndex]

        let dateData = []
        if(exeData.date.includes(" \n")){
          dateData = exeData.date.split(" \n")
        } else if(exeData.date.includes(" ")){
          dateData = exeData.date.split(" ")
        } else if(exeData.date.includes("\n")){
          dateData = exeData.date.split("\n")
        }

        this.checkData = dateData
        labels.push(dateData)

        this.totalData = this.totalData + exeData.data;
        if(exeData.isSelected){
          colors.push('#AEEA16');
          if(this.result.exeType != 'K' && this.result.exeType != 'T'){
            this.totalAvgData = parseFloat(exeData.data).toFixed(1);
          } else {
            this.totalAvgData = parseInt(exeData.data)
          }
        } else {
          colors.push('#AEEA164C');
        }
        // Data 선정
        datas.push(exeData.data)
      }

      this.chartOptionsLabel = this.result.dataList.length;
      this.chartOptions.plugins.annotation.annotations.line1.yMin = this.result.avgData
      this.chartOptions.plugins.annotation.annotations.line1.yMax = this.result.avgData
      if(this.totalAvgData == 0 && this.result.dataList.length != 0){
        this.totalAvgData = this.result.avgData
      }

      if(this.result.exeType == "T") {
        this.totalAvgData = this.getHourMin(this.totalAvgData)
        this.result.avgData = this.getHourMin(this.result.avgData)
        this.result.maxData = this.getHourMin(this.result.maxData)
      } else {
        this.totalAvgData = this.setComma(this.totalAvgData)
        this.result.avgData = this.setComma(this.result.avgData)
        this.result.maxData = this.setComma(this.result.maxData)
      }

      // Chart에 반영
      this.chartData.labels = labels;
      this.chartData.datasets[0].backgroundColor = colors;
      this.chartData.datasets[0].data = datas;
      this.chartOptions.scales.x.ticks.color = colors;

      this.isRenderingCheck = true
    },
    getHourMin(secondData){
      const date = new Date(0)
      date.setSeconds(secondData)
      return date.toISOString().substring(11, 16)
    }
  },

  // setData를 통한 데이터 변화 감지
  computed:{
    getMainData(){
      this.result = this.$store.getters.getMainData
      if(this.result){
        this.setResult()
      }
    }
  },
  watch:{
    getMainData(val){
    }
  },
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
