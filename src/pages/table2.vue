<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-table
        title="RRCRC Programs"
        :data="data"
        :columns="columns"
        :rows-per-page-options="[0]" 
        :pagination.sync="pagination"
        hide-bottom
        row-key="name"
        table-class="my-custom"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <template v-for="col in props.cols">
              <template v-if="col.name === 'kpe1' && props.row.style">
                <q-td :key="col.name" :style="`color:${props.row.style};`" :props="props">
                  <div class="relative-position">
                    {{ col.value }}
                    <!--<q-badge :style="`background-color:${props.row.style};`" floating transparent>{{ props.row.badge }}</q-badge>-->
                  </div>
                </q-td>
              </template>
              <template v-else>
                <q-td :key="col.name" :style="props.row.kpe1 % 2 > 0 ? `color:red;` : ''" :props="props">
                  {{ col.value }}
                </q-td>
              </template>
            </template>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Program Name',
          align: 'left',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        { name: 'kpe1', align: 'center', label: 'KPE1', field: 'kpe1', sortable: true },
        { name: 'kpe2', label: 'KPE2', field: 'kpe2', sortable: true },
        { name: 'kpe3', label: 'KPE3', field: 'kpe3' },
        { name: 'kpe4', label: 'KPE4', field: 'kpe4' },
        { name: 'kpe5', label: 'KPE5', field: 'kpe5' },
        { name: 'kpe6', label: 'KPE6', field: 'kpe6' },
        { name: 'kpe7', label: 'KPE7', field: 'kpe7' },
        { name: 'kpe8', label: 'KPE8', field: 'kpe8' },
        { name: 'kpe9', label: 'KPE9', field: 'kpe9' },
      ],
      data: [
        {
          name: 'Foodbank',
          kpe1: 159,
          kpe2: 6.0,
          kpe3: 24,
          kpe4: 4.0,
          kpe5: 87,
          kpe6: '14%',
          kpe8: 0,
          kpe9: 0,
          style: '#46ff3c',
          badge: 'deneme',
        },
        {
          name: 'Ice cream sandwich',
          kpe1: 237,
          kpe2: 9.0,
          kpe3: 37,
          kpe4: 4.3,
          kpe5: 129,
          kpe6: '8%',
          kpe7: '1%',
          kpe8: 0,
          kpe9: 0,
        },
        {
          name: 'Eclair',
          kpe1: 262,
          kpe2: 16.0,
          kpe3: 23,
          kpe4: 6.0,
          kpe5: 337,
          kpe6: '6%',
          kpe7: '7%',
          kpe8: 0,
          kpe9: 0,
        },
        {
          name: 'Cupcake',
          kpe1: 305,
          kpe2: 3.7,
          kpe3: 67,
          kpe4: 4.3,
          kpe5: 413,
          kpe6: '3%',
          kpe7: '8%',
          kpe8: 0,
          kpe9: 0,
        },
        {
          name: 'Gingerbread',
          kpe1: 356,
          kpe2: 16.0,
          kpe3: 49,
          kpe4: 3.9,
          kpe5: 327,
          kpe6: '7%',
          kpe7: '16%',
          kpe8: 0,
          kpe9: 0,
        },
        {
          name: 'Jelly bean',
          kpe1: 375,
          kpe2: 0.0,
          kpe3: 94,
          kpe4: 0.0,
          kpe5: 50,
          kpe6: '0%',
          kpe7: '0%',
          kpe8: 0,
          kpe9: 0,
        },
        {
          name: 'Lollipop',
          kpe1: 392,
          kpe2: 0.2,
          kpe3: 98,
          kpe4: 0,
          kpe5: 38,
          kpe6: '0%',
          kpe7: '2%',
          kpe8: 0,
          kpe9: 0,
        },
        {
          name: 'Honeycomb',
          kpe1: 408,
          kpe2: 3.2,
          kpe3: 87,
          kpe4: 6.5,
          kpe5: 562,
          kpe6: '0%',
          kpe7: '45%',
          kpe8: 0,
          kpe9: 0,
        },
        {
          name: 'Donut',
          kpe1: 452,
          kpe2: 25.0,
          kpe3: 51,
          kpe4: 4.9,
          kpe5: 326,
          kpe6: '2%',
          kpe7: '22%',
          kpe8: 0,
          kpe9: 0,
        },
        {
          name: 'KitKat',
          kpe1: 518,
          kpe2: 26.0,
          kpe3: 65,
          kpe4: 7,
          kpe5: 54,
          kpe6: '12%',
          kpe7: '6%',
          kpe8: 0,
          kpe9: 0,
        },
      ],
      pagination: {
         page: 1,    
         rowsPerPage: 0 // 0 means all rows    
      }
    };
  },
};
</script>

<style>
.my-custom th {
  color: #2196f3 !important;
}
.my-custom td {
  color: #009688;
}
</style>
