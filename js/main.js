'use strict';

function repo_escape(){
    stop();
}

function repo_init(){
    core_repo_init({
      'audios': {
        'boop': {
          'duration': .1,
        },
      },
      'globals': {
        'color_empty': 'rgb(42, 42, 42)',
        'color_orange': 'rgb(190, 100, 0)',
        'falling_coins': [],
        'frame_orange': 0,
        'frame_purple': 0,
        'interval_coins': 0,
        'interval_player': 0,
        'interval_time': 0,
        'player_x': 6,
      },
      'info-events': {
        'start-button': {
          'todo': start,
        },
      },
      'keybinds': {
        65: {},
        68: {},
        72: {
          'todo': function(){
              stop();
              start();
          },
        },
      },
      'storage': {
        'frames-per-purple': 9,
        'game-mode': 1,
        'max': 0,
        'movement-keys': 'AD',
        'ms-per-coin-move': 100,
        'ms-per-player-move': 100,
        'orange-miss': 1,
        'purple-catch': 1,
        'wrap': 0,
      },
      'storage-menu': '<table><tr><td><input id=frames-per-purple><td>Frames/Purple_Coin<tr><td><input id=max><td>Max <select id=game-mode><option value=0>Points</option><option value=1>Time</option></select><tr><td><input id=movement-keys maxlength=2><td>Move<tr><td><input id=ms-per-coin-move><td>ms/Coin_Move<tr><td><input id=ms-per-player-move><td>ms/Player_Move<tr><td><select id=orange-miss><option value=0>Disappear</option><option selected value=1>End Game</option><option value=2>Score-1</option></select><td>Orange Coin Miss<tr><td><select id=purple-catch><option value=0>End Game</option><option selected value=1>Score-1</option></select><td>Purple Coin Catch<tr><td><select id=wrap><option value=0>—</option><option value=2>←</option><option value=3>→</option><option value=1>↔</option></select><td>Wrap</table>',
      'title': 'Dropdown.htm',
    });

    // Setup game div.
    var output = '';
    for(var loop_counter = 0; loop_counter < 208; loop_counter++){
        if(loop_counter % 13 === 0
          && loop_counter !== 0){
            output += '<br>';
        }

        var color = loop_counter == 201
          ? core_storage_data['color-positive']
          : color_empty;

        output +=
          '<input class=gridbutton disabled id=' + loop_counter
          + ' style="background:' + color
          + '" type=button>';
    }
    document.getElementById('game-div').innerHTML = output + '<br>';

    stop();
}
