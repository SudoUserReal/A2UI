import React from 'react';
import { Types } from '@a2ui/lit/0.8';
import { CatalogComponentProps } from './index';
import { useStringBinding } from '../../core/hooks';

export function Audio({ surfaceId, component }: CatalogComponentProps) {
  const node = component as Types.AudioPlayerNode;
  const { url, description } = node.properties;

  const audioUrl = useStringBinding(url, component, surfaceId);
  const audioDescription = useStringBinding(description ?? null, component, surfaceId);

  if (!audioUrl) {
    return null;
  }

  const style: React.CSSProperties = {
    width: '100%',
    flex: component.weight ?? 'initial',
  };

  return (
    <div id={component.id} style={style}>
      {audioDescription && (
        <div style={{ marginBottom: 8 }}>{audioDescription}</div>
      )}
      <audio src={audioUrl} controls style={{ width: '100%' }} />
    </div>
  );
}

