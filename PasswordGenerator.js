class PasswordGeneratorConfig {

    constructor(
        length,
        useLowercaseLetters,
        useUppercaseLetters,
        useNumbers,
        useSymbols) {

        this.length = Number.isFinite(length) ? Number(length) : 20;
        this.useLowercaseLetters = Boolean(useLowercaseLetters);
        this.useUppercaseLetters = Boolean(useUppercaseLetters);
        this.useNumbers = Boolean(useNumbers);
        this.useSymbols = Boolean(useSymbols);
    }

}

class PasswordGenerator {

    run() {
        console.info("Not implemented");
    }

}

var generator = new PasswordGenerator();

generator.run();
