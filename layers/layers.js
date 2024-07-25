ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([367366.555419, 2289576.601545, 435117.702453, 2327547.024608]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_THUYVAN_HANAMcopy_2 = new ol.format.GeoJSON();
var features_THUYVAN_HANAMcopy_2 = format_THUYVAN_HANAMcopy_2.readFeatures(json_THUYVAN_HANAMcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_THUYVAN_HANAMcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THUYVAN_HANAMcopy_2.addFeatures(features_THUYVAN_HANAMcopy_2);
var lyr_THUYVAN_HANAMcopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_THUYVAN_HANAMcopy_2, 
                style: style_THUYVAN_HANAMcopy_2,
                popuplayertitle: "THUYVAN_HANAM copy",
                interactive: false,
                title: '<img src="styles/legend/THUYVAN_HANAMcopy_2.png" /> THUYVAN_HANAM copy'
            });
var format_THUYVAN_HANAM_3 = new ol.format.GeoJSON();
var features_THUYVAN_HANAM_3 = format_THUYVAN_HANAM_3.readFeatures(json_THUYVAN_HANAM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_THUYVAN_HANAM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THUYVAN_HANAM_3.addFeatures(features_THUYVAN_HANAM_3);
var lyr_THUYVAN_HANAM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_THUYVAN_HANAM_3, 
                style: style_THUYVAN_HANAM_3,
                popuplayertitle: "THUYVAN_HANAM",
                interactive: false,
                title: '<img src="styles/legend/THUYVAN_HANAM_3.png" /> THUYVAN_HANAM'
            });
var format_VUNG_NC_4 = new ol.format.GeoJSON();
var features_VUNG_NC_4 = format_VUNG_NC_4.readFeatures(json_VUNG_NC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_VUNG_NC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VUNG_NC_4.addFeatures(features_VUNG_NC_4);
var lyr_VUNG_NC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VUNG_NC_4, 
                style: style_VUNG_NC_4,
                popuplayertitle: "VUNG_NC",
                interactive: false,
                title: '<img src="styles/legend/VUNG_NC_4.png" /> VUNG_NC'
            });
var format_HANAM_RGHC_5 = new ol.format.GeoJSON();
var features_HANAM_RGHC_5 = format_HANAM_RGHC_5.readFeatures(json_HANAM_RGHC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_HANAM_RGHC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HANAM_RGHC_5.addFeatures(features_HANAM_RGHC_5);
var lyr_HANAM_RGHC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HANAM_RGHC_5, 
                style: style_HANAM_RGHC_5,
                popuplayertitle: "HANAM_RGHC",
                interactive: true,
                title: '<img src="styles/legend/HANAM_RGHC_5.png" /> HANAM_RGHC'
            });
var format_HANAM_GIAOTHONG_6 = new ol.format.GeoJSON();
var features_HANAM_GIAOTHONG_6 = format_HANAM_GIAOTHONG_6.readFeatures(json_HANAM_GIAOTHONG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_HANAM_GIAOTHONG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HANAM_GIAOTHONG_6.addFeatures(features_HANAM_GIAOTHONG_6);
var lyr_HANAM_GIAOTHONG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HANAM_GIAOTHONG_6, 
                style: style_HANAM_GIAOTHONG_6,
                popuplayertitle: "HANAM_GIAOTHONG",
                interactive: false,
                title: '<img src="styles/legend/HANAM_GIAOTHONG_6.png" /> HANAM_GIAOTHONG'
            });
var format_THUYVAN_CLN_DOT2_7 = new ol.format.GeoJSON();
var features_THUYVAN_CLN_DOT2_7 = format_THUYVAN_CLN_DOT2_7.readFeatures(json_THUYVAN_CLN_DOT2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_THUYVAN_CLN_DOT2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THUYVAN_CLN_DOT2_7.addFeatures(features_THUYVAN_CLN_DOT2_7);
var lyr_THUYVAN_CLN_DOT2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_THUYVAN_CLN_DOT2_7, 
                style: style_THUYVAN_CLN_DOT2_7,
                popuplayertitle: "THUYVAN_CLN_DOT2",
                interactive: false,
    title: 'THUYVAN_CLN_DOT2<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT2_7_0.png" /> KEM<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT2_7_1.png" /> TB<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT2_7_2.png" /> TOT<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT2_7_3.png" /> XAU<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT2_7_4.png" /> <br />'
        });
