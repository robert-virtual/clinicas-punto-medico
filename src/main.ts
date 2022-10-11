import './app.css'
import App from './App.svelte'
import mapbox from 'mapbox-gl'
mapbox.accessToken = 'pk.eyJ1Ijoicm9iZXJ0Y2FzdDEyIiwiYSI6ImNremp5ZHdmNTF5OG8ybm9iZ2E1bGFhODAifQ.4gKPVXpglB0fZOIE7YEI1A'
// import 'mapbox-gl/dist/mapbox-gl.css';

const app = new App({
  target: document.getElementById('app')
})

export default app
