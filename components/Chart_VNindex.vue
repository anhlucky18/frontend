<template>
  <div>
    <apexchart
      height="350"
      type="line"
      :options="chartOptions"
      :series="series"
      v-if="series"
    ></apexchart>
  </div>
</template>

<script>
import axios from "axios";
import VueApexCharts from "vue3-apexcharts";
const vnnidex = [
  {
    y: "1490.1",
    x: "2022-02-07",
  },
  {
    y: "1489.5",
    x: "2022-03-01",
  },
  {
    y: "1366.8",
    x: "2022-04-01",
  },
  {
    y: "1292.7",
    x: "2022-05-04",
  },
  {
    y: "1197.6",
    x: "2022-06-01",
  },
  {
    y: "1209.1",
    x: "2022-07-01",
  },
  {
    y: "1280.5",
    x: "2022-08-01",
  },
  {
    y: "1132.1",
    x: "2022-09-05",
  },
  {
    y: "1027.9",
    x: "2022-10-03",
  },
  {
    y: "1048.4",
    x: "2022-11-01",
  },
  {
    y: "1007.1",
    x: "2022-12-01",
  },
  {
    y: "1111.2",
    x: "2023-01-03",
  },
  {
    y: "1024.7",
    x: "2023-02-01",
  },
  {
    y: "1046.8",
    x: "2023-03-01",
  },
];
const vnpercent = [];
const start = vnnidex[0].y;
for (let i = 0; i < vnnidex.length; i++) {
  var node = vnnidex[i];
  node.y = Math.round((node.y / start - 1) * 10000) / 100;
  vnpercent.push(node);
}
export default {
  name: "VNindex",
  props: {
    msg: String,
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      status: "loading",
      series: [
        {
          data: vnpercent,
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
            tools: {
              download: false,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Thay đổi VNINDEX",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "datetime",
          labels: {
            show: true,
            rotate: -45,
          },
          tickPlacement: "on",
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
pre {
  max-height: 200px;
  overflow: scroll;
}
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