var format_THUYVAN_CLN_DOT1_8 = new ol.format.GeoJSON();
var features_THUYVAN_CLN_DOT1_8 = format_THUYVAN_CLN_DOT1_8.readFeatures(json_THUYVAN_CLN_DOT1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_THUYVAN_CLN_DOT1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THUYVAN_CLN_DOT1_8.addFeatures(features_THUYVAN_CLN_DOT1_8);
var lyr_THUYVAN_CLN_DOT1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_THUYVAN_CLN_DOT1_8, 
                style: style_THUYVAN_CLN_DOT1_8,
                popuplayertitle: "THUYVAN_CLN_DOT1",
                interactive: false,
    title: 'THUYVAN_CLN_DOT1<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT1_8_0.png" /> KEM<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT1_8_1.png" /> TB<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT1_8_2.png" /> TOT<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT1_8_3.png" /> XAU<br />\
    <img src="styles/legend/THUYVAN_CLN_DOT1_8_4.png" /> <br />'
        });
var format_WQI_MUAMUA_9 = new ol.format.GeoJSON();
var features_WQI_MUAMUA_9 = format_WQI_MUAMUA_9.readFeatures(json_WQI_MUAMUA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_WQI_MUAMUA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQI_MUAMUA_9.addFeatures(features_WQI_MUAMUA_9);
var lyr_WQI_MUAMUA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQI_MUAMUA_9, 
                style: style_WQI_MUAMUA_9,
                popuplayertitle: "WQI_MUAMUA",
                interactive: true,
    title: 'WQI_MUAMUA<br />\
    <img src="styles/legend/WQI_MUAMUA_9_0.png" /> 35<br />\
    <img src="styles/legend/WQI_MUAMUA_9_1.png" /> 36<br />\
    <img src="styles/legend/WQI_MUAMUA_9_2.png" /> 37<br />\
    <img src="styles/legend/WQI_MUAMUA_9_3.png" /> 39<br />\
    <img src="styles/legend/WQI_MUAMUA_9_4.png" /> 41<br />\
    <img src="styles/legend/WQI_MUAMUA_9_5.png" /> 42<br />\
    <img src="styles/legend/WQI_MUAMUA_9_6.png" /> 43<br />\
    <img src="styles/legend/WQI_MUAMUA_9_7.png" /> 46<br />\
    <img src="styles/legend/WQI_MUAMUA_9_8.png" /> 47<br />\
    <img src="styles/legend/WQI_MUAMUA_9_9.png" /> 51<br />\
    <img src="styles/legend/WQI_MUAMUA_9_10.png" /> 52<br />\
    <img src="styles/legend/WQI_MUAMUA_9_11.png" /> 56<br />\
    <img src="styles/legend/WQI_MUAMUA_9_12.png" /> 60<br />\
    <img src="styles/legend/WQI_MUAMUA_9_13.png" /> 64<br />\
    <img src="styles/legend/WQI_MUAMUA_9_14.png" /> <br />'
        });
