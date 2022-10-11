<script lang="ts">
  import { LngLat, Map, Marker, Popup } from "mapbox-gl";

  let mapElement: HTMLDivElement;
  let map: Map;
  let lngLat: LngLat;
  const puntoMedico = new LngLat(-86.5675357232127, 14.031193930218492);
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      lngLat = new LngLat(longitude, latitude);
    },
    (err) => console.error({ err })
  );
  $: if (mapElement != undefined && lngLat != undefined) {
    console.log({ mapElement, lngLat });
    map = new Map({
      container: mapElement, // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: puntoMedico, // starting position [lng, lat]
      zoom: 14, // starting zoom
      // projection: { name: "globe" }, // display the map as a 3D globe
    });
    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });
    const marker = new Marker();
    marker.setLngLat(lngLat);
    marker.addTo(map);
    const marker2 = new Marker({ color: "blue" });
    const popup = new Popup({ closeButton: true });
    popup.setHTML(`<h1 style="color:black;">Clinicas Punto Medico </h1>`);
    marker2.setLngLat(puntoMedico);
    marker2.setPopup(popup);
    marker2.addTo(map);
  }
  function goto({ position, zoom = 9 }: { position: LngLat; zoom?: number }) {
    if (map == undefined) {
      return;
    }
    map.flyTo({ zoom, center: position });
  }
</script>

<main>
  <h1>Clinicas Punto Medico</h1>
  <p>Danli, El Paraiso, Honduras</p>
  <div bind:this={mapElement} class="mapa" />
  <div class="row m-2">
    <button on:click={() => goto({ position: lngLat })}>Mi ubicacion</button>
    <button on:click={() => goto({ position: puntoMedico, zoom: 14 })}
      >Ubicacion de PuntoMedico</button
    >
  </div>
  <div class="grid">
    {#each Array(3) as e, i}
      <img src={`puntomedico${i + 1}.png`} alt={"puntomedico"} />
    {/each}
  </div>
</main>

<style>
  .m-2 {
    margin: 2rem;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .mapa {
    width: 90vw;
    height: 50vw;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  button {
    display: block;
    margin: 0 1rem;
  }
</style>

