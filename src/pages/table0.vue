<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-6">
        <q-card>
          <q-table
            title="Program Key Indicator Performance"
            :data="data"

            :columns="columns"
            row-key="name"

            :filter="filter"
            :pagination.sync="pagination"
            dense
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
                label="Fullscreen"
                @click="props.toggleFullscreen"
                v-if="mode === 'list'"
              >
                <q-tooltip
                  :disable="$q.platform.is.mobile"
                  v-close-popup
                >{{props.inFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}}
                </q-tooltip>
              </q-btn>
              <!--
              <q-btn
                flat
                round
                dense
                :icon="mode === 'grid' ? 'list' : 'grid_on'"
                @click="mode = mode === 'grid' ? 'list' : 'grid'; separator = mode === 'grid' ? 'none' : 'horizontal'"
                v-if="!props.inFullscreen"
              >
                <q-tooltip
                  :disable="$q.platform.is.mobile"
                  v-close-popup
                >{{mode==='grid' ? 'List' : 'Grid'}}
                </q-tooltip>
              </q-btn>
              -->
              <q-btn
                color="primary"
                icon-right="archive"
                label="Export to CSV"
                no-caps
                @click="exportTable"
              />
            </template>
            <template v-slot:body-cell-kpe6="props">
              <q-td :props="props">
                <q-chip
                  :color="(props.row.kpe6 == 'Draft')?'green':(props.row.kpe6 == 'Cheques'?'orange':'secondary')"
                  text-color="white"
                  dense
                  class="text-weight-bolder"
                  square
                  style="width: 85px"
                >{{props.row.kpe6}}
                </q-chip>
              </q-td>
            </template>
            <template v-slot:body-cell-kpe7="props">
              <q-td :props="props" >
                <q-chip
                  :color="(props.row.kpe7 == null)?'null':(props.row.kpe7 == '6'?'orange':'secondary')"
                  text-color="white"
                  dense
                  class="text-weight-bolder"
                  square
                  style="width: 85px"
                >{{props.row.kpe7}}
                </q-chip>
              </q-td>
            </template>
            <template v-slot:body-cell-gotopage="props">
              <q-td :props="props">
                <div class="q-gutter-sm">
                  <q-btn dense color="primary" icon="edit" size="10px" flat />
                  <!--<q-btn dense color="red" icon="delete"/>-->
                </div>
              </q-td>
            </template>
          </q-table>
        </q-card>
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
                            name: "Sum",
                            detail: {formatter: '{value}%'},
                            data: [{value: 30}],
                            min: 0,
                            max: 200,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.35, '#293c55'], [0.65, '#61a0a8'], [1, '#c23731']],
                                    width: 20
                                },
                            },

                        }
                    ]
                },
                columns: [
                    {
                        name: "gotopage",
                        align: "left",
                        label: "Go to Page",
                        field: "gotopage"
                    },
                    {
                        name: "program_name",
                        required: true,
                        align: "left",
                        label: "Program Name",
                        field: "program_name",
                        sortable: true
                    },
                    {
                        name: "kpe1",
                        align: "left",
                        label: "KPE1",
                        field: "kpe1"
                    },
                    {
                        name: "kpe2",
                        label: "KPE2",
                        align: "left",
                        field: "kpe2"
                    },
                    {
                        name: "kpe3",
                        align: "left",
                        label: "KPE3",
                        field: "kpe3"
                    },
                    {
                        name: "kpe4",
                        align: "left",
                        label: "KPE4",
                        field: "kpe4"
                    },
                    {
                        name: "kpe5",
                        align: "left",
                        label: "KPE5",
                        field: "kpe5"
                    },
                    {
                        name: "kpe6",
                        align: "left",
                        label: "KPE6",
                        field: "kpe6"
                    },
                    {
                        name: "kpe7",
                        align: "left",
                        label: "KPE7",
                        field: "kpe7"
                    },
                    {
                        name: "kpe8",
                        align: "left",
                        label: "KPE8",
                        field: "kpe8"
                    },
                    {
                        name: "kpe9",
                        align: "left",
                        label: "KPE9",
                        field: "kpe9"
                    }
                ],
                data: [
                    {
                        program_name: "FoodBank",
                        kpe1: 66,
                        kpe2: 8,
                        gotopage: "/foodbank"
                    },
                    {
                        program_name: "Baby Cupboard",
                        kpe1: 98,
                        kpe2: 7,
                    },
                    {
                        program_name: "Community Fridge",
                        kpe1: 58,
                        kpe2: 7,
                    },
                    {
                        program_name: "Entrepreneurship",
                        kpe1: 120,
                        kpe2: 20,
                        kpe3: 85,
                        kpe4: 50,
                        kpe5: 10,
                    },
                    {
                        program_name: "Employment Skills",
                        kpe1: 110,
                        kpe2: 20,
                        kpe3: 65,
                        kpe4: 40,
                        kpe5: 3,
                    },
                    {
                        program_name: "Market Mobile",
                        kpe1: 36,
                        kpe2: 5,
                        kpe3: 4,
                        kpe4: 1000,
                        kpe5: 1000,
                    },
                    {
                        program_name: "GFOTM",
                        kpe1: 1300,
                        kpe2: 1400,
                        kpe3: 36,
                        kpe4: 23,
                        kpe5: 4,
                        kpe6: 12,
                        kpe7: 6,
                        kpe8: 6,
                        kpe9: 26,
                    },
                    {
                        program_name: "GIK",
                        kpe1: 43,
                        kpe2: 4,
                        kpe3: 2,
                        kpe4: 2000,
                    },
                    {
                        program_name: "Clothespin",
                        kpe1: 38,
                        kpe2: 10000,
                    },
                    {
                        program_name: "Social Harvest",
                        kpe1: 20,
                        kpe2: 400,
                        kpe3: 400,
                        kpe4: 4,
                    },
                    {
                        program_name: "Community Gardens",
                        kpe1: 12,
                        kpe2: 2,
                        kpe3: 1,
                    },
                    {
                        program_name: "GFB",
                        kpe1: 1200,
                        kpe2: 1200,
                        kpe3: 78,
                        kpe4: 39,
                        kpe5: 13,
                        kpe6: 200,
                        kpe7: 200,
                    },
                    {
                        program_name: "Healthy Connections",
                        kpe1: 13,
                        kpe2: 200,
                        kpe3: 200,
                    },
                    {
                        program_name: "Collective Kitchen",
                        kpe1: 13,
                        kpe2: 8,
                    },
                    {
                        program_name: "Community Meal",
                        kpe1: 13,
                        kpe2: 8,
                    },
                    {
                        program_name: "Income Tax",
                        kpe1: 0,
                        kpe2: 0,
                    },
                    {
                        program_name: "Youth Programs",
                        kpe1: 12,
                        kpe2: 5,
                        kpe3: 6,
                    },
                    {
                        program_name: "PINS",
                        kpe1: 13,
                        kpe2: 25,
                        kpe3: 62,
                    },
                    {
                        program_name: "Overbrook SP",
                        kpe1: 150,
                        kpe2: 12000,
                    },
                    {
                        program_name: "Seniors Engagement",
                        kpe1: 11,
                        kpe2: 4,
                        kpe3: 8,
                    },
                    {
                        program_name: "Yes I Can",
                        kpe1: 3,
                        kpe2: 2,
                    },
                    {
                        program_name: "Skills B&W",
                        kpe1: 6,
                        kpe2: 9,
                    },
                    {
                        program_name: "Crisis Intervention",
                        kpe1: 4,
                    },
                    {
                        program_name: "CD",
                        kpe1: 68,
                        kpe2: 6,
                        kpe3: 2,
                    },
                ],
                pagination: {
                    rowsPerPage: 24
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
                        dimensions: ['product_name', 'share', 'growth'],
                        source: [
                            {product_name: 'Product A', share: 20, growth: 25},
                            {product_name: 'Product B', share: 22, growth: 18},
                            {product_name: 'Product C', share: 40, growth: 45}
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
                                return value + ' %'
                            },
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {type: 'line', name: 'Share'},
                        {type: 'line', name: 'Growth'}
                    ]
                }
            },
            pieOptions() {
                return {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 0,
                        width: 600,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {
                            name: 'Competitor',
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
                                        fontSize: '20',
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
                                {value: 40, name: 'Product 1', selected: false},
                                {value: 20, name: 'Competitor 1', selected: false},
                                {value: 15, name: 'Competitor 2', selected: false},
                                {value: 25, name: 'Competitor 3', selected: false},
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
