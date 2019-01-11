import Types from './../type';

export const onThemeChange = (theme) => {
    return { type: Types.THEME_CHANGE,theme}
}