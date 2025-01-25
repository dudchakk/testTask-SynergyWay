import { Mosaic, MosaicDirection, MosaicWindow } from 'react-mosaic-component'
import 'react-mosaic-component/react-mosaic-component.css'

function App() {
  const isMobile = window.matchMedia('(max-width: 767px)')

  const initialLayout = {
    direction: 'row' as MosaicDirection,
    first: 'leftPane',
    second: {
      direction: 'column' as MosaicDirection,
      first: 'topRightPane',
      second: 'bottomRightPane',
    },
    splitPercentage: 35,
  }

  return (
    <div className='h-[100vh]'>
      <Mosaic
        renderTile={(id, path) => (
          <MosaicWindow
            path={path}
            title='Company Info'
            // toolbarControls={
            //   <div className="bg-gray-800 text-white text-lg font-semibold p-2 rounded-t">
            //     Company Info
            //   </div>
            // }
            // className="bg-white shadow-lg border rounded-lg overflow-hidden"
          >
            <div className='@container'>
              <p className='@md:text-[10px]'>
                {String(isMobile.matches)}
                              </p>
            </div>{' '}
          </MosaicWindow>
        )}
        initialValue={initialLayout}
      />
    </div>
  )
}

export default App
