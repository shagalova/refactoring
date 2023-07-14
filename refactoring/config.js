export const cvs = document.getElementById("game")
export const ctx = cvs.getContext("2d")

export let state = {   
        current : 0,
        getReady : 0,
        game : 1,
        over : 2
    }
export const startBtn = {
        x : 120,
        y : 263,
        w : 83,
        h : 29,
    }
export let lvl = {
        current : 0,
        easy : 1,
        normal : 2,
        hard : 3
}
