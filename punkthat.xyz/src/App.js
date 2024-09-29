import './App.css';
import Window from './Window';
import Header from './Header';
import investments from './investments.png'
import metalsimage from './metals.png'
import metalsvideo from './metalsvideo.mp4'
import beogradimage from './beogradgrafik.png'
import drawingapp from './drawingapp.mp4'
import digitalposter from './digitalposter.png'
import beogradvideo from './beogradvideo.mp4'
import awfulplayer from './awfulplayer.mp4'
import artmercial from './artmercial.png'



function App() {
  return (
    <div className="App">
      <Header />

      <div className="avatar">
        <a href="https://t.me/polinakrasn" target="_blank" rel="noopener noreferrer"> </a>
      </div>

      <Window 
        title="metals"
        category="product"
        content={{ type: 'image', src: metalsimage }}
        width={440}
        top={750}
        right={350}
      />
      <Window 
        title="metals"
        category="product"
        content={{ type: 'video', src: metalsvideo }}
        width={220}
        top={680}
        right={160}
      />
      <Window 
        title="drawing_app"
        category="reactJS"
        content={{ type: 'video', src: drawingapp }}
        width={360}
        top={630}
        right={1050}
      />
      <Window 
        title="beograd_grafik"
        category="font"
        content={{ type: 'video', src: beogradvideo }}
        width={240}
        top={770}
        right={810}
      />
      <Window
        title="awful_player"
        category="vanillaJS"
        content={{ type: 'video', src: awfulplayer }}
        width={360}
        top={130}
        right={560} 
      />
      <Window
        title="beograd_grafik"
        category="font"
        content={{ type: 'image', src: beogradimage }}
        width={240}
        top={60}
        right={290}
      />
      <Window 
        title="digital_poster"
        category="3D"
        content={{ type: 'image', src: digitalposter }}
        width={240}
        top={420}
        right={320}
      />
      <Window 
        title="alfa_x_sheloch"
        category="print"
        content={{ type: 'image', src: artmercial }}
        width={240}
        top={300}
        right={40}
      />
      <Window 
        title="alfa_investments_redesign"
        category="product"
        content={{ type: 'image', src: investments }}
        width={440}
        top={370}
        right={620}
      />
  

      <p className='Disclaimer'>I design things. This is a <s>trash</s>board for all the things I’ve recently designed.</p>

    </div>

  );
}

export default App;
