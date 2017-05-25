'use strict';
//d3 has already been "imported"

//Add an event listener to the image so that when the mouse enters ('mouseenter')
//its `src` changes to 'img/surprised.png'

d3.select('#face').on('mouseenter',function(){
	d3.select(this).attr('src','img/surprised.png')
})
.on('mouseleave',function(){
	d3.select(this).attr('src','img/happy.png')
})





//Add an event listener to the image so that when the mouse leaves ('mouseleave')
//its source changes back to `img/happy.png'



//Add an event listener to the #purplize button to respond to user clicks.
//When the user clicks the button, add the CSS class `purple` to the `<body>`
//Use the `classed()` method: https://github.com/d3/d3-selection#selection_classed

d3.select('#purplize').on('click',function(){
	d3.select('body').classed('purple',true)
})





//Add an event listener to the #addButton so that when it is clicked,
//the text inside the <input> element is added as a NEW <li> item to the list.
//NOTE: You can get what value is typed into the <input> using the `property()`
//method, passing it 'value' as the property to access.

d3.select('#addButton').on('click',function(){
	var val = d3.select('#contentBox').property('value')
	d3.select('#list').append('li').text(val)
	d3.select('#list').selectAll('li').on('click',function(){
		d3.select(this).remove()
	})
})





//Bonus: In the above event callback, add an event listener to EACH new <li>
//so that when that item is clicked, it is removed from the page.
//Hint: if you create a variable inside a function, that variable will remain
//available by unique to any OTHER functions defined at the same scope. This
//is called a "closure".







