ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([111.405611, -7.169134, 112.374810, -6.704276]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASADMINISTRASIKECAMATAN_1 = new ol.format.GeoJSON();
var features_BATASADMINISTRASIKECAMATAN_1 = format_BATASADMINISTRASIKECAMATAN_1.readFeatures(json_BATASADMINISTRASIKECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BATASADMINISTRASIKECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASADMINISTRASIKECAMATAN_1.addFeatures(features_BATASADMINISTRASIKECAMATAN_1);
var lyr_BATASADMINISTRASIKECAMATAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASADMINISTRASIKECAMATAN_1, 
                style: style_BATASADMINISTRASIKECAMATAN_1,
                popuplayertitle: 'BATAS ADMINISTRASI KECAMATAN',
                interactive: false,
                title: '<img src="styles/legend/BATASADMINISTRASIKECAMATAN_1.png" /> BATAS ADMINISTRASI KECAMATAN'
            });
var format_INFORMASISEKOLAH_2 = new ol.format.GeoJSON();
var features_INFORMASISEKOLAH_2 = format_INFORMASISEKOLAH_2.readFeatures(json_INFORMASISEKOLAH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_INFORMASISEKOLAH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMASISEKOLAH_2.addFeatures(features_INFORMASISEKOLAH_2);
var lyr_INFORMASISEKOLAH_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFORMASISEKOLAH_2, 
                style: style_INFORMASISEKOLAH_2,
                popuplayertitle: 'INFORMASI SEKOLAH ',
                interactive: true,
    title: 'INFORMASI SEKOLAH <br />\
    <img src="styles/legend/INFORMASISEKOLAH_2_0.png" /> Kabupaten<br />\
    <img src="styles/legend/INFORMASISEKOLAH_2_1.png" /> Mandiri<br />\
    <img src="styles/legend/INFORMASISEKOLAH_2_2.png" /> Nasional<br />\
    <img src="styles/legend/INFORMASISEKOLAH_2_3.png" /> Provinsi<br />\
    <img src="styles/legend/INFORMASISEKOLAH_2_4.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_BATASADMINISTRASIKECAMATAN_1.setVisible(true);lyr_INFORMASISEKOLAH_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BATASADMINISTRASIKECAMATAN_1,lyr_INFORMASISEKOLAH_2];
lyr_BATASADMINISTRASIKECAMATAN_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_INFORMASISEKOLAH_2.set('fieldAliases', {'fid': 'fid', 'NAMA': 'NAMA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'STATUS ADIWIYATA': 'STATUS ADIWIYATA', 'NPSN': 'NPSN', 'TAHUN ADIWIYATA': 'TAHUN ADIWIYATA', 'FOTO': 'FOTO', });
lyr_BATASADMINISTRASIKECAMATAN_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_INFORMASISEKOLAH_2.set('fieldImages', {'fid': 'TextEdit', 'NAMA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'STATUS ADIWIYATA': 'TextEdit', 'NPSN': 'TextEdit', 'TAHUN ADIWIYATA': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_BATASADMINISTRASIKECAMATAN_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_INFORMASISEKOLAH_2.set('fieldLabels', {'fid': 'hidden field', 'NAMA': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'STATUS ADIWIYATA': 'inline label - visible with data', 'NPSN': 'inline label - visible with data', 'TAHUN ADIWIYATA': 'inline label - visible with data', 'FOTO': 'inline label - visible with data', });
lyr_INFORMASISEKOLAH_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});