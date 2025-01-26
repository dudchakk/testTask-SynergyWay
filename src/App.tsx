import { useState, useEffect } from 'react'
import { Mosaic, MosaicWindow, MosaicNode } from 'react-mosaic-component'
import 'react-mosaic-component/react-mosaic-component.css'

import { useMediaQuery } from 'usehooks-ts'
import { Maximize2 } from 'lucide-react'
import CompanyInfoWidget from './components/CompanyInfoWidget'
import { desktopLayout, mobileLayout, companyNamesMapped } from './constants'

function App() {
  const [layout, setLayout] = useState<MosaicNode<string>>(desktopLayout)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [selectedCompanies, setSelectedCompanies] = useState<
    Record<string, number>
  >({})

  useEffect(() => {
    if (typeof layout !== 'string') {
      setLayout(isMobile ? mobileLayout : desktopLayout)
    }
  }, [isMobile])

  const handleMaximize = (id: string) => {
    setLayout(id)
  }

  const createToolbarControls = (id: string) => [
    <select
      key='dropdown'
      className='text-sm text-gray-600 p-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 w-32 mr-2'
      value={selectedCompanies[id] ?? Number(id)}
      onChange={(e) =>
        setSelectedCompanies((prev) => ({
          ...prev,
          [id]: Number(e.target.value),
        }))
      }
    >
      {companyNamesMapped.map((company) => (
        <option
          key={company.index}
          value={company.index}
          className='whitespace-normal break-words'
        >
          {company.name}
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
            <CompanyInfoWidget
              companyId={
                selectedCompanies[id] !== undefined
                  ? selectedCompanies[id]
                  : Number(id)
              }
            />
          </MosaicWindow>
        )}
        value={layout}
        onChange={(newLayout) => setLayout(newLayout as MosaicNode<string>)}
      />
    </div>
  )
}

export default App
