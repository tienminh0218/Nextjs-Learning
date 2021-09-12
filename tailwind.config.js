module.exports = {
    module: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "3xl": "2000px",
            },
        },
    },
    variants: {
        extend: {
            animation: ["group-hover"],
            textColor: ["active"],
            padding: ["last"],
            fontWeight: ["group-hover"],
            zIndex: ["hover"],
            scale: ["active", "group-hover"],
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
