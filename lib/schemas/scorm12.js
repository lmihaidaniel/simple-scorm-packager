var guid = require('../guid.js');
module.exports = function(obj) {
  var
    identifier = guid(obj),
    itemIdentifier = 'item_' + identifier,
    identifierref = 'resource_' + identifier,
    organization = obj.organization.replace(/ /g, '_');
  if(obj.identifier) {
    if(obj.identifier.trim()){
      var ri = obj.identifier.replace(/ /g, '');
      itemIdentifier = 'item_'+ri;
      identifierref = 'resource_'+ri;
    }
  }
  return {
    '@identifier': identifier,
    '@version': 1,
    '@xmlns:adlcp': 'http://www.adlnet.org/xsd/adlcp_rootv1p2',
    '@xmlns': 'http://www.imsproject.org/xsd/imscp_rootv1p1p2',
    '@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    '@xsi:schemaLocation': 'http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd ' +
      'http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd ' +
      'http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd',
    metadata: {
      schema: 'ADL SCORM',
      schemaversion: obj.version,
      "adlcp:location": "metadata.xml"
    },
    organizations: {
      '@default': organization,
      organization: {
        '@identifier': organization,
        title: obj.title,
        item: {
          '@identifier': itemIdentifier,
          '@identifierref': identifierref,
          title: obj.title,
          'adlcp:masteryscore': obj.masteryScore,
          metadata: {
            schema: 'ADL SCORM',
            schemaversion: obj.version,
            "adlcp:location": "metadata.xml"
          }
        },
        metadata: {
          schema: 'ADL SCORM',
          schemaversion: obj.version,
          "adlcp:location": "metadata.xml"
        }
      }
    },
    resources: {
      metadata: {
          schema: 'ADL SCORM',
          schemaversion: obj.version,
          "adlcp:location": "metadata.xml"
      },
      resource: {
        '@identifier': identifierref,
        '@type': 'webcontent',
        '@href': obj.startingPage,
        '@adlcp:scormtype': 'sco',
        metadata: {
          schema: 'ADL SCORM',
          schemaversion: obj.version,
          "adlcp:location": "metadata.xml"
        },
        file: obj.files
      }
    }
  }
};