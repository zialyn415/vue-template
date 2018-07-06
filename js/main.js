// #7,8,9
var todo = new Vue({
	el:'#todo',
	data:{
		newTask:'',
		todoList:[]
	},
	// #13,14
	methods:{
		addTask:function() {
			var task = this.newTask;
			this.todoList.push(task)
			// #18 (from here to this.todoList.splice)
			this.newTask='';
		},
		removeTask: function(task) {
			var index = this.todoList.indexOf(task);
			this.todoList.splice(index,1);
		}
	}
});