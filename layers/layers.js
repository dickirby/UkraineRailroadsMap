var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenRailWayMapStandard_1 = new ol.layer.Tile({
            'title': 'OpenRailWayMap - Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png'
            })
        });
var format_ukrRailway_2 = new ol.format.GeoJSON();
var features_ukrRailway_2 = format_ukrRailway_2.readFeatures(json_ukrRailway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ukrRailway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ukrRailway_2.addFeatures(features_ukrRailway_2);
var lyr_ukrRailway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ukrRailway_2, 
                style: style_ukrRailway_2,
                popuplayertitle: "ukrRailway",
                interactive: false,
                title: '<img src="styles/legend/ukrRailway_2.png" /> ukrRailway'
            });
var format_CoordinatesUkraine_3 = new ol.format.GeoJSON();
var features_CoordinatesUkraine_3 = format_CoordinatesUkraine_3.readFeatures(json_CoordinatesUkraine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinatesUkraine_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinatesUkraine_3.addFeatures(features_CoordinatesUkraine_3);
var lyr_CoordinatesUkraine_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoordinatesUkraine_3, 
                style: style_CoordinatesUkraine_3,
                popuplayertitle: "CoordinatesUkraine",
                interactive: true,
                title: '<img src="styles/legend/CoordinatesUkraine_3.png" /> CoordinatesUkraine'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OpenRailWayMapStandard_1.setVisible(true);lyr_ukrRailway_2.setVisible(true);lyr_CoordinatesUkraine_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenRailWayMapStandard_1,lyr_ukrRailway_2,lyr_CoordinatesUkraine_3];
lyr_ukrRailway_2.set('fieldAliases', {'name': 'name', 'name:en': 'name:en', 'railway': 'railway', 'ele': 'ele', 'operator:type': 'operator:type', 'layer': 'layer', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'source': 'source', 'name:uk': 'name:uk', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_CoordinatesUkraine_3.set('fieldAliases', {'fid': 'fid', 'country_id': 'country_id', 'dict_country_id': 'dict_country_id', 'country_name': 'country_name', 'railway_id': 'railway_id', 'code': 'code', 'railway_name': 'railway_name', 'railway_full_name': 'railway_full_name', 'station_code': 'station_code', 'station_code6': 'station_code6', 'station_name': 'station_name', 'station_node': 'station_node', 'node_name': 'node_name', 'Y': 'Y', 'X': 'X', });
lyr_ukrRailway_2.set('fieldImages', {'name': '', 'name:en': '', 'railway': '', 'ele': '', 'operator:type': '', 'layer': '', 'addr:full': '', 'addr:city': '', 'source': '', 'name:uk': '', 'osm_id': '', 'osm_type': '', });
lyr_CoordinatesUkraine_3.set('fieldImages', {'fid': 'TextEdit', 'country_id': 'Range', 'dict_country_id': 'Range', 'country_name': 'TextEdit', 'railway_id': 'Range', 'code': 'Range', 'railway_name': 'TextEdit', 'railway_full_name': 'TextEdit', 'station_code': 'Range', 'station_code6': 'Range', 'station_name': 'TextEdit', 'station_node': 'Range', 'node_name': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_ukrRailway_2.set('fieldLabels', {'name': 'no label', 'name:en': 'no label', 'railway': 'no label', 'ele': 'no label', 'operator:type': 'no label', 'layer': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'source': 'no label', 'name:uk': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_CoordinatesUkraine_3.set('fieldLabels', {'fid': 'hidden field', 'country_id': 'hidden field', 'dict_country_id': 'hidden field', 'country_name': 'hidden field', 'railway_id': 'hidden field', 'code': 'hidden field', 'railway_name': 'header label - visible with data', 'railway_full_name': 'hidden field', 'station_code': 'header label - visible with data', 'station_code6': 'hidden field', 'station_name': 'header label - visible with data', 'station_node': 'hidden field', 'node_name': 'hidden field', 'Y': 'inline label - always visible', 'X': 'inline label - always visible', });
lyr_CoordinatesUkraine_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});