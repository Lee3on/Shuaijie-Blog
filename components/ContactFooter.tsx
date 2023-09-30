import * as React from 'react'

export const ContactFooter: React.FC = () => {
    return (
        <div>
            <div className="wf-section">
                <div className="container w-container">
                    <div className="divider" />
                </div>
            </div>
            <div id="footer" className="footer wf-section">
                <div className="container w-container">
                    <div className="title-wrapper">
                        <h3>Contact.</h3>
                    </div>
                    <div className="w-layout-grid contact-grid">
                        <div
                            className="contact-form"
                        >
                            <div className="w-form">
                                <form
                                    id="wf-form-Contact-Form"
                                    name="wf-form-Contact-Form"
                                    data-name="Contact Form"
                                    method="get"
                                >
                                    <div className="field-group">
                                        <input
                                            type="text"
                                            className="field-input w-input"
                                            maxLength={256}
                                            name="Name"
                                            data-name="Name"
                                            placeholder="Name"
                                            id="Name"
                                        />
                                    </div>
                                    <div className="field-group">
                                        <input
                                            type="email"
                                            className="field-input w-input"
                                            maxLength={256}
                                            name="Email"
                                            data-name="Email"
                                            placeholder="Enter address"
                                            id="Email-3"
                                            required
                                        />
                                    </div>
                                    <div className="field-group">
                                        <input
                                            id="Phone"
                                            type="tel"
                                            className="field-input w-input"
                                            maxLength={256}
                                            name="Phone"
                                            data-name="Phone"
                                            placeholder="Phone number"
                                        />
                                    </div>
                                    <div className="field-group">
                                        <textarea
                                            id="Field"
                                            name="Field"
                                            maxLength={5000}
                                            data-name="Field"
                                            placeholder="Comment here"
                                            className="field-input field-textarea w-input"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        defaultValue="Submit"
                                        data-wait="Please wait..."
                                        className="w-button button"
                                    />
                                </form>
                                <div className="success-message w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="error-message w-form-fail">
                                    <div>
                                        Oops! Something went wrong while submitting the form.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="contact-info-wrapper"
                        >
                            <h6>Shuaijie Li</h6>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <img
                                        src="/envelope.svg"
                                        loading="lazy"
                                        className="contact-info-icon"
                                    />
                                    <div className="contact-info-content">sli964@wisc.edu</div>
                                </div>
                                <div className="contact-info-item">
                                    <img
                                        src="/iphone.svg"
                                        loading="lazy"
                                        className="contact-info-icon"
                                    />
                                    <div className="contact-info-content">
                                        +1 (608)-707-7076
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <img
                                        src="/pin.svg"
                                        loading="lazy"
                                        className="contact-info-icon"
                                    />
                                    <div className="contact-info-content">
                                        1210 W Dayton St, Madison, WI 53706
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}