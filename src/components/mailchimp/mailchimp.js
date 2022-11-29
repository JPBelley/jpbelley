import React, { useState, useRef } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

const MailchimpSignup = () => {
// export default class MailchimpSignup extends React.Component {
    const [email, setEmail] = useState('');
    const [register, setRegister] = useState(false);
    // const listFields  = '';
    // Since `addToMailchimp` returns a promise, you
    // can handle the response in two different ways:

    // Note that you need to send an email & optionally, listFields
    // these values can be pulled from React state, form fields,
    // or wherever.  (Personally, I recommend storing in state).

    // 1. via `.then`
    const _handleSubmit = (e) => {
        e.preventDefault();
        addToMailchimp(email) // listFields are optional if you are only capturing the email address.
            .then(data => {
                // I recommend setting data to React state
                // but you can do whatever you want (including ignoring this `then()` altogether)
                if (data.result == "success") setRegister(true);
                console.log(data.result)
            })
            .catch(() => {
                // unnecessary because Mailchimp only ever
                // returns a 200 status code
                // see below for how to handle errors
            })
    }

    // 2. via `async/await`
    // const _handleSubmit = async (e) => {
    // const _handleSubmit = async (e) => {
        // e.preventDefault();
        // const result = await addToMailchimp(email, listFields)
        // console.log(result);
        // I recommend setting `result` to React state
        // but you can do whatever you want
    // }
    console.log(email);


    return (
        <form onSubmit={_handleSubmit} id="signup">
            {!register ? 
                <>
                    <div className="mc-field-group">
                        <input 
                            type="email"
                            value={email}
                            name="EMAIL" 
                            className="required email" 
                            placeholder="Email address"
                            id="mce-EMAIL" 
                            onChange={(value) => setEmail(value.target.value)} 
                            required 
                        />
                        <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                    </div>
                    <button className="mailchimp-submit button button-outline" type="submit" form="signup" value="Submit" style={{marginTop: '10px'}}>Start to learn</button>
                </>
            :
                <a className="button button-outline" href="https://jpbelley.github.io/code-editor/#/editor">Learn now</a>
            }
        </form>
    )
}

export default MailchimpSignup;
