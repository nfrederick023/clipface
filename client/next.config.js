import config from "config";

export const publicRuntimeConfig = {
    // Will be available on both server and client
    pageTitle: config.get("page_title"),
};
export const compiler = {
    // ssr and displayName are configured by default
    styledComponents: true,
};
