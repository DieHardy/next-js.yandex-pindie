import {getGamesByCategory} from '../data/data-utils';
import {CardsList} from '../components/CardsList/CardsList';

export default function Runner(){
    const runnerGames = getGamesByCategory('runner');

    return (
        <main className='main-inner'>
            <CardsList id='runner' title='Ранеры' data={runnerGames} />
        </main>
    )
}