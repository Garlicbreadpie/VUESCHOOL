import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'AreaChart';

export const data = [
  ['Year', 'Sales', 'Expenses'],
  ['2013', 1000, 400],
  ['2014', 1170, 460],
  ['2015', 660, 1120],
  ['2016', 1030, 540],
];

export const options = {
  title: 'Geboekte winsten',
  hAxis: { title: 'Jaar', titleTextStyle: { color: '#333' } },
  vAxis: { minValue: 0 },
  chartArea: { width: '50%', height: '70%' },
  width: 300,
  height: 200,

};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  },
});
