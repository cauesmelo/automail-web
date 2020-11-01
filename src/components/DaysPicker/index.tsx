import React from 'react';

import { Container } from './styles';

const DaysPicker: React.FC = () => {
  return (
    <Container>
      <div className="checkContainer">
        <div className="checkItem">
          <label htmlFor="segunda">
            {' '}
            <input type="checkbox" id="segunda" name="segunda" checked />
            SEG
          </label>
        </div>

        <div className="checkItem">
          <label htmlFor="terca">
            {' '}
            <input type="checkbox" id="terca" name="terca" checked />
            TER
          </label>
        </div>

        <div className="checkItem">
          <label htmlFor="quarta">
            {' '}
            <input type="checkbox" id="quarta" name="quarta" checked />
            QUA
          </label>
        </div>

        <div className="checkItem">
          <label htmlFor="quinta">
            {' '}
            <input type="checkbox" id="quinta" name="quinta" checked />
            QUI
          </label>
        </div>

        <div className="checkItem">
          <label htmlFor="sexta">
            {' '}
            <input type="checkbox" id="sexta" name="sexta" checked />
            SEX
          </label>
        </div>

        <div className="checkItem">
          <label htmlFor="sabado">
            {' '}
            <input type="checkbox" id="sabado" name="sabado" checked />
            SAB
          </label>
        </div>

        <div className="checkItem">
          <label htmlFor="domingo">
            {' '}
            <input type="checkbox" id="domingo" name="domingo" checked />
            DOM
          </label>
        </div>
      </div>
    </Container>
  );
};

export default DaysPicker;