var format_WQI_MUAKHO_10 = new ol.format.GeoJSON();
var features_WQI_MUAKHO_10 = format_WQI_MUAKHO_10.readFeatures(json_WQI_MUAKHO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_WQI_MUAKHO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQI_MUAKHO_10.addFeatures(features_WQI_MUAKHO_10);
var lyr_WQI_MUAKHO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQI_MUAKHO_10, 
                style: style_WQI_MUAKHO_10,
                popuplayertitle: "WQI_MUAKHO",
                interactive: true,
    title: 'WQI_MUAKHO<br />\
    <img src="styles/legend/WQI_MUAKHO_10_0.png" /> 20<br />\
    <img src="styles/legend/WQI_MUAKHO_10_1.png" /> 21<br />\
    <img src="styles/legend/WQI_MUAKHO_10_2.png" /> 32<br />\
    <img src="styles/legend/WQI_MUAKHO_10_3.png" /> 52<br />\
    <img src="styles/legend/WQI_MUAKHO_10_4.png" /> 54<br />\
    <img src="styles/legend/WQI_MUAKHO_10_5.png" /> 56<br />\
    <img src="styles/legend/WQI_MUAKHO_10_6.png" /> 58<br />\
    <img src="styles/legend/WQI_MUAKHO_10_7.png" /> 62<br />\
    <img src="styles/legend/WQI_MUAKHO_10_8.png" /> 72<br />\
    <img src="styles/legend/WQI_MUAKHO_10_9.png" /> 73<br />\
    <img src="styles/legend/WQI_MUAKHO_10_10.png" /> 76<br />\
    <img src="styles/legend/WQI_MUAKHO_10_11.png" /> 77<br />\
    <img src="styles/legend/WQI_MUAKHO_10_12.png" /> 78<br />\
    <img src="styles/legend/WQI_MUAKHO_10_13.png" /> 79<br />\
    <img src="styles/legend/WQI_MUAKHO_10_14.png" /> 81<br />\
    <img src="styles/legend/WQI_MUAKHO_10_15.png" /> 83<br />\
    <img src="styles/legend/WQI_MUAKHO_10_16.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_THUYVAN_HANAMcopy_2.setVisible(true);lyr_THUYVAN_HANAM_3.setVisible(true);lyr_VUNG_NC_4.setVisible(true);lyr_HANAM_RGHC_5.setVisible(true);lyr_HANAM_GIAOTHONG_6.setVisible(true);lyr_THUYVAN_CLN_DOT2_7.setVisible(true);lyr_THUYVAN_CLN_DOT1_8.setVisible(true);lyr_WQI_MUAMUA_9.setVisible(true);lyr_WQI_MUAKHO_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_THUYVAN_HANAMcopy_2,lyr_THUYVAN_HANAM_3,lyr_VUNG_NC_4,lyr_HANAM_RGHC_5,lyr_HANAM_GIAOTHONG_6,lyr_THUYVAN_CLN_DOT2_7,lyr_THUYVAN_CLN_DOT1_8,lyr_WQI_MUAMUA_9,lyr_WQI_MUAKHO_10];
lyr_THUYVAN_HANAMcopy_2.set('fieldAliases', {'ID': 'ID', 'Ten': 'Ten', 'ID_2': 'ID_2', 'NAME': 'NAME', 'Phuong_xa': 'Phuong_xa', 'WQI': 'WQI', 'MAU': 'MAU', 'GHICHU': 'GHICHU', });
lyr_THUYVAN_HANAM_3.set('fieldAliases', {'ID': 'ID', 'Ten': 'Ten', 'ID_2': 'ID_2', 'NAME': 'NAME', 'Phuong_xa': 'Phuong_xa', 'WQI': 'WQI', 'MAU': 'MAU', 'GHICHU': 'GHICHU', });
lyr_VUNG_NC_4.set('fieldAliases', {'TT': 'TT', 'VUNG': 'VUNG', });
lyr_HANAM_RGHC_5.set('fieldAliases', {'TT': 'TT', 'Matinh': 'Matinh', 'Mahuyen': 'Mahuyen', 'Maxa': 'Maxa', 'Tinh': 'Tinh', 'Huyen': 'Huyen', 'Xa': 'Xa', 'DTICH': 'DTICH', });
lyr_HANAM_GIAOTHONG_6.set('fieldAliases', {'TENDUONG': 'TENDUONG', 'TT': 'TT', 'GHICHU': 'GHICHU', });
lyr_THUYVAN_CLN_DOT2_7.set('fieldAliases', {'ID': 'ID', 'WQI': 'WQI', 'gridcode': 'gridcode', 'CLN': 'CLN', 'WQI_T4': 'WQI_T4', 'WQI_T7': 'WQI_T7', 'CLN_T4': 'CLN_T4', 'CLN_T7': 'CLN_T7', });
lyr_THUYVAN_CLN_DOT1_8.set('fieldAliases', {'ID': 'ID', 'WQI': 'WQI', 'gridcode': 'gridcode', 'CLN': 'CLN', 'WQI_T4': 'WQI_T4', 'WQI_T7': 'WQI_T7', 'CLN_T4': 'CLN_T4', 'CLN_T7': 'CLN_T7', });
lyr_WQI_MUAMUA_9.set('fieldAliases', {'NAME': 'NAME', 'WQI_T7': 'WQI_T7', 'TT': 'TT', 'CLN_T7': 'CLN_T7', 'DO': 'DO', 'TSS': 'TSS', 'COD': 'COD', 'BOD5': 'BOD5', 'Amoni': 'Amoni', 'Nitrit': 'Nitrit', 'Nitrat': 'Nitrat', 'Phosphat': 'Phosphat', 'Coliform': 'Coliform', 'E.Coli': 'E.Coli', });
lyr_WQI_MUAKHO_10.set('fieldAliases', {'TT': 'TT', 'NAME': 'NAME', 'WQI_T4': 'WQI_T4', 'CLN_T4': 'CLN_T4', 'DO': 'DO', 'TSS': 'TSS', 'COD': 'COD', 'BOD5': 'BOD5', 'Amoni': 'Amoni', 'Nitrit': 'Nitrit', 'Nitrat': 'Nitrat', 'Phosphat': 'Phosphat', 'Coliform': 'Coliform', 'E.Coli': 'E.Coli', });
lyr_THUYVAN_HANAMcopy_2.set('fieldImages', {'ID': 'TextEdit', 'Ten': 'TextEdit', 'ID_2': 'TextEdit', 'NAME': 'TextEdit', 'Phuong_xa': 'TextEdit', 'WQI': 'TextEdit', 'MAU': 'TextEdit', 'GHICHU': 'TextEdit', });
lyr_THUYVAN_HANAM_3.set('fieldImages', {'ID': 'TextEdit', 'Ten': 'TextEdit', 'ID_2': 'TextEdit', 'NAME': 'TextEdit', 'Phuong_xa': 'TextEdit', 'WQI': 'TextEdit', 'MAU': 'TextEdit', 'GHICHU': 'TextEdit', });
lyr_VUNG_NC_4.set('fieldImages', {'TT': 'TextEdit', 'VUNG': 'TextEdit', });
lyr_HANAM_RGHC_5.set('fieldImages', {'TT': 'TextEdit', 'Matinh': '', 'Mahuyen': '', 'Maxa': '', 'Tinh': '', 'Huyen': '', 'Xa': '', 'DTICH': '', });
lyr_HANAM_GIAOTHONG_6.set('fieldImages', {'TENDUONG': 'TextEdit', 'TT': 'TextEdit', 'GHICHU': 'TextEdit', });
lyr_THUYVAN_CLN_DOT2_7.set('fieldImages', {'ID': 'TextEdit', 'WQI': 'TextEdit', 'gridcode': 'TextEdit', 'CLN': 'TextEdit', 'WQI_T4': 'TextEdit', 'WQI_T7': 'TextEdit', 'CLN_T4': 'TextEdit', 'CLN_T7': 'TextEdit', });
lyr_THUYVAN_CLN_DOT1_8.set('fieldImages', {'ID': 'TextEdit', 'WQI': 'TextEdit', 'gridcode': 'TextEdit', 'CLN': 'TextEdit', 'WQI_T4': 'TextEdit', 'WQI_T7': 'TextEdit', 'CLN_T4': 'TextEdit', 'CLN_T7': 'TextEdit', });
lyr_WQI_MUAMUA_9.set('fieldImages', {'NAME': 'TextEdit', 'WQI_T7': 'TextEdit', 'TT': 'TextEdit', 'CLN_T7': 'TextEdit', 'DO': 'TextEdit', 'TSS': 'TextEdit', 'COD': 'TextEdit', 'BOD5': 'TextEdit', 'Amoni': 'TextEdit', 'Nitrit': 'TextEdit', 'Nitrat': 'TextEdit', 'Phosphat': 'TextEdit', 'Coliform': 'TextEdit', 'E.Coli': 'TextEdit', });
lyr_WQI_MUAKHO_10.set('fieldImages', {'TT': 'TextEdit', 'NAME': 'TextEdit', 'WQI_T4': 'TextEdit', 'CLN_T4': 'TextEdit', 'DO': 'TextEdit', 'TSS': 'TextEdit', 'COD': 'TextEdit', 'BOD5': 'TextEdit', 'Amoni': 'TextEdit', 'Nitrit': 'TextEdit', 'Nitrat': 'TextEdit', 'Phosphat': 'TextEdit', 'Coliform': 'TextEdit', 'E.Coli': 'TextEdit', });
lyr_THUYVAN_HANAMcopy_2.set('fieldLabels', {'ID': 'no label', 'Ten': 'no label', 'ID_2': 'no label', 'NAME': 'no label', 'Phuong_xa': 'no label', 'WQI': 'no label', 'MAU': 'no label', 'GHICHU': 'no label', });
lyr_THUYVAN_HANAM_3.set('fieldLabels', {'ID': 'no label', 'Ten': 'no label', 'ID_2': 'no label', 'NAME': 'no label', 'Phuong_xa': 'no label', 'WQI': 'no label', 'MAU': 'no label', 'GHICHU': 'no label', });
lyr_VUNG_NC_4.set('fieldLabels', {'TT': 'no label', 'VUNG': 'no label', });
lyr_HANAM_RGHC_5.set('fieldLabels', {'TT': 'no label', 'Matinh': 'inline label - always visible', 'Mahuyen': 'no label', 'Maxa': 'no label', 'Tinh': 'no label', 'Huyen': 'no label', 'Xa': 'inline label - always visible', 'DTICH': 'no label', });
lyr_HANAM_GIAOTHONG_6.set('fieldLabels', {'TENDUONG': 'no label', 'TT': 'no label', 'GHICHU': 'no label', });
lyr_THUYVAN_CLN_DOT2_7.set('fieldLabels', {'ID': 'no label', 'WQI': 'no label', 'gridcode': 'no label', 'CLN': 'no label', 'WQI_T4': 'no label', 'WQI_T7': 'no label', 'CLN_T4': 'no label', 'CLN_T7': 'no label', });
lyr_THUYVAN_CLN_DOT1_8.set('fieldLabels', {'ID': 'no label', 'WQI': 'no label', 'gridcode': 'no label', 'CLN': 'no label', 'WQI_T4': 'no label', 'WQI_T7': 'no label', 'CLN_T4': 'no label', 'CLN_T7': 'no label', });
lyr_WQI_MUAMUA_9.set('fieldLabels', {'NAME': 'inline label - always visible', 'WQI_T7': 'inline label - always visible', 'TT': 'no label', 'CLN_T7': 'inline label - always visible', 'DO': 'inline label - always visible', 'TSS': 'inline label - always visible', 'COD': 'inline label - always visible', 'BOD5': 'inline label - always visible', 'Amoni': 'inline label - always visible', 'Nitrit': 'inline label - always visible', 'Nitrat': 'inline label - always visible', 'Phosphat': 'inline label - always visible', 'Coliform': 'inline label - always visible', 'E.Coli': 'inline label - always visible', });
lyr_WQI_MUAKHO_10.set('fieldLabels', {'TT': 'no label', 'NAME': 'inline label - always visible', 'WQI_T4': 'inline label - always visible', 'CLN_T4': 'inline label - always visible', 'DO': 'inline label - always visible', 'TSS': 'inline label - always visible', 'COD': 'inline label - always visible', 'BOD5': 'inline label - always visible', 'Amoni': 'inline label - always visible', 'Nitrit': 'inline label - always visible', 'Nitrat': 'inline label - always visible', 'Phosphat': 'inline label - always visible', 'Coliform': 'inline label - always visible', 'E.Coli': 'inline label - always visible', });
lyr_WQI_MUAKHO_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});