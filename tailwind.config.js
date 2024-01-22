/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        btn: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      colors: {
        primary: '#175CD3',
        'blue-100': '#D1E9FF',
        'grey-50': '#F9FAFB',
        'grey-100': '#f2f4f7',
        'grey-200': '#EAECF0',
        'grey-300': '#D0D5DD',
        'grey-400': '#98A2B3',
        'grey-500': '#667085',
        'grey-600': '#475467',
        'grey-700': '#344054',
        'grey-800': '#1D2939',
        'grey-900': '#101828',
      },
    },
  },
  plugins: [],
}
