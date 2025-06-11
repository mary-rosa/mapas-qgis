var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_geomaticasig_tramos_vias_1 = new ol.format.GeoJSON();
var jsonSource_geomaticasig_tramos_vias_1 = new ol.source.Vector({
    attributions: ' ',
    format: format_geomaticasig_tramos_vias_1
});var lyr_geomaticasig_tramos_vias_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_geomaticasig_tramos_vias_1, 
    style: style_geomaticasig_tramos_vias_1,
    interactive: true,
    title: 'geomatica:sig_tramos_vias'
});

function getgeomaticasig_tramos_vias_1Json(geojson) {
    var features_geomaticasig_tramos_vias_1 = format_geomaticasig_tramos_vias_1.readFeatures(geojson);
    jsonSource_geomaticasig_tramos_vias_1.addFeatures(features_geomaticasig_tramos_vias_1);
}
var format_sig_comunales_2 = new ol.format.GeoJSON();
var features_sig_comunales_2 = format_sig_comunales_2.readFeatures(json_sig_comunales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sig_comunales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sig_comunales_2.addFeatures(features_sig_comunales_2);
var lyr_sig_comunales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sig_comunales_2, 
                style: style_sig_comunales_2,
                popuplayertitle: 'sig_comunales',
                interactive: true,
                title: '<img src="styles/legend/sig_comunales_2.png" /> sig_comunales'
            });
var lyr_IMG20250508WA0001_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IMG-20250508-WA0001<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IMG20250508WA0001_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -1824.000000, 1368.000000, 0.000000]
        })
    });
var format_unidadesTodasMVD_mod_4 = new ol.format.GeoJSON();
var features_unidadesTodasMVD_mod_4 = format_unidadesTodasMVD_mod_4.readFeatures(json_unidadesTodasMVD_mod_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_unidadesTodasMVD_mod_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unidadesTodasMVD_mod_4.addFeatures(features_unidadesTodasMVD_mod_4);
var lyr_unidadesTodasMVD_mod_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_unidadesTodasMVD_mod_4, 
                style: style_unidadesTodasMVD_mod_4,
                popuplayertitle: 'unidadesTodasMVD_mod',
                interactive: true,
                title: '<img src="styles/legend/unidadesTodasMVD_mod_4.png" /> unidadesTodasMVD_mod'
            });
var format_Salud_Mental_en_Territorio_5 = new ol.format.GeoJSON();
var features_Salud_Mental_en_Territorio_5 = format_Salud_Mental_en_Territorio_5.readFeatures(json_Salud_Mental_en_Territorio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salud_Mental_en_Territorio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salud_Mental_en_Territorio_5.addFeatures(features_Salud_Mental_en_Territorio_5);
var lyr_Salud_Mental_en_Territorio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Salud_Mental_en_Territorio_5, 
                style: style_Salud_Mental_en_Territorio_5,
                popuplayertitle: 'Salud_Mental_en_Territorio',
                interactive: true,
                title: 'Salud_Mental_en_Territorio'
            });
var group_Accesos = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Accesos'});
var group_Salud_Mental_Casavalle = new ol.layer.Group({
                                layers: [lyr_unidadesTodasMVD_mod_4,lyr_Salud_Mental_en_Territorio_5,],
                                fold: 'open',
                                title: 'Salud_Mental_Casavalle'});
var group_Marcados_mapa = new ol.layer.Group({
                                layers: [lyr_IMG20250508WA0001_3,],
                                fold: 'open',
                                title: 'Marcados_mapa'});
var group_UbicacionesNotables = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'UbicacionesNotables'});
var group_PDyG = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PDyG'});
var group_Nomenclatura_Igualitaria = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Nomenclatura_Igualitaria'});
var group_Estudo_calles_CITIM = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Estudo_calles_CITIM'});
var group_OtrasCapas = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Otras Capas'});
var group_Hidrografa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hidrografía'});
var group_ViviendayHabitat = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vivienda y Habitat'});
var group_PLUG_IMyotras = new ol.layer.Group({
                                layers: [lyr_sig_comunales_2,],
                                fold: 'open',
                                title: 'PLUG_IM y otras'});
var group_geomatica = new ol.layer.Group({
                                layers: [lyr_geomaticasig_tramos_vias_1,],
                                fold: 'open',
                                title: 'geomatica'});
var group_Mapasbase = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: 'open',
                                title: 'Mapas base'});

