


var app=angular.module("StudentModule",[]);

app.controller("StudentController",function($scope){
	
	$scope.Students=[
		{Name:"Sir WaliULLAH",Phone:"0320-9865321",Email:"wali@gmail.com",Password:"wali123"},
		{Name:"Sir Areeb",Phone:"0320-9865321",Email:"wali@gmail.com",Password:"areeb123"},
		{Name:"Sir Baqar",Phone:"0320-9865321",Email:"wali@gmail.com",Password:"wali123"},
		{Name:"Sir Moiz",Phone:"0320-9865321",Email:"wali@gmail.com",Password:"wali123"},
		{Name:"Sir Huzaifa",Phone:"0320-9865321",Email:"wali@gmail.com",Password:"wali123"},
		{Name:"Mis Yumna",Phone:"0320-9865321",Email:"wali@gmail.com",Password:"wali123"},
		{Name:"Sir uzain",Phone:"0320-9865321",Email:"wali@gmail.com",Password:"wali123"},
		{Name:"Sir ",Phone:"0320-9865321",Email:"wali@gmail.com",Password:"wali123"}
		
	];
	
	$scope.insertStudent=function(Name,Phone,Email,Password)
	{
		
		if(Name=="")
			{
				alert("Name cannot be null");
				return;
			}
		
		var obj={Name:Name,Phone:Phone,Email:Email,Password:Password};
		$scope.Students.push(obj);
		$scope.Name=$scope.Phone=$scope.Email=$scope.Password="";
		
		
		
		
	};
	
	$scope.Delete=function($index)
	{
		$scope.Students.splice($index,1);
		alert("Delete Successfully");
	};
	
	var selectedIndex=-1;
	$scope.IsEdit=false;
	$scope.Edit=function($index){
		
		var obj=$scope.Students[$index];
		
		$scope.Name=obj.Name;
		$scope.Phone=obj.Phone;
		$scope.Email=obj.Email;
		$scope.Password=obj.Password;
		selectedIndex=$index;
		$scope.IsEdit=true;
		
		
	};
	
	
	
	
	$scope.update=function(Name,Phone,Email,Password)
	{
		
		var obj=$scope.Students[selectedIndex];
		obj.Name=Name;
		obj.Phone=Phone;
		obj.Email=Email;
		obj.Password=Password;
		$scope.IsEdit=false;
		
		$scope.Name=$scope.Phone=$scope.Email=$scope.Password="";
		
	};
	
	
	
	
	
	
	
});

















