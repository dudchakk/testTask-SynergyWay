import { MosaicNode } from 'react-mosaic-component'

export const desktopLayout: MosaicNode<string> = {
  direction: 'row',
  first: '0',
  second: {
    direction: 'column',
    first: '1',
    second: '2',
  },
  splitPercentage: 35,
}

export const mobileLayout: MosaicNode<string> = {
  direction: 'column',
  first: '0',
  second: {
    direction: 'column',
    first: '1',
    second: '2',
  },
  splitPercentage: 33,
}

export const initialSelectedCompanies = {
  '0': 'com_NX6GzO',
  '1': 'com_agj00z',
  '2': 'com_0XLDdX',
}
