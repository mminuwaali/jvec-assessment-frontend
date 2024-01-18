export function formatNestError(error: any, defaultMessage = 'Something went wrong') {
    try {
        const errorMessage = error?.response?.data?.message || error?.message || defaultMessage;

        console.log(error);
        if (Array.isArray(errorMessage)) return errorMessage.filter(msg => msg.trim() !== '').join('\n') || defaultMessage;
        return errorMessage;
    } catch (e) { return defaultMessage; };
};
