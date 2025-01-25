import { Mosaic, MosaicWindow, MosaicNode } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import CompanyInfoWidget from './components/CompanyInfoWidget';
import { X, Maximize2 } from 'lucide-react';
import { useState } from 'react';

function App() {
  const initialLayout: MosaicNode<string> = {
    direction: 'row',
    first: '0',
    second: {
      direction: 'column',
      first: '1',
      second: '2',
    },
    splitPercentage: 35,
  };

  const [layout, setLayout] = useState<MosaicNode<string>>(initialLayout);

  const handleMaximize = (id: string) => {
    setLayout(id);
  };

  const handleClose = (id: string) => {
    const removeTile = (layout: MosaicNode<string>, tileId: string): MosaicNode<string> => {
      // Якщо first або second — це об'єкти MosaicNode, ми видаляємо їх
      if (typeof layout !== 'string') {
        if (layout.first === tileId) {
          return layout.second;
        }
        if (layout.second === tileId) {
          return layout.first;
        }

        if (typeof layout.first === 'object') {
          layout.first = removeTile(layout.first, tileId);
        }
        if (typeof layout.second === 'object') {
          layout.second = removeTile(layout.second, tileId);
        }
      }
      return layout;
    };

    setLayout(removeTile(layout, id));
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
    <button
      key="close"
      className="text-gray-600 hover:text-gray-800 p-1"
      onClick={() => handleClose(id)}
      title="Close"
    >
      <X size={16} />
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
