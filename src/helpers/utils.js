export const isPalindromo = (text) => {
    return text.length >= 3 && text.toLowerCase() == text.split('').reverse().join('').toLowerCase();
};

export const minCharactersSearch = (text)  => {
    return text.length == 3; 
};

export const isId = (text)  => {
    return !isNaN(text);
};


