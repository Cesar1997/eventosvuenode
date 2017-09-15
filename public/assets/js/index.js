const socket = io.connect('http://localhost:8080');
Vue.use(VueGoogleMaps, {
      load: {
        key:  'API_KEY' //NECESITA UNA API KEY DE GOOGLE MAPS
      }
})
let vue = new Vue({
    el : '#root',
    data :  {
        title : 'Mapa desarrollado con Vue.js Front-end y Express + socket.io Back-end',
        zoom : 7,
        centermap: {lat: 14.96004298305117, lng: -90.4229736328125},
        markers : [
                {name:"Ejemplo1",lat: 14.96004298305117, lng: -90.4229736328125},
                {name:"Ejemplo2",lat:14.518450612659096,lng :-89.725341796875}
            ]
    },
    created : function(){
        let vm = this;
        axios.get("http://localhost:8080/web/evento")
        .then(function(response){
            let resp = response.data.records;
            resp.forEach(data => {
                vm.markers.push({name:data.name,lat:parseFloat(data.latitude),lng:parseFloat(data.longitude)});
            })
        })
        .catch(function(err){
            console.log(err);
        })
    },
    methods : {
        clickAddMarker(e){
            axios.post("http://localhost:8080/web/evento",{
                name : "Prueba",
                description : "Es una prueba mas",
                latitude : e.latLng.lat(),
                longitude : e.latLng.lng()
            })
            .then(function(response){
                socket.emit("news",response.data.records);
            })
        },
        clickMarker : function(e){
            console.log(e)
        }
    },
    
})

socket.on('newevent', function (data) {
    console.log(data);
    titulo = data.name;
    opciones = {
        icon : "assets/images/logo.png",
        body : data.description
    }
    if (Notification.permission === "granted") {
        var notification = new Notification(titulo,opciones);
    }

    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            var notification = new Notification(titulo,opciones);
        }
        });
    }
    vue.markers.push({name:data.name,lat:parseFloat(data.latitude),lng: parseFloat(data.longitude)})
});

