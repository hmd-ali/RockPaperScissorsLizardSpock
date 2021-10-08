const moves = [
    {
        id: 0,
        name: 'rock',
        beats: [2, 3],
        losesTo: [4, 1]
    },
    {
        id: 1,
        name: 'paper',
        beats: [0, 4],
        losesTo: [2, 3]
    },
    {
        id: 2,
        name: 'scissors',
        beats: [1, 3],
        losesTo: [0, 4]
    },
    {
        id: 3,
        name: 'lizard',
        beats: [4, 1],
        losesTo: [0, 2]
    },
    {
        id: 4,
        name: 'spock',
        beats: [2, 0],
        losesTo: [1, 3]
    },

]

export default{
    moves
}