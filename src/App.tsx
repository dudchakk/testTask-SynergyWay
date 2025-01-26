import { useState, useEffect } from 'react';
import { Mosaic, MosaicWindow, MosaicNode } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';

import { useMediaQuery } from 'usehooks-ts';
import { Maximize2 } from 'lucide-react';
import CompanyInfoWidget from './components/CompanyInfoWidget';

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const desktopLayout: MosaicNode<string> = {
    direction: 'row',
    first: '0',
    second: {
      direction: 'column',
      first: '1',
      second: '2',
    },
    splitPercentage: 35,
  };

  const mobileLayout: MosaicNode<string> = {
    direction: 'column',
    first: '0',
    second: {
      direction: 'column',
      first: '1',
      second: '2',
    },
    splitPercentage: 33,
  };

  const [layout, setLayout] = useState<MosaicNode<string>>(desktopLayout);

  useEffect(() => {
    setLayout(isMobile ? mobileLayout : desktopLayout);
  }, [isMobile]);

  const handleMaximize = (id: string) => {
    setLayout(id);
  };

  const createToolbarControls = (id: string) => [
    <button
      key="maximize"
      className="text-gray-600 hover:text-gray-800 p-1"
      onClick={() => handleMaximize(id)}
      title="Maximize"
    >
      <Maximize2 size={16} />
    </button>,
  ];

  return (
    <div className="h-[100vh]">
      <Mosaic<string>
        renderTile={(id, path) => (
          <MosaicWindow<string>
            path={path}
            title="Company Info"
            toolbarControls={createToolbarControls(id)}
          >
            <div className="@container">
              <CompanyInfoWidget companyId={Number(id)} />
            </div>
          </MosaicWindow>
        )}
        value={layout}
        onChange={(newLayout) => setLayout(newLayout as MosaicNode<string>)}
      />
    </div>
  );
}

export default App;
