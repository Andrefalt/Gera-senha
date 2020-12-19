class PasswordGeneratorConfig {

    constructor(
        length,
        useLowercaseLetters,
        useUppercaseLetters,
        useNumbers,
        useSymbols) {

        const lengthDefault = 20;
        const useLowercaseLettersDefault = true;
        const useUppercaseLettersDefault = true;
        const useNumbersDefault = true;
        const useSymbolsDefault = true;

        if (length === undefined) {
            length = lengthDefault;
        }
        if (useLowercaseLetters === undefined) {
            useLowercaseLetters = useLowercaseLettersDefault;
        }
        if (useUppercaseLetters === undefined) {
            useUppercaseLetters = useUppercaseLettersDefault;
        }
        if (useNumbers === undefined) {
            useNumbers = useNumbersDefault;
        }
        if (useSymbols === undefined) {
            useSymbols = useSymbolsDefault;
        }

        this.length = Number.isFinite(length) && length > 0 ? Number(length) : lengthDefault;
        this.useLowercaseLetters = Boolean(useLowercaseLetters);
        this.useUppercaseLetters = Boolean(useUppercaseLetters);
        this.useNumbers = Boolean(useNumbers);
        this.useSymbols = Boolean(useSymbols);
    }

}

class PasswordGenerator {

    constructor(config) {
        if (!config ||
            !config.constructor ||
            config.constructor.name != PasswordGeneratorConfig.prototype.constructor.name) {

            this._config = new PasswordGeneratorConfig();

            console.info("Default configuration loaded:");
        } else {
            this._config = config;

            console.info("Configuration loaded:");
        }

        console.info(JSON.stringify(this._config, null, 2));
    }

    _getRandomNumber(min = 0, max = 9) {
        const random = Math.random();
        const range = max - min + 1;
        const number = Math.floor(random * range) + min;
        return number;
    }

    run() {
        console.info("Not implemented");
    }

}

var generator = new PasswordGenerator();

generator.run();
