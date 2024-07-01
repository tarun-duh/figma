import { LiveCursorProps } from '@/types/type'
import React from 'react'
import Cursor from './Cursor';
import { COLORS } from '@/constants';

const LiveCursors = ({others}:LiveCursorProps) => {
  others.map(({connectionId,presence})=>{
 if(!presence){
   return null;
 }else{
   <Cursor key={connectionId} color={COLORS[Number(connectionId)% COLORS.length]} x={presence.Cursor.x} y={presence.Cursor.y} message={presence.message} />
 }
  })
}

export default LiveCursors
