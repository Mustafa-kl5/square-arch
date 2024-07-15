let squareData = {};

export function setSquareData(data) {
    squareData = data;
}

export function getSquareData() {
    return JSON.stringify(squareData) === "{}" ? false : squareData;
}

export function getSquareTitle() {
    return getSquareData().Main[0].title;
}
export const replaceText = (text) => {
    text = text.replace(/\*\*/g, `<strong class="black-text">`);
    text = text.replace(/->/g, "</strong>");
    text = text.replace(/##/g, "<br/>");

    return text;
};


let BASE_URL;

export const setBASEURL = (url) => BASE_URL = url;
export const getBASEURL = () => BASE_URL;