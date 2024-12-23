import { EffectComposer } from '@react-three/postprocessing';
import { Afterimage } from './Afterimage'

export const Composer = () => {
    
    return (
        <EffectComposer>     
            <Afterimage enabled={true} damp={0.9} />
        </EffectComposer>       
    )
}