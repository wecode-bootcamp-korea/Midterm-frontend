const variables = {
  flex: (direction = "row", justify = "", align = "") => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

export default variables;
