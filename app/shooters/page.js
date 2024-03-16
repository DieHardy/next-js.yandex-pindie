import {getGamesByCategory} from '../data/data-utils';
import {CardsList} from '../components/CardsList/CardsList';

export default function Shooter(){
    const shooterGames = getGamesByCategory('shooter');

    return (
        <main className='main-inner'>
            <CardsList id='shooter' title='Шутеры' data={shooterGames} />
        </main>
    )
}