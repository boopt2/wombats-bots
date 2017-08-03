((state, timeLeftFn) => {
    const turnDirections = ['right', 'left', 'about-face'];
    const turnDirection = turnDirections[Math.floor(Math.random() * 3)];

    const smokeDirections = ['forward', 'backward', 'left', 'right', 'drop'];
    const smokeDirection = smokeDirections[Math.floor(Math.random() * 5)];
    //check south
    var sClear = (state.arena[4][3].contents.type == "open" || state.arena[4][3].contents.type == "food");
    var nClear = (state.arena[2][3].contents.type == "open" || state.arena[2][3].contents.type == "food");
    var eClear = (state.arena[3][4].contents.type == "open" || state.arena[3][4].contents.type == "food");
    var wClear = (state.arena[3][2].contents.type == "open" || state.arena[3][2].contents.type == "food");
    if ("s" == state.arena[3][3].contents.orientation) {
        if (state.arena[4][3].contents.type == "wood-barrier"  || state.arena[4][3].contents.type == "wombat" || state.arena[5][3].contents.type == "wood-barrier"  || state.arena[5][3].contents.type == "wombat" || state.arena[6][3].contents.type == "wood-barrier"  || state.arena[6][3].contents.type == "wombat"){
            return {
                'command': { action: 'shoot', metadata: {} },
                'state': {}
            }
        } 
        if (sClear){
            const rand = Math.floor(Math.random() * 20);
            if (rand > 4) {
                return {
                    'command': {
                        'action': 'move',
                        'metadata': {}
                    },
                    'state': {}
                    }
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
        if (state.arena[3][4].contents.type == "wood-barrier"  || state.arena[3][4].contents.type == "wombat" || state.arena[3][5].contents.type == "wood-barrier"  || state.arena[3][5].contents.type == "wombat" || state.arena[3][6].contents.type == "wood-barrier"  || state.arena[3][6].contents.type == "wombat"){
            return {
                'command': { action: 'shoot', metadata: {} },
                'state': {}
            }
        } 
        if (eClear){
            const rand = Math.floor(Math.random() * 20);
            if (rand > 4) {
                return {
                    'command': {
                        'action': 'move',
                        'metadata': {}
                    },
                    'state': {}
                    }
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
        if (state.arena[2][3].contents.type == "wood-barrier"  || state.arena[2][3].contents.type == "wombat" || state.arena[1][3].contents.type == "wood-barrier"  || state.arena[1][3].contents.type == "wombat" || state.arena[0][3].contents.type == "wood-barrier"  || state.arena[0][3].contents.type == "wombat"){
            return {
                'command': { action: 'shoot', metadata: {} },
                'state': {}
            }
        } 
        if (nClear){
            const rand = Math.floor(Math.random() * 20);
            if (rand > 4) {
                return {
                    'command': {
                        'action': 'move',
                        'metadata': {}
                    },
                    'state': {}
                    }
            }
        }
        else if (sClear){
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
        else if (wClear) {
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
        else if (eClear) {
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
    else if ("w" == state.arena[3][3].contents.orientation)  {
        if (state.arena[3][2].contents.type == "wood-barrier"  || state.arena[3][2].contents.type == "wombat" || state.arena[3][1].contents.type == "wood-barrier"  || state.arena[3][1].contents.type == "wombat" || state.arena[3][0].contents.type == "wood-barrier"  || state.arena[3][0].contents.type == "wombat"){
            return {
                'command': { action: 'shoot', metadata: {} },
                'state': {}
            }
        } 
        if (wClear){
            const rand = Math.floor(Math.random() * 20);
            if (rand > 4) {
                return {
                    'command': {
                        'action': 'move',
                        'metadata': {}
                    },
                    'state': {}
                    }
            }
        }
        else if (eClear){
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
        else if (sClear) {
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
        else if (nClear) {
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
    return {
        'command': { 
                action: 'turn', 
                metadata: {
                        direction: 'left'
                }
            },
                'state': {}
    }
});


