function count(){
	var store_str=localStorage.getItem("book_shop");
	
	if (store_str) {

		var store_arr=JSON.parse(store_str);
		if (store_arr!=0) {
			var count=0;
			$.each(store_arr,function(a,b){
				count += b.qty;
				console.log(count);
				$("#count").text(count);
			})
		}else{
			$("#count").text('');
		}
	}else{
		$("#count").text('');

	}

}