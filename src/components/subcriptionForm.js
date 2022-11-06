import React from 'react';

export default function SubscriptionForm() {
    return (
    <div className="wrapper">
        <form>
            <label>
                Name:<input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
    )
}
