AFRAME.registerComponent('teleport1', {
	init: function () {
		let redirect = () => {
  		window.location.href = "dtech.html";
		};

		this.el.addEventListener('click', redirect);

	}
})