function random(){
	var ramimage = new Array("img/1_fake/*.jpg");
	var sec = dd.getSeconds()
	var curimg = ramimage[sec % ramimage.length];

	document.write("<img src=\"" + curimg + "\" width=\"800\" height=\"250\" />");

	//document.write("<a href=\"index.html\"><img src=\"" + curimg + "\" width=\"800\" height=\"250\" /></a>");
	console.log(GetAllFile)
}



var Path = new Folder("./imgs/1_fake/")//ここにパスを記述。
$.writeln(GetAllFile(Path))

function GetAllFile(Path){
	var List=[]
	Execute(Path)
	function Execute(Path){
		for (i in Path.getFiles()){
			if(Path.getFiles()[i]instanceof Folder){
				Execute(Path.getFiles()[i])
			}
			if(Path.getFiles()[i]instanceof File){
				List.push(Path.getFiles()[i])
			}
		}
	}
	return (List)
}

