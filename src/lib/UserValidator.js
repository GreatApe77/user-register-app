class UserValidator {
	/**
	 *
	 * @param {string} email
	 * @returns Um booleano se o email for vàlido ou não
	 */
	 static validEmail(email) {
		return email.includes("@");
	}

	/**
	 *
	 * @param {string} password
	 * @returns true se a senha for válida
	 */
	static validPassword(password) {
		const specialCharacters = "@#$%&*()_+<>?/!.;:[]{}-=";
		const validPassword =
			typeof password === "string" &&
			password.length >= 8 &&
			password.split("").some((char) => specialCharacters.includes(char));

        return validPassword;
	}

    /**
     * 
     * @param {string} nickname 
     * @returns true se o nickname for válido
     */
    static validNickname(nickname){
        if(typeof nickname !== "string") return false;
        const trimmedNickname = nickname.trim();
        return trimmedNickname.length >= 4 && !trimmedNickname.includes(" ");
    }
}

module.exports = UserValidator;