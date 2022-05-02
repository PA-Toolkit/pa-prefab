function randInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export function randId(): string {
    const idChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*_+{}|:<>?,./;'[]▓▒░▐▆▉☰☱☲☳☴☵☶☷►▼◄▬▩▨▧▦▥▤▣▢□■¤ÿòèµ¶™ßÃ®¾ð¥œ⁕(◠‿◠✿)";
    let id = "";
    for (let i: number = 0; i < 16; i++) {
        id += idChars[randInt(idChars.length)];
    }
    return id;
}