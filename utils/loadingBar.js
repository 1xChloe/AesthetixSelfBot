class LoadingBar {
    #settings;
    constructor(settings) {
        this.#settings = settings ?? {
            full_char: "█",
            empty_char: "░",
            left_corner: ">",
            right_corner: "<",
            steps: 10
        }
    }
    generate(value, max) {
        var count = Math.round(Math.min(Math.max((value / max), 0), 1) * this.#settings.steps)
        return this.#settings.left_corner + this.#settings.full_char.repeat(count) + this.#settings.empty_char.repeat(this.#settings.steps - count) + this.#settings.right_corner
    }
}
module.exports = LoadingBar