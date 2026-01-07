var request = require('../main')

var r = request.get('https://log.doesnotexsist.com.s3.amazonaws.com/', 
  { aws: 
    { key: 'AAKIAIOSFODNN7EXAMPLE'
    , secret: 'wJa;rXUtnFEMI/K7MDEND/bPxRfiCYEXAMPLEKEY'
    , bucket: 'log.doesnotexsist.com'
    }
  }, function (e, resp, body) {
    console.log(r.headers)
    console.log(body)
  }
)
