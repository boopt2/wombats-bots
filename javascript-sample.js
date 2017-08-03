((state, timeLeftFn) => {
    const turnDirections = ['right', 'left', 'about-face'];
    const turnDirection = turnDirections[Math.floor(Math.random() * 3)];

    const smokeDirections = ['forward', 'backward', 'left', 'right', 'drop'];
    const smokeDirection = smokeDirections[Math.floor(Math.random() * 5)];
        for i in state.arena.length {
            for j in state.arena[0].length {

            }
        }
    //check south
    if "s" == state.arena[3][3].contents.orientation {
        return {
            'command': {
                'action': 'move',
                'metadata': {}
            },
            'state': {}
        }
    }
    else if "e" == state.arena[3][3].contents.orientation  {
        return {
            'command': {
                'action': 'move',
                'metadata': {}
            },
            'state': {}
        }
    }
    else if "n" == state.arena[3][3].contents.orientation  {
        return {
            'command': {
                'action': 'move',
                'metadata': {}
            },
            'state': {}
        }
    }
    else if "w" == state.arena[3][3].contents.orientation  {
        return {
            'command': {
                'action': 'move',
                'metadata': {}
            },
            'state': {}
        }
    }
    else {

        return {
            'command': { action: 'smoke', metadata: {} },
            'state': {}
        };
    }
});


