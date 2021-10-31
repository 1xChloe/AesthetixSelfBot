module.exports = class Functions {

    static sleep(delay) {
        let start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    static mock(str) {
        let result;
        for (let i = 0; i < str.length; i++) {
            if (i % 2 == 0) result += str.charAt(i).toUpperCase()
            else result += str.charAt(i);
        }
        return result.slice(9)
    }

    static randomTime(one, two) {
        return Math.floor(Math.random(one) * two)
    }
}