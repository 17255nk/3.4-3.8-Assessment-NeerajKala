AFRAME.registerComponent('teleport3', {
	init: function () {
		let redirect = () => {
  		window.location.href = "b-block.html";
		};

		this.el.addEventListener('click', redirect);

	}
})