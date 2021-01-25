import menuJson from '../assets/menu.json'

var LoginService = {
	login: function () {
	    var p = new Promise(function(resolve, reject){
            resolve(menuJson.menu);
        });
        return p;
  },
}
export {
	LoginService
};