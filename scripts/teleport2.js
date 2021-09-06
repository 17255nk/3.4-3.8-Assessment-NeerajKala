AFRAME.registerComponent('teleport2', {
	init: function () {
		let redirect = () => {
  		window.location.href = "general.html";
		};

		this.el.addEventListener('click', redirect);

	}
})