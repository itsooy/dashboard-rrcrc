<template>
  <q-page>
                <!--TABLE-->
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <q-card>
          <q-table
            title="Skills B&W"
            :data="data"
            :columns="columns"
            row-key="name"
            :filter="filter"
            dense
            :rows-per-page-options="[0]" 
            :pagination.sync="pagination"
            hide-bottom
            style="height: 550px"
          >
            <template v-slot:top-right="props">
            <!--
              <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                  <q-icon name="search"/>
                </template>
              </q-input>
              -->
              <q-btn
                :icon-right="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen"
                v-if="mode === 'list'"
                flat
              >
                <q-tooltip
                  :disable="$q.platform.is.mobile"
                  v-close-popup
                >{{props.inFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}}
                </q-tooltip>
              </q-btn>
              <q-btn
                color="primary"
                icon-right="archive"
                
                no-caps
                @click="exportTable"
              >
              <q-tooltip>Export to CSV</q-tooltip>
              </q-btn>
            </template>
            
            <template v-slot:body-cell-kpi1="props">
              <q-td :props="props">
                <q-chip
                  :color="(props.row.kpi1 <= '5')?'red':(props.row.kpi1 >= '6' && props.row.kpi1 <= '19')?'orange':(props.row.kpi1 >= '20'?'green':'grey-2')"
                  text-color="white"
                  dense
                  class="text-weight-bolder"
                  square
                  style="width: 60px"
                >{{props.row.kpi1}}
                <q-tooltip>
                  KPI 1
                </q-tooltip>  
                </q-chip>
              </q-td>
            </template>
            <template v-slot:body-cell-kpi2="props">
              <q-td :props="props">
                <q-chip
                  :color="(props.row.kpi2 <= '5')?'red':(props.row.kpi2 >= '6' && props.row.kpi2 <= '19')?'orange':(props.row.kpi2 >= '20'?'green':'grey-2')"
                  text-color="white"
                  dense
                  class="text-weight-bolder"
                  square
                  style="width: 60px"
                >{{props.row.kpi2}}
                <q-tooltip>
                  KPI 2
                </q-tooltip>  
                </q-chip>
              </q-td>
            </template>
            <template v-slot:body-cell-kpi3="props">
              <q-td :props="props">
                <q-chip
                  :color="(props.row.kpi3 <= '5')?'red':(props.row.kpi3 >= '6' && props.row.kpi3 <= '19')?'orange':(props.row.kpi3 >= '20'?'green':'grey-2')"
                  text-color="white"
                  dense
                  class="text-weight-bolder"
                  square
                  style="width: 60px"
                >{{props.row.kpi3}}
                <q-tooltip>
                  KPI 3
                </q-tooltip>  
                </q-chip>
              </q-td>
            </template>
            <template v-slot:body-cell-kpi4="props">
              <q-td :props="props">
                <q-chip
                  :color="(props.row.kpi4 <= '5')?'red':(props.row.kpi4 >= '6' && props.row.kpi4 <= '19')?'orange':(props.row.kpi4 >= '20'?'green':'grey-2')"
                  text-color="white"
                  dense
                  class="text-weight-bolder"
                  square
                  style="width: 60px"
                >{{props.row.kpi4}}
                <q-tooltip>
                  KPI 4
                </q-tooltip>  
                </q-chip>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <q-card flat bordered class="">

            <q-card-section style="height:150px">
              <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
            </q-card-section>
          </q-card>
        <q-card flat bordered class="">
            <q-card-section class="row">
              <div class="text-h6 col-12">Budget Usage
                <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                       :color="!$q.dark.isActive? 'grey-8':'white'">
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </div>

            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <IEcharts :option="gaugeOptions" ref="gauge" :resizable="true" style="height:300px"/>
            </q-card-section>
          </q-card>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section>
            <div class="text-h6">Expense Categories
              <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                     :color="!$q.dark.isActive? 'grey-8':'white'">
                <q-tooltip>Download</q-tooltip>
              </q-btn>
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <IEcharts ref="pie" :option="pieOptions" :resizable="true" style="height:450px"/>
          </q-card-section>
        </q-card>
      </div>
      
    </div>
                <!--TABLE DONE-->
    <div>
      <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

          <q-card flat bordered class="">
            <q-card-section class="row">
              <div class="text-h6 col-12">Process Chart
                <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                       :color="!$q.dark.isActive? 'grey-8':'white'">
                  <q-tooltip>Download</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
    import Vue from 'vue';
    import IEcharts from 'vue-echarts-v3/src/full.js';
    import {exportFile} from 'quasar';

    Vue.component('IEcharts', IEcharts);

    function wrapCsvValue(val, formatFn) {
        let formatted = formatFn !== void 0
            ? formatFn(val)
            : val

        formatted = formatted === void 0 || formatted === null
            ? ''
            : String(formatted)

        formatted = formatted.split('"').join('""')

        return `"${formatted}"`
    }

    export default {
        data() {
            return {
                filter: '',
                mode: 'list',

                gaugeOptions: {
                    tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: 0}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                },
                columns: [
                    {
                        name: 'desc',
                        required: true,
                        label: 'Months',
                        align: 'left',
                        format: (val) => `${val}`,
                        field: row => row.name,
                    },
                    {name: 'kpi1', align: 'left', label: 'KPI 1', field: 'kpi1', style: '#46ff3c', badge: 'deneme',},
                    {name: 'kpi2', align: 'left', label: 'KPI 2', field: 'kpi2'},
                    {name: 'kpi3', align: 'left', label: 'KPI 3', field: 'kpi3'},
                    {name: 'kpi4', align: 'left', label: 'KPI 4', field: 'kpi4'}
                ],
                data: [
                    {
                        name: 'January',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'February',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'March',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'April',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'May',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'June',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'July',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'August',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'September',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'October',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'November',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    },
                    {
                        name: 'December',
                        kpi1: null,
                        kpi2: null,
                        kpi3: null,
                        kpi4: null,
                    }
                ],
                pagination: {
                    rowsPerPage: 10000
                }
            }
        },
        computed: {
            barOptions() {
                return {
                    grid: {
                        bottom: '20%',
                        left: '15%',
                        top: '3%'
                    },
                    legend: {
                        bottom: 0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    tooltip: {},
                    dataset: {
                        dimensions: ['time_period', 'sale', 'goal'],
                        source: [
                            {time_period: 'Jan 2019', sale: 50, goal: 70},
                            {time_period: 'Feb 2019', sale: 80, goal: 75},
                            {time_period: 'Mar 2019', sale: 86, goal: 80},
                            {time_period: 'Apr 2019', sale: 72, goal: 85}
                        ]
                    },
                    xAxis: {
                        type: 'category',
                        // axisLabel: {
                        //     rotate: 45
                        // }
                        axisLabel: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    yAxis: {
                        // name: 'Goal',
                        // nameLocation: 'center',
                        // nameGap: 30,
                        // nameTextStyle:{
                        //     fontWeight: 'bold'
                        // }
                        axisLabel: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {type: 'bar', name: 'Sales'},
                        {type: 'bar', name: 'Goals'}
                    ]
                }
            },
            lineChartOption() {
                return {
                    grid: {
                        bottom: '20%',
                        left: '15%',
                        top: '3%'
                    },
                    legend: {
                        bottom: 0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    tooltip: {
                        // formatter:
                        //     function (param) {
                        //     console.log(param)
                        //     // return param.seriesName + '<br />' + param.name + ': ';
                        // }
                    },
                    dataset: {
                        dimensions: ['months', 'kpi1', 'kpi2'],
                        source: [
                            //{months: 'January', kpi1: 0, kpi2: 0},
                            {months: 'January', },
                            {months: 'February', },
                            {months: 'March', },
                            {months: 'April', },
                            {months: 'May', },
                            {months: 'June', },
                            {months: 'July', },
                            {months: 'August', },
                            {months: 'September', },
                            {months: 'October', },
                            {months: 'November', },
                            {months: 'December', }
                        ]
                    },
                    xAxis: {
                        type: 'category',
                        // axisLabel: {
                        //     rotate: 45
                        // }
                        axisLabel: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    yAxis: {
                        axisLabel: {
                            formatter: function (value, index) {
                                return value //+ ' %'
                            },
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {type: 'line', name: 'KPI1'},
                        {type: 'line', name: 'KPI2'}
                    ]
                }
            },
            pieOptions() {
                return {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {
                            name: 'Categories',
                            type: 'pie',
                            radius: ['30%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inner',
                                    formatter: function (param, index) {
                                        return param.value + ' %'
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '15',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            selectedMode: 'single',
                            data: [
                                {value: 10, name: 'Category 1', selected: false},
                                {value: 20, name: 'Category 2', selected: false},
                                {value: 30, name: 'Category 3', selected: false},
                                {value: 40, name: 'Category 4', selected: false},
                            ]
                        }
                    ]
                }
            },
            stackedBarOptions() {
                return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:
                            {
                                type: 'shadow'
                            },
                        backgroundColor: 'rgba(50,50,50,0.9)',

                    },
                    legend: {
                        bottom: 0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    color: ['#3395dd', '#ed892d', '#34393b'],
                    // legend: {
                    //     y: "bottom",
                    //     data: [{name: 'Territory Sales', icon: 'circle'}, {
                    //         name: 'Remaining Nation Sales',
                    //         icon: 'circle'
                    //     }]
                    // },
                    grid:
                        {
                            bottom: '10%',
                            left: '15%',
                            top: '9%'
                        },
                    calculable: true,
                    xAxis:
                        {
                            type: 'value',
                            position:
                                'top',
                            axisLine:
                                {
                                    show: false
                                },
                            axisLabel: {
                                formatter: function (value, index) {
                                    return '$' + value;
                                },
                                color: this.$q.dark.isActive ? 'white' : '#676767'
                            }
                        },
                    yAxis: [
                        {
                            type: 'category',
                            data: ['Budget 4', 'Budget 3', 'Budget 2', 'Budget 1'],
                            axisLabel: {
                                fontSize: 12,
                                color: this.$q.dark.isActive ? 'white' : '#676767'
                            }
                        }
                    ],
                    series:
                        [{
                            name: 'Qualification',
                            type: 'bar',
                            stack: 'A',
                            data: [300, 350, 400, 500]

                        }, {
                            name: 'Discovery',
                            type: 'bar',
                            stack: 'A',
                            data: [100, 180, 250, 300]

                        }, {
                            name: 'Quote',
                            type: 'bar',
                            stack: 'A',
                            data: [100, 120, 200, 220]

                        }]
                }
            }
        },
        methods: {
            SaveImage(type) {
                const linkSource = this.$refs[type].getDataURL();
                const downloadLink = document.createElement('a');
                document.body.appendChild(downloadLink);
                downloadLink.href = linkSource;
                downloadLink.target = '_self';
                downloadLink.download = type + '.png';
                downloadLink.click();
            },
            exportTable() {
                // naive encoding to csv format
                const content = [this.columns.map(col => wrapCsvValue(col.label))].concat(
                    this.data.map(row => this.columns.map(col => wrapCsvValue(
                        typeof col.field === 'function'
                            ? col.field(row)
                            : row[col.field === void 0 ? col.name : col.field],
                        col.format
                    )).join(','))
                ).join('\r\n')

                const status = exportFile(
                    'activity.csv',
                    content,
                    'text/csv'
                )

                if (status !== true) {
                    this.$q.notify({
                        message: 'Browser denied file download...',
                        color: 'negative',
                        icon: 'warning'
                    })
                }
            }
        }
    }
</script>

<style scoped>
  .blue_dark {
    background-color: #082f56;
  }

  .green_dark {
    background-color: #084a0b;
  }

  .orange_dark {
    background-color: #64350e;
  }
</style>
