//Define the array default is all
var arr=['all','all','all'];
var newarr=[];
//Determine whether arr1 contains arr2
const isInclude = (arr1, arr2) => arr2.every((val) => arr1.includes(val));

//Define the filter Category function
function filterCategory(category,type,num){
	//modify the array
	arr.splice(num,1,type);

	/*Category highlighting*/ 
	var buttonId=category+'-'+type;
	let classObj = Array.from(document.getElementsByClassName(category)); //获取当前点击所属分类的按钮
	for(let btn of classObj){
		if(btn.id === buttonId){
			btn.classList.add("ActiveCategory");
		}else{
			btn.classList.remove("ActiveCategory");
		}
	}
	
	/*Filter data*/
	var dataObj=Array.from(document.getElementsByClassName('RecipeCardWrapper')); //获取所有 class 为 RecipeCardWrapper 的 dom节点数组
	
	//Filter array
	newarr=arr.filter(v => {
		return v!=='all';
	});

	//Iterate through the array to judge
	for(let item of dataObj){
		var endArr=item.getAttribute('data-attr').split(' ');
		if(isInclude(endArr,newarr)){
			item.style.display = "grid";
		}else{
			item.style.display = "none";
		}
	}
}

