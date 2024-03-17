import {useState} from "react";
import {useForm} from "react-hook-form";
import TextBlock from "../UI/TextBlock";
import arrowIcon from "../../assets/icons/icon-arrow.svg";
import classes from "./ContactForm.module.scss";

const ContactForm = () => {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},
        reset
    } = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (isValid) {
            setSubmitSuccess(true);
            reset();
        }
    };

    return (
        <section className={classes.wrapper}>
            <div className={classes.title}>
                <TextBlock title="Connect with us" hasLine={false}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <div className={classes.formGroup}>
                    <input className={`${classes.textInput} ${errors.name && classes.error}`}
                           type="text"
                           name="name"
                           placeholder="Name"
                           {...register("name", {required: "Can’t be empty"})} />
                    {errors.name && <span className={classes.errorMessage}>{errors.name.message}</span>}
                </div>
                <div className={classes.formGroup}>
                    <input className={`${classes.textInput} ${errors.email && classes.error}`}
                           type="email"
                           name="email"
                           placeholder="Email"
                           {...register("email", {
                               required: "Can’t be empty",
                               pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Must be a valid email"}
                           })}/>
                    {errors.email && <span className={classes.errorMessage}>{errors.email.message}</span>}
                </div>
                <div className={classes.formGroup}>
                    <textarea className={`${classes.textInput} ${classes.message} ${errors.message && classes.error}`}
                              name="message"
                              placeholder="Message"
                              {...register("message", {required: "Can’t be empty"})}></textarea>
                    {errors.message && <span className={classes.errorMessage}>{errors.message.message}</span>}
                </div>
                <button onClick={onSubmit}
                        disabled={isSubmitting}
                        type="submit"
                        className={classes.formBtn}>
                    <img src={arrowIcon} alt="Submit"/>
                </button>
                {submitSuccess && <span className={classes.successMessage}>Thank you for getting in touch!</span>}
            </form>
        </section>
    );
};

export default ContactForm;