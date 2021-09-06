AFRAME.registerComponent('teleporthome', {
	init: function () {
		let redirect = () => {
  		window.location.href = "index.html";
		};

		this.el.addEventListener('click', redirect);

	}
})