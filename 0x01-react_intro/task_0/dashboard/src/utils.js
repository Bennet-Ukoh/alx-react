export const getFullYear = () => {
const currentYear = new Date();
return currentYear.getFullYear();
}

export const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export const getLatestNotification = () => {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}