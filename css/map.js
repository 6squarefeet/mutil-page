window.onload = function () {

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
                        mapTypeId: 'Styled'
          };

        var div = document.getElementById('where');
        var map = new google.maps.Map(div, options);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);
      };
