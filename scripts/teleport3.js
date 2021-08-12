AFRAME.registerComponent('teleport3', {
	init: function () {

		let sky = document.querySelector("#sky");


		let changeSky = () => {

			sky.setAttribute("src", "#area4");
		};

		this.el.addEventListener('click',changeSky);

	}
});