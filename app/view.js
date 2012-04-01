App.View = (function(lng, app, undefined) {
	lng.View.Template.create(
        'game-tmp',
        '<li id={{id}}><img src="./assets/images/{{channel-icon}}" class="icon">\
            {{team1}} - {{team2}}\
            <small style="color:#f00;margin-top:3px">\
            	{{time}} - \
            	<span style="color:#444"> \
            		{{competition}} - {{channel}}\
            	</span>\
            </small>\
         </li>'
    );
    var x=lng.View.Template.exists('game-tmp')
    lng.View.Template.create(
        'day-tmp',
        '<section id="day{{id}}"> <header data-title="{{date}}">\
        <a href="#d1" data-icon="right" data-target="section" class="onright button" style="float:right"></a> \
        </header><article id="day{{id}}games" class="list scrollable"><ul id="day{{id}}games_list"></ul></article></section>'
    );
    var y=lng.View.Template.exists('day-tmp')

        
    
	return{

	}

})(LUNGO, App);