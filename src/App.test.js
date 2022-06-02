import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

let getByTestId;

//Seolah2 aplikasi counter muncul/tampil
beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  const view = render(<App />);

  getByTestId = view.getByTestId;
});

//Definis test
describe("UI Test", () => {
  test('header render with correct text', () => {
    //bentuk awal
    // const view = render(<App />);
    // const pickByTest = view.getAllByTestId
  
    //Untuk menunjuk komponen yang ditunjuk berdasarkan testid
    const headerEl = screen.getByTestId('header');
  
    expect(headerEl.textContent).toBe('Counter App');
  });

  //Make sure the button text = increment
  //Make sure the button text = decrement
})

describe("Functional Test", () => {
  const clicked = 10;
  test(`Test on increment button adds 1 to the counter ${clicked}`, () => {
    const incButton = screen.getByTestId('increment-test')
    const counterEl = screen.getByTestId('counter')

    for(let i = 0; i<clicked; i++) {
      fireEvent.click(incButton)
    }

    expect(counterEl.textContent).toBe(`${clicked}`)
  })

  //Decrement
})


