import './style.css'
import '../../App.cs'
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