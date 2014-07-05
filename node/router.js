function route(handle, pathname){
    console.log("Gonna route a request under" + pathname);
    if(typeof handle[pathname] === 'function'){
	handle[pathname]();
    }else{
    	console.log("No path found at:" + pathname);
    }
}

exports.route = route;
