import React, { useState } from 'react';
import axios from 'axios';

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

    const [email, getEmail]      = useState("");
    const [country, getCountry]  = useState("");

    const validate = () => {
        if (/\S+@\S+\.\S+/.test(email) & country !== '') {
            return true;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "https://www.theworldofchaos.com/_access/import_subs.php";

        let fData = new FormData();
        fData.append('email', email);
        fData.append('country', country);

        if (validate){
            axios.post(url, fData)
            .then(response => {
                const resp = document.getElementById('submit-response');
                const form = document.getElementById('form');
                const title = document.getElementById('form-title');
                const text = document.getElementById('form-text');

                resp.innerHTML = "<p>Thanks for subscribing! Now you won't miss anything. :-)</p>";
                resp.style.display = 'flex';
                form.style.display = 'none';
                title.style.display = 'none';
                text.style.display = 'none';

                setTimeout(function() {
                    window.location.reload();
                }, 5000);
            })
            .catch(error => {
                console.log('error' + error);
                window.location.reload();
            });
        }

    }

    return (
        <>
            <form className='form' id='form'>
                <input
                    className='-text-center form-email'
                    type="email"
                    placeholder="your email"
                    value={email}
                    onChange={e=>getEmail(e.target.value)}
                />

                <select 
                    className='-text-center form-country'
                    type="select"
                    value={country}
                    onChange={e=>getCountry(e.target.value)}
                >
                    <option value=''>select your country</option>

                    {countrySelect.map(country => (
                        <option
                            key={country.id}
                            id={country.id}
                            value={country.origin}
                        >
                            {country.origin}
                        </option>
                    ))};
                </select>

                <button
                    className='-text-center form-submit'
                    type="submit"
                    value='Subscribe'
                    onClick={handleSubmit}
                    id="submit-sub"
                    disabled={!validate()}
                >
                    Submit
                </button>
            </form>

            <div id='submit-response'></div>
        </>
    )

}
