import React from "react";
import { observer, inject } from "mobx-react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import ConverterStore from "../../stores/converterStore";
import CurrenciesStore from "../../stores/currenciesStore";

type IConverterBlock = {
  classes: any;
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
};

const ConverterBlock: React.FC<IConverterBlock> = inject(
  "currenciesStore",
  "converterStore"
)(
  observer(({ classes, currenciesStore, converterStore }) => {
    const [selectedOutCoin, setSelectedOutCoin] = React.useState("USD");
    const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);

    return (
      <Paper className={classes.paper}>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField fullWidth label="Сумма" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Валюта
            </InputLabel>
            <Select value={converterStore?.getSelectedCoin.name || ""}>
              {coins.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField fullWidth label="Сумма" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Валюта
            </InputLabel>
            <Select onChange={e => setSelectedOutCoin(e.target.value as string)} value={selectedOutCoin}>
              <MenuItem value="USD">USD</MenuItem>
              {coins.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Paper>
    );
  })
);

export default ConverterBlock;
