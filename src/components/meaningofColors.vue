<template>
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12" align="center" >
            <span style="font-size: 12px">Meaning of Colors: </span>
            <q-chip 
            square
            color="blue"
            text-color="white"
            dense
            >
              Review Notice 
              <q-tooltip>
                Review Notice
              </q-tooltip>
            </q-chip>
            <q-chip
            square
            color="green"
            text-color="white"
            dense
            >
              Good
              <q-tooltip>
                Good
              </q-tooltip>
            </q-chip>
            <q-chip
            square
            color="yellow-8"
            text-color="white"
            dense
            >
              Monitor Closely
              <q-tooltip>
                Monitor Closely
              </q-tooltip>
            </q-chip>
            <q-chip
            square
            color="orange-8"
            text-color="white"
            dense
            >
              Need Attention
              <q-tooltip>
                Need Attention
              </q-tooltip>
            </q-chip>
            <q-chip
            square
            color="red"
            text-color="white"
            dense
            >
              Warning 
              <q-tooltip>
                Warning
              </q-tooltip>
            </q-chip>
            <q-chip
            square
            color="grey-2"
            text-color="black"
            dense
            >
              No Data 
              <q-tooltip>
                No Data
              </q-tooltip>
            </q-chip>
          </div>  
</template>

<script>
export default {
    name:"meaningofColors"
}
</script>
