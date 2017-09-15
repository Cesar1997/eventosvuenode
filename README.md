# eventosvuenode
Requisitos :
1. Tener instalado MongoDB
2. Tener instalado Node js

-> se requiere tener una base de datos llamada <strong>eventoapp</strong><br>
-> se requiere configurar la API_KEY en el archivo <code>/public/assets/js/index.js</code><br>
<code>
Vue.use(VueGoogleMaps, { <br>
     &nbsp;&nbsp;  load: { <br>
       &nbsp;&nbsp;&nbsp;&nbsp; key:  'API_KEY' //NECESITA UNA API KEY DE GOOGLE MAPS <br>
     &nbsp;&nbsp; }<br>
})</code>
<br><br>
//para mas información sobre la API_KEY https://developers.google.com/maps/documentation/javascript/tutorial?authuser=1&hl=es-419

<-------------------- ¡POR ULTIMO! ----------------><br>
<strong>->npm start </strong>
