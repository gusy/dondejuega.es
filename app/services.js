App.Services = (function(lng, app, undefined) {
	
	function channelIcon(channels){
		var icon="other.png";
		if(channels==null){
			return(icon);
		}
		if(channels.indexOf("La Sexta") != -1){
			icon="lasexta.png";
		}
		if(channels.indexOf("Gol TV") != -1){
			icon="goltv.png";
		}
		if(channels.indexOf("Primera") != -1){
			icon="tve.png";
		}
		if(channels.indexOf("Telecinco") != -1){
			icon="tele5.png";
		}
		if(channels.indexOf("+") != -1){
			icon="plus.png";
		}
		if(channels.indexOf("C+ Liga") != -1){
			icon="plus-liga.png";
		}
		if(channels.indexOf("Canal + L") != -1){
			icon="plus-liga.png";
		}
		if(channels.indexOf("C+") != -1){
			if(channels.indexOf("Gol") != -1){
				icon="goltv-liga-icon.png";
			}
		}
		if(channels.indexOf("Canal +") != -1){
			if(channels.indexOf("Gol") != -1){
				icon="goltv-liga.jpg";
			}
		}
		return(icon);
	};

	function limitName(name){
		name=name.replace(/  /g,"");
		if(name.length>14){
			var words=name.split(' ');
			if(name=="Internacional"){
				var x=3;
			}
			if(words.length>2){
				for(var i=0;i<words.length;i++){
					if(words[i].length>7){
						words[i]=words[i].charAt(0)+'.'
						return(words.join(" "));
					}
				}
			}
			return(words.join(" "));	
		}else{
			return(name);
		}
	}

	var url = 'example.com';
	var data={}; //params

	lng.Service.get(url, data, function(response) {
    	
    	gamecounter=0;
    	daycounter=1;
	    for (var key in response) {
	    	if(daycounter>6){
	    		break;
	    	}
			var day = response[key];
			if(daycounter==1){
				lng.Dom.query("#main > header > h1").html(key)

			}else{
				lng.Dom.query("#day"+daycounter+" > header > h1").html(key)

			}
			var games = [];
			for(var i=0;i<day.length;i++){
				var game=day[i];
				gamecounter++;
				game['id']="g"+gamecounter;
				game['channel-icon']=channelIcon(game.channel);
				game['team1']=limitName(game['team1']);
				game['team2']=limitName(game['team2']);
				games.push(game);
			}
			var parameters = {
            container_id: 'day'+daycounter+'games',
            template_id: 'game-tmp',
            data: games
	        };
	        lng.View.Template.List.create(parameters);	
	        daycounter++;
		}    
		
        


        

 	});

    return {

    }

})(LUNGO, App);
