export const customStyles = {
  //BUTTONS ...
  BTNPrimary: {
    //   background: "#1915AC",
    background:
      "linear-gradient(90deg, rgba(25,21,172,1) 0%, rgba(41,18,173,1) 49%, rgba(61,15,167,1) 100%)",
    color: "#fff",
    borderRadius: 1,
    padding: "8px 24px",
    boxShadow: "none",
    transition: "all 0.3s",
    "& p": {
      fontWeight: 500,
      fontSize: 14,
    },
  },
  BTNSecondary: {
    bgcolor: "#fff",
    color: "#16171A",
    borderRadius: 1,
    padding: "8px 24px",
    boxShadow: "none",
    transition: "all 0.3s",
    "&:hover": {
      bgcolor: "#fff",
    },
    "& p": {
      fontWeight: 500,
      transition: "all 0.3s ease",
    },
  },
  INPPrimary: {
    fontSize: 12,
    "& label.Mui-focused": {
      border: "1px solid transparent",
    },
    "& input::placeholder": {
      fontSize: 12,
    },
    "& .MuiOutlinedInput-root": {
      bgcolor: "#fff",
      height: 45,
      borderRadius: 2,
    },
  },
  INPSearch: {
    fontSize: 12,
    "& label.Mui-focused": {
      border: "1px solid transparent",
    },
    "& .MuiOutlinedInput-root": {
      bgcolor: "#42454A",
      color: "#fff",
      height: 38,
      borderRadius: 2,
    },
  },
  INPHspForm: {
    fontSize: 12,
    bgcolor: "#191A1D",
    color: "#fff",
    height: 38,
    border: "1px solid #424548",
    borderRadius: 2,
    "& label.Mui-focused": {
      border: "1px solid transparent",
    },
    "& .MuiOutlinedInput-root": {
      bgcolor: "#191A1D",
      color: "#fff",
      height: 38,
      border: "1px solid #424548",
      borderRadius: 2,
    },
  },
};
