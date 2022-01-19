const sortBarStyles = {
    control: (base, state) => ({
      ...base,
      background: "#D89F9F",
      borderColor: state.isFocused ? "#2C2828" : "#D1D1D1",
      boxShadow: state.isFocused ? null : null,
      dropdownIndicator: "#D89F9F", 
      "&:hover": {
        borderColor: state.isFocused ? "#76711A" : "#316FBE"
      },
    }),
};
 
export default sortBarStyles;