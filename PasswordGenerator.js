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

    run() {
        console.info("Not implemented");
    }

}

var generator = new PasswordGenerator();

generator.run();
