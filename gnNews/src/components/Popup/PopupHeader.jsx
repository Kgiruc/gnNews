import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import popup from "../../assets/icons/pop-up.png"

function PopupHeader() {
    return (
        <Popup
            trigger={<button><img src={popup} alt="pop up" /></button>}
            position="bottom right"
            closeOnDocumentClick
            contentStyle={{
                background: '#333',
                color: '#fff',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginRight: '2rem',
            }}
            overlayStyle={{
                background: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <div className='popup__header'>
                <h5>Najwieksza trudność</h5>
                <p>
                    Największą trudność sprawiły mi testy, po prostu jest to dla mnie mozolne i nieciekawe,
                    trzeba wtedy zmienić myślenie z programowania na takie, jak myśli użytkownik.
                    Jest to dla mnie monotonne.
                </p>
                <h6>Największa Frajda</h6>
                <p>
                    Największą frajdę natomiast sprawiło mi samo zadanie. 
                    Lubię dostawać coś nowego i narzuconego, czego jeszcze nie robiłem. 
                    Uwielbiam projekty, uczenie się nowych technologii i pisanie czegoś od podstaw. 
                    To zawsze jest fajne, zwłaszcza gdy ktoś rzeczywiście potrzebuje tego, co robimy. 
                    </p>
            </div>
        </Popup>
    );
}

export default PopupHeader;