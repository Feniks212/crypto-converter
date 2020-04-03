import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      marginBottom: "20px",
    },
    currencyInput: {
      minWidth: "calc(70% - 10px)",
    },
    currencyType: {
      minWidth: "30%",
    },
    table: {
      minWidth: 650,
    },
    currencyIcon: {
      width: 18,
      height: 18,
      borderRadius: 50,
    },
    redColumn: {
      backgroundColor: "#ffdada",
    },
    greenColumn: {
      backgroundColor: "#d8ffc4",
    },
    rowCurrency: {
      cursor: "pointer",
    },
  })
);

export default useStyles;
