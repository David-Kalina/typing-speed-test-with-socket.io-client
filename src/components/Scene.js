/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: edouard.angebault (https://sketchfab.com/edouard.angebault)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/8833f9251838434d9590ee972d49d963
title: planet
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Planet({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Material__25} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials.Material__65} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
