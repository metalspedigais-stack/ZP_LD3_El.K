var wms_layers = [];

var format_funkcionalais_zonejums_0 = new ol.format.GeoJSON();
var features_funkcionalais_zonejums_0 = format_funkcionalais_zonejums_0.readFeatures(json_funkcionalais_zonejums_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_funkcionalais_zonejums_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_funkcionalais_zonejums_0.addFeatures(features_funkcionalais_zonejums_0);
var lyr_funkcionalais_zonejums_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_funkcionalais_zonejums_0, 
                style: style_funkcionalais_zonejums_0,
                popuplayertitle: 'funkcionalais_zonejums',
                interactive: true,
    title: 'funkcionalais_zonejums<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_0.png" /> 1010100<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_1.png" /> 1010101<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_2.png" /> 1010200<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_3.png" /> 1010300<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_4.png" /> 1010301<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_5.png" /> 1010302<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_6.png" /> 1010400<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_7.png" /> 1010401<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_8.png" /> 1010402<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_9.png" /> 1010403<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_10.png" /> 1010404<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_11.png" /> 1010500<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_12.png" /> 1010501<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_13.png" /> 1010600<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_14.png" /> 1010700<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_15.png" /> 1010800<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_16.png" /> 1010900<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_17.png" /> 1010901<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_18.png" /> 1010902<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_19.png" /> 1010903<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_20.png" /> 1011000<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_21.png" /> 1011200<br />\
    <img src="styles/legend/funkcionalais_zonejums_0_22.png" /> <br />' });

lyr_funkcionalais_zonejums_0.setVisible(true);
var layersList = [lyr_funkcionalais_zonejums_0];
lyr_funkcionalais_zonejums_0.set('fieldAliases', {'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'kods': 'kods', 'nosaukums': 'nosaukums', 'area': 'area', 'perimeter': 'perimeter', });
lyr_funkcionalais_zonejums_0.set('fieldImages', {'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'kods': 'TextEdit', 'nosaukums': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_funkcionalais_zonejums_0.set('fieldLabels', {'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'kods': 'no label', 'nosaukums': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_funkcionalais_zonejums_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});