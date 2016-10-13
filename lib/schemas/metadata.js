module.exports = function(obj) {
	var
	name = obj.package.name.replace(/ /g, '_'),
    identifier = obj.title.replace(/ /g, '.'),
    itemIdentifier = 'item_' + obj.identifier.replace(/ /g, ''),
    identifierref = 'resource_' + obj.identifier.replace(/ /g, ''),
    organization = obj.organization.replace(/ /g, '_');
	return {
		'@xmlns': 'http://ltsc.ieee.org/xsd/LOM',
		'@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
		'@xmlns:pkgprop': 'http://www.scorm.com/xsd/ScormEnginePackageProperties',
		'@xsi:schemaLocation': 'http://ltsc.ieee.org/xsd/LOM lomLoose.xsd http://www.scorm.com/xsd/ '+'\n'+
			'ScormEnginePackageProperties ScormEnginePackageProperties.xsd',
		general: {
			identifier : {
				catalog: 'URI',
				entry: identifier
			},
			title: {
				string: name
			}
		},
		lifeCycle: {

		},
		metametadata:{
			metadatascheme: "ADL SCORM "+obj.version
		},
		technical: {

		},
		educational: {

		},
		rights:{

		}
	}
}