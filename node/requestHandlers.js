function start(){
    console.log("RequestHandler Miss Start on the call");
}

function upload(){
    console.log("RequestHandler Mr Upload on the call");
}

exports.start = start;
exports.upload = upload;

