import React from 'react';
import FooterComponent from "../components/footerComponent";

import { shallow } from 'enzyme';

it("should Render Component", () => {
    const testingComponent = shallow(<FooterComponent />);
    expect(testingComponent.find('h5').text()).toBe("This is Footer");
    expect(testingComponent.find('h5').length).toBe(1);
})


