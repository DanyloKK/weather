import {TextField} from "@mui/material";
import styles from "./Input.module.css"
const Input = ({input,meta,...rest}) =>{
    return(
        <TextField
            className={styles.searching__input}
            {...input}
            {...rest}
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
        />
    )
}
export default Input