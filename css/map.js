function initialize() {

        var styles = [
                      {
                          featureType: 'water',
                          elementType: 'geometry.fill',
                          stylers: [
                                      { color: '#DDD' }
                                   ]
                      },
                      {
                          featureType: 'landscape.natural',
                          elementType: 'all',
                          stylers: [
                                      { hue: '#FFF' },
                                      { lightness: -20 }
                                   ]
                      }
                    ];

        var options = {
                          mapTypeControlOptions: {
                          mapTypeIds: ['Styled']
                      },
                          center: new google.maps.LatLng(41.8786805, -87.6364067),
                          zoom: 12,
                          disableDefaultUI: true,
                          scrollwheel: false,
                          navigationControl: false,
                          mapTypeControl: false,
                          scaleControl: false,
                          draggable: false,
                          mapTypeId: 'Styled'
                      };

        var div = document.getElementById('where');
        var map = new google.maps.Map(div, options);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);
      };

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
};

window.onload = loadScript;
