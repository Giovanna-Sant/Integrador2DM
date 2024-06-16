import './style.css'
import '../../App.css'
import ContainerTitle from './components/ContainerTitle';
import PlanosDisponiveis from './components/PlanosDisponiveis';

export default function Planos(){
    return(
        <main>
            <ContainerTitle></ContainerTitle>
            <PlanosDisponiveis></PlanosDisponiveis>
        </main>
    );
}