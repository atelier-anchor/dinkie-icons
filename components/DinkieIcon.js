import { defineComponent, h } from 'vue';
import icons from '../data/icons.min.json';

const iconSizes = {
  xs: 1,
  sm: 1.5,
  base: 2,
  lg: 3,
  xl: 4,
  '2xl': 5,
  '3xl': 6,
  '4xl': 8,
  '5xl': 10,
};

export default defineComponent({
  name: 'DinkieIcon',

  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'base',
    },
  },

  setup(props) {
    const icon = icons[props.icon];
    const size = icon.size * iconSizes[props.size];
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          height: size,
          width: size,
          viewBox: `0 0 ${icon.size} ${icon.size}`,
          fill: 'currentColor',
          class: 'dk-' + props.icon,
        },
        [h('path', { d: icon.path })]
      );
  },
});
