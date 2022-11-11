import { getAsYouType } from 'awesome-phonenumber';

const ayt = getAsYouType('PK');
export const formatPhoneNumber = (phoneNumber) => {
    ayt.reset(phoneNumber);
    const res = ayt.getPhoneNumber();

    let isNumerValid;
    const formattedPhoneNumber = res.g.number.national ? res.g.number.national : phoneNumber;

    if (!res.g.valid || res.g.regionCode != 'PK') {
        isNumerValid = false;
    } else {
        isNumerValid = true;
    }

    return {
        formattedNumber: formattedPhoneNumber,
        isValid: isNumerValid
    }
}