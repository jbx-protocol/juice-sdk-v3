/**
 * DO NOT MODIFY. This file is autogenerated.
 */
import { useContext } from 'react';
import { getJBPrices } from 'juice-sdk';

import { JuiceContext } from 'contexts/JuiceContext';

export function useJBPrices() {
  const { provider } = useContext(JuiceContext);

  return getJBPrices(provider);
}