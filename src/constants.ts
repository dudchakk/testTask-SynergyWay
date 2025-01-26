import { MosaicNode } from 'react-mosaic-component'
import companies from '../companies-lookup.json'

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

export const companyNamesMapped = companies.map((company, index) => {
  return { name: company.name, index: index }
})
