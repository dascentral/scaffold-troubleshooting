import SampleComponent from './';

// import { mockSampleComponent } from './SampleComponent.mockData.js';

export default {
  title: 'SampleComponent',
  component: SampleComponent,
};

const Template = (args) => <SampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
