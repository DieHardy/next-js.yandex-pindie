import {getGamesByCategory} from '../data/data-utils';
import {CardsList} from '../components/CardsList/CardsList';

export default function tds(){
    const tdsGames = getGamesByCategory('TDS');

    return (
        <main className='main-inner'>
            <CardsList id='tds' title='TDS' data={tdsGames} />
        </main>
    )
}