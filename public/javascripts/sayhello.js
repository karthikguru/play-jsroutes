function sayHello(){
	var name=$('#username').val();
	myJsRoutes.controllers.Application.hello(name).ajax({
		success: function(data){
			$('#sayHello').text(data);			
		}
	});	
}