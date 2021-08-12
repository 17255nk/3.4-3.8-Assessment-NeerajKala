AFRAME.registerComponent('teleport', {
	init: function () {

		let sky = document.querySelector("#sky");
		let changeSky = () => {

			sky.setAttribute("src", "#area2");
		};

		this.el.addEventListener('click',changeSky);

	}
});