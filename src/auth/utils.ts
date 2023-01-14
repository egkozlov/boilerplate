// eslint-disable-next-line no-useless-escape
export const isEmailInvalid = (value: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
