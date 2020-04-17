import {weatherbitUrl} from './weatherbit.js';
import "regenerator-runtime/runtime";

test('Dark Sky API URL is defined', () => {
    expect(weatherbitUrl).toBeDefined();
})
