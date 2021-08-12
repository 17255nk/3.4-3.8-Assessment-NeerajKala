AFRAME.registerComponent('teleporthome', {
	init: function () {

		let sky = document.querySelector("#sky");

		
		let changeSky = () => {

			sky.setAttribute("src", "#area1");
		};

		this.el.addEventListener('click',changeSky);

	}
});