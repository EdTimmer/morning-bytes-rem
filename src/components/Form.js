import React from 'react';
import './Form.css';
import ButtonComponent from './ButtonComponent';

const Form = () => {
  return (
    <div className="section-book">
      <div className="book">
        <div className="u-margin-bottom-big">
          <h2 className="heading-primary">book your trip now!</h2>
        </div>

        <div className="book__form">
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Full Name"
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">
              Full name
            </label>
          </div>

          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email address"
              id="email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email address
            </label>
          </div>

          <div className="form__group u-margin-bottom-medium">
            <div className="form__radio-group">
              <input
                type="radio"
                className="form__radio-input"
                id="small"
                name="size"
              />
              <label htmlFor="small" className="form__radio-label">
                <span className="form__radio-button"></span>
                Small tour group
              </label>
            </div>

            <div className="form__radio-group">
              <input
                type="radio"
                className="form__radio-input"
                id="large"
                name="size"
              />
              <label htmlFor="large" className="form__radio-label">
                <span className="form__radio-button"></span>
                Large tour group
              </label>
            </div>
          </div>

          <div className="form__group">
            <ButtonComponent label={"Next step"} arrow={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;