lyr_OpenStreetMap_0.setVisible(true);lyr_geomaticasig_tramos_vias_1.setVisible(true);lyr_sig_comunales_2.setVisible(true);lyr_IMG20250508WA0001_3.setVisible(true);lyr_unidadesTodasMVD_mod_4.setVisible(true);lyr_Salud_Mental_en_Territorio_5.setVisible(true);
var layersList = [group_Mapasbase,group_geomatica,group_PLUG_IMyotras,group_Marcados_mapa,group_Salud_Mental_Casavalle];
lyr_geomaticasig_tramos_vias_1.set('fieldAliases', {'gid': 'gid', 'cod_nombre_via': 'cod_nombre_via', 'tipo_snn': 'tipo_snn', 'tipo_uso': 'tipo_uso', 'estado': 'estado', 'fcrea': 'fcrea', 'ucrea': 'ucrea', 'fact': 'fact', 'uact': 'uact', 'idauditoria': 'idauditoria', 'nivel': 'nivel', 'nom_calle': 'nom_calle', });
lyr_sig_comunales_2.set('fieldAliases', {'GID': 'GID', 'ZONA_LEGAL': 'ZONA_LEGAL', 'MUNICIPIO': 'MUNICIPIO', });
lyr_unidadesTodasMVD_mod_4.set('fieldAliases', {'oid': 'oid', 'linea': 'linea', 'nombre': 'nombre', 'alias': 'alias', 'cerrada': 'cerrada', 'field_6': 'field_6', 'regiongeo': 'regiongeo', 'departamen': 'departamen', 'localida': 'localida', 'urbanarura': 'urbanarura', 'coddepart': 'coddepart', 'codloc': 'codloc', 'codsecc': 'codsecc', 'codseg': 'codseg', 'codzona': 'codzona', 'cod1': 'cod1', 'cod2': 'cod2', 'coordx': 'coordx', 'coordy': 'coordy', 'latlong': 'latlong', 'calle': 'calle', 'numpuerta': 'numpuerta', 'esquina': 'esquina', 'telefono': 'telefono', 'codregion': 'codregion', 'regionasse': 'regionasse', 'subregion': 'subregion', 'depadmin': 'depadmin', 'uedepende': 'uedepende', 'uedependen': 'uedependen', 'nivelatenc': 'nivelatenc', 'categoria': 'categoria', 'codcatsnom': 'codcatsnom', 'pertenecea': 'pertenecea', 'pertenec_1': 'pertenec_1', 'dependeua': 'dependeua', 'sgc': 'sgc', 'sgcenua': 'sgcenua', 'ec': 'ec', 'hcea': 'hcea', 'hceo': 'hceo', 'obstetrapa': 'obstetrapa', 'medfamycom': 'medfamycom', 'medgeneral': 'medgeneral', 'pediatria': 'pediatria', 'ginecoobst': 'ginecoobst', 'odontolog': 'odontolog', 'espadolesc': 'espadolesc', 'horespado': 'horespado', 'vacunatori': 'vacunatori', 'puertaemer': 'puertaemer', 'puertaurge': 'puertaurge', 'geosalud': 'geosalud', 'maternidad': 'maternidad', 'maternid_1': 'maternid_1', 'camactiadu': 'camactiadu', 'camacetped': 'camacetped', 'camaciadul': 'camaciadul', 'camaciped': 'camaciped', 'camacb': 'camacb', 'camacm': 'camacm', 'ctisic': 'ctisic', 'resehgeosa': 'resehgeosa', 'hceintgeos': 'hceintgeos', 'block': 'block', 'siq': 'siq', 'medfarmaci': 'medfarmaci', 'meddispens': 'meddispens', 'webfarma': 'webfarma', 'sga farmac': 'sga farmac', 'emedicamen': 'emedicamen', 'muestrasla': 'muestrasla', 'laboratori': 'laboratori', 'imradiolog': 'imradiolog', 'imecografo': 'imecografo', 'immamograf': 'immamograf', 'imtomograf': 'imtomograf', 'imrnm': 'imrnm', 'minipacs': 'minipacs', 'ridi': 'ridi', 'ridiagenda': 'ridiagenda', 'id': 'id', 'icadistanc': 'icadistanc', 'evaluafnr': 'evaluafnr', 'infremotoi': 'infremotoi', 'codsip': 'codsip', 'codcnv': 'codcnv', 'codhabmsp': 'codhabmsp', 'idmsp': 'idmsp', 'lat': 'lat', 'long': 'long', });
lyr_Salud_Mental_en_Territorio_5.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', 'Servi_et': 'Servi_et', 'Ubicacion': 'Ubicacion', 'Pto_Int_1': 'Pto_Int_1', 'Pto_Int_2': 'Pto_Int_2', 'Prog_Espac': 'Prog_Espac', 'Horarios': 'Horarios', 'Red_Social': 'Red_Social', 'Web': 'Web', 'Publi_Priv': 'Publi_Priv', 'At_Psico': 'At_Psico', 'At_PsicObs': 'At_PsicObs', 'Tipo_Serv1': 'Tipo_Serv1', 'Tipo_Serv2': 'Tipo_Serv2', 'Tipo_Serv3': 'Tipo_Serv3', 'Tipo_Org': 'Tipo_Org', 'Caract_1': 'Caract_1', 'Caract_2': 'Caract_2', 'Caract_3': 'Caract_3', 'Caract_4': 'Caract_4', 'Caract_5': 'Caract_5', 'Caract_6': 'Caract_6', 'Domicilio': 'Domicilio', 'Contacto': 'Contacto', });
lyr_geomaticasig_tramos_vias_1.set('fieldImages', {'gid': 'TextEdit', 'cod_nombre_via': 'Range', 'tipo_snn': 'Range', 'tipo_uso': 'Range', 'estado': 'Range', 'fcrea': 'DateTime', 'ucrea': 'TextEdit', 'fact': 'DateTime', 'uact': 'TextEdit', 'idauditoria': 'TextEdit', 'nivel': 'Range', 'nom_calle': 'ValueMap', });
lyr_sig_comunales_2.set('fieldImages', {'GID': 'TextEdit', 'ZONA_LEGAL': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_unidadesTodasMVD_mod_4.set('fieldImages', {'oid': '', 'linea': '', 'nombre': '', 'alias': '', 'cerrada': '', 'field_6': '', 'regiongeo': '', 'departamen': '', 'localida': '', 'urbanarura': '', 'coddepart': '', 'codloc': '', 'codsecc': '', 'codseg': '', 'codzona': '', 'cod1': '', 'cod2': '', 'coordx': '', 'coordy': '', 'latlong': '', 'calle': '', 'numpuerta': '', 'esquina': '', 'telefono': '', 'codregion': '', 'regionasse': '', 'subregion': '', 'depadmin': '', 'uedepende': '', 'uedependen': '', 'nivelatenc': '', 'categoria': '', 'codcatsnom': '', 'pertenecea': '', 'pertenec_1': '', 'dependeua': '', 'sgc': '', 'sgcenua': '', 'ec': '', 'hcea': '', 'hceo': '', 'obstetrapa': '', 'medfamycom': '', 'medgeneral': '', 'pediatria': '', 'ginecoobst': '', 'odontolog': '', 'espadolesc': '', 'horespado': '', 'vacunatori': '', 'puertaemer': '', 'puertaurge': '', 'geosalud': '', 'maternidad': '', 'maternid_1': '', 'camactiadu': '', 'camacetped': '', 'camaciadul': '', 'camaciped': '', 'camacb': '', 'camacm': '', 'ctisic': '', 'resehgeosa': '', 'hceintgeos': '', 'block': '', 'siq': '', 'medfarmaci': '', 'meddispens': '', 'webfarma': '', 'sga farmac': '', 'emedicamen': '', 'muestrasla': '', 'laboratori': '', 'imradiolog': '', 'imecografo': '', 'immamograf': '', 'imtomograf': '', 'imrnm': '', 'minipacs': '', 'ridi': '', 'ridiagenda': '', 'id': '', 'icadistanc': '', 'evaluafnr': '', 'infremotoi': '', 'codsip': '', 'codcnv': '', 'codhabmsp': '', 'idmsp': '', 'lat': '', 'long': '', });
lyr_Salud_Mental_en_Territorio_5.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Servi_et': 'TextEdit', 'Ubicacion': 'TextEdit', 'Pto_Int_1': 'TextEdit', 'Pto_Int_2': 'TextEdit', 'Prog_Espac': 'TextEdit', 'Horarios': 'TextEdit', 'Red_Social': 'TextEdit', 'Web': 'TextEdit', 'Publi_Priv': 'TextEdit', 'At_Psico': 'TextEdit', 'At_PsicObs': 'TextEdit', 'Tipo_Serv1': 'TextEdit', 'Tipo_Serv2': 'TextEdit', 'Tipo_Serv3': 'TextEdit', 'Tipo_Org': 'TextEdit', 'Caract_1': 'TextEdit', 'Caract_2': 'TextEdit', 'Caract_3': 'TextEdit', 'Caract_4': 'TextEdit', 'Caract_5': 'TextEdit', 'Caract_6': 'TextEdit', 'Domicilio': 'TextEdit', 'Contacto': '', });
lyr_geomaticasig_tramos_vias_1.set('fieldLabels', {'gid': 'no label', 'cod_nombre_via': 'no label', 'tipo_snn': 'no label', 'tipo_uso': 'no label', 'estado': 'no label', 'fcrea': 'no label', 'ucrea': 'no label', 'fact': 'no label', 'uact': 'no label', 'idauditoria': 'no label', 'nivel': 'no label', 'nom_calle': 'no label', });
lyr_sig_comunales_2.set('fieldLabels', {'GID': 'no label', 'ZONA_LEGAL': 'no label', 'MUNICIPIO': 'no label', });
lyr_unidadesTodasMVD_mod_4.set('fieldLabels', {'oid': 'no label', 'linea': 'no label', 'nombre': 'no label', 'alias': 'no label', 'cerrada': 'no label', 'field_6': 'no label', 'regiongeo': 'no label', 'departamen': 'no label', 'localida': 'no label', 'urbanarura': 'no label', 'coddepart': 'no label', 'codloc': 'no label', 'codsecc': 'no label', 'codseg': 'no label', 'codzona': 'no label', 'cod1': 'no label', 'cod2': 'no label', 'coordx': 'no label', 'coordy': 'no label', 'latlong': 'no label', 'calle': 'no label', 'numpuerta': 'no label', 'esquina': 'no label', 'telefono': 'no label', 'codregion': 'no label', 'regionasse': 'no label', 'subregion': 'no label', 'depadmin': 'no label', 'uedepende': 'no label', 'uedependen': 'no label', 'nivelatenc': 'no label', 'categoria': 'no label', 'codcatsnom': 'no label', 'pertenecea': 'no label', 'pertenec_1': 'no label', 'dependeua': 'no label', 'sgc': 'no label', 'sgcenua': 'no label', 'ec': 'no label', 'hcea': 'no label', 'hceo': 'no label', 'obstetrapa': 'no label', 'medfamycom': 'no label', 'medgeneral': 'no label', 'pediatria': 'no label', 'ginecoobst': 'no label', 'odontolog': 'no label', 'espadolesc': 'no label', 'horespado': 'no label', 'vacunatori': 'no label', 'puertaemer': 'no label', 'puertaurge': 'no label', 'geosalud': 'no label', 'maternidad': 'no label', 'maternid_1': 'no label', 'camactiadu': 'no label', 'camacetped': 'no label', 'camaciadul': 'no label', 'camaciped': 'no label', 'camacb': 'no label', 'camacm': 'no label', 'ctisic': 'no label', 'resehgeosa': 'no label', 'hceintgeos': 'no label', 'block': 'no label', 'siq': 'no label', 'medfarmaci': 'no label', 'meddispens': 'no label', 'webfarma': 'no label', 'sga farmac': 'no label', 'emedicamen': 'no label', 'muestrasla': 'no label', 'laboratori': 'no label', 'imradiolog': 'no label', 'imecografo': 'no label', 'immamograf': 'no label', 'imtomograf': 'no label', 'imrnm': 'no label', 'minipacs': 'no label', 'ridi': 'no label', 'ridiagenda': 'no label', 'id': 'no label', 'icadistanc': 'no label', 'evaluafnr': 'no label', 'infremotoi': 'no label', 'codsip': 'no label', 'codcnv': 'no label', 'codhabmsp': 'no label', 'idmsp': 'no label', 'lat': 'no label', 'long': 'no label', });
lyr_Salud_Mental_en_Territorio_5.set('fieldLabels', {'id': 'no label', 'X': 'no label', 'Y': 'no label', 'Servi_et': 'inline label - visible with data', 'Ubicacion': 'inline label - visible with data', 'Pto_Int_1': 'no label', 'Pto_Int_2': 'no label', 'Prog_Espac': 'no label', 'Horarios': 'no label', 'Red_Social': 'no label', 'Web': 'no label', 'Publi_Priv': 'no label', 'At_Psico': 'no label', 'At_PsicObs': 'no label', 'Tipo_Serv1': 'no label', 'Tipo_Serv2': 'no label', 'Tipo_Serv3': 'no label', 'Tipo_Org': 'no label', 'Caract_1': 'no label', 'Caract_2': 'no label', 'Caract_3': 'no label', 'Caract_4': 'no label', 'Caract_5': 'no label', 'Caract_6': 'no label', 'Domicilio': 'no label', 'Contacto': 'no label', });
lyr_Salud_Mental_en_Territorio_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});