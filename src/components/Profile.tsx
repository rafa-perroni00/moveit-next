import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengeContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.0-9/37336463_1865826513440169_8729587777206747136_o.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGcMLG_02RfYoDywTltTp1ynxg1Fnv5J4qfGDUWe_knivw2K4PNpiI4bgw6tAvQWc2b0Kpal4wvbKvFu_wegVKi&_nc_ohc=IXEVrsuLkEgAX-eNHL4&_nc_ht=scontent.fcpq5-1.fna&oh=99d304396303294a0dbac50e7461664f&oe=605D3D21" alt="Foto de Perfil"/>
            <div>
                <strong>Rafael Perroni</strong>
                
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}