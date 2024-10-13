var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tenby2_1 = new ol.format.GeoJSON();
var features_Tenby2_1 = format_Tenby2_1.readFeatures(json_Tenby2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tenby2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tenby2_1.addFeatures(features_Tenby2_1);
var lyr_Tenby2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tenby2_1, 
                style: style_Tenby2_1,
                popuplayertitle: "Tenby2",
                interactive: true,
                title: '<img src="styles/legend/Tenby2_1.png" /> Tenby2'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Tenby2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Tenby2_1];
lyr_Tenby2_1.set('fieldAliases', {'id': 'id', });
lyr_Tenby2_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Tenby2_1.set('fieldLabels', {'id': 'no label', });
lyr_Tenby2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});