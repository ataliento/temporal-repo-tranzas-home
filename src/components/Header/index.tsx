import React from "react";
import { Search } from "@architecture-it/stylesystem";
import { Box, Grid, Typography } from "@mui/material";

import styles from "./index.module.scss";

interface HeaderProps {
  title: string;
  subtitle: string;
  onKeyDown?: () => void;
}

const REGEX = /^[+!]{0,1}?[a-zA-Z0-9 ]{0,3}?[0-9 ]{0,7}?[0-9- ]{0,1}?[0-9 ]{0,4}$/;

const Header = ({ title, subtitle }: HeaderProps) => {
  const [valueInput, setValueInput] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (valueInput === "") {
      setError(null);
    }
  }, [valueInput]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
  };

  const handleOnClick = () => {
    if (REGEX.test(valueInput) && valueInput.length >= 9) {
      window.open(
        encodeURI(`https://www.andreani.com/#!/informacionEnvio/${valueInput}`),
        "_blank"
      );
      setError(null);
    } else if (valueInput.length < 9 || valueInput.length > 15) {
      setError("El número de seguimiento debe tener entre 9 y 15 caracteres.");
    } else if (valueInput.search(/[A-Za-z0-9]/)) {
      setError("El número ingresado es incorrecto. Por favor, ingrese un valor correcto.");
    }
  };

  return (
    <Grid container className={styles.root} component="section">
      <Grid container item className={styles.text} direction="column">
        <Typography component="h1" variant="h3">
          {title}
        </Typography>
        <Typography color="var(--gray-800)" component="h2" variant="h4">
          {subtitle}
        </Typography>
      </Grid>

      <Grid container item className={styles.searchContainer}>
        <Search
          fullWidth
          placeholder="Ingresá el número de seguimiento"
          size="large"
          sx={{ boxShadow: { xs: "0px 2px 6px #0000001F", md: "none" } }}
          value={valueInput}
          variant="secondary"
          onChange={handleOnChange}
          onClick={handleOnClick}
        />
        {Boolean(error) && (
          <Box className={styles.error}>
            <span>{error}</span>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
