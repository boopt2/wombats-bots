((state, timeLeftFn) => {
    const turnDirections = ['right', 'left', 'about-face'];
    const turnDirection = turnDirections[Math.floor(Math.random() * 3)];

    const smokeDirections = ['forward', 'backward', 'left', 'right', 'drop'];
    const smokeDirection = smokeDirections[Math.floor(Math.random() * 5)];
    //check south
    sClear = (state.arena[2][3].contents.type === "open" || state.arena[2][3].contents.type === "food");
    nClear = (state.arena[4][3].contents.type === "open" || state.arena[4][3].contents.type === "food");
    eClear = (state.arena[3][4].contents.type === "open" || state.arena[3][4].contents.type === "food")
    wClear = (state.arena[3][2].contents.type === "open" || state.arena[3][2].contents.type === "food")
    if ("s" == state.arena[3][3].contents.orientation) {
        if (sClear){
            return {
                'command': {
                    'action': 'move',
                    'metadata': {}
                },
                'state': {}
            }
        }
        else if (nClear){
            return {
                'command': { 
                action: 'turn', 
                metadata: {
                    direction: 'about-face'
                }
                },
                'state': {}
            }
        }
        else if (eClear) {
            return {
                'command': { 
                action: 'turn', 
                metadata: {
                    direction: 'left'
                }
                },
                'state': {}
            }
        }
        else if (wClear) {
            return {
                'command': { 
                action: 'turn', 
                metadata: {
                    direction: 'right'
                }
                },
                'state': {}
            }
        }
        else {
            return {
                'command': { action: 'shoot', metadata: {} },
                'state': {}
            }
        }
    }
    else if ("e" == state.arena[3][3].contents.orientation)  {
        if (eClear){
            return {
                'command': {
                    'action': 'move',
                    'metadata': {}
                },
                'state': {}
            }
        }
        else if (wClear){
            return {
                'command': { 
                action: 'turn', 
                metadata: {
                    direction: 'about-face'
                }
                },
                'state': {}
            }
        }
        else if (nClear) {
            return {
                'command': { 
                action: 'turn', 
                metadata: {
                    direction: 'left'
                }
                },
                'state': {}
            }
        }
        else if (sClear) {
            return {
                'command': { 
                action: 'turn', 
                metadata: {
                    direction: 'right'
                }
                },
                'state': {}
            }
        }
        else {
            return {
                'command': { action: 'shoot', metadata: {} },
                'state': {}
            }
        }
    }
    else if ("n" == state.arena[3][3].contents.orientation)  {
        return {
            'command': {
                'action': 'move',
                'metadata': {}
            },
            'state': {}
        }
    }
    else if ("w" == state.arena[3][3].contents.orientation)  {
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


