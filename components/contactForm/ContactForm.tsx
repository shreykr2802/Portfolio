import { Icon } from "@iconify/react";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowContactForm } from "../../redux/slices/appSlice";
import classes from "./ContactForm.module.scss";

const ContactForm = () => {

    const dispatch = useDispatch();

    const showContactForm = () => {
        dispatch(setShowContactForm());
    }

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [status, setStatus] = useState<string>('');

    const submitContactInformation = (event: SyntheticEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data: any = new FormData(form);
        fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.ok) {
                    setStatus("OK");
                    showContactForm();
                } else {
                    setStatus("Not OK");
                }
            });
    }

    return (
        <div className={classes['contact-form']}>
            <Icon icon="ant-design:close-outlined" fontSize="70" color="white" className={classes['close-button']} onClick={showContactForm} />
            <form onSubmit={submitContactInformation} action="https://formspree.io/f/moqkqkgo" method="POST" className={classes['contact-form-input-area']}>
                <div className={classes['name-email-input']}>
                    <label className={classes['input-section-label']}>Name</label>
                    <input type="text" name="name" className={classes['input-text']} value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className={classes['name-email-input']}>
                    <label className={classes['input-section-label']}>Email</label>
                    <input type="email" name="email" className={classes['input-text']} value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className={classes['name-email-input']}>
                    <label className={classes['input-section-label']}>Message</label>
                    <textarea className={classes['input-textarea']} name="message" rows={10} cols={48} value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                {status === "Not OK" && <p>Error while submitting the form</p>}
                <button type="submit" className={classes['submit-button']}>Submit</button>
            </form>
        </div>
    )
};

export default ContactForm;