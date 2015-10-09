$(document).ready(function(e) {
	var feed = new Instafeed({
		get: 'user',
		userId: 1394140253,
		clientId: '4afdf1c4431b4beba54f28c76dc76a56',
		accessToken: '1394140253.467ede5.e402a2beb3034816957181a3197590ed',
		template: '<a href="{{link}}" class="instagram-item" target="_blank"><img src="{{image}}"/></a>',
		after: function(){
			e('#instafeed').simplyScroll({
				speed: 1,
				frameRate: 20,
				orientation: 'horizontal',
				direction: 'forwards'
			});
		}
	});
	feed.run();
});
