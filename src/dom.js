window.dom = {
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(div,object){
    	for(let key in object){
		div.style[key] = object[key]
   	 }
	return key
   },
    each(divList,n){
       	for(let i =0;i<divList.length;i++){
		n.call(null,divList[i])
	}
	return i
    },
}


