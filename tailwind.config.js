module.exports = {
	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
		},


		fontFamily: {
			'display': 'Museo Slab, serif',
			'body': ['"Libre Franklin"', 'sans-serif'],
		},
		boxShadow: {
			default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
			md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
			lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
			xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
			inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
			outline: '0 0 0 3px rgba(96,171,210,0.5)',
			focus: '0 0 0 3px rgba(96,171,210,0.5)',
			menu:'10px 6px 16px -2px  rgba(0, 0, 0, .06), 4px 4px 10px -2px  rgba(0, 0, 0, .06)',
			'none': 'none',
		},
		extend: {
			colors: {
				red: {
					'100': '#f7e5e5',
					'200': '#efcccc',
					'300': '#e7b2b2',
					'400': '#df9999',
					'500': '#d87f7f',
					'600': '#d06666',
					'700': '#c84c4c',
					'800': '#c03232',
					'900': '#b10000',
				},
				brown: {
					'100': '#EEECEA',
					'200': '#bfb9b6',
					'300': '#aaa29e',
					'400': '#958b86',
					'500': '#80746e',
					'600': '#6b5d56',
					'700': '#56463e',
					'800': '#412f26',
					'900': '#2c180e',
				},
				gray: {
					'100': '#F8F8F8',
					'200': '#D5D5D3',
					'300': '#B4B3B0',
					'400': '#93908D',
					'500': '#726E6B',
					'600': '#5E5B57',
					'700': '#4B4845',
					'800': '#373533',
					'900': '#242322',
				},
				orange: {
					'100': '#FFca5d',
					'200': '#ffc152',
					'300': '#ffb848',
					'400': '#ffaf3e',
					'500': '#ffa534',
					'600': '#ff9c2a',
					'700': '#ff931f',
					'800': '#ff8a15',
					'900': '#ff810b',
				},
				green: {
					'100': '#cde499',
					'200': '#bed78b',
					'300': '#b0c97d',
					'400': '#a1bb70',
					'500': '#92ad62',
					'600': '#84a054',
					'700': '#759246',
					'800': '#678538',
					'900': '#58772a',
				},
				blue: {
					'100': '#cfdce2',
					'200': '#b7cad3',
					'300': '#9fb9c5',
					'400': '#87a7b7',
					'500': '#6f96a8',
					'600': '#57849a',
					'700': '#3e728b',
					'800': '#26617d',
					'900': '#0F506F',
				},
				yellow: {
					'100': '#FFF7E4',
					'200': '#F9E7B9',
					'300': '#F4D88F',
					'400': '#EFC965',
					'500': '#E9B949',
					'600': '#CBA030',
					'700': '#AC8724',
					'800': '#8D6D18',
					'900': '#6E5416',
				},
				milky: {
					'100': '#fcfbf9',
					'200': '#fbf9f6',
					'300': '#faf7f3',
					'400': '#f9f6f0',
					'500': '#f7f4ed',
					'600': '#f6f2ea',
					'700': '#f5f0e7',
					'800': '#f4eee4',
					'900': '#f3ede2',

				}
			}
		}
	},
	variants: {},
	plugins: []
}
