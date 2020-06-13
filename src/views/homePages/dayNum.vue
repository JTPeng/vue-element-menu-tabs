<template>
  <div class="apply-info">
    <el-card class="box-card">
      <div class="title">
        <span class="left">折线图/柱状图{{nameKey}}</span>
        <div class="right">
          <el-date-picker
            v-model="selectDate"
            @change="dateChange"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
          <div class="rightR">
            <span
              :class="{ isActive: index === activeIndex ? true : false }"
              v-for="(item, index) in rightArr"
              :key="index"
              @click="selectActive(index)"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <div class="visualization">
        <div ref="echarts" :id="echartsNum" style="width:100%;height:500px"></div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    nameKey: {
      type: String
    }
  },
  data() {
    return {
      selectDate: '',
      activeIndex: 2,
      rightArr: ['年', '月', '日'],
      myChart: '',
      yearData: [],
      monthData: []
    }
  },
  created() {
    this.init()
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    // this.myChart = this.$echarts.init(document.getElementById('myChart'))
    this.$nextTick(() => {
      this.myChart = this.$echarts.init(document.getElementById(this.echartsNum))
      // 响应式echart
      // window.onresize = () => {
      //   this.myChart.resize()
      // }
      this.drawLine()
    })
  },
  methods: {
    init() {
      console.log(this.nameKey, this.myChart)
      this.yearData = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      this.monthData = [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
    },
    dateChange(val) {
      console.log(val)
      this.yearData = [22.6, 55.9, 99.0, 126.4, 128.7, 170.7, 75.6, 82.2, 148.7, 181.8, 16.0, 12.3]
      this.monthData = [13.9, 15.9, 111.1, 118.7, 148.3, 169.2, 21.6, 6.6, 5.4, 8.4, 110.3, 10.7]
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    selectActive(index) {
      this.activeIndex = index
      if (index === 0) {
        this.yearData = [1.6, 175.6, 182.2, 200, 180, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      }
      if (index === 1) {
        this.monthData = [
          31.9,
          51.9,
          111.1,
          181.7,
          218.3,
          19.2,
          31.6,
          46.6,
          55.4,
          118.4,
          110.3,
          10.7
        ]
      }
      if (index === 2) {
        this.yearData = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        this.monthData = [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
      }
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    drawLine() {
      const { myChart, yearData, monthData } = this
      // myChart.on('mouseover', (params) => {
      //   console.log(params)
      //   myChart.setOption({
      //     // 设置 鼠标移入后想要的样式
      //     series: {
      //       name: params.seriesName,
      //       symbolSize: 4,
      //       lineStyle: {
      //         width: 4,
      //       },
      //     },
      //   })
      // })
      // 绘制图表
      myChart.setOption({
        color: ['#5793f3', '#d14a61', '#675bba'],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['2015 降水量', '2016 降水量'],
          x: 'right'
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#5793f3'
              }
            },
            axisPointer: {
              label: {
                formatter: function(params) {
                  return (
                    '降水量  ' +
                    params.value +
                    (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  )
                }
              }
            },
            data: [
              '2016-1',
              '2016-2',
              '2016-3',
              '2016-4',
              '2016-5',
              '2016-6',
              '2016-7',
              '2016-8',
              '2016-9',
              '2016-10',
              '2016-11',
              '2016-12'
            ]
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#d14a61'
              }
            },
            axisPointer: {
              label: {
                formatter: function(params) {
                  return (
                    '降水量  ' +
                    params.value +
                    (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  )
                }
              }
            },
            data: [
              '2015-1',
              '2015-2',
              '2015-3',
              '2015-4',
              '2015-5',
              '2015-6',
              '2015-7',
              '2015-8',
              '2015-9',
              '2015-10',
              '2015-11',
              '2015-12'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '2015 降水量',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: yearData,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                  color: {
                    // 颜色渐变设置
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'red' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          },
          {
            name: '2016 降水量',
            type: 'line',
            smooth: true,
            data: monthData,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                  color: {
                    // 颜色渐变设置
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'yellow' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'black' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          }
        ]
      })
    }
  },
  computed: {
    echartsNum() {
      return 'echarts' + Math.random() * 100000
    }
  },
  watch: {
    nameKey() {
      this.drawLine()
    }
  }
}
</script>
<style lang="postcss" scoped>
.apply-info {
  & .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid blue;
    & .left {
      margin-bottom: 10px;
    }
    & .right {
      display: flex;
      margin-right: 10px;
      margin-bottom: 10px;
      & .el-date-editor {
        margin-left: 10px;
        & >>> .el-input__inner {
          height: 32px;
          line-height: 32px;
        }
        & >>> .el-input__icon {
          line-height: 32px;
        }
      }
      & .rightR {
        width: 120px;
        margin-left: 10px;
        box-sizing: border-box;
        padding: 5px;
        & span {
          display: inline-block;
          width: 30px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 2px;
          text-align: center;
          cursor: pointer;
          &:nth-child(2) {
            border-right: none;
            border-left: none;
          }
          &.isActive {
            background-color: rgb(30, 159, 255);
          }
        }
      }
    }
  }
  & .visualization {
    width: 100%;
  }
}
</style>
