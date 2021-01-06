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

    _getRandomLetter(firstLetter, lastLetter) {
        const codeOfLetter = this._getRandomNumber(
            firstLetter.charCodeAt(0),
            lastLetter.charCodeAt(0)
        );
        const letter = String.fromCharCode(codeOfLetter);
        return letter;
    }

    _getRandomSymbol() {
        const codesFrom0to127 = [...Array(127 + 1).keys()];
        const codesWithoutSpecialChar = codesFrom0to127.filter(code => (code <= 31) === false);
        const codesWithoutSpace = codesWithoutSpecialChar.filter(code => (code === 32 || code === 127) === false);
        const codesWithoutNumbers = codesWithoutSpace.filter(code => (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0)) == false);
        const codesWithoutUppercaseLetter = codesWithoutNumbers.filter(code => (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) == false);
        const codesWithoutLowercaseLetter = codesWithoutUppercaseLetter.filter(code => (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) == false);
        const codesOfSymbols = codesWithoutLowercaseLetter;

        const codesOfSymbolsRandomIndex = this._getRandomNumber(
            0,
            codesOfSymbols.length - 1
        );
        const codeOfSymbol = codesOfSymbols[codesOfSymbolsRandomIndex];
        const symbol = String.fromCharCode(codeOfSymbol);

        return symbol;
    }

    _shuffleText(text) {
        const string = String(text);
        const arrayOfChars = string.split('');
        const arrayOfCharsInRandomOrder = arrayOfChars.sort(
            () => this._getRandomNumber(-1, 0)
        );
        const stringWithCharsInRandomORder = arrayOfCharsInRandomOrder.join('');
        return stringWithCharsInRandomORder;
    }

    generate() {
        let password = "";

        while (password.length < this._config.length) {
            if (this._config.useLowercaseLetters) {
                password += this._getRandomLetter("a", "z");
            }
            if (this._config.useUppercaseLetters) {
                password += this._getRandomLetter("A", "Z");
            }
            if (this._config.useNumbers) {
                password += this._getRandomNumber();
            }
            if (this._config.useSymbols) {
                password += this._getRandomSymbol();
            }

            if (password.length === 0) {
                console.warn("Invalid configuration. The password generated is empty.");
                break;
            }
        }

        password = this._shuffleText(password);

        if (password.length > this._config.length) {
            password = password.substr(0, this._config.length);
        }

        return password;
    }

    run() {
        const password = this.generate();
        console.info(`[${new Date().toISOString()}] Password generated:`, password);
    }

}

var config = new PasswordGeneratorConfig(30, true, true, true, true);

var generator = new PasswordGenerator(config);

generator.run();
generator.run();
generator.run();
