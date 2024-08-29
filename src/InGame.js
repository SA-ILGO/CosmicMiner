import './InGame.css';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Ground } from './components/Ground';
import { Physics } from '@react-three/cannon';
import { Player } from './components/Player';
import { TextComponent } from './components/TextComponent';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes';
import { Building } from './components/Building';
import { Crystal } from './components/Crystal';
import { GameProvider, useGameContext } from './components/GameContext';
import { NightSky } from './components/NightSky';
import { Html } from '@react-three/drei'; // Ensure Html is imported from @react-three/drei

function InGame() {
  return (
    <GameProvider>
      <Canvas shadows>
        <NightSky />
        <pointLight 
          position={[5, 2, 0.2]} 
          intensity={20} 
          distance={10} 
        />
        <FPV />
        <TextComponent />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
          <Crystal />
          <Building />
        </Physics>
      </Canvas>
      <div className='centered cursor'>+</div>
      <GameText />
    </GameProvider>
  );
}

const GameText = () => {
  const { cubesRemoved, crystalMelted, weaponMade } = useGameContext();

  return (
    <Html position={[0, 0, 0]} className='overlay-text'>
      <div>
        {'💎 Crystal Cube ---- ' + cubesRemoved}<br/>
        {'🫧 Melted Crystal -- ' + crystalMelted}<br/>
        {'🗡️ Weapon -------- ' + weaponMade}
      </div>
    </Html>
  );
};

export default InGame;
