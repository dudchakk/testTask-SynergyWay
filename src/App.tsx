import { useState, useEffect } from 'react'
import { Mosaic, MosaicWindow, MosaicNode } from 'react-mosaic-component'
import 'react-mosaic-component/react-mosaic-component.css'

import { useMediaQuery } from 'usehooks-ts'
import { Maximize2 } from 'lucide-react'
import CompanyInfoWidget from './components/CompanyInfoWidget'
import {
  desktopLayout,
  mobileLayout,
  initialSelectedCompanies,
} from './constants'
import { CompanyInfo, CompanyTickers, SelectedCompanies } from './types'

function App() {
  const [layout, setLayout] = useState<MosaicNode<string>>(desktopLayout)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [companyTickers, setCompanyTickers] = useState<CompanyTickers>([])
  const [selectedCompanies, setSelectedCompanies] = useState<SelectedCompanies>(
    initialSelectedCompanies
  )

  useEffect(() => {
    if (typeof layout !== 'string') {
      setLayout(isMobile ? mobileLayout : desktopLayout)
    }
  }, [isMobile])

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await fetch(`http://localhost:5000/companies`)
      const data = await response.json()
      setCompanyTickers(
        data.map((company: CompanyInfo) => {
          return { ticker: company.ticker, id: company.id }
        })
      )
    }
    fetchCompanies()
  }, [])

  const handleMaximize = (id: string) => {
    setLayout(id)
  }

  const createToolbarControls = (id: string) => [
    <select
      key='dropdown'
      className='text-sm text-gray-600 my-0.5 px-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 mr-2'
      value={selectedCompanies[id]}
      onChange={(e) =>
        setSelectedCompanies((prev) => ({
          ...prev,
          [id]: e.target.value,
        }))
      }
    >
      {companyTickers.map((company) => (
        <option
          key={company.id}
          value={company.id}
          className='whitespace-normal'
        >
          {company.ticker}
        </option>
      ))}
    </select>,
    <button
      key='maximize'
      className='text-gray-600 hover:text-gray-800 p-1'
      onClick={() => handleMaximize(id)}
      title='Maximize'
    >
      <Maximize2 size={16} />
    </button>,
  ]

  return (
    <div className='h-[100vh]'>
      <Mosaic<string>
        renderTile={(id, path) => (
          <MosaicWindow<string>
            path={path}
            title='Company Info'
            toolbarControls={createToolbarControls(id)}
          >
            <CompanyInfoWidget companyId={selectedCompanies[id]} />
          </MosaicWindow>
        )}
        value={layout}
        onChange={(newLayout) => setLayout(newLayout as MosaicNode<string>)}
      />
    </div>
  )
}

export default App
