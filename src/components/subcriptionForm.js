import { useState } from 'react';
import axios from 'axios';

export default function SubscriptionForm() {

    const countrySelect = [
        //* disabled countries
        // {id: '000',	 origin: 'Belarus'},
        // {id: '001',	 origin: 'Russia'},
        {id: '100',	 origin: 'Afghanistan'},
        {id: '100',	 origin: 'Albania'},
        {id: '100',	 origin: 'Algeria'},
        {id: '100',	 origin: 'Andorra'},
        {id: '100',	 origin: 'Angola'},
        {id: '100',	 origin: 'Antigua and Barbuda'},
        {id: '100',	 origin: 'Argentina'},
        {id: '100',	 origin: 'Armenia'},
        {id: '100',	 origin: 'Australia'},
        {id: '100',	 origin: 'Austria'},
        {id: '100',	 origin: 'Azerbaijan'},
        {id: '100',	 origin: 'Bahamas'},
        {id: '100',	 origin: 'Bahrain'},
        {id: '100',	 origin: 'Bangladesh'},
        {id: '100',	 origin: 'Barbados'},
        {id: '100',	 origin: 'Belgium'},
        {id: '100',	 origin: 'Belize'},
        {id: '100',	 origin: 'Benin'},
        {id: '100',	 origin: 'Bhutan'},
        {id: '100',	 origin: 'Bolivia'},
        {id: '100',	 origin: 'Bosnia and Herzegovina'},
        {id: '100',	 origin: 'Botswana'},
        {id: '100',	 origin: 'Brazil'},
        {id: '100',	 origin: 'Brunei'},
        {id: '100',	 origin: 'Bulgaria'},
        {id: '100',	 origin: 'Burkina Faso'},
        {id: '100',	 origin: 'Burundi'},
        {id: '100',	 origin: 'Côte d Ivoire'},
        {id: '100',	 origin: 'Cabo Verde'},
        {id: '100',	 origin: 'Cambodia'},
        {id: '100',	 origin: 'Cameroon'},
        {id: '100',	 origin: 'Canada'},
        {id: '100',	 origin: 'Central African Republic'},
        {id: '100',	 origin: 'Chad'},
        {id: '100',	 origin: 'Chile'},
        {id: '100',	 origin: 'China'},
        {id: '100',	 origin: 'Colombia'},
        {id: '100',	 origin: 'Comoros'},
        {id: '100',	 origin: 'Congo (Congo-Brazzaville)'},
        {id: '100',	 origin: 'Costa Rica'},
        {id: '100',	 origin: 'Croatia'},
        {id: '100',	 origin: 'Cuba'},
        {id: '100',	 origin: 'Cyprus'},
        {id: '100',	 origin: 'Czechia (Czech Republic)'},
        {id: '100',	 origin: 'Democratic Republic of the Congo'},
        {id: '100',	 origin: 'Denmark'},
        {id: '100',	 origin: 'Djibouti'},
        {id: '100',	 origin: 'Dominica'},
        {id: '100',	 origin: 'Dominican Republic'},
        {id: '100',	 origin: 'Ecuador'},
        {id: '100',	 origin: 'Egypt'},
        {id: '100',	 origin: 'El Salvador'},
        {id: '100',	 origin: 'Equatorial Guinea'},
        {id: '100',	 origin: 'Eritrea'},
        {id: '100',	 origin: 'Estonia'},
        {id: '100',	 origin: 'Eswatini (fmr. "Swaziland")'},
        {id: '100',	 origin: 'Ethiopia'},
        {id: '100',	 origin: 'Fiji'},
        {id: '100',	 origin: 'Finland'},
        {id: '100',	 origin: 'France'},
        {id: '100',	 origin: 'Gabon'},
        {id: '100',	 origin: 'Gambia'},
        {id: '100',	 origin: 'Georgia'},
        {id: '100',	 origin: 'Germany'},
        {id: '100',	 origin: 'Ghana'},
        {id: '100',	 origin: 'Greece'},
        {id: '100',	 origin: 'Grenada'},
        {id: '100',	 origin: 'Guatemala'},
        {id: '100',	 origin: 'Guinea'},
        {id: '100',	 origin: 'Guinea-Bissau'},
        {id: '100',	 origin: 'Guyana'},
        {id: '100',	 origin: 'Haiti'},
        {id: '100',	 origin: 'Holy See'},
        {id: '100',	 origin: 'Honduras'},
        {id: '100',	 origin: 'Hungary'},
        {id: '100',	 origin: 'Iceland'},
        {id: '100',	 origin: 'India'},
        {id: '100',	 origin: 'Indonesia'},
        {id: '100',	 origin: 'Iran'},
        {id: '100',	 origin: 'Iraq'},
        {id: '100',	 origin: 'Ireland'},
        {id: '100',	 origin: 'Israel'},
        {id: '100',	 origin: 'Italy'},
        {id: '100',	 origin: 'Jamaica'},
        {id: '100',	 origin: 'Japan'},
        {id: '100',	 origin: 'Jordan'},
        {id: '100',	 origin: 'Kazakhstan'},
        {id: '100',	 origin: 'Kenya'},
        {id: '100',	 origin: 'Kiribati'},
        {id: '100',	 origin: 'Kuwait'},
        {id: '100',	 origin: 'Kyrgyzstan'},
        {id: '100',	 origin: 'Laos'},
        {id: '100',	 origin: 'Latvia'},
        {id: '100',	 origin: 'Lebanon'},
        {id: '100',	 origin: 'Lesotho'},
        {id: '100',	 origin: 'Liberia'},
        {id: '100',	 origin: 'Libya'},
        {id: '100',	 origin: 'Liechtenstein'},
        {id: '100',	 origin: 'Lithuania'},
        {id: '100',	 origin: 'Luxembourg'},
        {id: '100',	 origin: 'Madagascar'},
        {id: '100',	 origin: 'Malawi'},
        {id: '100',	 origin: 'Malaysia'},
        {id: '100',	 origin: 'Maldives'},
        {id: '100',	 origin: 'Mali'},
        {id: '100',	 origin: 'Malta'},
        {id: '100',	 origin: 'Marshall Islands'},
        {id: '100',	 origin: 'Mauritania'},
        {id: '100',	 origin: 'Mauritius'},
        {id: '100',	 origin: 'Mexico'},
        {id: '100',	 origin: 'Micronesia'},
        {id: '100',	 origin: 'Moldova'},
        {id: '100',	 origin: 'Monaco'},
        {id: '100',	 origin: 'Mongolia'},
        {id: '100',	 origin: 'Montenegro'},
        {id: '100',	 origin: 'Morocco'},
        {id: '100',	 origin: 'Mozambique'},
        {id: '100',	 origin: 'Myanmar (formerly Burma)'},
        {id: '100',	 origin: 'Namibia'},
        {id: '100',	 origin: 'Nauru'},
        {id: '100',	 origin: 'Nepal'},
        {id: '100',	 origin: 'Netherlands'},
        {id: '100',	 origin: 'New Zealand'},
        {id: '100',	 origin: 'Nicaragua'},
        {id: '100',	 origin: 'Niger'},
        {id: '100',	 origin: 'Nigeria'},
        {id: '100',	 origin: 'North Korea'},
        {id: '100',	 origin: 'North Macedonia'},
        {id: '100',	 origin: 'Norway'},
        {id: '100',	 origin: 'Oman'},
        {id: '100',	 origin: 'Pakistan'},
        {id: '100',	 origin: 'Palau'},
        {id: '100',	 origin: 'Palestine State'},
        {id: '100',	 origin: 'Panama'},
        {id: '100',	 origin: 'Papua New Guinea'},
        {id: '100',	 origin: 'Paraguay'},
        {id: '100',	 origin: 'Peru'},
        {id: '100',	 origin: 'Philippines'},
        {id: '100',	 origin: 'Poland'},
        {id: '100',	 origin: 'Portugal'},
        {id: '100',	 origin: 'Qatar'},
        {id: '100',	 origin: 'Romania'},
        {id: '100',	 origin: 'Rwanda'},
        {id: '100',	 origin: 'Saint Kitts and Nevis'},
        {id: '100',	 origin: 'Saint Lucia'},
        {id: '100',	 origin: 'Saint Vincent and the Grenadines'},
        {id: '100',	 origin: 'Samoa'},
        {id: '100',	 origin: 'San Marino'},
        {id: '100',	 origin: 'Sao Tome and Principe'},
        {id: '100',	 origin: 'Saudi Arabia'},
        {id: '100',	 origin: 'Senegal'},
        {id: '100',	 origin: 'Serbia'},
        {id: '100',	 origin: 'Seychelles'},
        {id: '100',	 origin: 'Sierra Leone'},
        {id: '100',	 origin: 'Singapore'},
        {id: '100',	 origin: 'Slovakia'},
        {id: '100',	 origin: 'Slovenia'},
        {id: '100',	 origin: 'Solomon Islands'},
        {id: '100',	 origin: 'Somalia'},
        {id: '100',	 origin: 'South Africa'},
        {id: '100',	 origin: 'South Korea'},
        {id: '100',	 origin: 'South Sudan'},
        {id: '100',	 origin: 'Spain'},
        {id: '100',	 origin: 'Sri Lanka'},
        {id: '100',	 origin: 'Sudan'},
        {id: '100',	 origin: 'Suriname'},
        {id: '100',	 origin: 'Sweden'},
        {id: '100',	 origin: 'Switzerland'},
        {id: '100',	 origin: 'Syria'},
        {id: '100',	 origin: 'Tajikistan'},
        {id: '100',	 origin: 'Tanzania'},
        {id: '100',	 origin: 'Thailand'},
        {id: '100',	 origin: 'Timor-Leste'},
        {id: '100',	 origin: 'Togo'},
        {id: '100',	 origin: 'Tonga'},
        {id: '100',	 origin: 'Trinidad and Tobago'},
        {id: '100',	 origin: 'Tunisia'},
        {id: '100',	 origin: 'Turkey'},
        {id: '100',	 origin: 'Turkmenistan'},
        {id: '100',	 origin: 'Tuvalu'},
        {id: '100',	 origin: 'Uganda'},
        {id: '100',	 origin: 'Ukraine'},
        {id: '100',	 origin: 'United Arab Emirates'},
        {id: '100',	 origin: 'United Kingdom'},
        {id: '100',	 origin: 'United States of America'},
        {id: '100',	 origin: 'Uruguay'},
        {id: '100',	 origin: 'Uzbekistan'},
        {id: '100',	 origin: 'Vanuatu'},
        {id: '100',	 origin: 'Venezuela'},
        {id: '100',	 origin: 'Vietnam'},
        {id: '100',	 origin: 'Yemen'},
        {id: '100',	 origin: 'Zambia'},
        {id: '100',	 origin: 'Zimbabwe'},        
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
        const url = "https://www.wochlife.com/_access/import_subs.php";

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
                    className='text-center form-email'
                    type="email"
                    placeholder="your email"
                    value={email}
                    onChange={e=>getEmail(e.target.value)}
                />

                <select 
                    className='text-center form-country'
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
                    className='text-center form-submit'
                    type="submit"
                    value='Subscribe'
                    onClick={handleSubmit}
                    id="submit-sub"
                    disabled={!validate()}
                >
                    Submit
                </button>
            </form>

            <div id='submit-response' className='text-center'></div>
        </>
    )

}
