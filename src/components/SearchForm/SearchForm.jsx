import {Form, Field} from 'react-final-form'
import {Button} from "@mui/material";
import Input from "../Input/Input.jsx"
import {useDispatch} from "react-redux";
import {fetchInfo} from "../../redux/weatherSlicer.js";
import styles from "./SearchForm.module.css"
import {useEffect} from "react";

const SearchForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        console.log("Form Submitted with:", values);
        const cityName = values.firstName;
        dispatch(fetchInfo(cityName));


        if (!cityName) {
            console.error("City name is empty");
            return;
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            render={({handleSubmit}) => (
                <form className={styles.searching__form} onSubmit={handleSubmit}>
                    <Field
                        className={styles.searching__input}
                        name="firstName"
                        component={Input}
                        placeholder="First Name"
                    />

                    <div>
                        <Button type="submit" variant="contained">Search</Button>
                    </div>


                </form>
            )}
        />
    );
}
export default SearchForm