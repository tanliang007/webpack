import css from './css/1.css';

//一些es6 代码
var link = function(height = 50, color = 'red', url = 'http://azat.co') {
	  console.log(height, color,url)
}

const first='tanliang'
var name = `Your name is ${first}`;

const a=()=>{
	console.log(arguments)
	}
	a( )

	class baseModel {
		constructor(options, data) { // class constructor，node.js 5.6暂时不支持options = {}, data = []这样传参
			this.name = 'Base';
			this.url = 'http://azat.co/api';
			this.data = data;
			this.options = options;
		 }
	 
			getName() { // class method
					console.log(`Class name: ${this.name}`);
			}
	}
	console.log(new baseModel())