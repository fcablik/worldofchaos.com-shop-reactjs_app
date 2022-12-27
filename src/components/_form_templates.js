import React from 'react';
import { useState } from 'react';

export default function SubscriptionForm() {

    const countrySelect = [
        //* disabled countries
        // {id: '000',	 origin: 'Belarus'},
        // {id: '001',	 origin: 'Russia'},
        {id: '100',	 origin: 'Switzerland'},
        {id: '101',	 origin: 'Czechia'},
        {id: '102',	 origin: 'Austria'},
        {id: '103',	 origin: 'Germany'},
        {id: '104',	 origin: 'Slovakia'},
        {id: '105',	 origin: 'Italy'},
        {id: '106',	 origin: 'France'},
        {id: '107',	 origin: 'Belgium'},
        {id: '108',	 origin: 'Bulgaria'},
        {id: '109',	 origin: 'Croatia'},
        {id: '110',	 origin: 'Denmark'},
        {id: '111',	 origin: 'Estonia'},
        {id: '112',	 origin: 'Finland'},
        {id: '113',	 origin: 'Greece'},
        {id: '114',	 origin: 'Hungary'},
        {id: '115',	 origin: 'Ireland'},
        {id: '116',	 origin: 'Latvia'},
        {id: '117',	 origin: 'Lithuania'},
        {id: '118',	 origin: 'Luxembourg'},
        {id: '119',	 origin: 'Netherlands'},
        {id: '120',	 origin: 'Poland'},
        {id: '121',	 origin: 'Portugal'},
        {id: '122',	 origin: 'Romania'},
        {id: '123',	 origin: 'Slovenia'},
        {id: '124',	 origin: 'Spain'},
        {id: '125',	 origin: 'Sweden'},
    ];

    const [email, setEmail] = useState('');
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    console.log(formData.favColor)
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <>
            <form>
                <label>
                    <input className='-text-center' type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <select className='-text-center'
                    // value={}
                >
                    <option value='default'>select your country</option>

                    {countrySelect.map(country => (
                        <option key={country.id} id={country.id} value={country.origin}>
                            {country.origin}
                        </option>
                    ))};
                </select>

                {/* add "hidden" property to input -->  */}
                <input type='submit' value='send' />
            </form>

            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea 
                    value={formData.comments}
                    placeholder="Comments"
                    onChange={handleChange}
                    name="comments"
                />
                <input 
                    type="checkbox" 
                    id="isFriendly" 
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <br />
                
                <fieldset>
                    <legend>Current employment status</legend>
                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br />
                
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </form>
        </>
    )
}
