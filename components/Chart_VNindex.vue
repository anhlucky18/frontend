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
const rawdata = [
 {
   "Date": "07/20/21 ",
   "AMS": 0,
   "VNIndex": 0,
   "compare": 0,
   "AMS-Index": 100
 },
 {
   "Date": "07/21/21 ",
   "AMS": 0,
   "VNIndex": -0.2,
   "compare": 0.2,
   "AMS-Index": 100
 },
 {
   "Date": "07/22/21 ",
   "AMS": 0,
   "VNIndex": 1.6,
   "compare": -1.6,
   "AMS-Index": 100
 },
 {
   "Date": "07/23/21 ",
   "AMS": 0,
   "VNIndex": -0.35,
   "compare": 0.35,
   "AMS-Index": 100
 },
 {
   "Date": "07/24/21 ",
   "AMS": 0,
   "VNIndex": -0.35,
   "compare": 0.35,
   "AMS-Index": 100
 },
 {
   "Date": "07/25/21 ",
   "AMS": 0,
   "VNIndex": -0.35,
   "compare": 0.35,
   "AMS-Index": 100
 },
 {
   "Date": "07/26/21 ",
   "AMS": 0,
   "VNIndex": -0.05,
   "compare": 0.05,
   "AMS-Index": 100
 },
 {
   "Date": "07/27/21 ",
   "AMS": 0,
   "VNIndex": 0.29,
   "compare": -0.29,
   "AMS-Index": 100
 },
 {
   "Date": "07/28/21 ",
   "AMS": 0.12,
   "VNIndex": 0.3,
   "compare": -0.17,
   "AMS-Index": 100
 },
 {
   "Date": "07/29/21 ",
   "AMS": 0.09,
   "VNIndex": 1.6,
   "compare": -1.51,
   "AMS-Index": 100
 },
 {
   "Date": "07/30/21 ",
   "AMS": 0.09,
   "VNIndex": 2.89,
   "compare": -2.79,
   "AMS-Index": 100
 },
 {
   "Date": "07/31/21 ",
   "AMS": 0.09,
   "VNIndex": 2.89,
   "compare": -2.79,
   "AMS-Index": 100
 },
 {
   "Date": "08/01/21 ",
   "AMS": 0.09,
   "VNIndex": 2.89,
   "compare": -2.79,
   "AMS-Index": 100
 },
 {
   "Date": "08/02/21 ",
   "AMS": 0.09,
   "VNIndex": 3.21,
   "compare": -3.13,
   "AMS-Index": 100
 },
 {
   "Date": "08/03/21 ",
   "AMS": 0.59,
   "VNIndex": 4.65,
   "compare": -4.06,
   "AMS-Index": 101
 },
 {
   "Date": "08/04/21 ",
   "AMS": 0.68,
   "VNIndex": 4.83,
   "compare": -4.14,
   "AMS-Index": 101
 },
 {
   "Date": "08/05/21 ",
   "AMS": 1.23,
   "VNIndex": 5.68,
   "compare": -4.44,
   "AMS-Index": 101
 },
 {
   "Date": "08/06/21 ",
   "AMS": 1.67,
   "VNIndex": 5.35,
   "compare": -3.69,
   "AMS-Index": 102
 },
 {
   "Date": "08/07/21 ",
   "AMS": 1.67,
   "VNIndex": 5.35,
   "compare": -3.69,
   "AMS-Index": 102
 },
 {
   "Date": "08/08/21 ",
   "AMS": 1.67,
   "VNIndex": 5.35,
   "compare": -3.69,
   "AMS-Index": 102
 },
 {
   "Date": "08/09/21 ",
   "AMS": 2.71,
   "VNIndex": 6.8,
   "compare": -4.09,
   "AMS-Index": 103
 },
 {
   "Date": "08/10/21 ",
   "AMS": 2.43,
   "VNIndex": 6.88,
   "compare": -4.45,
   "AMS-Index": 102
 },
 {
   "Date": "08/11/21 ",
   "AMS": 1.56,
   "VNIndex": 6.64,
   "compare": -5.07,
   "AMS-Index": 102
 },
 {
   "Date": "08/12/21 ",
   "AMS": 1.78,
   "VNIndex": 6.26,
   "compare": -4.48,
   "AMS-Index": 102
 },
 {
   "Date": "08/13/21 ",
   "AMS": 2.12,
   "VNIndex": 6.58,
   "compare": -4.45,
   "AMS-Index": 102
 },
 {
   "Date": "08/14/21 ",
   "AMS": 2.12,
   "VNIndex": 6.58,
   "compare": -4.45,
   "AMS-Index": 102
 },
 {
   "Date": "08/15/21 ",
   "AMS": 2.12,
   "VNIndex": 6.58,
   "compare": -4.45,
   "AMS-Index": 102
 },
 {
   "Date": "08/16/21 ",
   "AMS": 2.08,
   "VNIndex": 7.67,
   "compare": -5.59,
   "AMS-Index": 102
 },
 {
   "Date": "08/17/21 ",
   "AMS": 1.31,
   "VNIndex": 7.05,
   "compare": -5.74,
   "AMS-Index": 101
 },
 {
   "Date": "08/18/21 ",
   "AMS": 1.24,
   "VNIndex": 6.88,
   "compare": -5.64,
   "AMS-Index": 101
 },
 {
   "Date": "08/19/21 ",
   "AMS": 1.63,
   "VNIndex": 7.98,
   "compare": -6.35,
   "AMS-Index": 102
 },
 {
   "Date": "08/20/21 ",
   "AMS": 0.48,
   "VNIndex": 4.41,
   "compare": -3.93,
   "AMS-Index": 100
 },
 {
   "Date": "08/21/21 ",
   "AMS": 0.48,
   "VNIndex": 4.41,
   "compare": -3.93,
   "AMS-Index": 100
 },
 {
   "Date": "08/22/21 ",
   "AMS": 0.48,
   "VNIndex": 4.41,
   "compare": -3.93,
   "AMS-Index": 100
 },
 {
   "Date": "08/23/21 ",
   "AMS": -1.29,
   "VNIndex": 2.01,
   "compare": -3.3,
   "AMS-Index": 99
 },
 {
   "Date": "08/24/21 ",
   "AMS": -1.26,
   "VNIndex": 2,
   "compare": -3.26,
   "AMS-Index": 99
 },
 {
   "Date": "08/25/21 ",
   "AMS": -1.09,
   "VNIndex": 2.85,
   "compare": -3.93,
   "AMS-Index": 99
 },
 {
   "Date": "08/26/21 ",
   "AMS": -0.32,
   "VNIndex": 2.19,
   "compare": -2.51,
   "AMS-Index": 100
 },
 {
   "Date": "08/27/21 ",
   "AMS": 0.7,
   "VNIndex": 3.13,
   "compare": -2.43,
   "AMS-Index": 101
 },
 {
   "Date": "08/28/21 ",
   "AMS": 0.7,
   "VNIndex": 3.13,
   "compare": -2.43,
   "AMS-Index": 101
 },
 {
   "Date": "08/29/21 ",
   "AMS": 0.7,
   "VNIndex": 3.13,
   "compare": -2.43,
   "AMS-Index": 101
 },
 {
   "Date": "08/30/21 ",
   "AMS": 1.62,
   "VNIndex": 4.31,
   "compare": -2.69,
   "AMS-Index": 102
 },
 {
   "Date": "08/31/21 ",
   "AMS": 1.73,
   "VNIndex": 4.57,
   "compare": -2.84,
   "AMS-Index": 102
 },
 {
   "Date": "09/01/21 ",
   "AMS": 2.18,
   "VNIndex": 4.82,
   "compare": -2.64,
   "AMS-Index": 102
 },
 {
   "Date": "09/02/21 ",
   "AMS": 2.18,
   "VNIndex": 4.82,
   "compare": -2.64,
   "AMS-Index": 102
 },
 {
   "Date": "09/03/21 ",
   "AMS": 2.18,
   "VNIndex": 4.82,
   "compare": -2.64,
   "AMS-Index": 102
 },
 {
   "Date": "09/04/21 ",
   "AMS": 2.18,
   "VNIndex": 4.82,
   "compare": -2.64,
   "AMS-Index": 102
 },
 {
   "Date": "09/05/21 ",
   "AMS": 2.18,
   "VNIndex": 4.82,
   "compare": -2.64,
   "AMS-Index": 102
 },
 {
   "Date": "09/06/21 ",
   "AMS": 3.57,
   "VNIndex": 5.74,
   "compare": -2.17,
   "AMS-Index": 104
 },
 {
   "Date": "09/07/21 ",
   "AMS": 3.2,
   "VNIndex": 5.39,
   "compare": -2.19,
   "AMS-Index": 103
 },
 {
   "Date": "09/08/21 ",
   "AMS": 2.66,
   "VNIndex": 5.39,
   "compare": -2.73,
   "AMS-Index": 103
 },
 {
   "Date": "09/09/21 ",
   "AMS": 2.84,
   "VNIndex": 5.55,
   "compare": -2.71,
   "AMS-Index": 103
 },
 {
   "Date": "09/10/21 ",
   "AMS": 2.8,
   "VNIndex": 5.66,
   "compare": -2.86,
   "AMS-Index": 103
 },
 {
   "Date": "09/11/21 ",
   "AMS": 2.8,
   "VNIndex": 5.66,
   "compare": -2.86,
   "AMS-Index": 103
 },
 {
   "Date": "09/12/21 ",
   "AMS": 2.8,
   "VNIndex": 5.66,
   "compare": -2.86,
   "AMS-Index": 103
 },
 {
   "Date": "09/13/21 ",
   "AMS": 2.3,
   "VNIndex": 5.35,
   "compare": -3.05,
   "AMS-Index": 102
 },
 {
   "Date": "09/14/21 ",
   "AMS": 2.33,
   "VNIndex": 5.22,
   "compare": -2.89,
   "AMS-Index": 102
 },
 {
   "Date": "09/15/21 ",
   "AMS": 2.6,
   "VNIndex": 5.7,
   "compare": -3.09,
   "AMS-Index": 103
 },
 {
   "Date": "09/16/21 ",
   "AMS": 1.91,
   "VNIndex": 5.7,
   "compare": -3.79,
   "AMS-Index": 102
 },
 {
   "Date": "09/17/21 ",
   "AMS": 3.25,
   "VNIndex": 6.23,
   "compare": -2.98,
   "AMS-Index": 103
 },
 {
   "Date": "09/18/21 ",
   "AMS": 3.25,
   "VNIndex": 6.23,
   "compare": -2.98,
   "AMS-Index": 103
 },
 {
   "Date": "09/19/21 ",
   "AMS": 3.25,
   "VNIndex": 6.23,
   "compare": -2.98,
   "AMS-Index": 103
 },
 {
   "Date": "09/20/21 ",
   "AMS": 2.02,
   "VNIndex": 6.06,
   "compare": -4.04,
   "AMS-Index": 102
 },
 {
   "Date": "09/21/21 ",
   "AMS": 0.6,
   "VNIndex": 5.23,
   "compare": -4.63,
   "AMS-Index": 101
 },
 {
   "Date": "09/22/21 ",
   "AMS": 1.06,
   "VNIndex": 6.08,
   "compare": -5.02,
   "AMS-Index": 101
 },
 {
   "Date": "09/23/21 ",
   "AMS": 1.65,
   "VNIndex": 6.24,
   "compare": -4.59,
   "AMS-Index": 102
 },
 {
   "Date": "09/24/21 ",
   "AMS": 1.3,
   "VNIndex": 6.12,
   "compare": -4.81,
   "AMS-Index": 101
 },
 {
   "Date": "09/25/21 ",
   "AMS": 1.3,
   "VNIndex": 6.12,
   "compare": -4.81,
   "AMS-Index": 101
 },
 {
   "Date": "09/26/21 ",
   "AMS": 1.3,
   "VNIndex": 6.12,
   "compare": -4.81,
   "AMS-Index": 101
 },
 {
   "Date": "09/27/21 ",
   "AMS": -0.88,
   "VNIndex": 4.06,
   "compare": -4.94,
   "AMS-Index": 99
 },
 {
   "Date": "09/28/21 ",
   "AMS": 0.9,
   "VNIndex": 5.18,
   "compare": -4.29,
   "AMS-Index": 101
 },
 {
   "Date": "09/29/21 ",
   "AMS": 1.62,
   "VNIndex": 5.18,
   "compare": -3.56,
   "AMS-Index": 102
 },
 {
   "Date": "09/30/21 ",
   "AMS": 2,
   "VNIndex": 5.4,
   "compare": -3.4,
   "AMS-Index": 102
 },
 {
   "Date": "10/01/21 ",
   "AMS": 1.43,
   "VNIndex": 4.84,
   "compare": -3.41,
   "AMS-Index": 101
 },
 {
   "Date": "10/02/21 ",
   "AMS": 1.43,
   "VNIndex": 4.84,
   "compare": -3.41,
   "AMS-Index": 101
 },
 {
   "Date": "10/03/21 ",
   "AMS": 1.43,
   "VNIndex": 4.84,
   "compare": -3.41,
   "AMS-Index": 101
 },
 {
   "Date": "10/04/21 ",
   "AMS": 3.02,
   "VNIndex": 5.2,
   "compare": -2.18,
   "AMS-Index": 103
 },
 {
   "Date": "10/05/21 ",
   "AMS": 4.1,
   "VNIndex": 6.39,
   "compare": -2.29,
   "AMS-Index": 104
 },
 {
   "Date": "10/06/21 ",
   "AMS": 5.23,
   "VNIndex": 7.03,
   "compare": -1.8,
   "AMS-Index": 105
 },
 {
   "Date": "10/07/21 ",
   "AMS": 5.03,
   "VNIndex": 7.28,
   "compare": -2.25,
   "AMS-Index": 105
 },
 {
   "Date": "10/08/21 ",
   "AMS": 5.89,
   "VNIndex": 7.28,
   "compare": -1.39,
   "AMS-Index": 106
 },
 {
   "Date": "10/09/21 ",
   "AMS": 5.89,
   "VNIndex": 7.81,
   "compare": -1.92,
   "AMS-Index": 106
 },
 {
   "Date": "10/10/21 ",
   "AMS": 5.89,
   "VNIndex": 7.81,
   "compare": -1.92,
   "AMS-Index": 106
 },
 {
   "Date": "10/11/21 ",
   "AMS": 6.33,
   "VNIndex": 9.49,
   "compare": -3.15,
   "AMS-Index": 106
 },
 {
   "Date": "10/12/21 ",
   "AMS": 6.18,
   "VNIndex": 9.54,
   "compare": -3.36,
   "AMS-Index": 106
 },
 {
   "Date": "10/13/21 ",
   "AMS": 6.18,
   "VNIndex": 9.32,
   "compare": -3.13,
   "AMS-Index": 106
 },
 {
   "Date": "10/14/21 ",
   "AMS": 6.25,
   "VNIndex": 9.31,
   "compare": -3.07,
   "AMS-Index": 106
 },
 {
   "Date": "10/15/21 ",
   "AMS": 6.22,
   "VNIndex": 9.38,
   "compare": -3.16,
   "AMS-Index": 106
 },
 {
   "Date": "10/16/21 ",
   "AMS": 6.22,
   "VNIndex": 9.38,
   "compare": -3.16,
   "AMS-Index": 106
 },
 {
   "Date": "10/17/21 ",
   "AMS": 6.22,
   "VNIndex": 9.38,
   "compare": -3.16,
   "AMS-Index": 106
 },
 {
   "Date": "10/18/21 ",
   "AMS": 6.41,
   "VNIndex": 9.6,
   "compare": -3.2,
   "AMS-Index": 106
 },
 {
   "Date": "10/19/21 ",
   "AMS": 6.68,
   "VNIndex": 9.58,
   "compare": -2.9,
   "AMS-Index": 107
 },
 {
   "Date": "10/20/21 ",
   "AMS": 6.43,
   "VNIndex": 9.46,
   "compare": -3.03,
   "AMS-Index": 106
 },
 {
   "Date": "10/21/21 ",
   "AMS": 6.15,
   "VNIndex": 8.76,
   "compare": -2.61,
   "AMS-Index": 106
 },
 {
   "Date": "10/22/21 ",
   "AMS": 6.31,
   "VNIndex": 9.11,
   "compare": -2.8,
   "AMS-Index": 106
 },
 {
   "Date": "10/25/21 ",
   "AMS": 6.75,
   "VNIndex": 8.8,
   "compare": -2.06,
   "AMS-Index": 107
 },
 {
   "Date": "10/26/21 ",
   "AMS": 7.36,
   "VNIndex": 9.29,
   "compare": -1.93,
   "AMS-Index": 107
 },
 {
   "Date": "10/27/21 ",
   "AMS": 8.51,
   "VNIndex": 11.76,
   "compare": -3.25,
   "AMS-Index": 109
 },
 {
   "Date": "10/28/21 ",
   "AMS": 9.16,
   "VNIndex": 12.94,
   "compare": -3.78,
   "AMS-Index": 109
 },
 {
   "Date": "10/29/21 ",
   "AMS": 10.81,
   "VNIndex": 13.42,
   "compare": -2.62,
   "AMS-Index": 111
 },
 {
   "Date": "10/30/21 ",
   "AMS": 10.81,
   "VNIndex": 13.42,
   "compare": -2.62,
   "AMS-Index": 111
 },
 {
   "Date": "10/31/21 ",
   "AMS": 10.81,
   "VNIndex": 13.42,
   "compare": -2.62,
   "AMS-Index": 111
 },
 {
   "Date": "11/01/21 ",
   "AMS": 10.2,
   "VNIndex": 13.01,
   "compare": -2.81,
   "AMS-Index": 110
 },
 {
   "Date": "11/02/21 ",
   "AMS": 9.97,
   "VNIndex": 14.07,
   "compare": -4.1,
   "AMS-Index": 110
 },
 {
   "Date": "11/03/21 ",
   "AMS": 6.92,
   "VNIndex": 13.43,
   "compare": -6.51,
   "AMS-Index": 107
 },
 {
   "Date": "11/04/21 ",
   "AMS": 7.3,
   "VNIndex": 13.75,
   "compare": -6.45,
   "AMS-Index": 107
 },
 {
   "Date": "11/05/21 ",
   "AMS": 9.94,
   "VNIndex": 14.39,
   "compare": -4.45,
   "AMS-Index": 110
 },
 {
   "Date": "11/06/21 ",
   "AMS": 9.94,
   "VNIndex": 14.39,
   "compare": -4.45,
   "AMS-Index": 110
 },
 {
   "Date": "11/07/21 ",
   "AMS": 9.94,
   "VNIndex": 14.39,
   "compare": -4.45,
   "AMS-Index": 110
 },
 {
   "Date": "11/08/21 ",
   "AMS": 10.83,
   "VNIndex": 15.26,
   "compare": -4.43,
   "AMS-Index": 111
 },
 {
   "Date": "11/09/21 ",
   "AMS": 11.24,
   "VNIndex": 14.78,
   "compare": -3.54,
   "AMS-Index": 111
 },
 {
   "Date": "11/10/21 ",
   "AMS": 11.38,
   "VNIndex": 15.06,
   "compare": -3.68,
   "AMS-Index": 111
 },
 {
   "Date": "11/11/21 ",
   "AMS": 12.23,
   "VNIndex": 14.85,
   "compare": -2.62,
   "AMS-Index": 112
 },
 {
   "Date": "11/12/21 ",
   "AMS": 12,
   "VNIndex": 15.71,
   "compare": -3.71,
   "AMS-Index": 112
 },
 {
   "Date": "11/13/21 ",
   "AMS": 12,
   "VNIndex": 15.71,
   "compare": -3.71,
   "AMS-Index": 112
 },
 {
   "Date": "11/14/21 ",
   "AMS": 12,
   "VNIndex": 15.71,
   "compare": -3.71,
   "AMS-Index": 112
 },
 {
   "Date": "11/15/21 ",
   "AMS": 13,
   "VNIndex": 15.96,
   "compare": -2.97,
   "AMS-Index": 113
 },
 {
   "Date": "11/16/21 ",
   "AMS": 12.69,
   "VNIndex": 15.17,
   "compare": -2.48,
   "AMS-Index": 113
 },
 {
   "Date": "11/17/21 ",
   "AMS": 13.56,
   "VNIndex": 15.91,
   "compare": -2.35,
   "AMS-Index": 114
 },
 {
   "Date": "11/18/21 ",
   "AMS": 12.6,
   "VNIndex": 15.44,
   "compare": -2.83,
   "AMS-Index": 113
 },
 {
   "Date": "11/19/21 ",
   "AMS": 10.77,
   "VNIndex": 15.44,
   "compare": -4.66,
   "AMS-Index": 111
 },
 {
   "Date": "11/20/21 ",
   "AMS": 10.77,
   "VNIndex": 15.44,
   "compare": -4.66,
   "AMS-Index": 111
 },
 {
   "Date": "11/21/21 ",
   "AMS": 10.77,
   "VNIndex": 15.44,
   "compare": -4.66,
   "AMS-Index": 111
 },
 {
   "Date": "11/22/21 ",
   "AMS": 7.39,
   "VNIndex": 13.66,
   "compare": -6.27,
   "AMS-Index": 107
 },
 {
   "Date": "11/23/21 ",
   "AMS": 9.41,
   "VNIndex": 14.95,
   "compare": -5.54,
   "AMS-Index": 109
 },
 {
   "Date": "11/24/21 ",
   "AMS": 10.09,
   "VNIndex": 16.93,
   "compare": -6.84,
   "AMS-Index": 110
 },
 {
   "Date": "11/25/21 ",
   "AMS": 9.66,
   "VNIndex": 17.87,
   "compare": -8.21,
   "AMS-Index": 110
 },
 {
   "Date": "11/26/21 ",
   "AMS": 9.74,
   "VNIndex": 17.26,
   "compare": -7.51,
   "AMS-Index": 110
 },
 {
   "Date": "11/27/21 ",
   "AMS": 9.74,
   "VNIndex": 17.26,
   "compare": -7.51,
   "AMS-Index": 110
 },
 {
   "Date": "11/28/21 ",
   "AMS": 9.74,
   "VNIndex": 17.26,
   "compare": -7.51,
   "AMS-Index": 110
 },
 {
   "Date": "11/29/21 ",
   "AMS": 9.88,
   "VNIndex": 16.61,
   "compare": -6.73,
   "AMS-Index": 110
 },
 {
   "Date": "11/30/21 ",
   "AMS": 11.97,
   "VNIndex": 16.11,
   "compare": -4.15,
   "AMS-Index": 112
 },
 {
   "Date": "12/01/21 ",
   "AMS": 12.57,
   "VNIndex": 16.64,
   "compare": -4.08,
   "AMS-Index": 113
 },
 {
   "Date": "12/02/21 ",
   "AMS": 12.48,
   "VNIndex": 16.64,
   "compare": -4.17,
   "AMS-Index": 112
 },
 {
   "Date": "12/03/21 ",
   "AMS": 9.56,
   "VNIndex": 13.35,
   "compare": -3.79,
   "AMS-Index": 110
 },
 {
   "Date": "12/04/21 ",
   "AMS": 9.56,
   "VNIndex": 13.35,
   "compare": -3.79,
   "AMS-Index": 110
 },
 {
   "Date": "12/05/21 ",
   "AMS": 9.56,
   "VNIndex": 13.35,
   "compare": -3.79,
   "AMS-Index": 110
 },
 {
   "Date": "12/06/21 ",
   "AMS": 5.84,
   "VNIndex": 11.02,
   "compare": -5.17,
   "AMS-Index": 106
 },
 {
   "Date": "12/07/21 ",
   "AMS": 9.38,
   "VNIndex": 13.62,
   "compare": -4.25,
   "AMS-Index": 109
 },
 {
   "Date": "12/08/21 ",
   "AMS": 9.54,
   "VNIndex": 14.1,
   "compare": -4.56,
   "AMS-Index": 110
 },
 {
   "Date": "12/09/21 ",
   "AMS": 10.04,
   "VNIndex": 15.29,
   "compare": -5.25,
   "AMS-Index": 110
 },
 {
   "Date": "12/10/21 ",
   "AMS": 10.75,
   "VNIndex": 14.94,
   "compare": -4.19,
   "AMS-Index": 111
 },
 {
   "Date": "12/11/21 ",
   "AMS": 10.75,
   "VNIndex": 14.94,
   "compare": -4.19,
   "AMS-Index": 111
 },
 {
   "Date": "12/12/21 ",
   "AMS": 10.75,
   "VNIndex": 14.94,
   "compare": -4.19,
   "AMS-Index": 111
 },
 {
   "Date": "12/13/21 ",
   "AMS": 12.34,
   "VNIndex": 15.94,
   "compare": -3.6,
   "AMS-Index": 112
 },
 {
   "Date": "12/14/21 ",
   "AMS": 12.66,
   "VNIndex": 15.92,
   "compare": -3.27,
   "AMS-Index": 113
 },
 {
   "Date": "12/15/21 ",
   "AMS": 11.65,
   "VNIndex": 15.88,
   "compare": -4.23,
   "AMS-Index": 112
 },
 {
   "Date": "12/16/21 ",
   "AMS": 11.57,
   "VNIndex": 15.97,
   "compare": -4.4,
   "AMS-Index": 112
 },
 {
   "Date": "12/17/21 ",
   "AMS": 11.45,
   "VNIndex": 16.22,
   "compare": -4.77,
   "AMS-Index": 111
 },
 {
   "Date": "12/18/21 ",
   "AMS": 11.45,
   "VNIndex": 16.22,
   "compare": -4.77,
   "AMS-Index": 111
 },
 {
   "Date": "12/19/21 ",
   "AMS": 11.45,
   "VNIndex": 16.22,
   "compare": -4.77,
   "AMS-Index": 111
 },
 {
   "Date": "12/20/21 ",
   "AMS": 10.41,
   "VNIndex": 16.02,
   "compare": -5.62,
   "AMS-Index": 110
 },
 {
   "Date": "12/21/21 ",
   "AMS": 12.14,
   "VNIndex": 16.14,
   "compare": -4,
   "AMS-Index": 112
 },
 {
   "Date": "12/22/21 ",
   "AMS": 10.42,
   "VNIndex": 16.05,
   "compare": -5.63,
   "AMS-Index": 110
 },
 {
   "Date": "12/23/21 ",
   "AMS": 8.26,
   "VNIndex": 14.42,
   "compare": -6.17,
   "AMS-Index": 108
 },
 {
   "Date": "12/24/21 ",
   "AMS": 10.32,
   "VNIndex": 16,
   "compare": -5.68,
   "AMS-Index": 110
 },
 {
   "Date": "12/25/21 ",
   "AMS": 10.32,
   "VNIndex": 16,
   "compare": -5.68,
   "AMS-Index": 110
 },
 {
   "Date": "12/26/21 ",
   "AMS": 10.32,
   "VNIndex": 16,
   "compare": -5.68,
   "AMS-Index": 110
 },
 {
   "Date": "12/27/21 ",
   "AMS": 11.37,
   "VNIndex": 16.93,
   "compare": -5.55,
   "AMS-Index": 111
 },
 {
   "Date": "12/28/21 ",
   "AMS": 12.4,
   "VNIndex": 17.36,
   "compare": -4.96,
   "AMS-Index": 112
 },
 {
   "Date": "12/29/21 ",
   "AMS": 13.79,
   "VNIndex": 16.69,
   "compare": -2.9,
   "AMS-Index": 114
 },
 {
   "Date": "12/30/21 ",
   "AMS": 13.45,
   "VNIndex": 16.7,
   "compare": -3.25,
   "AMS-Index": 113
 },
 {
   "Date": "12/31/21 ",
   "AMS": 13.87,
   "VNIndex": 17.67,
   "compare": -3.8,
   "AMS-Index": 114
 },
 {
   "Date": "01/01/22 ",
   "AMS": 13.87,
   "VNIndex": 17.67,
   "compare": -3.8,
   "AMS-Index": 114
 },
 {
   "Date": "01/02/22 ",
   "AMS": 13.87,
   "VNIndex": 17.67,
   "compare": -3.8,
   "AMS-Index": 114
 },
 {
   "Date": "01/03/22 ",
   "AMS": 13.87,
   "VNIndex": 17.67,
   "compare": -3.8,
   "AMS-Index": 114
 },
 {
   "Date": "01/04/22 ",
   "AMS": 14.93,
   "VNIndex": 19.81,
   "compare": -4.88,
   "AMS-Index": 115
 },
 {
   "Date": "01/05/22 ",
   "AMS": 16.87,
   "VNIndex": 19.57,
   "compare": -2.7,
   "AMS-Index": 117
 },
 {
   "Date": "01/06/22 ",
   "AMS": 15.67,
   "VNIndex": 20.05,
   "compare": -4.38,
   "AMS-Index": 116
 },
 {
   "Date": "01/07/22 ",
   "AMS": 15.72,
   "VNIndex": 20.04,
   "compare": -4.32,
   "AMS-Index": 116
 },
 {
   "Date": "01/08/22 ",
   "AMS": 15.72,
   "VNIndex": 20.04,
   "compare": -4.32,
   "AMS-Index": 116
 },
 {
   "Date": "01/09/22 ",
   "AMS": 15.72,
   "VNIndex": 20.04,
   "compare": -4.32,
   "AMS-Index": 116
 },
 {
   "Date": "01/10/22 ",
   "AMS": 12.53,
   "VNIndex": 18.1,
   "compare": -5.56,
   "AMS-Index": 113
 },
 {
   "Date": "01/11/22 ",
   "AMS": 10.29,
   "VNIndex": 17.2,
   "compare": -6.91,
   "AMS-Index": 110
 },
 {
   "Date": "01/12/22 ",
   "AMS": 11.81,
   "VNIndex": 18.63,
   "compare": -6.82,
   "AMS-Index": 112
 },
 {
   "Date": "01/13/22 ",
   "AMS": 7.84,
   "VNIndex": 17.49,
   "compare": -9.65,
   "AMS-Index": 108
 },
 {
   "Date": "01/14/22 ",
   "AMS": 9.91,
   "VNIndex": 17.49,
   "compare": -7.58,
   "AMS-Index": 110
 },
 {
   "Date": "01/15/22 ",
   "AMS": 9.91,
   "VNIndex": 17.49,
   "compare": -7.58,
   "AMS-Index": 110
 },
 {
   "Date": "01/16/22 ",
   "AMS": 9.91,
   "VNIndex": 17.49,
   "compare": -7.58,
   "AMS-Index": 110
 },
 {
   "Date": "01/17/22 ",
   "AMS": 2.4,
   "VNIndex": 14.1,
   "compare": -11.7,
   "AMS-Index": 102
 },
 {
   "Date": "01/18/22 ",
   "AMS": -1.49,
   "VNIndex": 13.01,
   "compare": -14.5,
   "AMS-Index": 99
 },
 {
   "Date": "01/19/22 ",
   "AMS": 2.39,
   "VNIndex": 13.31,
   "compare": -10.93,
   "AMS-Index": 102
 },
 {
   "Date": "01/20/22 ",
   "AMS": 5.09,
   "VNIndex": 15.08,
   "compare": -9.99,
   "AMS-Index": 105
 },
 {
   "Date": "01/21/22 ",
   "AMS": 4.35,
   "VNIndex": 15.68,
   "compare": -11.33,
   "AMS-Index": 104
 },
 {
   "Date": "01/22/22 ",
   "AMS": 4.35,
   "VNIndex": 15.68,
   "compare": -11.33,
   "AMS-Index": 104
 },
 {
   "Date": "01/23/22 ",
   "AMS": 4.35,
   "VNIndex": 15.68,
   "compare": -11.33,
   "AMS-Index": 104
 },
 {
   "Date": "01/24/22 ",
   "AMS": -2.12,
   "VNIndex": 13.07,
   "compare": -15.19,
   "AMS-Index": 98
 },
 {
   "Date": "01/25/22 ",
   "AMS": 3.55,
   "VNIndex": 16.2,
   "compare": -12.65,
   "AMS-Index": 104
 },
 {
   "Date": "01/26/22 ",
   "AMS": 3.69,
   "VNIndex": 16.36,
   "compare": -12.67,
   "AMS-Index": 104
 },
 {
   "Date": "01/27/22 ",
   "AMS": 2.34,
   "VNIndex": 15.45,
   "compare": -13.11,
   "AMS-Index": 102
 },
 {
   "Date": "01/28/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "01/29/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "01/30/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "01/31/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "02/01/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "02/02/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "02/03/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "02/04/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "02/05/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "02/06/22 ",
   "AMS": 2.71,
   "VNIndex": 16.15,
   "compare": -13.44,
   "AMS-Index": 103
 },
 {
   "Date": "02/07/22 ",
   "AMS": 3.92,
   "VNIndex": 17.62,
   "compare": -13.7,
   "AMS-Index": 104
 },
 {
   "Date": "02/08/22 ",
   "AMS": 7.58,
   "VNIndex": 17.88,
   "compare": -10.3,
   "AMS-Index": 108
 },
 {
   "Date": "02/09/22 ",
   "AMS": 10.79,
   "VNIndex": 18.23,
   "compare": -7.44,
   "AMS-Index": 111
 },
 {
   "Date": "02/10/22 ",
   "AMS": 10.18,
   "VNIndex": 18.34,
   "compare": -8.16,
   "AMS-Index": 110
 },
 {
   "Date": "02/11/22 ",
   "AMS": 9.68,
   "VNIndex": 17.94,
   "compare": -8.26,
   "AMS-Index": 110
 },
 {
   "Date": "02/12/22 ",
   "AMS": 9.68,
   "VNIndex": 17.94,
   "compare": -8.26,
   "AMS-Index": 110
 },
 {
   "Date": "02/13/22 ",
   "AMS": 9.68,
   "VNIndex": 17.94,
   "compare": -8.26,
   "AMS-Index": 110
 },
 {
   "Date": "02/14/22 ",
   "AMS": 8.82,
   "VNIndex": 15.6,
   "compare": -6.78,
   "AMS-Index": 109
 },
 {
   "Date": "02/15/22 ",
   "AMS": 10.17,
   "VNIndex": 17.24,
   "compare": -7.06,
   "AMS-Index": 110
 },
 {
   "Date": "02/16/22 ",
   "AMS": 12.46,
   "VNIndex": 17.18,
   "compare": -4.73,
   "AMS-Index": 112
 },
 {
   "Date": "02/17/22 ",
   "AMS": 12.27,
   "VNIndex": 18.43,
   "compare": -6.16,
   "AMS-Index": 112
 },
 {
   "Date": "02/18/22 ",
   "AMS": 13.42,
   "VNIndex": 18.19,
   "compare": -4.77,
   "AMS-Index": 113
 },
 {
   "Date": "02/19/22 ",
   "AMS": 13.42,
   "VNIndex": 18.19,
   "compare": -4.77,
   "AMS-Index": 113
 },
 {
   "Date": "02/20/22 ",
   "AMS": 13.42,
   "VNIndex": 18.19,
   "compare": -4.77,
   "AMS-Index": 113
 },
 {
   "Date": "02/21/22 ",
   "AMS": 13.77,
   "VNIndex": 18.66,
   "compare": -4.89,
   "AMS-Index": 114
 },
 {
   "Date": "02/22/22 ",
   "AMS": 12.25,
   "VNIndex": 18.08,
   "compare": -5.83,
   "AMS-Index": 112
 },
 {
   "Date": "02/23/22 ",
   "AMS": 14.3,
   "VNIndex": 18.77,
   "compare": -4.47,
   "AMS-Index": 114
 },
 {
   "Date": "02/24/22 ",
   "AMS": 11.85,
   "VNIndex": 17.4,
   "compare": -5.55,
   "AMS-Index": 112
 },
 {
   "Date": "02/25/22 ",
   "AMS": 13.49,
   "VNIndex": 17.72,
   "compare": -4.22,
   "AMS-Index": 113
 },
 {
   "Date": "02/26/22 ",
   "AMS": 13.49,
   "VNIndex": 17.72,
   "compare": -4.22,
   "AMS-Index": 113
 },
 {
   "Date": "02/27/22 ",
   "AMS": 13.49,
   "VNIndex": 17.72,
   "compare": -4.22,
   "AMS-Index": 113
 },
 {
   "Date": "02/28/22 ",
   "AMS": 17.22,
   "VNIndex": 17.03,
   "compare": 0.19,
   "AMS-Index": 117
 },
 {
   "Date": "03/01/22 ",
   "AMS": 17.76,
   "VNIndex": 17.71,
   "compare": 0.05,
   "AMS-Index": 118
 },
 {
   "Date": "03/02/22 ",
   "AMS": 17.06,
   "VNIndex": 16.67,
   "compare": 0.39,
   "AMS-Index": 117
 },
 {
   "Date": "03/03/22 ",
   "AMS": 21.13,
   "VNIndex": 18.2,
   "compare": 2.93,
   "AMS-Index": 121
 },
 {
   "Date": "03/04/22 ",
   "AMS": 20.29,
   "VNIndex": 18.22,
   "compare": 2.07,
   "AMS-Index": 120
 },
 {
   "Date": "03/05/22 ",
   "AMS": 20.29,
   "VNIndex": 18.22,
   "compare": 2.07,
   "AMS-Index": 120
 },
 {
   "Date": "03/06/22 ",
   "AMS": 20.29,
   "VNIndex": 18.22,
   "compare": 2.07,
   "AMS-Index": 120
 },
 {
   "Date": "03/07/22 ",
   "AMS": 19.59,
   "VNIndex": 17.73,
   "compare": 1.86,
   "AMS-Index": 120
 },
 {
   "Date": "03/08/22 ",
   "AMS": 18.72,
   "VNIndex": 15.74,
   "compare": 2.98,
   "AMS-Index": 119
 },
 {
   "Date": "03/09/22 ",
   "AMS": 18.55,
   "VNIndex": 15.74,
   "compare": 2.81,
   "AMS-Index": 119
 },
 {
   "Date": "03/10/22 ",
   "AMS": 18.65,
   "VNIndex": 16.16,
   "compare": 2.49,
   "AMS-Index": 119
 },
 {
   "Date": "03/11/22 ",
   "AMS": 17.7,
   "VNIndex": 15.18,
   "compare": 2.52,
   "AMS-Index": 118
 },
 {
   "Date": "03/12/22 ",
   "AMS": 17.7,
   "VNIndex": 15.18,
   "compare": 2.52,
   "AMS-Index": 118
 },
 {
   "Date": "03/13/22 ",
   "AMS": 17.7,
   "VNIndex": 15.18,
   "compare": 2.52,
   "AMS-Index": 118
 },
 {
   "Date": "03/14/22 ",
   "AMS": 16.17,
   "VNIndex": 13.58,
   "compare": 2.59,
   "AMS-Index": 116
 },
 {
   "Date": "03/15/22 ",
   "AMS": 17.5,
   "VNIndex": 14.09,
   "compare": 3.4,
   "AMS-Index": 117
 },
 {
   "Date": "03/16/22 ",
   "AMS": 17.86,
   "VNIndex": 14.61,
   "compare": 3.25,
   "AMS-Index": 118
 },
 {
   "Date": "03/17/22 ",
   "AMS": 18.72,
   "VNIndex": 14.77,
   "compare": 3.95,
   "AMS-Index": 119
 },
 {
   "Date": "03/18/22 ",
   "AMS": 18.94,
   "VNIndex": 15.38,
   "compare": 3.56,
   "AMS-Index": 119
 },
 {
   "Date": "03/19/22 ",
   "AMS": 18.94,
   "VNIndex": 15.38,
   "compare": 3.56,
   "AMS-Index": 119
 },
 {
   "Date": "03/20/22 ",
   "AMS": 18.94,
   "VNIndex": 15.38,
   "compare": 3.56,
   "AMS-Index": 119
 },
 {
   "Date": "03/21/22 ",
   "AMS": 21.2,
   "VNIndex": 17.41,
   "compare": 3.79,
   "AMS-Index": 121
 },
 {
   "Date": "03/22/22 ",
   "AMS": 21.9,
   "VNIndex": 18.1,
   "compare": 3.8,
   "AMS-Index": 122
 },
 {
   "Date": "03/23/22 ",
   "AMS": 22.24,
   "VNIndex": 17.99,
   "compare": 4.25,
   "AMS-Index": 122
 },
 {
   "Date": "03/24/22 ",
   "AMS": 23.89,
   "VNIndex": 17.67,
   "compare": 6.23,
   "AMS-Index": 124
 },
 {
   "Date": "03/25/22 ",
   "AMS": 24.52,
   "VNIndex": 17.69,
   "compare": 6.83,
   "AMS-Index": 125
 },
 {
   "Date": "03/26/22 ",
   "AMS": 24.52,
   "VNIndex": 17.69,
   "compare": 6.83,
   "AMS-Index": 125
 },
 {
   "Date": "03/27/22 ",
   "AMS": 24.52,
   "VNIndex": 17.69,
   "compare": 6.83,
   "AMS-Index": 125
 },
 {
   "Date": "03/28/22 ",
   "AMS": 23.35,
   "VNIndex": 16.48,
   "compare": 6.87,
   "AMS-Index": 123
 },
 {
   "Date": "03/29/22 ",
   "AMS": 25.53,
   "VNIndex": 17.63,
   "compare": 7.9,
   "AMS-Index": 126
 },
 {
   "Date": "03/30/22 ",
   "AMS": 24.18,
   "VNIndex": 17.06,
   "compare": 7.12,
   "AMS-Index": 124
 },
 {
   "Date": "03/31/22 ",
   "AMS": 24.33,
   "VNIndex": 17.06,
   "compare": 7.27,
   "AMS-Index": 124
 },
 {
   "Date": "04/01/22 ",
   "AMS": 26.3,
   "VNIndex": 19.1,
   "compare": 7.2,
   "AMS-Index": 126
 },
 {
   "Date": "04/02/22 ",
   "AMS": 26.3,
   "VNIndex": 19.1,
   "compare": 7.2,
   "AMS-Index": 126
 },
 {
   "Date": "04/03/22 ",
   "AMS": 26.3,
   "VNIndex": 19.1,
   "compare": 7.2,
   "AMS-Index": 126
 },
 {
   "Date": "04/04/22 ",
   "AMS": 25.88,
   "VNIndex": 19.74,
   "compare": 6.14,
   "AMS-Index": 126
 },
 {
   "Date": "04/05/22 ",
   "AMS": 25.81,
   "VNIndex": 19.38,
   "compare": 6.44,
   "AMS-Index": 126
 },
 {
   "Date": "04/06/22 ",
   "AMS": 26.2,
   "VNIndex": 19.6,
   "compare": 6.59,
   "AMS-Index": 126
 },
 {
   "Date": "04/07/22 ",
   "AMS": 23.94,
   "VNIndex": 17.99,
   "compare": 5.95,
   "AMS-Index": 124
 },
 {
   "Date": "04/08/22 ",
   "AMS": 23.67,
   "VNIndex": 16.39,
   "compare": 7.28,
   "AMS-Index": 124
 },
 {
   "Date": "04/09/22 ",
   "AMS": 23.67,
   "VNIndex": 16.39,
   "compare": 7.28,
   "AMS-Index": 124
 },
 {
   "Date": "04/10/22 ",
   "AMS": 23.67,
   "VNIndex": 16.39,
   "compare": 7.28,
   "AMS-Index": 124
 },
 {
   "Date": "04/11/22 ",
   "AMS": 23.67,
   "VNIndex": 16.39,
   "compare": 7.28,
   "AMS-Index": 124
 },
 {
   "Date": "04/12/22 ",
   "AMS": 21.48,
   "VNIndex": 14.29,
   "compare": 7.19,
   "AMS-Index": 121
 },
 {
   "Date": "04/13/22 ",
   "AMS": 23.67,
   "VNIndex": 16.01,
   "compare": 7.66,
   "AMS-Index": 124
 },
 {
   "Date": "04/14/22 ",
   "AMS": 23.95,
   "VNIndex": 15.62,
   "compare": 8.34,
   "AMS-Index": 124
 },
 {
   "Date": "04/15/22 ",
   "AMS": 25.95,
   "VNIndex": 14.55,
   "compare": 11.4,
   "AMS-Index": 126
 },
 {
   "Date": "04/16/22 ",
   "AMS": 25.95,
   "VNIndex": 14.55,
   "compare": 11.4,
   "AMS-Index": 126
 },
 {
   "Date": "04/17/22 ",
   "AMS": 25.95,
   "VNIndex": 14.55,
   "compare": 11.4,
   "AMS-Index": 126
 },
 {
   "Date": "04/18/22 ",
   "AMS": 25.32,
   "VNIndex": 12.51,
   "compare": 12.8,
   "AMS-Index": 125
 },
 {
   "Date": "04/19/22 ",
   "AMS": 23.54,
   "VNIndex": 10.46,
   "compare": 13.08,
   "AMS-Index": 124
 },
 {
   "Date": "04/20/22 ",
   "AMS": 21.42,
   "VNIndex": 8.75,
   "compare": 12.67,
   "AMS-Index": 121
 },
 {
   "Date": "04/21/22 ",
   "AMS": 21.58,
   "VNIndex": 7.61,
   "compare": 13.97,
   "AMS-Index": 122
 },
 {
   "Date": "04/22/22 ",
   "AMS": 18.23,
   "VNIndex": 8.32,
   "compare": 9.91,
   "AMS-Index": 118
 },
 {
   "Date": "04/23/22 ",
   "AMS": 18.23,
   "VNIndex": 8.32,
   "compare": 9.91,
   "AMS-Index": 118
 },
 {
   "Date": "04/24/22 ",
   "AMS": 18.23,
   "VNIndex": 8.32,
   "compare": 9.91,
   "AMS-Index": 118
 },
 {
   "Date": "04/25/22 ",
   "AMS": 10.99,
   "VNIndex": 2.96,
   "compare": 8.03,
   "AMS-Index": 111
 },
 {
   "Date": "04/26/22 ",
   "AMS": 15.37,
   "VNIndex": 5.34,
   "compare": 10.03,
   "AMS-Index": 115
 },
 {
   "Date": "04/27/22 ",
   "AMS": 16.27,
   "VNIndex": 6.32,
   "compare": 9.95,
   "AMS-Index": 116
 },
 {
   "Date": "04/28/22 ",
   "AMS": 17.63,
   "VNIndex": 6.1,
   "compare": 11.52,
   "AMS-Index": 118
 },
 {
   "Date": "04/29/22 ",
   "AMS": 19.7,
   "VNIndex": 7.34,
   "compare": 12.36,
   "AMS-Index": 120
 },
 {
   "Date": "04/30/22 ",
   "AMS": 19.7,
   "VNIndex": 7.34,
   "compare": 12.36,
   "AMS-Index": 120
 },
 {
   "Date": "05/01/22 ",
   "AMS": 19.7,
   "VNIndex": 7.34,
   "compare": 12.36,
   "AMS-Index": 120
 },
 {
   "Date": "05/02/22 ",
   "AMS": 19.7,
   "VNIndex": 7.34,
   "compare": 12.36,
   "AMS-Index": 120
 },
 {
   "Date": "05/03/22 ",
   "AMS": 19.7,
   "VNIndex": 7.34,
   "compare": 12.36,
   "AMS-Index": 120
 },
 {
   "Date": "05/04/22 ",
   "AMS": 19.8,
   "VNIndex": 5.92,
   "compare": 13.88,
   "AMS-Index": 120
 },
 {
   "Date": "05/05/22 ",
   "AMS": 19.14,
   "VNIndex": 6.86,
   "compare": 12.27,
   "AMS-Index": 119
 },
 {
   "Date": "05/06/22 ",
   "AMS": 17.72,
   "VNIndex": 4.4,
   "compare": 13.32,
   "AMS-Index": 118
 },
 {
   "Date": "05/07/22 ",
   "AMS": 17.72,
   "VNIndex": 4.4,
   "compare": 13.32,
   "AMS-Index": 118
 },
 {
   "Date": "05/08/22 ",
   "AMS": 17.72,
   "VNIndex": 4.4,
   "compare": 13.32,
   "AMS-Index": 118
 },
 {
   "Date": "05/09/22 ",
   "AMS": 14.84,
   "VNIndex": -0.29,
   "compare": 15.13,
   "AMS-Index": 115
 },
 {
   "Date": "05/10/22 ",
   "AMS": 15.75,
   "VNIndex": 1.59,
   "compare": 14.16,
   "AMS-Index": 116
 },
 {
   "Date": "05/11/22 ",
   "AMS": 15.19,
   "VNIndex": 2.22,
   "compare": 12.98,
   "AMS-Index": 115
 },
 {
   "Date": "05/12/22 ",
   "AMS": 11.22,
   "VNIndex": -2.71,
   "compare": 13.92,
   "AMS-Index": 111
 },
 {
   "Date": "05/13/22 ",
   "AMS": 7.96,
   "VNIndex": -7.11,
   "compare": 15.07,
   "AMS-Index": 108
 },
 {
   "Date": "05/14/22 ",
   "AMS": 7.96,
   "VNIndex": -7.11,
   "compare": 15.07,
   "AMS-Index": 108
 },
 {
   "Date": "05/15/22 ",
   "AMS": 7.96,
   "VNIndex": -7.11,
   "compare": 15.07,
   "AMS-Index": 108
 },
 {
   "Date": "05/16/22 ",
   "AMS": 9.24,
   "VNIndex": -7.96,
   "compare": 17.2,
   "AMS-Index": 109
 },
 {
   "Date": "05/17/22 ",
   "AMS": 13.49,
   "VNIndex": -3.53,
   "compare": 17.02,
   "AMS-Index": 113
 },
 {
   "Date": "05/18/22 ",
   "AMS": 14.03,
   "VNIndex": -2.55,
   "compare": 16.59,
   "AMS-Index": 114
 },
 {
   "Date": "05/19/22 ",
   "AMS": 13.26,
   "VNIndex": -2.49,
   "compare": 15.75,
   "AMS-Index": 113
 },
 {
   "Date": "05/20/22 ",
   "AMS": 13.73,
   "VNIndex": -2.56,
   "compare": 16.29,
   "AMS-Index": 114
 },
 {
   "Date": "05/21/22 ",
   "AMS": 13.73,
   "VNIndex": -2.56,
   "compare": 16.29,
   "AMS-Index": 114
 },
 {
   "Date": "05/22/22 ",
   "AMS": 13.73,
   "VNIndex": -2.56,
   "compare": 16.29,
   "AMS-Index": 114
 },
 {
   "Date": "05/23/22 ",
   "AMS": 12.92,
   "VNIndex": -4.28,
   "compare": 17.19,
   "AMS-Index": 113
 },
 {
   "Date": "05/24/22 ",
   "AMS": 12.94,
   "VNIndex": -3.13,
   "compare": 16.08,
   "AMS-Index": 113
 },
 {
   "Date": "05/25/22 ",
   "AMS": 15.85,
   "VNIndex": -0.38,
   "compare": 16.23,
   "AMS-Index": 116
 },
 {
   "Date": "05/26/22 ",
   "AMS": 17.15,
   "VNIndex": -0.37,
   "compare": 17.52,
   "AMS-Index": 117
 },
 {
   "Date": "05/27/22 ",
   "AMS": 17.69,
   "VNIndex": 0.96,
   "compare": 16.73,
   "AMS-Index": 118
 },
 {
   "Date": "05/28/22 ",
   "AMS": 17.69,
   "VNIndex": 0.96,
   "compare": 16.73,
   "AMS-Index": 118
 },
 {
   "Date": "05/29/22 ",
   "AMS": 17.69,
   "VNIndex": 0.96,
   "compare": 16.73,
   "AMS-Index": 118
 },
 {
   "Date": "05/30/22 ",
   "AMS": 17.83,
   "VNIndex": 1.62,
   "compare": 16.21,
   "AMS-Index": 118
 },
 {
   "Date": "05/31/22 ",
   "AMS": 18.35,
   "VNIndex": 1.52,
   "compare": 16.83,
   "AMS-Index": 118
 },
 {
   "Date": "06/01/22 ",
   "AMS": 18.74,
   "VNIndex": 2.06,
   "compare": 16.68,
   "AMS-Index": 119
 },
 {
   "Date": "06/02/22 ",
   "AMS": 19.21,
   "VNIndex": 1.2,
   "compare": 18,
   "AMS-Index": 119
 },
 {
   "Date": "06/03/22 ",
   "AMS": 19.15,
   "VNIndex": 1.15,
   "compare": 17.99,
   "AMS-Index": 119
 },
 {
   "Date": "06/04/22 ",
   "AMS": 19.15,
   "VNIndex": 1.15,
   "compare": 17.99,
   "AMS-Index": 119
 },
 {
   "Date": "06/05/22 ",
   "AMS": 19.15,
   "VNIndex": 1.15,
   "compare": 17.99,
   "AMS-Index": 119
 },
 {
   "Date": "06/06/22 ",
   "AMS": 19.43,
   "VNIndex": 1.31,
   "compare": 18.11,
   "AMS-Index": 119
 },
 {
   "Date": "06/07/22 ",
   "AMS": 19.62,
   "VNIndex": 1.42,
   "compare": 18.2,
   "AMS-Index": 120
 },
 {
   "Date": "06/08/22 ",
   "AMS": 19.95,
   "VNIndex": 2.72,
   "compare": 17.23,
   "AMS-Index": 120
 },
 {
   "Date": "06/09/22 ",
   "AMS": 19.91,
   "VNIndex": 2.71,
   "compare": 17.2,
   "AMS-Index": 120
 },
 {
   "Date": "06/10/22 ",
   "AMS": 19.74,
   "VNIndex": 0.85,
   "compare": 18.89,
   "AMS-Index": 120
 },
 {
   "Date": "06/11/22 ",
   "AMS": 19.74,
   "VNIndex": 0.85,
   "compare": 18.89,
   "AMS-Index": 120
 },
 {
   "Date": "06/12/22 ",
   "AMS": 19.74,
   "VNIndex": 0.85,
   "compare": 18.89,
   "AMS-Index": 120
 },
 {
   "Date": "06/13/22 ",
   "AMS": 19.36,
   "VNIndex": -3.63,
   "compare": 22.99,
   "AMS-Index": 119
 },
 {
   "Date": "06/14/22 ",
   "AMS": 19.29,
   "VNIndex": -3.38,
   "compare": 22.66,
   "AMS-Index": 119
 },
 {
   "Date": "06/15/22 ",
   "AMS": 19.13,
   "VNIndex": -4.66,
   "compare": 23.79,
   "AMS-Index": 119
 },
 {
   "Date": "06/16/22 ",
   "AMS": 19.2,
   "VNIndex": -2.88,
   "compare": 22.08,
   "AMS-Index": 119
 },
 {
   "Date": "06/17/22 ",
   "AMS": 19.01,
   "VNIndex": -4.4,
   "compare": 23.41,
   "AMS-Index": 119
 },
 {
   "Date": "06/18/22 ",
   "AMS": 19.01,
   "VNIndex": -4.4,
   "compare": 23.41,
   "AMS-Index": 119
 },
 {
   "Date": "06/19/22 ",
   "AMS": 19.01,
   "VNIndex": -4.4,
   "compare": 23.41,
   "AMS-Index": 119
 },
 {
   "Date": "06/20/22 ",
   "AMS": 19.01,
   "VNIndex": -7.3,
   "compare": 26.3,
   "AMS-Index": 119
 },
 {
   "Date": "06/21/22 ",
   "AMS": 19.01,
   "VNIndex": -7.92,
   "compare": 26.92,
   "AMS-Index": 119
 },
 {
   "Date": "06/22/22 ",
   "AMS": 19.01,
   "VNIndex": -8.17,
   "compare": 27.17,
   "AMS-Index": 119
 },
 {
   "Date": "06/23/22 ",
   "AMS": 19.01,
   "VNIndex": -6.63,
   "compare": 25.63,
   "AMS-Index": 119
 },
 {
   "Date": "06/24/22 ",
   "AMS": 19.01,
   "VNIndex": -6.9,
   "compare": 25.9,
   "AMS-Index": 119
 },
 {
   "Date": "06/25/22 ",
   "AMS": 19.01,
   "VNIndex": -6.9,
   "compare": 25.9,
   "AMS-Index": 119
 },
 {
   "Date": "06/26/22 ",
   "AMS": 19.01,
   "VNIndex": -6.9,
   "compare": 25.9,
   "AMS-Index": 119
 },
 {
   "Date": "06/27/22 ",
   "AMS": 19.01,
   "VNIndex": -5.53,
   "compare": 24.54,
   "AMS-Index": 119
 },
 {
   "Date": "06/28/22 ",
   "AMS": 19.01,
   "VNIndex": -4.33,
   "compare": 23.34,
   "AMS-Index": 119
 },
 {
   "Date": "06/29/22 ",
   "AMS": 19.01,
   "VNIndex": -4.34,
   "compare": 23.34,
   "AMS-Index": 119
 },
 {
   "Date": "06/30/22 ",
   "AMS": 19.01,
   "VNIndex": -5.94,
   "compare": 24.95,
   "AMS-Index": 119
 },
 {
   "Date": "07/01/22 ",
   "AMS": 19.12,
   "VNIndex": -5.84,
   "compare": 24.96,
   "AMS-Index": 119
 },
 {
   "Date": "07/02/22 ",
   "AMS": 19.12,
   "VNIndex": -5.84,
   "compare": 24.96,
   "AMS-Index": 119
 },
 {
   "Date": "07/03/22 ",
   "AMS": 19.12,
   "VNIndex": -5.84,
   "compare": 24.96,
   "AMS-Index": 119
 },
 {
   "Date": "07/04/22 ",
   "AMS": 18.93,
   "VNIndex": -6.11,
   "compare": 25.04,
   "AMS-Index": 119
 },
 {
   "Date": "07/05/22 ",
   "AMS": 18.41,
   "VNIndex": -7.23,
   "compare": 25.64,
   "AMS-Index": 118
 },
 {
   "Date": "07/06/22 ",
   "AMS": 18.16,
   "VNIndex": -9.71,
   "compare": 27.87,
   "AMS-Index": 118
 },
 {
   "Date": "07/07/22 ",
   "AMS": 18.46,
   "VNIndex": -8.39,
   "compare": 26.84,
   "AMS-Index": 118
 },
 {
   "Date": "07/08/22 ",
   "AMS": 18.2,
   "VNIndex": -8.01,
   "compare": 26.21,
   "AMS-Index": 118
 },
 {
   "Date": "07/09/22 ",
   "AMS": 18.2,
   "VNIndex": -8.01,
   "compare": 26.21,
   "AMS-Index": 118
 },
 {
   "Date": "07/10/22 ",
   "AMS": 18.2,
   "VNIndex": -8.01,
   "compare": 26.21,
   "AMS-Index": 118
 },
 {
   "Date": "07/11/22 ",
   "AMS": 17.99,
   "VNIndex": -9.27,
   "compare": 27.25,
   "AMS-Index": 118
 },
 {
   "Date": "07/12/22 ",
   "AMS": 18.31,
   "VNIndex": -7.73,
   "compare": 26.04,
   "AMS-Index": 118
 },
 {
   "Date": "07/13/22 ",
   "AMS": 18.24,
   "VNIndex": -7.8,
   "compare": 26.05,
   "AMS-Index": 118
 },
 {
   "Date": "07/14/22 ",
   "AMS": 18.26,
   "VNIndex": -7.16,
   "compare": 25.42,
   "AMS-Index": 118
 },
 {
   "Date": "07/15/22 ",
   "AMS": 18.5,
   "VNIndex": -7.39,
   "compare": 25.88,
   "AMS-Index": 118
 },
 {
   "Date": "07/16/22 ",
   "AMS": 18.5,
   "VNIndex": -7.39,
   "compare": 25.88,
   "AMS-Index": 118
 },
 {
   "Date": "07/17/22 ",
   "AMS": 18.5,
   "VNIndex": -7.39,
   "compare": 25.88,
   "AMS-Index": 118
 },
 {
   "Date": "07/18/22 ",
   "AMS": 18.37,
   "VNIndex": -7.6,
   "compare": 25.97,
   "AMS-Index": 118
 },
 {
   "Date": "07/19/22 ",
   "AMS": 18.54,
   "VNIndex": -7.46,
   "compare": 26,
   "AMS-Index": 119
 },
 {
   "Date": "07/20/22 ",
   "AMS": 18.58,
   "VNIndex": -6.22,
   "compare": 24.79,
   "AMS-Index": 119
 },
 {
   "Date": "07/21/22 ",
   "AMS": 18.37,
   "VNIndex": -5.88,
   "compare": 24.25,
   "AMS-Index": 118
 },
 {
   "Date": "07/22/22 ",
   "AMS": 18.32,
   "VNIndex": -6.17,
   "compare": 24.49,
   "AMS-Index": 118
 },
 {
   "Date": "07/23/22 ",
   "AMS": 18.32,
   "VNIndex": -6.17,
   "compare": 24.49,
   "AMS-Index": 118
 },
 {
   "Date": "07/24/22 ",
   "AMS": 18.32,
   "VNIndex": -6.17,
   "compare": 24.49,
   "AMS-Index": 118
 },
 {
   "Date": "07/25/22 ",
   "AMS": 18.37,
   "VNIndex": -6.66,
   "compare": 25.03,
   "AMS-Index": 118
 },
 {
   "Date": "07/26/22 ",
   "AMS": 18.1,
   "VNIndex": -6.93,
   "compare": 25.03,
   "AMS-Index": 118
 },
 {
   "Date": "07/27/22 ",
   "AMS": 18.37,
   "VNIndex": -6.46,
   "compare": 24.83,
   "AMS-Index": 118
 },
 {
   "Date": "07/28/22 ",
   "AMS": 18.46,
   "VNIndex": -5.12,
   "compare": 23.57,
   "AMS-Index": 118
 },
 {
   "Date": "07/29/22 ",
   "AMS": 18.38,
   "VNIndex": -5.26,
   "compare": 23.64,
   "AMS-Index": 118
 },
 {
   "Date": "07/30/22 ",
   "AMS": 18.38,
   "VNIndex": -5.26,
   "compare": 23.64,
   "AMS-Index": 118
 },
 {
   "Date": "07/31/22 ",
   "AMS": 18.38,
   "VNIndex": -5.26,
   "compare": 23.64,
   "AMS-Index": 118
 },
 {
   "Date": "08/01/22 ",
   "AMS": 18.45,
   "VNIndex": -3.29,
   "compare": 21.74,
   "AMS-Index": 118
 },
 {
   "Date": "08/02/22 ",
   "AMS": 18.73,
   "VNIndex": -2.49,
   "compare": 21.22,
   "AMS-Index": 119
 },
 {
   "Date": "08/03/22 ",
   "AMS": 18.96,
   "VNIndex": -1.85,
   "compare": 20.8,
   "AMS-Index": 119
 },
 {
   "Date": "08/04/22 ",
   "AMS": 18.82,
   "VNIndex": -1.5,
   "compare": 20.32,
   "AMS-Index": 119
 },
 {
   "Date": "08/05/22 ",
   "AMS": 18.88,
   "VNIndex": -1.61,
   "compare": 20.49,
   "AMS-Index": 119
 },
 {
   "Date": "08/06/22 ",
   "AMS": 18.88,
   "VNIndex": -1.61,
   "compare": 20.49,
   "AMS-Index": 119
 },
 {
   "Date": "08/07/22 ",
   "AMS": 18.88,
   "VNIndex": -1.61,
   "compare": 20.49,
   "AMS-Index": 119
 },
 {
   "Date": "08/08/22 ",
   "AMS": 18.78,
   "VNIndex": -1.3,
   "compare": 20.08,
   "AMS-Index": 119
 },
 {
   "Date": "08/09/22 ",
   "AMS": 18.95,
   "VNIndex": -1.13,
   "compare": 20.08,
   "AMS-Index": 119
 },
 {
   "Date": "08/10/22 ",
   "AMS": 18.93,
   "VNIndex": -1.32,
   "compare": 20.25,
   "AMS-Index": 119
 },
 {
   "Date": "08/11/22 ",
   "AMS": 18.79,
   "VNIndex": -1.67,
   "compare": 20.45,
   "AMS-Index": 119
 },
 {
   "Date": "08/12/22 ",
   "AMS": 18.63,
   "VNIndex": -0.86,
   "compare": 19.49,
   "AMS-Index": 119
 },
 {
   "Date": "08/13/22 ",
   "AMS": 18.63,
   "VNIndex": -0.86,
   "compare": 19.49,
   "AMS-Index": 119
 },
 {
   "Date": "08/14/22 ",
   "AMS": 18.63,
   "VNIndex": -0.86,
   "compare": 19.49,
   "AMS-Index": 119
 },
 {
   "Date": "08/15/22 ",
   "AMS": 19.02,
   "VNIndex": 0.07,
   "compare": 18.95,
   "AMS-Index": 119
 },
 {
   "Date": "08/16/22 ",
   "AMS": 18.75,
   "VNIndex": 0.11,
   "compare": 18.64,
   "AMS-Index": 119
 },
 {
   "Date": "08/17/22 ",
   "AMS": 18.23,
   "VNIndex": 0.16,
   "compare": 18.08,
   "AMS-Index": 118
 },
 {
   "Date": "08/18/22 ",
   "AMS": 17.73,
   "VNIndex": 0.03,
   "compare": 17.71,
   "AMS-Index": 118
 },
 {
   "Date": "08/19/22 ",
   "AMS": 18.39,
   "VNIndex": -0.32,
   "compare": 18.71,
   "AMS-Index": 118
 },
 {
   "Date": "08/20/22 ",
   "AMS": 18.39,
   "VNIndex": -0.24,
   "compare": 18.63,
   "AMS-Index": 118
 },
 {
   "Date": "08/21/22 ",
   "AMS": 18.39,
   "VNIndex": -0.17,
   "compare": 18.55,
   "AMS-Index": 118
 },
 {
   "Date": "08/22/22 ",
   "AMS": 18.22,
   "VNIndex": -1.01,
   "compare": 19.23,
   "AMS-Index": 118
 },
 {
   "Date": "08/23/22 ",
   "AMS": 18.39,
   "VNIndex": -0.19,
   "compare": 18.59,
   "AMS-Index": 118
 },
 {
   "Date": "08/24/22 ",
   "AMS": 18.16,
   "VNIndex": 0.3,
   "compare": 17.86,
   "AMS-Index": 118
 },
 {
   "Date": "08/25/22 ",
   "AMS": 18.11,
   "VNIndex": 1.22,
   "compare": 16.88,
   "AMS-Index": 118
 },
 {
   "Date": "08/26/22 ",
   "AMS": 18.63,
   "VNIndex": 0.73,
   "compare": 17.9,
   "AMS-Index": 119
 },
 {
   "Date": "08/27/22 ",
   "AMS": 18.63,
   "VNIndex": 0.73,
   "compare": 17.9,
   "AMS-Index": 119
 },
 {
   "Date": "08/28/22 ",
   "AMS": 18.63,
   "VNIndex": 0.73,
   "compare": 17.9,
   "AMS-Index": 119
 },
 {
   "Date": "08/29/22 ",
   "AMS": 18.48,
   "VNIndex": -0.2,
   "compare": 18.67,
   "AMS-Index": 118
 },
 {
   "Date": "08/30/22 ",
   "AMS": 18.77,
   "VNIndex": 0.48,
   "compare": 18.29,
   "AMS-Index": 119
 },
 {
   "Date": "08/31/22 ",
   "AMS": 18.23,
   "VNIndex": 0.57,
   "compare": 17.66,
   "AMS-Index": 118
 },
 {
   "Date": "09/01/22 ",
   "AMS": 18.23,
   "VNIndex": 0.57,
   "compare": 17.66,
   "AMS-Index": 118
 },
 {
   "Date": "09/02/22 ",
   "AMS": 18.23,
   "VNIndex": 0.57,
   "compare": 17.66,
   "AMS-Index": 118
 },
 {
   "Date": "09/03/22 ",
   "AMS": 18.23,
   "VNIndex": 0.57,
   "compare": 17.66,
   "AMS-Index": 118
 },
 {
   "Date": "09/04/22 ",
   "AMS": 18.23,
   "VNIndex": 0.57,
   "compare": 17.66,
   "AMS-Index": 118
 },
 {
   "Date": "09/05/22 ",
   "AMS": 17.05,
   "VNIndex": 0.32,
   "compare": 16.73,
   "AMS-Index": 117
 },
 {
   "Date": "09/06/22 ",
   "AMS": 17.15,
   "VNIndex": 0.32,
   "compare": 16.82,
   "AMS-Index": 117
 },
 {
   "Date": "09/07/22 ",
   "AMS": 16.39,
   "VNIndex": -2.37,
   "compare": 18.76,
   "AMS-Index": 116
 },
 {
   "Date": "09/08/22 ",
   "AMS": 15.81,
   "VNIndex": -3.04,
   "compare": 18.85,
   "AMS-Index": 116
 },
 {
   "Date": "09/09/22 ",
   "AMS": 15.55,
   "VNIndex": -1.92,
   "compare": 17.48,
   "AMS-Index": 116
 },
 {
   "Date": "09/10/22 ",
   "AMS": 15.55,
   "VNIndex": -1.92,
   "compare": 17.48,
   "AMS-Index": 116
 },
 {
   "Date": "09/11/22 ",
   "AMS": 15.55,
   "VNIndex": -1.92,
   "compare": 17.48,
   "AMS-Index": 116
 },
 {
   "Date": "09/12/22 ",
   "AMS": 15.7,
   "VNIndex": -1.86,
   "compare": 17.56,
   "AMS-Index": 116
 },
 {
   "Date": "09/13/22 ",
   "AMS": 15.87,
   "VNIndex": -1.95,
   "compare": 17.83,
   "AMS-Index": 116
 },
 {
   "Date": "09/14/22 ",
   "AMS": 16.03,
   "VNIndex": -2.55,
   "compare": 18.58,
   "AMS-Index": 116
 },
 {
   "Date": "09/15/22 ",
   "AMS": 16.41,
   "VNIndex": -2.17,
   "compare": 18.58,
   "AMS-Index": 116
 },
 {
   "Date": "09/16/22 ",
   "AMS": 14.64,
   "VNIndex": -3.08,
   "compare": 17.72,
   "AMS-Index": 115
 },
 {
   "Date": "09/17/22 ",
   "AMS": 14.64,
   "VNIndex": -3.08,
   "compare": 17.72,
   "AMS-Index": 115
 },
 {
   "Date": "09/18/22 ",
   "AMS": 14.64,
   "VNIndex": -3.08,
   "compare": 17.72,
   "AMS-Index": 115
 },
 {
   "Date": "09/19/22 ",
   "AMS": 10.84,
   "VNIndex": -5.33,
   "compare": 16.17,
   "AMS-Index": 111
 },
 {
   "Date": "09/20/22 ",
   "AMS": 11.47,
   "VNIndex": -4.27,
   "compare": 15.74,
   "AMS-Index": 111
 },
 {
   "Date": "09/21/22 ",
   "AMS": 11.16,
   "VNIndex": -4.93,
   "compare": 16.09,
   "AMS-Index": 111
 },
 {
   "Date": "09/22/22 ",
   "AMS": 11.32,
   "VNIndex": -4.6,
   "compare": 15.92,
   "AMS-Index": 111
 },
 {
   "Date": "09/23/22 ",
   "AMS": 12.21,
   "VNIndex": -5.5,
   "compare": 17.71,
   "AMS-Index": 112
 },
 {
   "Date": "09/24/22 ",
   "AMS": 12.21,
   "VNIndex": -5.5,
   "compare": 17.71,
   "AMS-Index": 112
 },
 {
   "Date": "09/25/22 ",
   "AMS": 12.21,
   "VNIndex": -5.5,
   "compare": 17.71,
   "AMS-Index": 112
 },
 {
   "Date": "09/26/22 ",
   "AMS": 8.19,
   "VNIndex": -7.77,
   "compare": 15.96,
   "AMS-Index": 108
 },
 {
   "Date": "09/27/22 ",
   "AMS": 7.6,
   "VNIndex": -8.38,
   "compare": 15.99,
   "AMS-Index": 108
 },
 {
   "Date": "09/28/22 ",
   "AMS": 4.51,
   "VNIndex": -10.18,
   "compare": 14.7,
   "AMS-Index": 105
 },
 {
   "Date": "09/29/22 ",
   "AMS": 3.59,
   "VNIndex": -11.56,
   "compare": 15.15,
   "AMS-Index": 104
 },
 {
   "Date": "09/30/22 ",
   "AMS": 2.74,
   "VNIndex": -11.09,
   "compare": 13.83,
   "AMS-Index": 103
 },
 {
   "Date": "10/01/22 ",
   "AMS": 2.74,
   "VNIndex": -11.09,
   "compare": 13.83,
   "AMS-Index": 103
 },
 {
   "Date": "10/02/22 ",
   "AMS": 2.74,
   "VNIndex": -11.09,
   "compare": 13.83,
   "AMS-Index": 103
 },
 {
   "Date": "10/03/22 ",
   "AMS": -2.27,
   "VNIndex": -14.67,
   "compare": 12.4,
   "AMS-Index": 98
 },
 {
   "Date": "10/04/22 ",
   "AMS": -3.48,
   "VNIndex": -15.33,
   "compare": 11.84,
   "AMS-Index": 97
 },
 {
   "Date": "10/05/22 ",
   "AMS": -0.01,
   "VNIndex": -13.28,
   "compare": 13.26,
   "AMS-Index": 100
 },
 {
   "Date": "10/06/22 ",
   "AMS": -3.9,
   "VNIndex": -15.61,
   "compare": 11.71,
   "AMS-Index": 96
 },
 {
   "Date": "10/07/22 ",
   "AMS": -7.82,
   "VNIndex": -18.64,
   "compare": 10.82,
   "AMS-Index": 92
 },
 {
   "Date": "10/08/22 ",
   "AMS": -7.82,
   "VNIndex": -18.64,
   "compare": 10.82,
   "AMS-Index": 92
 },
 {
   "Date": "10/09/22 ",
   "AMS": -7.82,
   "VNIndex": -18.64,
   "compare": 10.82,
   "AMS-Index": 92
 },
 {
   "Date": "10/10/22 ",
   "AMS": -5.17,
   "VNIndex": -18.13,
   "compare": 12.96,
   "AMS-Index": 95
 },
 {
   "Date": "10/11/22 ",
   "AMS": -7.69,
   "VNIndex": -20.98,
   "compare": 13.29,
   "AMS-Index": 92
 },
 {
   "Date": "10/12/22 ",
   "AMS": -3.86,
   "VNIndex": -18.73,
   "compare": 14.87,
   "AMS-Index": 96
 },
 {
   "Date": "10/13/22 ",
   "AMS": -2.02,
   "VNIndex": -17.46,
   "compare": 15.44,
   "AMS-Index": 98
 },
 {
   "Date": "10/14/22 ",
   "AMS": -0.31,
   "VNIndex": -16.61,
   "compare": 16.29,
   "AMS-Index": 100
 },
 {
   "Date": "10/15/22 ",
   "AMS": -0.31,
   "VNIndex": -16.61,
   "compare": 16.29,
   "AMS-Index": 100
 },
 {
   "Date": "10/16/22 ",
   "AMS": -0.31,
   "VNIndex": -16.61,
   "compare": 16.29,
   "AMS-Index": 100
 },
 {
   "Date": "10/17/22 ",
   "AMS": 1.17,
   "VNIndex": -17.41,
   "compare": 18.58,
   "AMS-Index": 101
 },
 {
   "Date": "10/18/22 ",
   "AMS": 2.15,
   "VNIndex": -16.46,
   "compare": 18.61,
   "AMS-Index": 102
 },
 {
   "Date": "10/19/22 ",
   "AMS": 2.64,
   "VNIndex": -16.75,
   "compare": 19.39,
   "AMS-Index": 103
 },
 {
   "Date": "10/20/22 ",
   "AMS": 1.11,
   "VNIndex": -16.87,
   "compare": 17.98,
   "AMS-Index": 101
 },
 {
   "Date": "10/21/22 ",
   "AMS": -2.84,
   "VNIndex": -19.91,
   "compare": 17.06,
   "AMS-Index": 97
 },
 {
   "Date": "10/22/22 ",
   "AMS": -2.84,
   "VNIndex": -19.91,
   "compare": 17.06,
   "AMS-Index": 97
 },
 {
   "Date": "10/23/22 ",
   "AMS": -2.84,
   "VNIndex": -19.91,
   "compare": 17.06,
   "AMS-Index": 97
 },
 {
   "Date": "10/24/22 ",
   "AMS": -5.09,
   "VNIndex": -22.55,
   "compare": 17.46,
   "AMS-Index": 95
 },
 {
   "Date": "10/25/22 ",
   "AMS": -4.6,
   "VNIndex": -21.64,
   "compare": 17.05,
   "AMS-Index": 95
 },
 {
   "Date": "10/26/22 ",
   "AMS": -3.56,
   "VNIndex": -21.98,
   "compare": 18.42,
   "AMS-Index": 96
 },
 {
   "Date": "10/27/22 ",
   "AMS": -1.27,
   "VNIndex": -19.26,
   "compare": 17.99,
   "AMS-Index": 99
 },
 {
   "Date": "10/28/22 ",
   "AMS": -1.3,
   "VNIndex": -19.31,
   "compare": 18.01,
   "AMS-Index": 99
 },
 {
   "Date": "10/29/22 ",
   "AMS": -1.3,
   "VNIndex": -19.31,
   "compare": 18.01,
   "AMS-Index": 99
 },
 {
   "Date": "10/30/22 ",
   "AMS": -1.3,
   "VNIndex": -19.31,
   "compare": 18.01,
   "AMS-Index": 99
 },
 {
   "Date": "10/31/22 ",
   "AMS": -0.98,
   "VNIndex": -19.27,
   "compare": 18.29,
   "AMS-Index": 99
 },
 {
   "Date": "11/01/22 ",
   "AMS": 0.32,
   "VNIndex": -18.81,
   "compare": 19.14,
   "AMS-Index": 100
 },
 {
   "Date": "11/02/22 ",
   "AMS": 0.53,
   "VNIndex": -19.64,
   "compare": 20.18,
   "AMS-Index": 101
 },
 {
   "Date": "11/03/22 ",
   "AMS": -1.36,
   "VNIndex": -19.91,
   "compare": 18.55,
   "AMS-Index": 99
 },
 {
   "Date": "11/04/22 ",
   "AMS": -5.37,
   "VNIndex": -21.69,
   "compare": 16.31,
   "AMS-Index": 95
 },
 {
   "Date": "11/05/22 ",
   "AMS": -5.37,
   "VNIndex": -21.69,
   "compare": 16.31,
   "AMS-Index": 95
 },
 {
   "Date": "11/06/22 ",
   "AMS": -5.37,
   "VNIndex": -21.69,
   "compare": 16.31,
   "AMS-Index": 95
 },
 {
   "Date": "11/07/22 ",
   "AMS": -8.88,
   "VNIndex": -23.41,
   "compare": 14.53,
   "AMS-Index": 91
 },
 {
   "Date": "11/08/22 ",
   "AMS": -9.87,
   "VNIndex": -22.9,
   "compare": 13.04,
   "AMS-Index": 90
 },
 {
   "Date": "11/09/22 ",
   "AMS": -9.63,
   "VNIndex": -22.6,
   "compare": 12.97,
   "AMS-Index": 90
 },
 {
   "Date": "11/10/22 ",
   "AMS": -13.13,
   "VNIndex": -25.61,
   "compare": 12.48,
   "AMS-Index": 87
 },
 {
   "Date": "11/11/22 ",
   "AMS": -15.73,
   "VNIndex": -25.03,
   "compare": 9.3,
   "AMS-Index": 84
 },
 {
   "Date": "11/12/22 ",
   "AMS": -15.73,
   "VNIndex": -25.05,
   "compare": 9.32,
   "AMS-Index": 84
 },
 {
   "Date": "11/13/22 ",
   "AMS": -15.73,
   "VNIndex": -25.05,
   "compare": 9.32,
   "AMS-Index": 84
 },
 {
   "Date": "11/14/22 ",
   "AMS": -18.89,
   "VNIndex": -26.09,
   "compare": 7.21,
   "AMS-Index": 81
 },
 {
   "Date": "11/15/22 ",
   "AMS": -22.55,
   "VNIndex": -28.38,
   "compare": 5.83,
   "AMS-Index": 77
 },
 {
   "Date": "11/16/22 ",
   "AMS": -21.86,
   "VNIndex": -25.95,
   "compare": 4.09,
   "AMS-Index": 78
 },
 {
   "Date": "11/17/22 ",
   "AMS": -21.26,
   "VNIndex": -23.88,
   "compare": 2.62,
   "AMS-Index": 79
 },
 {
   "Date": "11/18/22 ",
   "AMS": -21.06,
   "VNIndex": -23.87,
   "compare": 2.81,
   "AMS-Index": 79
 },
 {
   "Date": "11/19/22 ",
   "AMS": -21.06,
   "VNIndex": -23.87,
   "compare": 2.81,
   "AMS-Index": 79
 },
 {
   "Date": "11/20/22 ",
   "AMS": -21.06,
   "VNIndex": -23.87,
   "compare": 2.81,
   "AMS-Index": 79
 },
 {
   "Date": "11/21/22 ",
   "AMS": -21.19,
   "VNIndex": -24.55,
   "compare": 3.36,
   "AMS-Index": 79
 },
 {
   "Date": "11/22/22 ",
   "AMS": -20.88,
   "VNIndex": -25.22,
   "compare": 4.35,
   "AMS-Index": 79
 },
 {
   "Date": "11/23/22 ",
   "AMS": -20.85,
   "VNIndex": -25.7,
   "compare": 4.85,
   "AMS-Index": 79
 },
 {
   "Date": "11/24/22 ",
   "AMS": -20.84,
   "VNIndex": -25.57,
   "compare": 4.73,
   "AMS-Index": 79
 },
 {
   "Date": "11/25/22 ",
   "AMS": -20.68,
   "VNIndex": -23.7,
   "compare": 3.02,
   "AMS-Index": 79
 },
 {
   "Date": "11/26/22 ",
   "AMS": -20.68,
   "VNIndex": -23.63,
   "compare": 2.94,
   "AMS-Index": 79
 },
 {
   "Date": "11/27/22 ",
   "AMS": -20.68,
   "VNIndex": -23.55,
   "compare": 2.86,
   "AMS-Index": 79
 },
 {
   "Date": "11/28/22 ",
   "AMS": -20.5,
   "VNIndex": -21.02,
   "compare": 0.52,
   "AMS-Index": 80
 },
 {
   "Date": "11/29/22 ",
   "AMS": -20.48,
   "VNIndex": -18.94,
   "compare": -1.54,
   "AMS-Index": 80
 },
 {
   "Date": "11/30/22 ",
   "AMS": -20.4,
   "VNIndex": -17.66,
   "compare": -2.73,
   "AMS-Index": 80
 },
 {
   "Date": "12/01/22 ",
   "AMS": -20.33,
   "VNIndex": -18.61,
   "compare": -1.72,
   "AMS-Index": 80
 },
 {
   "Date": "12/02/22 ",
   "AMS": -20.21,
   "VNIndex": -15.18,
   "compare": -5.03,
   "AMS-Index": 80
 },
 {
   "Date": "12/03/22 ",
   "AMS": -20.21,
   "VNIndex": -15.18,
   "compare": -5.03,
   "AMS-Index": 80
 },
 {
   "Date": "12/04/22 ",
   "AMS": -20.21,
   "VNIndex": -15.18,
   "compare": -5.03,
   "AMS-Index": 80
 },
 {
   "Date": "12/05/22 ",
   "AMS": -20.19,
   "VNIndex": -14.11,
   "compare": -6.09,
   "AMS-Index": 80
 },
 {
   "Date": "12/06/22 ",
   "AMS": -20.33,
   "VNIndex": -17.64,
   "compare": -2.69,
   "AMS-Index": 80
 },
 {
   "Date": "12/07/22 ",
   "AMS": -20.37,
   "VNIndex": -18.24,
   "compare": -2.13,
   "AMS-Index": 80
 },
 {
   "Date": "12/08/22 ",
   "AMS": -20.29,
   "VNIndex": -17.49,
   "compare": -2.79,
   "AMS-Index": 80
 },
 {
   "Date": "12/09/22 ",
   "AMS": -20.28,
   "VNIndex": -17.39,
   "compare": -2.88,
   "AMS-Index": 80
 },
 {
   "Date": "12/10/22 ",
   "AMS": -20.28,
   "VNIndex": -17.39,
   "compare": -2.88,
   "AMS-Index": 80
 },
 {
   "Date": "12/11/22 ",
   "AMS": -20.28,
   "VNIndex": -17.39,
   "compare": -2.88,
   "AMS-Index": 80
 },
 {
   "Date": "12/12/22 ",
   "AMS": -20.33,
   "VNIndex": -18.94,
   "compare": -1.38,
   "AMS-Index": 80
 },
 {
   "Date": "12/13/22 ",
   "AMS": -20.3,
   "VNIndex": -17.74,
   "compare": -2.56,
   "AMS-Index": 80
 },
 {
   "Date": "12/14/22 ",
   "AMS": -20.29,
   "VNIndex": -17.5,
   "compare": -2.79,
   "AMS-Index": 80
 },
 {
   "Date": "12/15/22 ",
   "AMS": -20.13,
   "VNIndex": -17.12,
   "compare": -3.01,
   "AMS-Index": 80
 },
 {
   "Date": "12/16/22 ",
   "AMS": -20.15,
   "VNIndex": -17.34,
   "compare": -2.8,
   "AMS-Index": 80
 },
 {
   "Date": "12/17/22 ",
   "AMS": -20.15,
   "VNIndex": -17.34,
   "compare": -2.8,
   "AMS-Index": 80
 },
 {
   "Date": "12/18/22 ",
   "AMS": -20.15,
   "VNIndex": -17.34,
   "compare": -2.8,
   "AMS-Index": 80
 },
 {
   "Date": "12/19/22 ",
   "AMS": -20.23,
   "VNIndex": -18.45,
   "compare": -1.79,
   "AMS-Index": 80
 },
 {
   "Date": "12/20/22 ",
   "AMS": -20.45,
   "VNIndex": -19.65,
   "compare": -0.81,
   "AMS-Index": 80
 },
 {
   "Date": "12/21/22 ",
   "AMS": -20.51,
   "VNIndex": -19.98,
   "compare": -0.53,
   "AMS-Index": 79
 },
 {
   "Date": "12/22/22 ",
   "AMS": -20.35,
   "VNIndex": -19.69,
   "compare": -0.66,
   "AMS-Index": 80
 },
 {
   "Date": "12/23/22 ",
   "AMS": -20.56,
   "VNIndex": -19.87,
   "compare": -0.69,
   "AMS-Index": 79
 },
 {
   "Date": "12/24/22 ",
   "AMS": -20.56,
   "VNIndex": -19.87,
   "compare": -0.69,
   "AMS-Index": 79
 },
 {
   "Date": "12/25/22 ",
   "AMS": -20.56,
   "VNIndex": -19.87,
   "compare": -0.69,
   "AMS-Index": 79
 },
 {
   "Date": "12/26/22 ",
   "AMS": -23.26,
   "VNIndex": -22.62,
   "compare": -0.63,
   "AMS-Index": 77
 },
 {
   "Date": "12/27/22 ",
   "AMS": -21.17,
   "VNIndex": -21.1,
   "compare": -0.07,
   "AMS-Index": 79
 },
 {
   "Date": "12/28/22 ",
   "AMS": -20.97,
   "VNIndex": -20.23,
   "compare": -0.74,
   "AMS-Index": 79
 },
 {
   "Date": "12/29/22 ",
   "AMS": -21.56,
   "VNIndex": -20.73,
   "compare": -0.83,
   "AMS-Index": 78
 },
 {
   "Date": "12/30/22 ",
   "AMS": -21.5,
   "VNIndex": -20.91,
   "compare": -0.6,
   "AMS-Index": 78
 },
 {
   "Date": "12/31/22 ",
   "AMS": -21.5,
   "VNIndex": -20.91,
   "compare": -0.6,
   "AMS-Index": 78
 },
 {
   "Date": "01/01/23 ",
   "AMS": -21.5,
   "VNIndex": -20.91,
   "compare": -0.6,
   "AMS-Index": 78
 },
 {
   "Date": "01/02/23 ",
   "AMS": -21.5,
   "VNIndex": -20.91,
   "compare": -0.6,
   "AMS-Index": 78
 },
 {
   "Date": "01/03/23 ",
   "AMS": -19.29,
   "VNIndex": -18.02,
   "compare": -1.27,
   "AMS-Index": 81
 },
 {
   "Date": "01/04/23 ",
   "AMS": -19.61,
   "VNIndex": -17.82,
   "compare": -1.79,
   "AMS-Index": 80
 },
 {
   "Date": "01/05/23 ",
   "AMS": -19.56,
   "VNIndex": -17.08,
   "compare": -2.48,
   "AMS-Index": 80
 },
 {
   "Date": "01/06/23 ",
   "AMS": -19.2,
   "VNIndex": -17.42,
   "compare": -1.78,
   "AMS-Index": 81
 },
 {
   "Date": "01/07/23 ",
   "AMS": -19.2,
   "VNIndex": -17.42,
   "compare": -1.78,
   "AMS-Index": 81
 },
 {
   "Date": "01/08/23 ",
   "AMS": -19.2,
   "VNIndex": -17.42,
   "compare": -1.78,
   "AMS-Index": 81
 },
 {
   "Date": "01/09/23 ",
   "AMS": -19.25,
   "VNIndex": -17.21,
   "compare": -2.05,
   "AMS-Index": 81
 },
 {
   "Date": "01/10/23 ",
   "AMS": -19,
   "VNIndex": -17.27,
   "compare": -1.73,
   "AMS-Index": 81
 },
 {
   "Date": "01/11/23 ",
   "AMS": -18.65,
   "VNIndex": -17.08,
   "compare": -1.57,
   "AMS-Index": 81
 },
 {
   "Date": "01/12/23 ",
   "AMS": -18.59,
   "VNIndex": -17.03,
   "compare": -1.55,
   "AMS-Index": 81
 },
 {
   "Date": "01/13/23 ",
   "AMS": -18.29,
   "VNIndex": -16.74,
   "compare": -1.55,
   "AMS-Index": 82
 },
 {
   "Date": "01/14/23 ",
   "AMS": -18.29,
   "VNIndex": -16.74,
   "compare": -1.55,
   "AMS-Index": 82
 },
 {
   "Date": "01/15/23 ",
   "AMS": -18.29,
   "VNIndex": -16.74,
   "compare": -1.55,
   "AMS-Index": 82
 },
 {
   "Date": "01/16/23 ",
   "AMS": -18.1,
   "VNIndex": -16.23,
   "compare": -1.87,
   "AMS-Index": 82
 },
 {
   "Date": "01/17/23 ",
   "AMS": -16.63,
   "VNIndex": -14.53,
   "compare": -2.1,
   "AMS-Index": 83
 },
 {
   "Date": "01/18/23 ",
   "AMS": -16.49,
   "VNIndex": -13.74,
   "compare": -2.75,
   "AMS-Index": 84
 },
 {
   "Date": "01/19/23 ",
   "AMS": -15.92,
   "VNIndex": -12.98,
   "compare": -2.94,
   "AMS-Index": 84
 },
 {
   "Date": "01/20/23 ",
   "AMS": -15.92,
   "VNIndex": -12.98,
   "compare": -2.94,
   "AMS-Index": 84
 },
 {
   "Date": "01/21/23 ",
   "AMS": -15.92,
   "VNIndex": -12.98,
   "compare": -2.94,
   "AMS-Index": 84
 },
 {
   "Date": "01/22/23 ",
   "AMS": -15.92,
   "VNIndex": -12.98,
   "compare": -2.94,
   "AMS-Index": 84
 },
 {
   "Date": "01/23/23 ",
   "AMS": -15.92,
   "VNIndex": -12.98,
   "compare": -2.94,
   "AMS-Index": 84
 },
 {
   "Date": "01/24/23 ",
   "AMS": -15.92,
   "VNIndex": -12.98,
   "compare": -2.94,
   "AMS-Index": 84
 },
 {
   "Date": "01/25/23 ",
   "AMS": -15.92,
   "VNIndex": -12.98,
   "compare": -2.94,
   "AMS-Index": 84
 },
 {
   "Date": "01/26/23 ",
   "AMS": -15.92,
   "VNIndex": -12.98,
   "compare": -2.94,
   "AMS-Index": 84
 },
 {
   "Date": "01/27/23 ",
   "AMS": -15.81,
   "VNIndex": -12.27,
   "compare": -3.54,
   "AMS-Index": 84
 },
 {
   "Date": "01/28/23 ",
   "AMS": -15.81,
   "VNIndex": -12.27,
   "compare": -3.54,
   "AMS-Index": 84
 },
 {
   "Date": "01/29/23 ",
   "AMS": -15.81,
   "VNIndex": -12.27,
   "compare": -3.54,
   "AMS-Index": 84
 },
 {
   "Date": "01/30/23 ",
   "AMS": -16.55,
   "VNIndex": -13.41,
   "compare": -3.14,
   "AMS-Index": 83
 },
 {
   "Date": "01/31/23 ",
   "AMS": -15.94,
   "VNIndex": -12.73,
   "compare": -3.21,
   "AMS-Index": 84
 },
 {
   "Date": "02/01/23 ",
   "AMS": -18.07,
   "VNIndex": -15.5,
   "compare": -2.58,
   "AMS-Index": 82
 },
 {
   "Date": "02/02/23 ",
   "AMS": -18.59,
   "VNIndex": -15.37,
   "compare": -3.22,
   "AMS-Index": 81
 },
 {
   "Date": "02/03/23 ",
   "AMS": -19.89,
   "VNIndex": -15.4,
   "compare": -4.48,
   "AMS-Index": 80
 },
 {
   "Date": "02/04/23 ",
   "AMS": -19.89,
   "VNIndex": -15.4,
   "compare": -4.48,
   "AMS-Index": 80
 },
 {
   "Date": "02/05/23 ",
   "AMS": -19.89,
   "VNIndex": -15.4,
   "compare": -4.48,
   "AMS-Index": 80
 },
 {
   "Date": "02/06/23 ",
   "AMS": -18.85,
   "VNIndex": -14.45,
   "compare": -4.4,
   "AMS-Index": 81
 },
 {
   "Date": "02/07/23 ",
   "AMS": -20.1,
   "VNIndex": -16.29,
   "compare": -3.81,
   "AMS-Index": 80
 },
 {
   "Date": "02/08/23 ",
   "AMS": -19.73,
   "VNIndex": -15.79,
   "compare": -3.94,
   "AMS-Index": 80
 },
 {
   "Date": "02/09/23 ",
   "AMS": -19.82,
   "VNIndex": -16.43,
   "compare": -3.38,
   "AMS-Index": 80
 },
 {
   "Date": "02/10/23 ",
   "AMS": -20.25,
   "VNIndex": -17.12,
   "compare": -3.13,
   "AMS-Index": 80
 },
 {
   "Date": "02/11/23 ",
   "AMS": -20.25,
   "VNIndex": -17.12,
   "compare": -3.13,
   "AMS-Index": 80
 },
 {
   "Date": "02/12/23 ",
   "AMS": -20.25,
   "VNIndex": -17.12,
   "compare": -3.13,
   "AMS-Index": 80
 },
 {
   "Date": "02/13/23 ",
   "AMS": -21.69,
   "VNIndex": -18.03,
   "compare": -3.66,
   "AMS-Index": 78
 },
 {
   "Date": "02/14/23 ",
   "AMS": -21.46,
   "VNIndex": -18.43,
   "compare": -3.03,
   "AMS-Index": 79
 },
 {
   "Date": "02/15/23 ",
   "AMS": -20.83,
   "VNIndex": -17.68,
   "compare": -3.15,
   "AMS-Index": 79
 },
 {
   "Date": "02/16/23 ",
   "AMS": -20.19,
   "VNIndex": -16.89,
   "compare": -3.31,
   "AMS-Index": 80
 },
 {
   "Date": "02/17/23 ",
   "AMS": -20.31,
   "VNIndex": -16.81,
   "compare": -3.51,
   "AMS-Index": 80
 },
 {
   "Date": "02/18/23 ",
   "AMS": -20.31,
   "VNIndex": -16.81,
   "compare": -3.51,
   "AMS-Index": 80
 },
 {
   "Date": "02/19/23 ",
   "AMS": -20.31,
   "VNIndex": -16.81,
   "compare": -3.51,
   "AMS-Index": 80
 },
 {
   "Date": "02/20/23 ",
   "AMS": -18.14,
   "VNIndex": -14.65,
   "compare": -3.48,
   "AMS-Index": 82
 },
 {
   "Date": "02/21/23 ",
   "AMS": -18.75,
   "VNIndex": -15.01,
   "compare": -3.75,
   "AMS-Index": 81
 },
 {
   "Date": "02/22/23 ",
   "AMS": -20.1,
   "VNIndex": -17.2,
   "compare": -2.9,
   "AMS-Index": 80
 },
 {
   "Date": "02/23/23 ",
   "AMS": -20.01,
   "VNIndex": -17.25,
   "compare": -2.76,
   "AMS-Index": 80
 },
 {
   "Date": "02/24/23 ",
   "AMS": -20.99,
   "VNIndex": -18.36,
   "compare": -2.63,
   "AMS-Index": 79
 },
 {
   "Date": "02/25/23 ",
   "AMS": -20.99,
   "VNIndex": -18.36,
   "compare": -2.63,
   "AMS-Index": 79
 },
 {
   "Date": "02/26/23 ",
   "AMS": -20.99,
   "VNIndex": -18.36,
   "compare": -2.63,
   "AMS-Index": 79
 },
 {
   "Date": "02/27/23 ",
   "AMS": -21.78,
   "VNIndex": -19.79,
   "compare": -1.98,
   "AMS-Index": 78
 },
 {
   "Date": "02/28/23 ",
   "AMS": -21.73,
   "VNIndex": -19.53,
   "compare": -2.21,
   "AMS-Index": 78
 },
 {
   "Date": "03/01/23 ",
   "AMS": -20.49,
   "VNIndex": -18.28,
   "compare": -2.21,
   "AMS-Index": 80
 },
 {
   "Date": "03/02/23 ",
   "AMS": -20.93,
   "VNIndex": -18.51,
   "compare": -2.42,
   "AMS-Index": 79
 },
 {
   "Date": "03/03/23 ",
   "AMS": -21.58,
   "VNIndex": -19.52,
   "compare": -2.06,
   "AMS-Index": 78
 },
 {
   "Date": "03/04/23 ",
   "AMS": -21.58,
   "VNIndex": -19.52,
   "compare": -2.06,
   "AMS-Index": 78
 },
 {
   "Date": "03/05/23 ",
   "AMS": -21.58,
   "VNIndex": -19.52,
   "compare": -2.06,
   "AMS-Index": 78
 },
 {
   "Date": "03/06/23 ",
   "AMS": -21.11,
   "VNIndex": -19.33,
   "compare": -1.78,
   "AMS-Index": 79
 },
 {
   "Date": "03/07/23 ",
   "AMS": -20.88,
   "VNIndex": -18.49,
   "compare": -2.39,
   "AMS-Index": 79
 },
 {
   "Date": "03/08/23 ",
   "AMS": -20.44,
   "VNIndex": -17.6,
   "compare": -2.84,
   "AMS-Index": 80
 },
 {
   "Date": "03/09/23 ",
   "AMS": -20.05,
   "VNIndex": -17.07,
   "compare": -2.99,
   "AMS-Index": 80
 },
 {
   "Date": "03/10/23 ",
   "AMS": -20.32,
   "VNIndex": -17.3,
   "compare": -3.02,
   "AMS-Index": 80
 },
 {
   "Date": "03/11/23 ",
   "AMS": -20.32,
   "VNIndex": -17.3,
   "compare": -3.02,
   "AMS-Index": 80
 },
 {
   "Date": "03/12/23 ",
   "AMS": -20.32,
   "VNIndex": -17.3,
   "compare": -3.02,
   "AMS-Index": 80
 },
 {
   "Date": "03/13/23 ",
   "AMS": -20.94,
   "VNIndex": -17.32,
   "compare": -3.62,
   "AMS-Index": 79
 },
 {
   "Date": "03/14/23 ",
   "AMS": -21.45,
   "VNIndex": -18.31,
   "compare": -3.14,
   "AMS-Index": 79
 },
 {
   "Date": "03/15/23 ",
   "AMS": -19.98,
   "VNIndex": -16.58,
   "compare": -3.4,
   "AMS-Index": 80
 },
 {
   "Date": "03/16/23 ",
   "AMS": -20.76,
   "VNIndex": -17.74,
   "compare": -3.02,
   "AMS-Index": 79
 },
 {
   "Date": "03/17/23 ",
   "AMS": -20.51,
   "VNIndex": -17.92,
   "compare": -2.6,
   "AMS-Index": 79
 },
 {
   "Date": "03/18/23 ",
   "AMS": -20.51,
   "VNIndex": -17.92,
   "compare": -2.6,
   "AMS-Index": 79
 },
 {
   "Date": "03/19/23 ",
   "AMS": -20.51,
   "VNIndex": -17.92,
   "compare": -2.6,
   "AMS-Index": 79
 },
 {
   "Date": "03/20/23 ",
   "AMS": -21.21,
   "VNIndex": -19.65,
   "compare": -1.57,
   "AMS-Index": 79
 },
 {
   "Date": "03/21/23 ",
   "AMS": -20.98,
   "VNIndex": -18.92,
   "compare": -2.06,
   "AMS-Index": 79
 },
 {
   "Date": "03/22/23 ",
   "AMS": -20.85,
   "VNIndex": -18.28,
   "compare": -2.57,
   "AMS-Index": 79
 },
 {
   "Date": "03/23/23 ",
   "AMS": -20.46,
   "VNIndex": -17.92,
   "compare": -2.54,
   "AMS-Index": 80
 },
 {
   "Date": "03/24/23 ",
   "AMS": -20.21,
   "VNIndex": -17.79,
   "compare": -2.42,
   "AMS-Index": 80
 },
 {
   "Date": "03/25/23 ",
   "AMS": -20.21,
   "VNIndex": -17.79,
   "compare": -2.42,
   "AMS-Index": 80
 },
 {
   "Date": "03/26/23 ",
   "AMS": -20.21,
   "VNIndex": -17.79,
   "compare": -2.42,
   "AMS-Index": 80
 },
 {
   "Date": "03/27/23 ",
   "AMS": -19.97,
   "VNIndex": -17.36,
   "compare": -2.61,
   "AMS-Index": 80
 },
 {
   "Date": "03/28/23 ",
   "AMS": -19.84,
   "VNIndex": -17.2,
   "compare": -2.64,
   "AMS-Index": 80
 }
];
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
// const vnpercent = [];
// const start = vnnidex[0].y;
// for (let i = 0; i < vnnidex.length; i++) {
//   var node = vnnidex[i];
//   node.y = Math.round((node.y / start - 1) * 10000) / 100;
//   vnpercent.push(node);
// }
var data_ams = [];
var data_vnindex = [];
var data_compare = [];
var data_amsindex = [];
var x_axis=[];
for(let i=0;i<rawdata.length;i++){
  x_axis.push(rawdata[i].Date);
  data_ams.push(rawdata[i].AMS);
  data_vnindex.push(rawdata[i].VNIndex);
  data_compare.push(rawdata[i].compare);
  data_amsindex.push(rawdata[i]['AMS-Index']);
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
      series: [{
            name: "ams",
            type: 'line',
            data: data_ams
          },
          {
            name: "vnindex",
            type: 'line',
            data: data_vnindex
          },
          {
            name: 'compare',
            type: 'area',
            data: data_compare
          }
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
        colors:['#4472C4', '#ED7D31', '#A5A5A5'],
        labels:{
          rotate: -90,
          rotateAlways:true,
          hideOverlappingLabels:true,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1, 1],
          curve: 'straight',
          // dashArray: [0, 8, 5]
        },
        title: {
          text: "Thay đổi VNINDEX",
          align: "center",
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        grid: {
          row: {
            colors: ["#f4f4f4", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
            strokeDashArray: 20
          },
        },
        xaxis: {
          type:"category",
          categories: x_axis,
          tickPlacement: 'on',
          tickAmount: 19,
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (%)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " (%)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " (%)";
                }
              }
            }
          ]
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
