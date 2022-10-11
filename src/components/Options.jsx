import React from 'react';

const Options = ({ option, correctAnshandler }) => {



    return (
        <div className="col">
            <div className="card ml-2 p-2">
                <div className="form-check ml-2">
                    <input onChange={() => correctAnshandler(option)} className="form-check-input" type="radio" name="flexRadioDefault" />
                    <label className="form-check-label" >
                        {option}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Options;