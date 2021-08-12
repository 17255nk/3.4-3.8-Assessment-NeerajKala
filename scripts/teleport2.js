AFRAME.registerComponent('teleport2', {
	init: function () {
		let sky = document.querySelector("#sky");


		let changeSky = () => {

			sky.setAttribute("src", "#area3");
		};

		this.el.addEventListener('click',changeSky);

	}
});